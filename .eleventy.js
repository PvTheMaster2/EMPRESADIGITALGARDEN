const slugify = require("@sindresorhus/slugify");
const markdownIt = require("markdown-it");
const tocPlugin = require("eleventy-plugin-toc");
const pluginInterlinker = require("@photogabble/eleventy-plugin-interlinker");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItEmoji = require("markdown-it-emoji");
const markdownItTaskLists = require("markdown-it-task-lists");
const markdownItAbbr = require("markdown-it-abbr");
const markdownItDeflist = require("markdown-it-deflist");
const markdownItIns = require("markdown-it-ins");
const markdownItSub = require("markdown-it-sub");
const markdownItSup = require("markdown-it-sup");
const markdownItContainer = require("markdown-it-container");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItImplicitFigures = require("markdown-it-implicit-figures");
const markdownItMultimdTable = require("markdown-it-multimd-table");
const markdownItLinkAttributes = require("markdown-it-link-attributes");
const markdownItExternalLinks = require("markdown-it-external-links");
const markdownItPlantuml = require("markdown-it-plantuml");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Plugin para suportar links [[Wiki]] e embeds (![[arquivo]])
  eleventyConfig.addPlugin(pluginInterlinker, {
    // Opções padrão funcionam bem para nosso caso
  });

  // Plugin para navegação hierárquica e breadcrumbs
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Copy static assets - UNIFICADO (sem duplicatas)
  eleventyConfig.addPassthroughCopy({"src/styles": "styles"});
  eleventyConfig.addPassthroughCopy({"src/scripts": "scripts"});
  eleventyConfig.addPassthroughCopy({"src/assets/images": "images"});
  // REMOVIDO: content/**/*.png|jpg|pdf - usar apenas /images como origem única
  
  // Copy _redirects file for Netlify
  eleventyConfig.addPassthroughCopy("_redirects");

  // Configure markdown processing
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    })
  );

  // Add filters
  eleventyConfig.addFilter("slugify", function (str) {
    if (!str || typeof str !== 'string') return '';
    return str.toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
              .replace(/\s+/g, '-')         // Espaços vira hífens
              .replace(/-+/g, '-')          // Múltiplos hífens vira um
              .trim();
  });

  eleventyConfig.addFilter("truncate", function (str, length = 100) {
    if (!str || typeof str !== 'string') return '';
    if (str.length <= length) return str;
    return str.substring(0, length) + "...";
  });

  // Filtro limit para arrays
  eleventyConfig.addFilter("limit", function (array, limit) {
    if (!Array.isArray(array)) return array;
    return array.slice(0, limit);
  });

  // Filtro split para strings
  eleventyConfig.addFilter("split", function (str, separator) {
    if (!str || typeof str !== 'string') return [];
    return str.split(separator || '');
  });

  // Filtro date para formatação de datas
  eleventyConfig.addFilter("date", function (date, format = "dd/MM/yyyy") {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d.getTime())) return date; // Retorna original se inválida
    
    if (format === "dd/MM/yyyy") {
      return d.toLocaleDateString("pt-BR");
    }
    return d.toISOString().substring(0, 10); // YYYY-MM-DD como fallback
  });

  // Filtro para filtrar por tags
  eleventyConfig.addFilter("filterByTags", function (pages, tags) {
    if (!Array.isArray(pages) || !tags) return pages;
    
    const targetTags = Array.isArray(tags) ? tags : [tags];
    return pages.filter(page => {
      if (!page.data.tags) return false;
      const pageTags = Array.isArray(page.data.tags) ? page.data.tags : [page.data.tags];
      return targetTags.some(tag => pageTags.includes(tag));
    });
  });

  // Filtro para converter [[wikilinks]] para URLs limpas (OBSIDIAN → ELEVENTY)
  eleventyConfig.addFilter("convertWikilinks", function (content) {
    if (!content || typeof content !== 'string') return content;

    // Mapeamento de caminhos antigos para URLs limpas
    const pathMap = {
      // Dashboards
      '0-Dashboard-Executivo': 'dashboard-executivo',
      'Home-Executivo': 'dashboard-executivo',
      'Innovation-Pipeline': 'dashboard-executivo/innovation-pipeline',
      'KPIs-Principais': 'dashboard-executivo/kpis-principais',
      'Dashboard-Projetos-Prazo': 'dashboard-executivo/dashboard-projetos-prazo',
      'Dashboard_Capacidade_Equipe': 'dashboard-executivo/dashboard-capacidade-equipe',
      'Decisoes-Estrategicas': 'dashboard-executivo/decisoes-estrategicas',
      
      // Governança
      '1-Governanca': 'governanca',
      
      // Projetos
      '4-Projetos': 'projetos',
      'PRJ-AERALYN': 'projetos/aeralyn',
      'PRJ-App-Desenvolvimento-Cognitivo': 'projetos/app-desenvolvimento-cognitivo',
      'PRJ-Curso-IA-Inteligente': 'projetos/curso-ia-inteligente',
      'PRJ-Nostalgia-Musical': 'projetos/nostalgia-musical',
      'PRJ-Plataforma-Cursos': 'projetos/plataforma-cursos',
      'PRJ-Trip-Match': 'projetos/trip-match',
      'PRJ-Vault-Empresarial': 'projetos/vault-empresarial',
      'PRJ-Dev-WhatsBot-Academia': 'projetos/dev-whatsbot-academia',
      'PRJ-Web-Site-Portfolio-Engenharia': 'projetos/web-site-portfolio-engenharia',
      
      // Processos
      '5-Processos': 'processos',
      'Sistema_Gestao_Capacidade_Sprints': 'processos/sistema-gestao-capacidade-sprints',
      
      // Reuniões
      '6-Reunioes': 'reunioes',
      '1000-REUNIOES': 'reunioes-historicas'
    };

    // Regex para encontrar [[wikilinks]]
    return content.replace(/\[\[([^\]]+)\]\]/g, (match, linkContent) => {
      let cleanLink = linkContent.trim();
      
      // Remover prefixos de pasta
      if (cleanLink.includes('/')) {
        cleanLink = cleanLink.split('/').pop();
      }
      
      // Verificar mapeamento direto
      if (pathMap[cleanLink]) {
        return `<a href="/${pathMap[cleanLink]}/">${cleanLink}</a>`;
      }
      
      // Conversão para projetos PRJ-
      if (cleanLink.startsWith('PRJ-')) {
        const projectSlug = cleanLink.toLowerCase()
          .replace(/^prj-/, '')
          .replace(/[-_]/g, '-');
        return `<a href="/projetos/${projectSlug}/">${cleanLink.replace('PRJ-', '')}</a>`;
      }
      
      // Conversão genérica
      const genericSlug = cleanLink.toLowerCase()
        .replace(/^\d+-/, '')
        .replace(/[-_\s]+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/^-+|-+$/g, '');
      
      return `<a href="/${genericSlug}/">${cleanLink}</a>`;
    });
  });

  // Add category URL filter
  eleventyConfig.addFilter("categoryUrl", function(category) {
    return category.replace(/^\d+-/, '');
  });

  // Add filter by category
  eleventyConfig.addFilter("filterByCategory", function(pages, category) {
    return pages.filter(page => page.category === category);
  });

  // Filtro para remover prefixos numéricos das URLs
  eleventyConfig.addFilter("removeIndex", function(str) {
    if (!str) return '';
    return str.replace(/^\d+-/, "");
  });

  // Filtro para gerar permalinks limpos
  eleventyConfig.addFilter("cleanPermalink", function(inputPath) {
    if (!inputPath) return '/';
    
    let path = inputPath
      .replace('./content/', '')  // Remove pasta content
      .replace('.md', '')  // Remove extensão
      .split("/")
      .map(seg => seg.replace(/^\d+-/, "").toLowerCase())  // Remove números e converte para minúsculo
      .join("/");
    
    return "/" + path + "/";
  });

  // Configuração de permalinks para URLs limpos - REMOVIDO (causava erro)
  // Será implementado via transformação de dados

  // Filtro para formatação de números
  eleventyConfig.addFilter("number", function(num) {
    if (num === null || num === undefined || num === '') return '';
    const numValue = parseFloat(num);
    if (isNaN(numValue)) return num;
    return new Intl.NumberFormat("pt-BR").format(numValue);
  });

  // Filtros para dashboards dinâmicos
  eleventyConfig.addFilter("filterByStatus", function(collection, status) {
    return collection.filter(item => item.data.status === status);
  });

  eleventyConfig.addFilter("recentPages", function(collection, days = 7) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    return collection.filter(item => {
      if (!item.data.created && !item.data.updated) return false;
      const itemDate = new Date(item.data.updated || item.data.created);
      return itemDate >= cutoffDate;
    });
  });

  eleventyConfig.addFilter("totalWordCount", function(collection) {
    return collection.reduce((total, item) => {
      if (item.templateContent) {
        const words = item.templateContent.split(/\s+/).length;
        return total + words;
      }
      return total;
    }, 0);
  });

  // Add shortcodes
  eleventyConfig.addShortcode("year", function () {
    return new Date().getFullYear();
  });

  eleventyConfig.addShortcode("date", function () {
    return new Date().toLocaleDateString("pt-BR");
  });

  // Disable freeze reserved data to allow content property
  eleventyConfig.setFreezeReservedData(false);

  // Add global data - NOVA ESTRUTURA
  eleventyConfig.addGlobalData("site", {
    title: "Multisocios Empresarial",
    description: "Sistema de Gestão de Conhecimento Multisocios",
    url: "https://digital-garden-empresa.netlify.app",
    author: "Pedro Vitor",
  });

  // Add navigation data globally - NOVA ESTRUTURA
  eleventyConfig.addGlobalData("navigation", require("./config/_data/navigation.js"));

  // Transform clean-urls DESATIVADO - URLs limpas são geridas via permalinks em .11tydata.js
  // eleventyConfig.addTransform("clean-urls", function(content, outputPath) {
  //   if (outputPath && outputPath.endsWith('.html')) {
  //     // Remove prefixos numéricos das URLs nos links
  //     content = content.replace(/href="\/\d+-([^"]+)"/g, 'href="/$1"');
  //     content = content.replace(/href="\/\d+-([^"]+)\//g, 'href="/$1/');
  //   }
  //   return content;
  // });

  // Collections for dynamic content - NOVA ESTRUTURA
  eleventyConfig.addCollection("projetos", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/content\/4-Projetos/) && item.data.title;
    });
  });

  eleventyConfig.addCollection("projetos_ativos", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/content\/4-Projetos\/Ativos/) && item.data.title;
    });
  });

  eleventyConfig.addCollection("projetos_andamento", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/content\/4-Projetos/) && 
             item.data.status === "Em andamento";
    });
  });

  eleventyConfig.addCollection("pilotos_validados", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/content\/4-Projetos/) && 
             item.data.validation_score && 
             item.data.validation_score >= 8;
    });
  });

  eleventyConfig.addCollection("reunioes", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/content\/6-Reunioes/) && item.data.title;
    });
  });

  eleventyConfig.addCollection("governanca", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/content\/1-Governanca/) && item.data.title;
    });
  });

  return {
    dir: {
      input: "content",              // ✅ NOVA ESTRUTURA: conteúdo em content/
      output: "build/dist",          // ✅ NOVA ESTRUTURA: build em build/dist/
      includes: "../src/components/_includes",  // ✅ NOVA ESTRUTURA: componentes em src/
      layouts: "../src/layouts",     // ✅ NOVA ESTRUTURA: layouts em src/
      data: "../config/_data",       // ✅ NOVA ESTRUTURA: dados em config/
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
