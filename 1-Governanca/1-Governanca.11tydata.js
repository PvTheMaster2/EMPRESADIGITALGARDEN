module.exports = {
  // Layout específico para governança
  layout: "governanca.njk",
  
  // Configurações padrão para todos os documentos de governança
  eleventyComputed: {
    // Se não tem título, gera baseado no nome do arquivo
    title: (data) => {
      if (data.title) return data.title;
      
      // Remove prefixos e converte para título legível
      let fileName = data.page.fileSlug;
      return fileName
        .replace(/^Acordo_/, "Acordo de ")
        .replace(/^Manual_/, "Manual de ")
        .replace(/^Playbook_/, "Playbook ")
        .replace(/^FAQ_/, "FAQ - ")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
    },
    
    // Garantir que documentos de governança tenham tags padrão
    tags: (data) => {
      const baseTags = data.tags || [];
      const govTags = ["governanca", "documento"];
      
      // Adicionar tag baseada no tipo
      if (data.type) {
        govTags.push(`tipo-${data.type.replace(/\s+/g, "-").toLowerCase()}`);
      }
      
      // Adicionar tag baseada no status
      if (data.status) {
        govTags.push(`status-${data.status}`);
      }
      
      // Adicionar tag baseada na prioridade
      if (data.priority) {
        govTags.push(`prioridade-${data.priority}`);
      }
      
      // Adicionar tag de compliance se aplicável
      if (data.compliance_level) {
        govTags.push(`compliance-nivel-${data.compliance_level}`);
      }
      
      // Adicionar tag de revisão legal
      if (data.legal_review) {
        govTags.push("legal-aprovado");
      }
      
      return [...new Set([...baseTags, ...govTags])];
    },
    
    // Calcular próxima revisão se não especificada
    next_review: (data) => {
      if (data.next_review) return data.next_review;
      
      // Calcular baseado no tipo de documento e última revisão
      if (data.legal_review_date || data.modified) {
        const baseDate = new Date(data.legal_review_date || data.modified);
        
        // Intervalos de revisão baseados no tipo
        let monthsToAdd = 12; // padrão: anual
        
        if (data.type === "documento-legal") monthsToAdd = 6; // semestral
        if (data.type === "politica") monthsToAdd = 12; // anual
        if (data.type === "processo") monthsToAdd = 18; // a cada 18 meses
        if (data.type === "compliance") monthsToAdd = 3; // trimestral
        if (data.type === "contrato") monthsToAdd = 24; // bianual
        
        // Ajustar baseado na prioridade
        if (data.priority === "critical") monthsToAdd = Math.floor(monthsToAdd / 2);
        if (data.priority === "low") monthsToAdd = monthsToAdd * 1.5;
        
        const nextReview = new Date(baseDate);
        nextReview.setMonth(nextReview.getMonth() + monthsToAdd);
        
        return nextReview.toISOString().split('T')[0];
      }
      
      return null;
    },
    
    // Gerar lista de stakeholders se não especificada
    stakeholders: (data) => {
      if (data.stakeholders) return data.stakeholders;
      
      const defaultStakeholders = [];
      
      // Adicionar stakeholders baseado no tipo
      if (data.type === "documento-legal") {
        defaultStakeholders.push("Departamento Jurídico", "CEO", "CFO");
      }
      if (data.type === "politica") {
        defaultStakeholders.push("RH", "Compliance", "Gerência");
      }
      if (data.type === "processo") {
        defaultStakeholders.push("Operações", "Qualidade", "TI");
      }
      if (data.type === "compliance") {
        defaultStakeholders.push("Compliance Officer", "Auditoria", "CEO");
      }
      if (data.type === "contrato") {
        defaultStakeholders.push("Jurídico", "Comercial", "Financeiro");
      }
      
      // Sempre incluir o owner se especificado
      if (data.owner) {
        defaultStakeholders.unshift(data.owner.replace(/[\[\]]/g, ""));
      }
      
      return defaultStakeholders.length > 0 ? [...new Set(defaultStakeholders)] : null;
    },
    
    // Calcular nível de compliance se não especificado
    compliance_level: (data) => {
      if (data.compliance_level) return data.compliance_level;
      
      // Calcular baseado no tipo e prioridade
      let level = 1; // básico
      
      if (data.type === "documento-legal") level = 3;
      if (data.type === "compliance") level = 4;
      if (data.type === "contrato") level = 3;
      if (data.type === "politica") level = 2;
      if (data.type === "processo") level = 1;
      
      // Ajustar baseado na prioridade
      if (data.priority === "critical") level = Math.min(4, level + 1);
      if (data.priority === "low") level = Math.max(1, level - 1);
      
      return level;
    }
  }
};
