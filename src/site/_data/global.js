// Dados globais do Digital Garden Empresarial
const company = require('./company.js');
const navigation = require('./navigation.js');
const meta = require('./meta.js');
const dynamics = require('./dynamics.js');

module.exports = async () => {
  // Carregar dados dinâmicos
  const dynamicData = await dynamics();
  
  return {
    // Dados da empresa
    company: company,
    
    // Navegação
    navigation: navigation,
    
    // Metadados SEO
    meta: meta,
    
    // Dados dinâmicos
    dynamics: dynamicData,
    
    // Dados calculados
    computed: {
      // Estatísticas gerais
      stats: {
        totalAreas: Object.keys(company.areas).length,
        totalProjects: Object.values(dynamicData.projects || {}).flat().length,
        totalTeams: Object.keys(dynamicData.teams || {}).length,
        totalFiles: dynamicData.stats?.totalFiles || 0,
        lastUpdated: dynamicData.stats?.lastUpdated || new Date().toISOString()
      },
      
      // Projetos por status
      projectsByStatus: () => {
        const projects = dynamicData.projects || {};
        const statusCount = {};
        
        Object.values(projects).flat().forEach(project => {
          statusCount[project.status] = (statusCount[project.status] || 0) + 1;
        });
        
        return statusCount;
      },
      
      // Projetos recentes (últimos 5)
      recentProjects: () => {
        const projects = Object.values(dynamicData.projects || {}).flat();
        return projects
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);
      },
      
      // Equipes com mais membros
      teamsWithMostMembers: () => {
        const teams = dynamicData.teams || {};
        return Object.entries(teams)
          .map(([team, members]) => ({
            team: team,
            memberCount: members.length,
            members: members
          }))
          .sort((a, b) => b.memberCount - a.memberCount);
      },
      
      // Áreas com mais conteúdo
      areasWithMostContent: () => {
        const areas = dynamicData.stats?.areas || {};
        return Object.entries(areas)
          .map(([area, count]) => ({
            area: area,
            fileCount: count,
            title: company.areas.find(a => a.id === area)?.title || area
          }))
          .sort((a, b) => b.fileCount - a.fileCount);
      }
    },
    
    // Configurações do site
    site: {
      title: company.name,
      description: company.about.description,
      url: meta.site.url,
      language: meta.site.language,
      author: meta.site.author,
      email: meta.site.email,
      version: '1.0.0',
      lastBuild: new Date().toISOString()
    },
    
    // Configurações de build
    build: {
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString(),
      version: process.env.npm_package_version || '1.0.0'
    },
    
    // Configurações de features
    features: {
      search: true,
      darkMode: true,
      analytics: true,
      comments: false,
      socialSharing: true,
      printFriendly: true
    },
    
    // Configurações de performance
    performance: {
      lazyLoading: true,
      imageOptimization: true,
      minification: process.env.NODE_ENV === 'production',
      caching: true,
      compression: true
    }
  };
};
