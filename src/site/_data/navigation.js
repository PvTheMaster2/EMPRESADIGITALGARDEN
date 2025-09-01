// Sistema de navegação do Digital Garden Empresarial
module.exports = {
  // Menu principal
  main: [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/0-Dashboard-Executivo/',
      icon: 'dashboard',
      children: [
        {
          title: 'Visão Geral',
          url: '/0-Dashboard-Executivo/',
          description: 'Dashboard principal'
        },
        {
          title: 'KPIs Principais',
          url: '/0-Dashboard-Executivo/KPIs-Principais',
          description: 'Indicadores-chave'
        },
        {
          title: 'Métricas Avançadas',
          url: '/0-Dashboard-Executivo/Sistema_Metricas_Avancadas',
          description: 'Análises detalhadas'
        }
      ]
    },
    {
      title: 'Governança',
      url: '/1-Governanca/',
      icon: 'governance',
      children: [
        {
          title: 'Políticas',
          url: '/1-Governanca/',
          description: 'Políticas empresariais'
        },
        {
          title: 'Compliance',
          url: '/1-Governanca/Compliance_Log',
          description: 'Log de compliance'
        },
        {
          title: 'Acordos',
          url: '/1-Governanca/Acordo_Socios_Final',
          description: 'Acordos de sócios'
        }
      ]
    },
    {
      title: 'Equipes',
      url: '/2-Equipes/',
      icon: 'teams',
      children: [
        {
          title: 'Desenvolvimento',
          url: '/2-Equipes/Desenvolvimento/',
          description: 'Equipe de desenvolvimento'
        },
        {
          title: 'Liderança',
          url: '/2-Equipes/Lideranca/',
          description: 'Estrutura de liderança'
        },
        {
          title: 'Marketing',
          url: '/2-Equipes/Marketing/',
          description: 'Equipe de marketing'
        },
        {
          title: 'Operações',
          url: '/2-Equipes/Operacoes/',
          description: 'Equipe de operações'
        },
        {
          title: 'Vendas',
          url: '/2-Equipes/Vendas/',
          description: 'Equipe de vendas'
        }
      ]
    },
    {
      title: 'Mercado',
      url: '/3-Mercado/',
      icon: 'market',
      children: [
        {
          title: 'Clientes',
          url: '/3-Mercado/Clientes/',
          description: 'Análise de clientes'
        },
        {
          title: 'Concorrentes',
          url: '/3-Mercado/Concorrentes/',
          description: 'Estudo de concorrentes'
        },
        {
          title: 'Fornecedores',
          url: '/3-Mercado/Fornecedores/',
          description: 'Relação com fornecedores'
        },
        {
          title: 'Tendências',
          url: '/3-Mercado/Tendencias/',
          description: 'Tendências de mercado'
        }
      ]
    },
    {
      title: 'Projetos',
      url: '/4-Projetos/',
      icon: 'projects',
      children: [
        {
          title: 'Ativos',
          url: '/4-Projetos/Ativos/',
          description: 'Projetos em execução'
        },
        {
          title: 'Em Desenvolvimento',
          url: '/4-Projetos/Em-Desenvolvimento/',
          description: 'Projetos em desenvolvimento'
        },
        {
          title: 'Pilotos',
          url: '/4-Projetos/Pilotos/',
          description: 'Projetos piloto'
        },
        {
          title: 'Concluídos',
          url: '/4-Projetos/Concluidos/',
          description: 'Projetos finalizados'
        }
      ]
    },
    {
      title: 'Processos',
      url: '/5-Processos/',
      icon: 'processes',
      children: [
        {
          title: 'Workflows',
          url: '/5-Processos/Workflows/',
          description: 'Fluxos de trabalho'
        },
        {
          title: 'SOPs',
          url: '/5-Processos/SOPs/',
          description: 'Procedimentos operacionais'
        },
        {
          title: 'Métricas',
          url: '/5-Processos/Metricas/',
          description: 'Métricas de processos'
        },
        {
          title: 'Templates',
          url: '/5-Processos/Templates_Governanca/',
          description: 'Templates de governança'
        }
      ]
    }
  ],

  // Menu secundário (footer)
  footer: [
    {
      title: 'Empresa',
      items: [
        { title: 'Sobre Nós', url: '/sobre' },
        { title: 'Dashboard', url: '/0-Dashboard-Executivo/' },
        { title: 'Projetos', url: '/4-Projetos/' },
        { title: 'Processos', url: '/5-Processos/' },
        { title: 'Contato', url: '/contato' }
      ]
    },
    {
      title: 'Áreas',
      items: [
        { title: 'Governança', url: '/1-Governanca/' },
        { title: 'Equipes', url: '/2-Equipes/' },
        { title: 'Mercado', url: '/3-Mercado/' },
        { title: 'Projetos', url: '/4-Projetos/' }
      ]
    },
    {
      title: 'Recursos',
      items: [
        { title: 'Templates', url: '/99-RESOURCES/99-TEMPLATE/' },
        { title: 'Documentação', url: '/docs' },
        { title: 'API', url: '/api' },
        { title: 'Suporte', url: '/suporte' }
      ]
    }
  ],

  // Breadcrumbs
  breadcrumbs: {
    home: { title: 'Home', url: '/' },
    dashboard: { title: 'Dashboard', url: '/0-Dashboard-Executivo/' },
    governanca: { title: 'Governança', url: '/1-Governanca/' },
    equipes: { title: 'Equipes', url: '/2-Equipes/' },
    mercado: { title: 'Mercado', url: '/3-Mercado/' },
    projetos: { title: 'Projetos', url: '/4-Projetos/' },
    processos: { title: 'Processos', url: '/5-Processos/' }
  },

  // Categorias de projetos
  projectCategories: [
    {
      id: 'ativos',
      title: 'Projetos Ativos',
      description: 'Projetos em execução',
      icon: '🚀',
      color: 'success'
    },
    {
      id: 'desenvolvimento',
      title: 'Em Desenvolvimento',
      description: 'Projetos em desenvolvimento',
      icon: '⚡',
      color: 'warning'
    },
    {
      id: 'pilotos',
      title: 'Projetos Piloto',
      description: 'Projetos piloto e experimentais',
      icon: '🧪',
      color: 'info'
    },
    {
      id: 'concluidos',
      title: 'Projetos Concluídos',
      description: 'Projetos finalizados',
      icon: '✅',
      color: 'primary'
    }
  ],

  // Filtros de projetos
  projectFilters: [
    {
      id: 'status',
      title: 'Status',
      options: [
        { value: 'all', label: 'Todos os Status' },
        { value: 'ativo', label: 'Ativo' },
        { value: 'desenvolvimento', label: 'Em Desenvolvimento' },
        { value: 'piloto', label: 'Piloto' },
        { value: 'concluido', label: 'Concluído' }
      ]
    },
    {
      id: 'area',
      title: 'Área',
      options: [
        { value: 'all', label: 'Todas as Áreas' },
        { value: 'desenvolvimento', label: 'Desenvolvimento' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'operacoes', label: 'Operações' },
        { value: 'vendas', label: 'Vendas' }
      ]
    },
    {
      id: 'prioridade',
      title: 'Prioridade',
      options: [
        { value: 'all', label: 'Todas as Prioridades' },
        { value: 'alta', label: 'Alta' },
        { value: 'media', label: 'Média' },
        { value: 'baixa', label: 'Baixa' }
      ]
    }
  ],

  // Links de contato rápido
  quickContact: [
    {
      title: 'Email',
      url: 'mailto:contato@digitalgarden.com',
      icon: 'mail',
      color: 'blue'
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/5511999999999',
      icon: 'whatsapp',
      color: 'green'
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/company/digital-garden-empresarial',
      icon: 'linkedin',
      color: 'blue'
    }
  ],

  // Navegação por tags
  tagNavigation: [
    {
      tag: 'dashboard',
      title: 'Dashboard',
      icon: '📊',
      color: 'primary'
    },
    {
      tag: 'governanca',
      title: 'Governança',
      icon: '⚖️',
      color: 'secondary'
    },
    {
      tag: 'equipes',
      title: 'Equipes',
      icon: '👥',
      color: 'accent'
    },
    {
      tag: 'mercado',
      title: 'Mercado',
      icon: '📈',
      color: 'success'
    },
    {
      tag: 'projetos',
      title: 'Projetos',
      icon: '🚀',
      color: 'warning'
    },
    {
      tag: 'processos',
      title: 'Processos',
      icon: '⚙️',
      color: 'info'
    }
  ]
};
