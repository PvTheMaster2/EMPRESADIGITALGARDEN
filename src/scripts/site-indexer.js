#!/usr/bin/env node

/**
 * Site Indexer - Gera contexto completo do site para LLM
 * Baseado na estratégia recomendada para visualização do estado do site
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

class SiteIndexer {
  constructor(distPath = './build/dist') {
    this.distPath = distPath;
    this.siteIndex = {
      pages: [],
      structure: {},
      stats: {
        totalPages: 0,
        pagesWithoutTitle: 0,
        pagesWithoutH1: 0,
        brokenLinks: 0,
        totalLinks: 0
      },
      issues: []
    };
  }

  async run() {
    console.log('🔍 Iniciando indexação do site...');
    
    // Criar diretórios de saída
    this.ensureDirectories();
    
    // Varrer todos os index.html
    await this.scanSite();
    
    // Gerar arquivos de contexto
    await this.generateContextFiles();
    
    console.log('✅ Indexação completa!');
    console.log(`📊 ${this.siteIndex.stats.totalPages} páginas indexadas`);
    console.log(`⚠️  ${this.siteIndex.issues.length} issues encontrados`);
  }

  ensureDirectories() {
    const dirs = ['_site_index', '_site_snapshots'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async scanSite() {
    const htmlFiles = this.findHtmlFiles(this.distPath);
    
    for (const filePath of htmlFiles) {
      try {
        const pageData = await this.analyzePage(filePath);
        this.siteIndex.pages.push(pageData);
        this.siteIndex.stats.totalPages++;
        
        // Detectar issues
        this.detectIssues(pageData);
        
      } catch (error) {
        console.error(`❌ Erro ao analisar ${filePath}:`, error.message);
        this.siteIndex.issues.push({
          type: 'parse_error',
          file: filePath,
          message: error.message
        });
      }
    }
  }

  findHtmlFiles(dir) {
    const files = [];
    
    function traverse(currentDir) {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(currentDir, entry.name);
        
        if (entry.isDirectory()) {
          traverse(fullPath);
        } else if (entry.name === 'index.html') {
          files.push(fullPath);
        }
      }
    }
    
    traverse(dir);
    return files;
  }

  async analyzePage(filePath) {
    const html = fs.readFileSync(filePath, 'utf8');
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Extrair URL relativa
    const relativePath = path.relative(this.distPath, filePath);
    const url = '/' + relativePath.replace(/index\.html$/, '').replace(/\\/g, '/');
    
    // Extrair metadados
    const title = document.querySelector('title')?.textContent?.trim() || '';
    const h1 = document.querySelector('h1')?.textContent?.trim() || '';
    const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    
    // Extrair estrutura de headings
    const headings = [];
    ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
      document.querySelectorAll(tag).forEach(el => {
        headings.push({
          level: parseInt(tag.charAt(1)),
          text: el.textContent.trim(),
          id: el.id || null
        });
      });
    });

    // Extrair links internos
    const links = [];
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href.startsWith('/') || href.startsWith('./'))) {
        links.push({
          text: link.textContent.trim(),
          href: href,
          isInternal: true
        });
        this.siteIndex.stats.totalLinks++;
      }
    });

    // Extrair metadados da página (se visíveis)
    const pageMetadata = {};
    const metaSection = document.querySelector('.page-meta');
    if (metaSection) {
      // Status
      const statusEl = metaSection.querySelector('.status');
      if (statusEl) pageMetadata.status = statusEl.textContent.trim();
      
      // Tags
      const tagEls = metaSection.querySelectorAll('.tag');
      if (tagEls.length > 0) {
        pageMetadata.tags = Array.from(tagEls).map(el => el.textContent.trim());
      }
      
      // Effort
      const effortEl = metaSection.querySelector('.page-effort');
      if (effortEl) pageMetadata.effort = effortEl.textContent.trim();
    }

    // Detectar tipo de layout baseado no conteúdo
    const layoutType = this.detectLayoutType(document, url);

    return {
      url,
      filePath,
      title,
      h1,
      metaDescription,
      headings,
      links,
      pageMetadata,
      layoutType,
      wordCount: document.querySelector('.page-body')?.textContent?.split(/\s+/).length || 0
    };
  }

  detectLayoutType(document, url) {
    // Detectar tipo baseado na URL e conteúdo
    if (url.includes('/4-projetos/') || url.includes('/projetos/')) {
      return 'projeto';
    }
    if (url.includes('/6-reunioes/') || url.includes('/reunioes/')) {
      return 'reuniao';
    }
    if (url.includes('/1-governanca/') || url.includes('/governanca/')) {
      return 'governanca';
    }
    if (url.includes('/0-dashboard/') || url === '/') {
      return 'dashboard';
    }
    
    // Detectar por conteúdo
    if (document.querySelector('.project-page')) return 'projeto';
    if (document.querySelector('.meeting-page')) return 'reuniao';
    if (document.querySelector('.governance-page')) return 'governanca';
    if (document.querySelector('.dashboard-page')) return 'dashboard';
    
    return 'base';
  }

  detectIssues(pageData) {
    // Página sem título
    if (!pageData.title || pageData.title === 'undefined - Digital Garden Empresarial') {
      this.siteIndex.issues.push({
        type: 'no_title',
        url: pageData.url,
        message: 'Página sem título definido'
      });
      this.siteIndex.stats.pagesWithoutTitle++;
    }

    // Página sem H1
    if (!pageData.h1) {
      this.siteIndex.issues.push({
        type: 'no_h1',
        url: pageData.url,
        message: 'Página sem H1 principal'
      });
      this.siteIndex.stats.pagesWithoutH1++;
    }

    // Links potencialmente quebrados (verificação simples)
    pageData.links.forEach(link => {
      if (link.href.startsWith('/') && !link.href.endsWith('/')) {
        // Link pode estar quebrado se não termina com /
        this.siteIndex.issues.push({
          type: 'potential_broken_link',
          url: pageData.url,
          link: link.href,
          message: `Link interno pode estar quebrado: ${link.href}`
        });
      }
    });
  }

  async generateContextFiles() {
    // 1. site_index.json - Metadados completos
    fs.writeFileSync(
      '_site_index/site_index.json',
      JSON.stringify(this.siteIndex, null, 2)
    );

    // 2. site_outline.md - Árvore navegável
    const outline = this.generateOutline();
    fs.writeFileSync('_site_index/site_outline.md', outline);

    // 3. issues.md - Auditoria
    const issues = this.generateIssuesReport();
    fs.writeFileSync('_site_index/issues.md', issues);

    // 4. layouts_analysis.md - Análise de layouts por seção
    const layoutsAnalysis = this.generateLayoutsAnalysis();
    fs.writeFileSync('_site_index/layouts_analysis.md', layoutsAnalysis);

    console.log('📁 Arquivos gerados:');
    console.log('  - _site_index/site_index.json');
    console.log('  - _site_index/site_outline.md');
    console.log('  - _site_index/issues.md');
    console.log('  - _site_index/layouts_analysis.md');
  }

  generateOutline() {
    let outline = `# 🌳 Site Structure Outline\n\n`;
    outline += `**Generated**: ${new Date().toISOString()}\n`;
    outline += `**Total Pages**: ${this.siteIndex.stats.totalPages}\n\n`;

    // Agrupar por seção
    const sections = {};
    this.siteIndex.pages.forEach(page => {
      const pathParts = page.url.split('/').filter(p => p);
      const section = pathParts[0] || 'root';
      
      if (!sections[section]) sections[section] = [];
      sections[section].push(page);
    });

    // Gerar árvore
    Object.keys(sections).sort().forEach(section => {
      const pages = sections[section];
      outline += `## 📁 ${section.toUpperCase()}\n\n`;
      
      pages.forEach(page => {
        const indent = '  '.repeat(page.url.split('/').length - 2);
        outline += `${indent}- **${page.url}** - "${page.title}" (${page.layoutType})\n`;
        if (page.h1 && page.h1 !== page.title) {
          outline += `${indent}  - H1: ${page.h1}\n`;
        }
        if (page.pageMetadata.status) {
          outline += `${indent}  - Status: ${page.pageMetadata.status}\n`;
        }
      });
      outline += '\n';
    });

    return outline;
  }

  generateIssuesReport() {
    let report = `# 🔍 Site Audit Report\n\n`;
    report += `**Generated**: ${new Date().toISOString()}\n\n`;

    report += `## 📊 Statistics\n\n`;
    report += `- **Total Pages**: ${this.siteIndex.stats.totalPages}\n`;
    report += `- **Pages without Title**: ${this.siteIndex.stats.pagesWithoutTitle}\n`;
    report += `- **Pages without H1**: ${this.siteIndex.stats.pagesWithoutH1}\n`;
    report += `- **Total Internal Links**: ${this.siteIndex.stats.totalLinks}\n`;
    report += `- **Total Issues**: ${this.siteIndex.issues.length}\n\n`;

    if (this.siteIndex.issues.length > 0) {
      report += `## ⚠️ Issues Found\n\n`;
      
      // Agrupar por tipo
      const issuesByType = {};
      this.siteIndex.issues.forEach(issue => {
        if (!issuesByType[issue.type]) issuesByType[issue.type] = [];
        issuesByType[issue.type].push(issue);
      });

      Object.keys(issuesByType).forEach(type => {
        const issues = issuesByType[type];
        report += `### ${type.replace(/_/g, ' ').toUpperCase()} (${issues.length})\n\n`;
        
        issues.forEach(issue => {
          report += `- **${issue.url}**: ${issue.message}\n`;
          if (issue.link) report += `  - Link: ${issue.link}\n`;
        });
        report += '\n';
      });
    } else {
      report += `## ✅ No Issues Found\n\nAll pages look good!\n\n`;
    }

    return report;
  }

  generateLayoutsAnalysis() {
    let analysis = `# 🎨 Layouts Analysis\n\n`;
    analysis += `**Generated**: ${new Date().toISOString()}\n\n`;

    // Contar layouts por tipo
    const layoutStats = {};
    this.siteIndex.pages.forEach(page => {
      if (!layoutStats[page.layoutType]) layoutStats[page.layoutType] = [];
      layoutStats[page.layoutType].push(page);
    });

    analysis += `## 📊 Layout Distribution\n\n`;
    Object.keys(layoutStats).sort().forEach(layoutType => {
      const pages = layoutStats[layoutType];
      analysis += `### ${layoutType.toUpperCase()} Layout (${pages.length} pages)\n\n`;
      
      // Exemplo de página
      const example = pages[0];
      analysis += `**Example Page**: ${example.url}\n`;
      analysis += `**Title**: ${example.title}\n`;
      
      if (Object.keys(example.pageMetadata).length > 0) {
        analysis += `**Metadata Fields**: ${Object.keys(example.pageMetadata).join(', ')}\n`;
      }
      
      analysis += `**Pages using this layout**:\n`;
      pages.slice(0, 10).forEach(page => {
        analysis += `- ${page.url} - "${page.title}"\n`;
      });
      if (pages.length > 10) {
        analysis += `- ... and ${pages.length - 10} more\n`;
      }
      analysis += '\n';
    });

    // Recomendações
    analysis += `## 💡 Layout Recommendations\n\n`;
    
    if (layoutStats.projeto && layoutStats.projeto.length > 0) {
      analysis += `### Projeto Layout\n`;
      analysis += `- **Current**: ${layoutStats.projeto.length} pages using base layout\n`;
      analysis += `- **Recommendation**: Create specific projeto.njk layout\n`;
      analysis += `- **Fields to highlight**: status, budget, effort_weeks, owner\n\n`;
    }

    if (layoutStats.reuniao && layoutStats.reuniao.length > 0) {
      analysis += `### Reunião Layout\n`;
      analysis += `- **Current**: ${layoutStats.reuniao.length} pages using base layout\n`;
      analysis += `- **Recommendation**: Create specific reuniao.njk layout\n`;
      analysis += `- **Fields to highlight**: meeting_date, participants, duration\n\n`;
    }

    if (layoutStats.governanca && layoutStats.governanca.length > 0) {
      analysis += `### Governança Layout\n`;
      analysis += `- **Current**: ${layoutStats.governanca.length} pages using base layout\n`;
      analysis += `- **Recommendation**: Create specific governanca.njk layout\n`;
      analysis += `- **Fields to highlight**: version, legal_review, compliance_level\n\n`;
    }

    return analysis;
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  const indexer = new SiteIndexer();
  indexer.run().catch(console.error);
}

module.exports = SiteIndexer;
