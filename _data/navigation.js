// Sistema de navegação do site
module.exports = {
  // Menu principal
  main: [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'user'
    },
    {
      title: 'Serviços',
      url: '/servicos',
      icon: 'settings',
      children: [
        {
          title: 'Projetos Elétricos',
          url: '/servicos/eletricos',
          description: 'Instalações de baixa tensão'
        },
        {
          title: 'Projetos Hidrossanitários',
          url: '/servicos/hidrossanitarios',
          description: 'Redes de água e esgoto'
        },
        {
          title: 'Projetos de Comunicação',
          url: '/servicos/comunicacao',
          description: 'Infraestrutura de dados'
        },
        {
          title: 'Consultoria BIM',
          url: '/servicos/consultoria-bim',
          description: 'Modelagem 3D em Revit'
        }
      ]
    },
    {
      title: 'Projetos',
      url: '/projetos-dedicada',
      icon: 'folder',
      children: [
        {
          title: 'Todos os Projetos',
          url: '/projetos-dedicada',
          description: 'Portfólio completo'
        },
        {
          title: 'Projetos Prediais',
          url: '/projetos/categoria/predial',
          description: 'Edifícios residenciais e comerciais'
        },
        {
          title: 'Projetos Residenciais',
          url: '/projetos/categoria/residencial',
          description: 'Casas e apartamentos'
        },
        {
          title: 'Projetos Comerciais',
          url: '/projetos/categoria/comercial',
          description: 'Lojas e estabelecimentos'
        }
      ]
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'file-text'
    },
    {
      title: 'Contato',
      url: '/contato',
      icon: 'mail'
    }
  ],

  // Menu secundário (footer)
  footer: [
    {
      title: 'Empresa',
      items: [
        { title: 'Sobre Nós', url: '/sobre' },
        { title: 'Serviços', url: '/servicos' },
        { title: 'Projetos', url: '/projetos-dedicada' },
        { title: 'Blog', url: '/blog' },
        { title: 'Contato', url: '/contato' }
      ]
    },
    {
      title: 'Serviços',
      items: [
        { title: 'Projetos Elétricos', url: '/servicos/eletricos' },
        { title: 'Projetos Hidrossanitários', url: '/servicos/hidrossanitarios' },
        { title: 'Projetos de Comunicação', url: '/servicos/comunicacao' },
        { title: 'Consultoria BIM', url: '/servicos/consultoria-bim' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { title: 'Política de Privacidade', url: '/legal/privacidade' },
        { title: 'Termos de Uso', url: '/legal/termos' },
        { title: 'Cookies', url: '/legal/cookies' }
      ]
    }
  ],

  // Breadcrumbs
  breadcrumbs: {
    home: { title: 'Home', url: '/' },
    sobre: { title: 'Sobre', url: '/sobre' },
    servicos: { title: 'Serviços', url: '/servicos' },
    projetos: { title: 'Projetos', url: '/projetos' },
    contato: { title: 'Contato', url: '/contato' }
  },

  // Categorias de projetos
  projectCategories: [
    {
      id: 'predial',
      title: 'Projetos Prediais',
      description: 'Edifícios residenciais e comerciais',
      icon: '🏢',
      color: 'primary'
    },
    {
      id: 'residencial',
      title: 'Projetos Residenciais',
      description: 'Casas e apartamentos',
      icon: '🏠',
      color: 'secondary'
    },
    {
      id: 'comercial',
      title: 'Projetos Comerciais',
      description: 'Lojas e estabelecimentos',
      icon: '🏪',
      color: 'accent'
    },
    {
      id: 'institucional',
      title: 'Projetos Institucionais',
      description: 'Escolas, hospitais e instituições',
      icon: '🏛️',
      color: 'success'
    }
  ],

  // Filtros de projetos
  projectFilters: [
    {
      id: 'category',
      title: 'Categoria',
      options: [
        { value: 'all', label: 'Todas as Categorias' },
        { value: 'predial', label: 'Predial' },
        { value: 'residencial', label: 'Residencial' },
        { value: 'comercial', label: 'Comercial' },
        { value: 'institucional', label: 'Institucional' }
      ]
    },
    {
      id: 'service',
      title: 'Serviço',
      options: [
        { value: 'all', label: 'Todos os Serviços' },
        { value: 'eletrico', label: 'Elétrico' },
        { value: 'hidrossanitario', label: 'Hidrossanitário' },
        { value: 'comunicacao', label: 'Comunicação' },
        { value: 'consultoria', label: 'Consultoria BIM' }
      ]
    },
    {
      id: 'year',
      title: 'Ano',
      options: [
        { value: 'all', label: 'Todos os Anos' },
        { value: '2024', label: '2024' },
        { value: '2023', label: '2023' },
        { value: '2022', label: '2022' }
      ]
    }
  ],

  // Links de contato rápido
  quickContact: [
    {
      title: 'WhatsApp',
      url: 'https://wa.me/5554991590379',
      icon: 'whatsapp',
      color: 'green'
    },
    {
      title: 'Email',
      url: 'mailto:pedrovitor.pagliarin@hotmail.com',
      icon: 'mail',
      color: 'blue'
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/pedro-vitor-pagliarin',
      icon: 'linkedin',
      color: 'blue'
    }
  ]
}; 