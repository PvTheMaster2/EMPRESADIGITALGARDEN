module.exports = {
  // Layout específico para projetos
  layout: "projeto.njk",
  
  // Configurações padrão para todos os projetos
  eleventyComputed: {
    // Se não tem título, gera baseado no nome do arquivo
    title: (data) => {
      if (data.title) return data.title;
      
      // Remove prefixos como "PRJ-" e converte para título legível
      let fileName = data.page.fileSlug;
      return fileName
        .replace(/^PRJ-/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
    },
    
    // Garantir que projetos tenham tags padrão
    tags: (data) => {
      const baseTags = data.tags || [];
      const projectTags = ["projeto"];
      
      // Adicionar tag baseada no status
      if (data.status) {
        projectTags.push(`projeto-${data.status}`);
      }
      
      // Adicionar tag baseada na prioridade
      if (data.priority) {
        projectTags.push(`prioridade-${data.priority}`);
      }
      
      // Adicionar tag baseada no segmento de mercado
      if (data.market_segment) {
        projectTags.push(data.market_segment.toLowerCase().replace(/\s+/g, "-"));
      }
      
      return [...new Set([...baseTags, ...projectTags])];
    },
    
    // Calcular ROI esperado se tiver budget e metrics
    roi_esperado: (data) => {
      if (data.roi_esperado) return data.roi_esperado;
      
      // Tentar calcular baseado em budget e métricas
      if (data.budget && data.metrics_first_month) {
        // Lógica simples de cálculo de ROI
        // Assumindo que metrics_first_month contém valor monetário
        const budget = parseFloat(data.budget) || 0;
        const firstMonthStr = data.metrics_first_month.toString();
        const firstMonthValue = firstMonthStr.match(/\d+/);
        
        if (firstMonthValue && budget > 0) {
          const monthlyValue = parseFloat(firstMonthValue[0]);
          const yearlyValue = monthlyValue * 12;
          const roi = Math.round(((yearlyValue - budget) / budget) * 100);
          return roi > 0 ? roi : null;
        }
      }
      
      return null;
    }
  }
};
