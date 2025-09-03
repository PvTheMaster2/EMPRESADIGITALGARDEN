module.exports = {
  tree: [
    {
      title: "🏠 Home",
      url: "/",
      icon: "🏠"
    },
    {
      title: "📊 Dashboard Executivo",
      url: "/dashboard-overview/",
      icon: "📊",
      children: [
        { title: "💡 Innovation Pipeline", url: "/0-dashboard-executivo/innovation-pipeline/" },
        { title: "📈 KPIs Principais", url: "/0-dashboard-executivo/kpis-principais/" },
        { title: "🎯 Decisões Estratégicas", url: "/0-dashboard-executivo/decisoes-estrategicas/" },
        { title: "📅 Projetos por Prazo", url: "/0-dashboard-executivo/dashboard-projetos-prazo/" },
        { title: "🎨 Projetos Visuais", url: "/0-dashboard-executivo/dashboard-projetos-prazo-visual/" },
        { title: "👥 Capacidade da Equipe", url: "/0-dashboard-executivo/dashboard_capacidade_equipe/" },
        { title: "⚡ Executive Auto", url: "/0-dashboard-executivo/executive-auto/" },
        { title: "📊 Métricas Avançadas", url: "/0-dashboard-executivo/sistema_metricas_avancadas/" }
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
            { title: "🌟 PRJ-AERALYN", url: "/projetos/ativos/prj-aeralyn/" },
            { title: "🎮 Trip-Match", url: "/projetos/ativos/prj-trip-match/" },
            { title: "🏢 Vault Empresarial", url: "/projetos/ativos/prj-vault-empresarial/" },
            { title: "🎓 Curso IA Inteligente", url: "/projetos/ativos/prj-curso-ia-inteligente/" },
            { title: "📱 App Desenvolvimento", url: "/projetos/ativos/prj-app-desenvolvimento-cognitivo/" },
            { title: "🎵 Nostalgia Musical", url: "/projetos/ativos/prj-nostalgia-musical/" },
            { title: "🎓 Plataforma Cursos", url: "/projetos/ativos/prj-plataforma-cursos/" }
          ]
        },
        {
          title: "⚡ Em Desenvolvimento",
          url: "/projetos/em-desenvolvimento/",
          children: [
            { title: "🤖 WhatsBot Academia", url: "/projetos/em-desenvolvimento/prj-dev-whatsbot-academia/" },
            { title: "🌐 Portfolio Engenharia", url: "/projetos/em-desenvolvimento/prj-web-site-portfolio-engenharia/" }
          ]
        },
        {
          title: "📝 Templates",
          url: "/projetos/templates/",
          children: [
            { title: "📋 Exemplo Intake", url: "/projetos/templates/exemplo_intake_preenchido/" },
            { title: "⚡ Minimalista", url: "/projetos/templates/exemplo_minimalista/" },
            { title: "🎯 Primeira Cartada", url: "/projetos/templates/exemplo_primeira_cartada/" },
            { title: "🏗️ Template Piloto", url: "/projetos/templates/template piloto-exemplo-sistema/" },
            { title: "🏢 CRM Arquitetos", url: "/projetos/templates/template piloto_crm_arquitetos/" }
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
