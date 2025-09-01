require('dotenv').config();

// Metadados SEO otimizados para PVP Projects
module.exports = {
  // Configurações globais
  site: {
    name: 'PVP Projects - Engenharia de Qualidade',
    description: 'Especialistas em projetos de engenharia elétrica e hidrossanitária com atendimento nacional. Base em Porto Alegre/RS. Soluções precisas e inovadoras para todos os tipos de empreendimentos.',
    url: 'https://pvp-projects.com',
    language: 'pt-BR',
    author: 'Eng. Pedro Vitor Pagliarin',
    email: 'pedrovitor.pagliarin@hotmail.com'
  },

  // Páginas principais
  pages: {
    home: {
      title: 'PVP Projects - Engenharia de Qualidade | Porto Alegre',
      description: 'Especialistas em projetos de engenharia elétrica e hidrossanitária com atendimento nacional. 8 anos de experiência, 15+ projetos entregues com excelência técnica.',
      keywords: 'engenharia elétrica, projetos hidrossanitários, Porto Alegre, engenheiro eletricista, Revit, AutoCAD',
      ogImage: '/assets/images/og-home.jpg'
    },
    sobre: {
      title: 'Sobre a PVP Projects - Engenharia de Qualidade',
      description: 'Conheça a história da PVP Projects, fundada pelo Eng. Pedro Vitor Pagliarin. 8 anos de experiência em projetos de engenharia elétrica e hidrossanitária.',
      keywords: 'sobre PVP Projects, Pedro Vitor Pagliarin, engenheiro eletricista UFRGS, experiência engenharia',
      ogImage: '/assets/images/og-sobre.jpg'
    },
    servicos: {
      title: 'Serviços de Engenharia - PVP Projects',
      description: 'Projetos elétricos, hidrossanitários, comunicação e consultoria BIM. Soluções completas de engenharia para todos os tipos de empreendimentos.',
      keywords: 'projetos elétricos, projetos hidrossanitários, consultoria BIM, Revit, AutoCAD, engenharia',
      ogImage: '/assets/images/og-servicos.jpg'
    },
    projetos: {
      title: 'Portfólio de Projetos - PVP Projects',
      description: 'Portfólio completo de projetos de engenharia elétrica e hidrossanitária. Edifícios residenciais, comerciais e institucionais em Porto Alegre.',
      keywords: 'portfólio projetos, engenharia elétrica, projetos hidrossanitários, Porto Alegre, Revit',
      ogImage: '/assets/images/og-projetos.jpg'
    },
    contato: {
      title: 'Contato - PVP Projects Engenharia',
      description: 'Entre em contato com a PVP Projects para projetos de engenharia elétrica e hidrossanitária. Orçamentos e consultoria em Porto Alegre.',
      keywords: 'contato PVP Projects, orçamento engenharia, Porto Alegre, engenheiro eletricista',
      ogImage: '/assets/images/og-contato.jpg'
    }
  },

  // Serviços específicos
  services: {
    eletricos: {
      title: 'Projetos Elétricos - PVP Projects',
      description: 'Projetos elétricos completos para residências, comércios e edifícios. Instalações de baixa tensão, quadros de distribuição e medição individualizada.',
      keywords: 'projetos elétricos, instalações elétricas, quadros de distribuição, medição individualizada, NBR 5410',
      ogImage: '/assets/images/og-eletricos.jpg'
    },
    hidrossanitarios: {
      title: 'Projetos Hidrossanitários - PVP Projects',
      description: 'Projetos hidrossanitários para redes de água fria e quente, sistemas de esgoto e instalações hidráulicas. Sustentabilidade hídrica.',
      keywords: 'projetos hidrossanitários, redes de água, sistemas de esgoto, instalações hidráulicas, NBR 8160',
      ogImage: '/assets/images/og-hidrossanitarios.jpg'
    },
    comunicacao: {
      title: 'Projetos de Comunicação - PVP Projects',
      description: 'Infraestrutura para redes de dados, telefonia e TV. Cabeamento estruturado e tecnologia de ponta para seu projeto.',
      keywords: 'projetos comunicação, redes de dados, telefonia, TV, cabeamento estruturado',
      ogImage: '/assets/images/og-comunicacao.jpg'
    },
    consultoriaBim: {
      title: 'Consultoria BIM - PVP Projects',
      description: 'Modelagem 3D das instalações em Revit. Compatibilização de projetos, coordenadas técnicas e detalhamento preciso.',
      keywords: 'consultoria BIM, Revit, modelagem 3D, compatibilização projetos, coordenadas técnicas',
      ogImage: '/assets/images/og-bim.jpg'
    }
  },

  // Schema.org structured data
  schema: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'PVP Projects - Engenharia de Precisão',
      'url': 'https://pvp-projects.com',
      'logo': 'https://pvp-projects.com/assets/images/logo-pvp-projects.png',
      'description': 'Especialistas em projetos de engenharia elétrica e hidrossanitária com atendimento nacional, base em Porto Alegre/RS',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Porto Alegre',
        'addressRegion': 'RS',
        'addressCountry': 'BR'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+55-51-99999-9999',
        'contactType': 'customer service',
        'email': 'pedrovitor.pagliarin@hotmail.com'
      },
      'founder': {
        '@type': 'Person',
        'name': 'Pedro Vitor Pagliarin',
        'jobTitle': 'Engenheiro Eletricista',
        'alumniOf': {
          '@type': 'CollegeOrUniversity',
          'name': 'Universidade Federal do Rio Grande do Sul'
        }
      },
      'serviceArea': [
        {
          '@type': 'Place',
          'name': 'Brasil'
        },
        {
          '@type': 'Place', 
          'name': 'Porto Alegre e região metropolitana',
          'description': 'Área de concentração principal'
        },
        {
          '@type': 'Place',
          'name': 'Todo o território nacional',
          'description': 'Atendimento nacional com projetos em todo o Brasil'
        }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Serviços de Engenharia',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Projetos Elétricos',
              'description': 'Instalações de baixa tensão para todos os portes'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Projetos Hidrossanitários',
              'description': 'Redes de água fria e quente'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Projetos de Comunicação',
              'description': 'Infraestrutura para redes de dados, telefonia e TV'
            }
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Consultoria BIM',
              'description': 'Modelagem 3D das instalações em Revit'
            }
          }
        ]
      }
    },
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Pedro Vitor Pagliarin',
      'jobTitle': 'Engenheiro Eletricista',
      'worksFor': {
        '@type': 'Organization',
        'name': 'PVP Projects - Engenharia de Precisão'
      },
      'alumniOf': {
        '@type': 'CollegeOrUniversity',
        'name': 'Universidade Federal do Rio Grande do Sul'
      },
      'knowsAbout': [
        'Engenharia Elétrica',
        'Projetos Hidrossanitários',
        'Revit',
        'AutoCAD',
        'Normas Técnicas NBR'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+55-54-99159-0379',
        'email': 'pedrovitor.pagliarin@hotmail.com'
      }
    }
  },

  // Open Graph padrões
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'PVP Projects - Engenharia de Precisão',
    twitterCard: 'summary_large_image',
    twitterCreator: '@pvp_projects'
  },

  // Robots.txt
  robots: {
    userAgent: '*',
    allow: '/',
    disallow: ['/admin/', '/private/'],
    sitemap: 'https://pvp-projects.com/sitemap.xml'
  },

  // Analytics
  analytics: {
    googleAnalytics: 'G-XXXXXXXXXX', // Substituir pelo ID real
    googleTagManager: 'GTM-XXXXXXX' // Substituir pelo ID real
  }
};
