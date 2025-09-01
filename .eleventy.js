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

  // Copy static assets
  eleventyConfig.addPassthroughCopy("99 - RESOURCES/Imagens");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("**/*.pdf");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");

  // Configure markdown processing (basic for now)
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true,
    })
  );

  // Add plugins (comment out temporarily to fix the build)
  // eleventyConfig.addPlugin(tocPlugin, {
  //   tags: ["h1", "h2", "h3"],
  //   wrapper: "div",
  //   wrapperClass: "toc",
  // });

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
      .replace('./DIGITAL-GARDEN-EMPRESA/', '')  // Remove pasta base
      .replace('.md', '')  // Remove extensão
      .split("/")
      .map(seg => seg.replace(/^\d+-/, "").toLowerCase())  // Remove números e converte para minúsculo
      .join("/");
    
    return "/" + path + "/";
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

  // Add global data
  eleventyConfig.addGlobalData("site", {
    title: "Digital Garden Empresarial",
    description: "Sistema de Gestão de Conhecimento Empresarial",
    url: "https://digital-garden-empresa.netlify.app",
    author: "Pedro Vitor",
  });

  // Collections for dynamic content
  eleventyConfig.addCollection("projetos", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/4-Projetos/) && item.data.title;
    });
  });

  eleventyConfig.addCollection("projetos_ativos", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/4-Projetos\/Ativos/) && item.data.title;
    });
  });

  eleventyConfig.addCollection("projetos_andamento", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/4-Projetos/) && 
             item.data.status === "Em andamento";
    });
  });

  eleventyConfig.addCollection("pilotos_validados", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/4-Projetos/) && 
             item.data.validation_score && 
             item.data.validation_score >= 8;
    });
  });

  eleventyConfig.addCollection("reunioes", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/6-Reunioes/) && item.data.title;
    });
  });

  eleventyConfig.addCollection("governanca", function(collectionApi) {
    return collectionApi.getAll().filter(item => {
      return item.inputPath.match(/1-Governanca/) && item.data.title;
    });
  });

  // This will be handled by the template files

  return {
    dir: {
      input: ".",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts", 
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
