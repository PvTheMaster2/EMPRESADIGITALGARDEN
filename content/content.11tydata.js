module.exports = {
  eleventyComputed: {
    // Configurar permalinks limpos para todas as seções
    permalink: (data) => {
      // Se já tem permalink definido, manter
      if (data.permalink) return data.permalink;
      
      const inputPath = data.page.inputPath;
      
      // Extrair seção e arquivo do caminho
      const pathParts = inputPath.replace('./content/', '').split('/');
      const section = pathParts[0];
      const fileName = data.page.fileSlug;
      
      // Mapeamento de seções para URLs limpas
      const sectionMap = {
        '0-Dashboard-Executivo': 'dashboard-executivo',
        '1-Governanca': 'governanca', 
        '2-Equipes': 'equipes',
        '3-Mercado': 'mercado',
        '4-Projetos': 'projetos',
        '5-Processos': 'processos', 
        '6-Reunioes': 'reunioes',
        '7-Conhecimento': 'conhecimento',
        '99-RESOURCES': 'resources',
        '1000-REUNIOES': 'reunioes-historicas'
      };
      
      // Obter seção limpa
      const cleanSection = sectionMap[section] || section.toLowerCase().replace(/^\d+-/, '').replace(/\s+/g, '-');
      
      // Casos especiais para arquivos README e index
      if (fileName === 'README' || fileName === 'index') {
        return `/${cleanSection}/`;
      }
      
      // Para outros arquivos, criar URL limpa
      const cleanFileName = fileName.toLowerCase()
        .replace(/^prj-/, '')  // Remove prefixo PRJ-
        .replace(/[-_]/g, '-') // Normaliza separadores
        .replace(/\s+/g, '-'); // Espaços viram hífens
      
      return `/${cleanSection}/${cleanFileName}/`;
    }
  }
};
