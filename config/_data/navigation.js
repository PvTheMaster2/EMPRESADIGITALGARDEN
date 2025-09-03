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
      url: "/1-governanca/",
      icon: "🏛️",
      children: [
        { title: "📜 Acordo de Sócios", url: "/1-governanca/acordo_socios_final/" },
        { title: "⚖️ Compliance Log", url: "/1-governanca/compliance_log/" },
        { title: "🤖 Ética no Uso de IA", url: "/1-governanca/etica_uso_ia/" },
        { title: "❓ FAQ Compliance", url: "/1-governanca/faq_compliance/" },
        { title: "📚 Manual de Treinamento", url: "/1-governanca/manual_treinamento_compliance/" },
        { title: "📈 Playbook Comercial", url: "/1-governanca/playbook_comercial_v0/" }
      ]
    },
    {
      title: "👥 Equipes",
      url: "/2-equipes/",
      icon: "👥",
      children: [
        { title: "💻 Desenvolvimento", url: "/2-equipes/desenvolvimento/" },
        { title: "🎯 Marketing", url: "/2-equipes/marketing/" },
        { title: "💼 Vendas", url: "/2-equipes/vendas/" },
        { title: "⚙️ Operações", url: "/2-equipes/operacoes/" },
        { title: "👔 Liderança", url: "/2-equipes/lideranca/" }
      ]
    },
    {
      title: "🌍 Mercado",
      url: "/3-mercado/",
      icon: "🌍",
      children: [
        { title: "👥 Clientes", url: "/3-mercado/clientes/" },
        { title: "⚔️ Concorrentes", url: "/3-mercado/concorrentes/" },
        { title: "🤝 Fornecedores", url: "/3-mercado/fornecedores/" },
        { title: "🚀 Tendências", url: "/3-mercado/tendencias/" }
      ]
    },
    {
      title: "📋 Projetos",
      url: "/4-projetos/",
      icon: "📋",
      children: [
        {
          title: "🚀 Ativos",
          url: "/4-projetos/ativos/",
          children: [
            { title: "🌟 PRJ-AERALYN", url: "/4-projetos/ativos/prj-aeralyn/" },
            { title: "🎮 Trip-Match", url: "/4-projetos/ativos/prj-trip-match/" },
            { title: "🏢 Vault Empresarial", url: "/4-projetos/ativos/prj-vault-empresarial/" },
            { title: "🎓 Curso IA Inteligente", url: "/4-projetos/ativos/prj-curso-ia-inteligente/" },
            { title: "📱 App Desenvolvimento", url: "/4-projetos/ativos/prj-app-desenvolvimento-cognitivo/" },
            { title: "🎵 Nostalgia Musical", url: "/4-projetos/ativos/prj-nostalgia-musical/" },
            { title: "🎓 Plataforma Cursos", url: "/4-projetos/ativos/prj-plataforma-cursos/" }
          ]
        },
        {
          title: "⚡ Em Desenvolvimento",
          url: "/4-projetos/em-desenvolvimento/",
          children: [
            { title: "🤖 WhatsBot Academia", url: "/4-projetos/em-desenvolvimento/prj-dev-whatsbot-academia/" },
            { title: "🌐 Portfolio Engenharia", url: "/4-projetos/em-desenvolvimento/prj-web-site-portfolio-engenharia/" }
          ]
        },
        {
          title: "📝 Templates",
          url: "/4-projetos/templates/",
          children: [
            { title: "📋 Exemplo Intake", url: "/4-projetos/templates/exemplo_intake_preenchido/" },
            { title: "⚡ Minimalista", url: "/4-projetos/templates/exemplo_minimalista/" },
            { title: "🎯 Primeira Cartada", url: "/4-projetos/templates/exemplo_primeira_cartada/" },
            { title: "🏗️ Template Piloto", url: "/4-projetos/templates/template piloto-exemplo-sistema/" },
            { title: "🏢 CRM Arquitetos", url: "/4-projetos/templates/template piloto_crm_arquitetos/" }
          ]
        }
      ]
    },
    {
      title: "⚙️ Processos",
      url: "/5-processos/",
      icon: "⚙️",
      children: [
        { title: "📈 Gestão de Sprints", url: "/5-processos/sistema_gestao_capacidade_sprints/" },
        { title: "📖 Guia do Sistema", url: "/5-processos/guia_uso_sistema_capacidade/" },
        { title: "📋 SOPs", url: "/5-processos/sops/" },
        { title: "⚡ Workflows", url: "/5-processos/workflows/" },
        { title: "📊 Métricas", url: "/5-processos/metricas/" }
      ]
    },
    {
      title: "📅 Reuniões",
      url: "/6-reunioes/",
      icon: "📅",
      children: [
        { title: "🎯 Reunião Executiva", url: "/6-reunioes/2025-08-31-reuniao-executiva-sistema/" },
        { title: "📊 Análise Pessimista", url: "/6-reunioes/2025-09-01-reuniao-analise-pessimista-projetos/" },
        { title: "🤖 Criação WhatsBot", url: "/6-reunioes/2025-09-01-reuniao-criacao-projeto-whatsbot/" },
        { title: "💡 Sistema de Ideias", url: "/6-reunioes/2025-09-01-reuniao-criacao-sistema-geracao-ideias/" },
        { title: "👔 Conselho", url: "/6-reunioes/conselho/" },
        { title: "⚡ Operacional", url: "/6-reunioes/operacional/" },
        { title: "📋 Projetos", url: "/6-reunioes/projetos/" }
      ]
    },
    {
      title: "🧠 Conhecimento",
      url: "/7-conhecimento/",
      icon: "🧠",
      children: [
        { title: "🤖 Inteligência Artificial", url: "/7-conhecimento/ia/" },
        { title: "💻 Tecnologia", url: "/7-conhecimento/tecnologia/" },
        { title: "📈 Negócios", url: "/7-conhecimento/negocios/" },
        { title: "🏗️ Processos", url: "/7-conhecimento/processos/" }
      ]
    }
  ]
};
