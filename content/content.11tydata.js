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
        // Se está em subpasta (como Templates), criar URL específica
        if (pathParts.length > 2) {
          const subFolder = pathParts[1].toLowerCase().replace(/\s+/g, '-');
          return `/${cleanSection}/${subFolder}/`;
        }
        return `/${cleanSection}/`;
      }
      
      // Para outros arquivos, criar URL limpa
      const cleanFileName = fileName.toLowerCase()
        .replace(/^prj-/, '')  // Remove prefixo PRJ-
        .replace(/[-_]/g, '-') // Normaliza separadores
        .replace(/\s+/g, '-')  // Espaços viram hífens
        .replace(/[^a-z0-9-]/g, '') // Remove caracteres especiais
        .replace(/-+/g, '-')   // Múltiplos hífens viram um
        .replace(/^-|-$/g, ''); // Remove hífens do início/fim
      
      return `/${cleanSection}/${cleanFileName}/`;
    },
    
    // Garantir que todos os arquivos tenham tags básicas
    tags: (data) => {
      const baseTags = data.tags || [];
      const inputPath = data.page.inputPath;
      
      // Adicionar tag baseada na seção
      if (inputPath.includes('0-Dashboard-Executivo')) {
        baseTags.push('dashboard', 'executivo');
      } else if (inputPath.includes('1-Governanca')) {
        baseTags.push('governanca', 'compliance');
      } else if (inputPath.includes('2-Equipes')) {
        baseTags.push('equipes', 'recursos-humanos');
      } else if (inputPath.includes('3-Mercado')) {
        baseTags.push('mercado', 'analise');
      } else if (inputPath.includes('4-Projetos')) {
        baseTags.push('projetos');
        if (inputPath.includes('Ativos')) baseTags.push('projetos-ativos');
        if (inputPath.includes('Em-Desenvolvimento')) baseTags.push('projetos-desenvolvimento');
        if (inputPath.includes('Templates')) baseTags.push('templates');
      } else if (inputPath.includes('5-Processos')) {
        baseTags.push('processos', 'workflows');
      } else if (inputPath.includes('6-Reunioes')) {
        baseTags.push('reunioes', 'atas');
      } else if (inputPath.includes('7-Conhecimento')) {
        baseTags.push('conhecimento', 'base-conhecimento');
      } else if (inputPath.includes('99-RESOURCES')) {
        baseTags.push('resources', 'templates');
      }
      
      return [...new Set(baseTags)];
    }
  }
};
