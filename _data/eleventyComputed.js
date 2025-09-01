// Computações do Eleventy para sistema dinâmico
const projectsData = require('./projects.js');

module.exports = {
  // Collection de projetos dinâmica
  projects: () => {
    return Object.values(projectsData.projects).map(project => ({
      ...project,
      url: `/projetos/${project.id}`,
      permalink: `/projetos/${project.id}/`,
      date: new Date(project.year, 0, 1), // Data baseada no ano
      tags: [
        project.category,
        project.subcategory,
        project.client,
        ...(project.details?.ferramentas || []),
        ...(project.details?.normas || [])
      ]
    }));
  },

  // Projetos por categoria
  projectsByCategory: () => {
    const allProjects = Object.values(projectsData.projects);
    const categories = {};
    
    allProjects.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = [];
      }
      categories[project.category].push(project);
    });
    
    return categories;
  },

  // Projetos por serviço
  projectsByService: () => {
    const allProjects = Object.values(projectsData.projects);
    const services = {};
    
    allProjects.forEach(project => {
      if (!services[project.subcategory]) {
        services[project.subcategory] = [];
      }
      services[project.subcategory].push(project);
    });
    
    return services;
  },

  // Projetos por ano
  projectsByYear: () => {
    const allProjects = Object.values(projectsData.projects);
    const years = {};
    
    allProjects.forEach(project => {
      if (!years[project.year]) {
        years[project.year] = [];
      }
      years[project.year].push(project);
    });
    
    return years;
  },

  // Métricas calculadas
  calculatedMetrics: () => {
    const allProjects = Object.values(projectsData.projects);
    
    return {
      totalProjects: allProjects.length,
      totalArea: allProjects.reduce((sum, project) => sum + (project.metrics?.area || 0), 0),
      totalDuration: allProjects.reduce((sum, project) => {
        const duration = project.metrics?.duration ? parseInt(project.metrics.duration.split(' ')[0]) : 0;
        return sum + duration;
      }, 0),
      categories: allProjects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
      }, {}),
      services: allProjects.reduce((acc, project) => {
        acc[project.subcategory] = (acc[project.subcategory] || 0) + 1;
        return acc;
      }, {})
    };
  },

  // Projetos em destaque (últimos 6 projetos)
  featuredProjects: () => {
    return Object.values(projectsData.projects)
      .sort((a, b) => b.year - a.year)
      .slice(0, 6);
  },

  // Projetos para carrossel (2 predial, 2 comercial, 2 residencial)
  carouselProjects: () => {
    const allProjects = Object.values(projectsData.projects);
    
    // Separar projetos por categoria
    const predialProjects = allProjects.filter(p => p.category === 'predial');
    const comercialProjects = allProjects.filter(p => p.category === 'comercial');
    const residencialProjects = allProjects.filter(p => p.category === 'residencial');
    
    // Selecionar projetos aleatórios de cada categoria
    const getRandomProjects = (projects, count) => {
      const shuffled = projects.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    
    let selectedProjects = [
      ...getRandomProjects(predialProjects, 2),
      ...getRandomProjects(comercialProjects, 2),
      ...getRandomProjects(residencialProjects, 2)
    ];
    
    // Se não há projetos suficientes, completar com projetos aleatórios
    if (selectedProjects.length < 6) {
      const remainingProjects = allProjects.filter(p => 
        !selectedProjects.some(sp => sp.id === p.id)
      );
      const additionalProjects = getRandomProjects(remainingProjects, 6 - selectedProjects.length);
      selectedProjects = [...selectedProjects, ...additionalProjects];
    }
    
    // Garantir exatamente 6 projetos
    selectedProjects = selectedProjects.slice(0, 6);
    
    // Embaralhar a ordem final
    return selectedProjects.sort(() => 0.5 - Math.random());
  },

  // Projetos recentes (últimos 3 anos)
  recentProjects: () => {
    const currentYear = new Date().getFullYear();
    return Object.values(projectsData.projects)
      .filter(project => project.year >= currentYear - 2)
      .sort((a, b) => b.year - a.year)
      .slice(0, 6);
  },

  // Clientes únicos
  uniqueClients: () => {
    const allProjects = Object.values(projectsData.projects);
    return [...new Set(allProjects.map(project => project.client))];
  },

  // Tecnologias utilizadas
  technologiesUsed: () => {
    const allProjects = Object.values(projectsData.projects);
    const technologies = new Set();
    
    allProjects.forEach(project => {
      if (project.details?.ferramentas) {
        project.details.ferramentas.forEach(tool => technologies.add(tool));
      }
      if (project.details?.normas) {
        project.details.normas.forEach(norm => technologies.add(norm));
      }
    });
    
    return Array.from(technologies);
  },

  // Estatísticas por categoria
  categoryStats: () => {
    const allProjects = Object.values(projectsData.projects);
    const stats = {};
    
    allProjects.forEach(project => {
      if (!stats[project.category]) {
        stats[project.category] = {
          count: 0,
          totalArea: 0,
          projects: []
        };
      }
      
      stats[project.category].count++;
      stats[project.category].totalArea += project.metrics?.area || 0;
      stats[project.category].projects.push(project);
    });
    

    
    return stats;
  },

  // Estatísticas por serviço
  serviceStats: () => {
    const allProjects = Object.values(projectsData.projects);
    const stats = {};
    
    allProjects.forEach(project => {
      if (!stats[project.subcategory]) {
        stats[project.subcategory] = {
          count: 0,
          totalArea: 0,
          projects: []
        };
      }
      
      stats[project.subcategory].count++;
      stats[project.subcategory].totalArea += project.metrics?.area || 0;
      stats[project.subcategory].projects.push(project);
    });
    

    
    return stats;
  },

  // Configuração de paginação
  pagination: {
    size: 6, // Projetos por página
    alias: 'projects'
  },

  // Filtros disponíveis
  availableFilters: () => {
    const allProjects = Object.values(projectsData.projects);
    return {
      categories: Object.keys(allProjects.reduce((acc, project) => {
        acc[project.category] = true;
        return acc;
      }, {})),
      services: Object.keys(allProjects.reduce((acc, project) => {
        acc[project.subcategory] = true;
        return acc;
      }, {})),
      years: [...new Set(allProjects.map(project => project.year))].sort((a, b) => b - a),
      clients: [...new Set(allProjects.map(project => project.client))]
    };
  }
};
