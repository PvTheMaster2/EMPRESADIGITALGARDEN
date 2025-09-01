const projects = require('./projects.js');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');

// Configurar markdown-it
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

// Função para carregar conteúdo rico de arquivos markdown
function loadRichContent(projectId) {
  try {
    // Mapeamento de IDs para arquivos markdown
    const markdownFiles = {
      'casa-gp': 'notes/SEFERIN GP/projeto-eletrico-gp_gp.md',
      'casa-cd': 'notes/SEFERIN CD/projeto-eletrico-cd_cd.md',
      'casa-gt': 'notes/SEFERIN GT/projeto-eletrico-gt_gt.md',
      'barao-uba': 'notes/REVIT/BARÃO DE UBA/projeto-eletrico-bu_barao-uba.md',
      'dom-pedrito': 'notes/REVIT/DOM PEDRITO/projeto-eletrico-dp_dom-pedrito.md',
      'sicredi': 'notes/REVIT/SICREDI/projeto-eletrico-si_sicredi.md',
      'loja-joao': 'notes/REVIT/LOJA JOAO WALLIG/projeto-eletrico-jw_loja-joao.md',
      'loja-avenida': 'notes/REVIT/LOJA AVENIDA DO FORTE/projeto-eletrico-af_loja-avenida.md',
      'lojas-remiao': 'notes/REVIT/LOJAS REMIÃO/projeto-eletrico-lr._lojas-remiao.md',
      'marista': 'notes/REVIT/MARISTA/projeto-eletrico-ma_marista.md',
      'rodrigo-empresa': 'notes/REVIT/RODRIGO EMPRESA/projeto-eletrico-e-hidrossanitario-re_rodrigo-empresa.md',
      'zotti': 'notes/REVIT/ZOTTI/projeto-eletrico-dz_zotti.md',
      'casa-sitio': 'notes/REVIT/CASA SITIO/projeto-eletrico-e-hidrosanitario-cs_casa-sitio.md',
      'reforma-adriene': 'notes/ADRIENE/reforma-ad_adriene.md',
      'projeto-alexandre': 'notes/ALEXANDRE/projeto-eletrico-e-hidrossanitario-al_alexandre.md',
      'projeto-nairo': 'notes/NAIRO/projeto-nf_nairo.md',
      'projeto-lep': 'notes/LUIZ EDUARDO E PREICILA/projeto-lep_lep.md',
      'projeto-rafael': 'notes/RAFAEL SPICKER/projeto-eletrico-e-hidrossanitario-rp_rafael.md',
      'predio-comercio': 'notes/PREDIO COM COMERCIO/projeto-eletrico-e-hidrossanitario-rmc_predio-comercio.md'
    };

    const markdownPath = markdownFiles[projectId];
    if (!markdownPath) return null;

    // Caminho correto: partir de src/site
    const fullPath = path.join(__dirname, '..', markdownPath);
    
    if (!fs.existsSync(fullPath)) return null;

    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Remover frontmatter e extrair apenas o conteúdo markdown
    const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\s*/, '');
    
    // Processar markdown para HTML
    const htmlContent = md.render(contentWithoutFrontmatter);
    
    return htmlContent;
  } catch (error) {
    console.log(`Erro ao carregar conteúdo rico para ${projectId}:`, error.message);
    return null;
  }
}

// Transforma o objeto de projetos em array e adiciona conteúdo rico
const projectList = Object.values(projects.projects).map(project => {
  const richContent = loadRichContent(project.id);
  if (richContent) {
    project.richContent = richContent;
  }
  return project;
});

module.exports = {
  projectList
}; 