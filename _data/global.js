// Dados globais do site
const eleventyComputed = require('./eleventyComputed.js');

module.exports = {
  // Carregar todas as funções do eleventyComputed
  ...eleventyComputed,
  
  // Dados adicionais globais
  site: {
    title: 'PVP Projects',
    description: 'Portfolio de projetos de engenharia elétrica',
    url: 'https://pvpprojects.netlify.app'
  }
}; 