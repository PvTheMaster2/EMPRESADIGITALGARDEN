module.exports = {
  title: "Multisocios Empresarial",
  description: "Sistema de Gestão de Conhecimento Multisocios",
  url: "https://digital-garden-empresa.netlify.app",
  author: "Pedro Vitor",
  language: "pt-BR",
  
  // Configurações do site
  build: {
    date: new Date().toISOString(),
    env: process.env.NODE_ENV || 'production'
  },
  
  // Navegação principal
  navigation: [
    { name: "Dashboard", url: "/", icon: "📊" },
    { name: "Projetos", url: "/projetos/", icon: "🚀" },
    { name: "Governança", url: "/governanca/", icon: "⚖️" },
    { name: "Equipes", url: "/equipes/", icon: "👥" },
    { name: "Processos", url: "/processos/", icon: "🎯" },
    { name: "Reuniões", url: "/reunioes/", icon: "🤝" },
    { name: "Conhecimento", url: "/conhecimento/", icon: "🧠" }
  ]
};
