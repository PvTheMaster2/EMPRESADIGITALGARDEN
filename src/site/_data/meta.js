require('dotenv').config();

// Metadados SEO otimizados para Digital Garden Empresarial
module.exports = {
  // Configurações globais
  site: {
    name: 'Digital Garden Empresarial - Sistema de Gestão de Conhecimento',
    description: 'Sistema completo de gestão de conhecimento empresarial, organizando governança, equipes, mercado, projetos e processos em uma plataforma integrada.',
    url: 'https://digital-garden-empresa.netlify.app',
    language: 'pt-BR',
    author: 'Digital Garden Team',
    email: 'contato@digitalgarden.com'
  },

  // Páginas principais
  pages: {
    home: {
      title: 'Digital Garden Empresarial - Sistema de Gestão de Conhecimento',
      description: 'Sistema completo de gestão de conhecimento empresarial, organizando governança, equipes, mercado, projetos e processos em uma plataforma integrada.',
      keywords: 'gestão de conhecimento, digital garden, governança empresarial, gestão de projetos, processos empresariais',
      ogImage: '/assets/images/og-home.jpg'
    },
    dashboard: {
      title: 'Dashboard Executivo - Digital Garden Empresarial',
      description: 'Visão geral dos KPIs, métricas de performance e indicadores estratégicos da empresa.',
      keywords: 'dashboard executivo, KPIs, métricas empresariais, indicadores estratégicos',
      ogImage: '/assets/images/og-dashboard.jpg'
    },
    governanca: {
      title: 'Governança - Digital Garden Empresarial',
      description: 'Políticas, compliance, acordos de sócios e estrutura organizacional.',
      keywords: 'governança empresarial, compliance, políticas empresariais, acordos de sócios',
      ogImage: '/assets/images/og-governanca.jpg'
    },
    equipes: {
      title: 'Equipes - Digital Garden Empresarial',
      description: 'Estrutura organizacional, responsabilidades e capacidades das equipes.',
      keywords: 'equipes empresariais, estrutura organizacional, responsabilidades, capacidades',
      ogImage: '/assets/images/og-equipes.jpg'
    },
    mercado: {
      title: 'Mercado - Digital Garden Empresarial',
      description: 'Análise de clientes, concorrentes, fornecedores e tendências de mercado.',
      keywords: 'análise de mercado, clientes, concorrentes, fornecedores, tendências',
      ogImage: '/assets/images/og-mercado.jpg'
    },
    projetos: {
      title: 'Projetos - Digital Garden Empresarial',
      description: 'Portfólio de projetos ativos, backlog e projetos concluídos.',
      keywords: 'gestão de projetos, portfólio de projetos, projetos empresariais',
      ogImage: '/assets/images/og-projetos.jpg'
    },
    processos: {
      title: 'Processos - Digital Garden Empresarial',
      description: 'Workflows, SOPs, métricas e templates de gestão de processos.',
      keywords: 'gestão de processos, workflows, SOPs, templates de processos',
      ogImage: '/assets/images/og-processos.jpg'
    }
  },

  // Áreas específicas
  areas: {
    dashboard: {
      title: 'Dashboard Executivo - Digital Garden Empresarial',
      description: 'Visão geral dos KPIs, métricas de performance e indicadores estratégicos da empresa.',
      keywords: 'dashboard executivo, KPIs, métricas empresariais, indicadores estratégicos',
      ogImage: '/assets/images/og-dashboard.jpg'
    },
    governanca: {
      title: 'Governança Empresarial - Digital Garden',
      description: 'Políticas, compliance, acordos de sócios e estrutura organizacional.',
      keywords: 'governança empresarial, compliance, políticas empresariais, acordos de sócios',
      ogImage: '/assets/images/og-governanca.jpg'
    },
    equipes: {
      title: 'Gestão de Equipes - Digital Garden',
      description: 'Estrutura organizacional, responsabilidades e capacidades das equipes.',
      keywords: 'equipes empresariais, estrutura organizacional, responsabilidades, capacidades',
      ogImage: '/assets/images/og-equipes.jpg'
    },
    mercado: {
      title: 'Análise de Mercado - Digital Garden',
      description: 'Análise de clientes, concorrentes, fornecedores e tendências de mercado.',
      keywords: 'análise de mercado, clientes, concorrentes, fornecedores, tendências',
      ogImage: '/assets/images/og-mercado.jpg'
    },
    projetos: {
      title: 'Gestão de Projetos - Digital Garden',
      description: 'Portfólio de projetos ativos, backlog e projetos concluídos.',
      keywords: 'gestão de projetos, portfólio de projetos, projetos empresariais',
      ogImage: '/assets/images/og-projetos.jpg'
    },
    processos: {
      title: 'Gestão de Processos - Digital Garden',
      description: 'Workflows, SOPs, métricas e templates de gestão de processos.',
      keywords: 'gestão de processos, workflows, SOPs, templates de processos',
      ogImage: '/assets/images/og-processos.jpg'
    }
  },

  // Schema.org structured data
  schema: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Digital Garden Empresarial',
      'url': 'https://digital-garden-empresa.netlify.app',
      'logo': 'https://digital-garden-empresa.netlify.app/assets/images/logo-digital-garden.png',
      'description': 'Sistema completo de gestão de conhecimento empresarial, organizando governança, equipes, mercado, projetos e processos em uma plataforma integrada',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'São Paulo',
        'addressRegion': 'SP',
        'addressCountry': 'BR'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+55-11-99999-9999',
        'contactType': 'customer service',
        'email': 'contato@digitalgarden.com'
      },
      'serviceArea': [
        {
          '@type': 'Place',
          'name': 'Brasil'
        },
        {
          '@type': 'Place', 
          'name': 'São Paulo e região metropolitana',
          'description': 'Área de concentração principal'
        }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Sistema de Gestão de Conhecimento',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Dashboard Executivo',
              'description': 'KPIs e métricas de performance'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Governança Empresarial',
              'description': 'Políticas e compliance'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Gestão de Equipes',
              'description': 'Estrutura organizacional'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Análise de Mercado',
              'description': 'Clientes, concorrentes e tendências'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Gestão de Projetos',
              'description': 'Portfólio e backlog de projetos'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Gestão de Processos',
              'description': 'Workflows e SOPs'
            }
          }
        ]
      }
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Digital Garden Empresarial',
      'url': 'https://digital-garden-empresa.netlify.app',
      'description': 'Sistema de Gestão de Conhecimento Empresarial',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://digital-garden-empresa.netlify.app/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  },

  // Open Graph padrões
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Digital Garden Empresarial',
    twitterCard: 'summary_large_image',
    twitterCreator: '@digitalgarden'
  },

  // Robots.txt
  robots: {
    userAgent: '*',
    allow: '/',
    disallow: ['/admin/', '/private/'],
    sitemap: 'https://digital-garden-empresa.netlify.app/sitemap.xml'
  },

  // Analytics
  analytics: {
    googleAnalytics: 'G-XXXXXXXXXX', // Substituir pelo ID real
    googleTagManager: 'GTM-XXXXXXX' // Substituir pelo ID real
  },

  // Configurações de performance
  performance: {
    preload: [
      '/styles/main.css',
      '/scripts/main.js'
    ],
    prefetch: [
      '/0-Dashboard-Executivo/',
      '/1-Governanca/',
      '/2-Equipes/',
      '/3-Mercado/',
      '/4-Projetos/',
      '/5-Processos/'
    ]
  }
};
