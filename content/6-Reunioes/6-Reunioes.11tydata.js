module.exports = {
  // Layout específico para reuniões
  layout: "reuniao.njk",
  
  // Configurações padrão para todas as reuniões
  eleventyComputed: {
    // Se não tem título, gera baseado no nome do arquivo
    title: (data) => {
      if (data.title) return data.title;
      
      // Remove prefixos de data e converte para título legível
      let fileName = data.page.fileSlug;
      return fileName
        .replace(/^\d{4}-\d{2}-\d{2}-/, "") // Remove data YYYY-MM-DD
        .replace(/^Reuniao-/, "Reunião ")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
    },
    
    // Garantir que reuniões tenham tags padrão
    tags: (data) => {
      const baseTags = data.tags || [];
      const meetingTags = ["meeting", "reuniao"];
      
      // Adicionar tag baseada na categoria
      if (data.category) {
        meetingTags.push(`reuniao-${data.category}`);
      }
      
      // Adicionar tag baseada no status
      if (data.status) {
        meetingTags.push(`status-${data.status}`);
      }
      
      // Adicionar tag baseada na prioridade
      if (data.priority) {
        meetingTags.push(`prioridade-${data.priority}`);
      }
      
      // Adicionar tag do ano da reunião
      if (data.meeting_date) {
        const year = new Date(data.meeting_date).getFullYear();
        meetingTags.push(`ano-${year}`);
      }
      
      return [...new Set([...baseTags, ...meetingTags])];
    },
    
    // Calcular duração em minutos se não especificada
    duration_minutes: (data) => {
      if (data.duration_minutes) return data.duration_minutes;
      
      if (data.duration) {
        const durationStr = data.duration.toString().toLowerCase();
        
        // Extrair números da string de duração
        const hours = durationStr.match(/(\d+)\s*h/);
        const minutes = durationStr.match(/(\d+)\s*min/);
        
        let totalMinutes = 0;
        if (hours) totalMinutes += parseInt(hours[1]) * 60;
        if (minutes) totalMinutes += parseInt(minutes[1]);
        
        return totalMinutes > 0 ? totalMinutes : null;
      }
      
      return null;
    },
    
    // Gerar ID da reunião se não especificado
    meeting_id: (data) => {
      if (data.meeting_id) return data.meeting_id;
      
      // Gerar ID baseado na data e tipo
      if (data.meeting_date) {
        const date = new Date(data.meeting_date);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        const category = data.category ? data.category.toUpperCase().substring(0, 3) : "REU";
        
        return `${category}-${year}${month}${day}`;
      }
      
      return null;
    }
  }
};
