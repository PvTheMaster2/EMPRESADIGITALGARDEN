module.exports = {
  tree: [
    {
      title: "🏠 Home",
      url: "/",
      icon: "🏠"
    },
    {
      title: "📊 Dashboard Executivo",
      url: "/dashboard-executivo/",
      icon: "📊",
      children: [
        { title: "🎯 Decisões Estratégicas", url: "/dashboard-executivo/decisoes-estrategicas/" },
        { title: "📅 Projetos por Prazo", url: "/dashboard-executivo/dashboard-projetos-prazo/" },
        { title: "👥 Capacidade da Equipe", url: "/dashboard-executivo/dashboard-capacidade-equipe/" }
      ]
    },
    {
      title: "🏛️ Governança",
      url: "/governanca/",
      icon: "🏛️",
      children: [
        { title: "📜 Acordo de Sócios", url: "/governanca/acordo_socios_final/" },
        { title: "⚖️ Compliance Log", url: "/governanca/compliance_log/" },
        { title: "🤖 Ética no Uso de IA", url: "/governanca/etica_uso_ia/" },
        { title: "❓ FAQ Compliance", url: "/governanca/faq_compliance/" },
        { title: "📚 Manual de Treinamento", url: "/governanca/manual_treinamento_compliance/" },
        { title: "📈 Playbook Comercial", url: "/governanca/playbook_comercial_v0/" }
      ]
    },
    {
      title: "👥 Equipes",
      url: "/equipes/",
      icon: "👥",
      children: [
        { title: "💻 Desenvolvimento", url: "/equipes/desenvolvimento/" },
        { title: "🎯 Marketing", url: "/equipes/marketing/" },
        { title: "💼 Vendas", url: "/equipes/vendas/" },
        { title: "⚙️ Operações", url: "/equipes/operacoes/" },
        { title: "👔 Liderança", url: "/equipes/lideranca/" }
      ]
    },
    {
      title: "🌍 Mercado",
      url: "/mercado/",
      icon: "🌍",
      children: [
        { title: "👥 Clientes", url: "/mercado/clientes/" },
        { title: "⚔️ Concorrentes", url: "/mercado/concorrentes/" },
        { title: "🤝 Fornecedores", url: "/mercado/fornecedores/" },
        { title: "🚀 Tendências", url: "/mercado/tendencias/" }
      ]
    },
    {
      title: "📋 Projetos",
      url: "/projetos/",
      icon: "📋",
      children: [
        {
          title: "🚀 Ativos",
          url: "/projetos/ativos/",
          children: [
            { title: "🌟 AERALYN", url: "/projetos/aeralyn/" },
            { title: "🎮 Trip-Match", url: "/projetos/trip-match/" },
            { title: "🏢 Vault Empresarial", url: "/projetos/vault-empresarial/" },
            { title: "🎓 Curso IA Inteligente", url: "/projetos/curso-ia-inteligente/" },
            { title: "📱 App Desenvolvimento", url: "/projetos/app-desenvolvimento-cognitivo/" },
            { title: "🎵 Nostalgia Musical", url: "/projetos/nostalgia-musical/" },
            { title: "🎓 Plataforma Cursos", url: "/projetos/plataforma-cursos/" }
          ]
        },
        {
          title: "⚡ Em Desenvolvimento",
          url: "/projetos/em-desenvolvimento/",
          children: [
            { title: "🤖 WhatsBot Academia", url: "/projetos/dev-whatsbot-academia/" },
            { title: "🌐 Portfolio Engenharia", url: "/projetos/web-site-portfolio-engenharia/" }
          ]
        },
        {
          title: "📝 Templates",
          url: "/projetos/templates/",
          children: [
            { title: "📋 Exemplo Intake", url: "/projetos/exemplo-intake-preenchido/" },
            { title: "⚡ Minimalista", url: "/projetos/exemplo-minimalista/" },
            { title: "🎯 Primeira Cartada", url: "/projetos/exemplo-primeira-cartada/" },
            { title: "🏗️ Template Piloto", url: "/projetos/template-piloto-exemplo-sistema/" },
            { title: "🏢 CRM Arquitetos", url: "/projetos/template-piloto-crm-arquitetos/" }
          ]
        }
      ]
    },
    {
      title: "⚙️ Processos",
      url: "/processos/",
      icon: "⚙️",
      children: [
        { title: "📈 Gestão de Sprints", url: "/processos/sistema_gestao_capacidade_sprints/" },
        { title: "📖 Guia do Sistema", url: "/processos/guia_uso_sistema_capacidade/" },
        { title: "📋 SOPs", url: "/processos/sops/" },
        { title: "⚡ Workflows", url: "/processos/workflows/" },
        { title: "📊 Métricas", url: "/processos/metricas/" }
      ]
    },
    {
      title: "📅 Reuniões",
      url: "/reunioes/",
      icon: "📅",
      children: [
        { title: "🎯 Reunião Executiva", url: "/reunioes/2025-08-31-reuniao-executiva-sistema/" },
        { title: "📊 Análise Pessimista", url: "/reunioes/2025-09-01-reuniao-analise-pessimista-projetos/" },
        { title: "🤖 Criação WhatsBot", url: "/reunioes/2025-09-01-reuniao-criacao-projeto-whatsbot/" },
        { title: "💡 Sistema de Ideias", url: "/reunioes/2025-09-01-reuniao-criacao-sistema-geracao-ideias/" },
        { title: "👔 Conselho", url: "/reunioes/conselho/" },
        { title: "⚡ Operacional", url: "/reunioes/operacional/" },
        { title: "📋 Projetos", url: "/reunioes/projetos/" }
      ]
    },
    {
      title: "🧠 Conhecimento",
      url: "/conhecimento/",
      icon: "🧠",
      children: [
        { title: "🤖 Inteligência Artificial", url: "/conhecimento/ia/" },
        { title: "💻 Tecnologia", url: "/conhecimento/tecnologia/" },
        { title: "📈 Negócios", url: "/conhecimento/negocios/" },
        { title: "🏗️ Processos", url: "/conhecimento/processos/" }
      ]
    }
  ]
};
