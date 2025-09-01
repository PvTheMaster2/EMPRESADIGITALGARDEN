module.exports = {
  // Layout específico para dashboards
  layout: "dashboard.njk",
  
  // Configurações padrão para todos os dashboards
  eleventyComputed: {
    // Se não tem título, gera baseado no nome do arquivo
    title: (data) => {
      if (data.title) return data.title;
      
      // Remove prefixos e converte para título legível
      let fileName = data.page.fileSlug;
      return fileName
        .replace(/^Home-/, "")
        .replace(/^Dashboard-/, "Dashboard ")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
    },
    
    // Garantir que dashboards tenham tags padrão
    tags: (data) => {
      const baseTags = data.tags || [];
      const dashboardTags = ["dashboard", "executivo"];
      
      // Adicionar tag baseada no tipo
      if (data.type) {
        dashboardTags.push(`dashboard-${data.type}`);
      }
      
      // Adicionar tag baseada no status
      if (data.status) {
        dashboardTags.push(`status-${data.status}`);
      }
      
      // Adicionar tag baseada na prioridade
      if (data.priority) {
        dashboardTags.push(`prioridade-${data.priority}`);
      }
      
      // Adicionar tag da versão
      if (data.version) {
        dashboardTags.push(`versao-${data.version}`);
      }
      
      return [...new Set([...baseTags, ...dashboardTags])];
    },
    
    // Calcular métricas se não especificadas
    metrics: (data) => {
      if (data.metrics) return data.metrics;
      
      // Métricas padrão para dashboards executivos
      return {
        total_projects: 8,
        active_projects: 6,
        completed_projects: 2,
        total_budget: 297000,
        used_budget: 193050,
        available_budget: 103950,
        avg_roi: 347,
        team_capacity: 85,
        performance_score: 94
      };
    },
    
    // Gerar KPIs se não especificados
    kpis: (data) => {
      if (data.kpis) return data.kpis;
      
      const metrics = data.metrics || {};
      
      return {
        revenue: {
          value: 1200000,
          trend: "up",
          change: 23,
          period: "month"
        },
        projects: {
          value: metrics.total_projects || 8,
          active: metrics.active_projects || 6,
          completion_rate: 75
        },
        team: {
          capacity: metrics.team_capacity || 85,
          utilization: {
            dev: 90,
            design: 70,
            marketing: 60
          }
        },
        performance: {
          score: metrics.performance_score || 94,
          quality: 96,
          speed: 92
        }
      };
    },
    
    // Gerar alertas se não especificados
    alerts: (data) => {
      if (data.alerts) return data.alerts;
      
      return [
        {
          type: "warning",
          title: "Budget próximo do limite",
          description: "Projeto Trip Match: 85% utilizado",
          priority: "medium"
        },
        {
          type: "info",
          title: "Revisão de compliance",
          description: "3 documentos pendentes",
          priority: "low"
        }
      ];
    },
    
    // Gerar atividades recentes se não especificadas
    recent_activities: (data) => {
      if (data.recent_activities) return data.recent_activities;
      
      return [
        {
          type: "project",
          title: "Projeto AERALYN atualizado",
          time: "há 2 horas",
          status: "success"
        },
        {
          type: "meeting",
          title: "Reunião executiva concluída",
          time: "há 4 horas",
          status: "info"
        },
        {
          type: "budget",
          title: "Budget aprovado para Q4",
          time: "há 1 dia",
          status: "success"
        }
      ];
    }
  }
};
