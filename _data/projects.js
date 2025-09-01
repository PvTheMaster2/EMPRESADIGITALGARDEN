// Estrutura de dados organizada para projetos de engenharia
module.exports = {
  // Categorias de serviços
  categories: {
    eletrico: {
      name: 'Projetos Elétricos',
      description: 'Instalações de baixa tensão para todos os portes',
      icon: '⚡',
      color: 'primary'
    },
    hidrossanitario: {
      name: 'Projetos Hidrossanitários',
      description: 'Redes de água fria e quente',
      icon: '🚰',
      color: 'secondary'
    },
    comunicacao: {
      name: 'Projetos de Comunicação',
      description: 'Infraestrutura para redes de dados, telefonia e TV',
      icon: '📡',
      color: 'accent'
    },
    consultoria: {
      name: 'Consultoria e Compatibilização BIM',
      description: 'Modelagem 3D das instalações em Revit',
      icon: '🏗️',
      color: 'success'
    }
  },

  // Projetos principais
  projects: {
    'barao-uba': {
      id: 'barao-uba',
      title: 'Edifício BdU',
      subtitle: 'Projeto Elétrico Predial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'Construtora',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Edifício residencial multifamiliar — 11 pavimentos / 20 apartamentos / 2 subsolos',
      coverImage: '/assets/imagens/render-barao.png',
      details: {
        area: '2.500 m²',
        pavimentos: 11,
        apartamentos: 20,
        subsolos: 2,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004', 'NBR 14039:2005', 'NBR 13570:1996']
      },
      challenges: [
        'Medição individualizada para 20 unidades',
        'Dimensionamento de entrada de energia',
        'Infraestrutura para climatização',
        'Iluminação de circulação e garagem'
      ],
      solutions: [
        'Painel central de medidores detalhado',
        'Alimentadores individuais por unidade',
        'Espera para splits em todas as unidades',
        'Infraestrutura elétrica completa'
      ],
      results: [
        'Projeto aprovado pela concessionária',
        'Execução em campo sem problemas',
        'Eficiência energética otimizada',
        'Segurança técnica garantida'
      ],
      tags_extra: ['Elétrico', 'Predial', 'Revit', 'AutoCAD'],
      images: [
        {
          src: '/assets/imagens/render-barao.png',
          alt: 'Render do edifício BdU',
          caption: 'Vista geral do edifício'
        }
      ],
      documents: [],
      metrics: {
        area: 2500,
        team: 2
      }
    },

    'casa-sitio': {
      id: 'casa-sitio',
      title: 'Casa Sítio',
      subtitle: 'Projeto Elétrico e Hidrossanitário',
      category: 'residencial',
      subcategory: 'eletrico-hidrossanitario',
      client: 'Arquiteto',
      location: 'Sítio em Porto Alegre – RS',
      year: 2024,
      description: 'Projeto completo para residência rural com dois pavimentos e sistema séptico autônomo',
      coverImage: '/assets/imagens/casa-sitio_casa-sitio.png',
      details: {
        area: '250 m²',
        pavimentos: 2,
        ferramentas: ['Revit', 'AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 8160:1999', 'NBR 13969', 'NBR 7229']
      },
      challenges: [
        'Sistema de captação de água da chuva',
        'Instalações elétricas rurais',
        'Tratamento de esgoto individual'
      ],
      solutions: [
        'Cisterna com sistema de filtros',
        'Quadro elétrico com proteção contra surtos',
        'Fossa séptica com sumidouro'
      ],
      results: [
        'Sustentabilidade hídrica',
        'Autonomia energética',
        'Conforto rural moderno'
      ],
      tags_extra: ['Elétrico', 'Hidrossanitário', 'Residencial', 'AutoCAD'],
      images: [
        {
          src: '/assets/imagens/casa-sitio_casa-sitio.png',
          alt: 'Vista da casa sítio',
          caption: 'Vista geral'
        }
      ],
      documents: [],
      metrics: {
        area: 250,
        team: 1
      }
    },

    'dom-pedrito': {
      id: 'dom-pedrito',
      title: 'Edifício DP',
      subtitle: 'Projeto Elétrico',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'Construtora',
      location: 'Dom Pedrito',
      year: 2023,
      description: 'Projeto elétrico para residência unifamiliar',
      coverImage: '/assets/imagens/render-dp.png',
      details: {
        area: '1.200 m²',
        pavimentos: 1,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Layout otimizado para família',
        'Iluminação natural e artificial'
      ],
      solutions: [
        'Distribuição eficiente de pontos',
        'Sistema de iluminação integrado'
      ],
      results: [
        'Conforto e funcionalidade',
        'Eficiência energética'
      ],
      tags_extra: ['Elétrico', 'Residencial', 'Revit'],
      images: [
        {
          src: '/assets/imagens/fc-d08-wolf-e301-r02-2pavimento_dom-pedrito_recorte_p1.pdf',
          alt: 'Projeto Dom Pedrito',
          caption: 'Planta elétrica'
        }
      ],
             documents: [],
      metrics: {
        area: 1200,
        
      }
    },

    'sicredi': {
      id: 'sicredi',
      title: 'SI',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'predial',
      subcategory: 'eletrico',
      client: 'Arquitetos',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para agência bancária',
      coverImage: '/assets/imagens/sidcredi_sicredi.png',
      details: {
        area: '300 m²',
        pavimentos: 2,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004', 'NBR 13534:1995']
      },
      challenges: [
        'Sistema de segurança',
        'Piso elevado para elétrica',
        'Ar condicionado central'
      ],
      solutions: [
        'Quadro de comando de emergência',
        'Perfilados para tomadas e iluminação',
        'Infraestrutura para climatização'
      ],
      results: [
        'Segurança operacional',
        'Fator de agrupamento alinhado',
        'Eficiência energética'
      ],
      tags_extra: ['Elétrico', 'Comercial', 'Predial', 'Revit'],
      images: [
        {
          src: '/assets/imagens/sidcredi_sicredi.png',
          alt: 'Agência Sicredi',
          caption: 'Vista da agência'
        }
      ],
             documents: [],
      metrics: {
        area: 300,
        team: 2
      }
    },

    'loja-joao': {
      id: 'loja-joao',
      title: 'Loja JW',
      subtitle: 'Projeto Elétrico Comercial',
      category: 'comercial',
      subcategory: 'eletrico',
      client: 'Construtora',
      location: 'Porto Alegre',
      year: 2023,
      description: 'Projeto elétrico para loja comercial',
             coverImage: '/assets/imagens/render JW.png',
      details: {
        area: '600 m²',
        pavimentos: 1,
        ferramentas: ['Revit'],
        normas: ['NBR 5410:2004']
      },
      challenges: [
        'Iluminação comercial',
        'Sistema de climatização',
        'Tomadas para equipamentos'
      ],
      solutions: [
        'Iluminação LED eficiente',
        'Infraestrutura para ar condicionado',
        'Distribuição otimizada de pontos'
      ],
      results: [
        'Ambiente comercial atrativo',
        'Conforto térmico',
        'Eficiência energética'
      ],
      tags_extra: ['Elétrico', 'Comercial', 'Predial', 'Revit'],
      images: [
        {
          src: '/assets/imagens/render-loja-joao.pdf',
          alt: 'Loja João Wallig',
          caption: 'Vista da loja'
        }
      ],
             documents: [],
      metrics: {
        area: 150,
        team: 1
      }
    },

         'loja-avenida': {
       id: 'loja-avenida',
       title: 'Loja AF',
       subtitle: 'Projeto Elétrico Comercial',
       category: 'comercial',
       subcategory: 'eletrico',
       client: 'Construtora',
       location: 'Porto Alegre',
       year: 2023,
       description: 'Projeto elétrico para loja comercial',
       coverImage: '/assets/imagens/render- av f.png',
       details: {
         area: '200 m²',
         pavimentos: 1,
         ferramentas: ['Revit'],
         normas: ['NBR 5410:2004']
       },
       challenges: [
         'Layout comercial complexo',
         'Sistema de climatização',
         'Iluminação de destaque'
       ],
       solutions: [
         'Projeto elétrico detalhado',
         'Infraestrutura para ar condicionado',
         'Iluminação comercial eficiente'
       ],
       results: [
         'Ambiente comercial funcional',
         'Conforto térmico',
         'Eficiência energética'
       ],
       tags_extra: ['Elétrico', 'Comercial', 'Predial', 'Revit'],
       images: [
         {
           src: '/assets/imagens/render-loja-avenida.pdf',
           alt: 'Loja Avenida do Forte',
           caption: 'Vista da loja'
         }
       ],
              documents: [],
       metrics: {
         area: 200,
         team: 1
       }
     },

           'lojas-remiao': {
        id: 'lojas-remiao',
        title: 'LR',
        subtitle: 'Projeto Elétrico Comercial',
        category: 'comercial',
        subcategory: 'eletrico',
        client: 'Lojas Remião',
        location: 'Porto Alegre',
        year: 2024,
        description: 'Projeto elétrico para loja comercial com mezanino e duas unidades',
        coverImage: '/assets/imagens/render LR.png',
        details: {
          area: '400 m²',
          pavimentos: 2,
          ferramentas: ['Revit'],
          normas: ['NBR 5410:2004', 'NBR 13570:1996']
        },
        challenges: [
          'Duas unidades consumidoras independentes',
          'Mezanino com infraestrutura complexa',
          'Compatibilização BIM completa'
        ],
        solutions: [
          'Quadros de distribuição individualizados',
          'Modelagem 3D em Revit',
          'Integração com projetos hidrossanitário e estrutural'
        ],
        results: [
          'Projeto executivo completo',
          'Compatibilização sem conflitos',
          'Infraestrutura flexível para expansões'
        ],
        tags_extra: ['Elétrico', 'Comercial', 'Predial', 'Revit', 'BIM'],
        images: [
          {
            src: '/assets/imagens/render LR.png',
            alt: 'Render das Lojas Remião',
            caption: 'Vista geral do projeto'
          }
        ],
        documents: [],
        metrics: {
          area: 400,
          team: 2
        }
      },

             'marista': {
         id: 'marista',
         title: 'MA',
         subtitle: 'Projeto Elétrico Institucional',
         category: 'institucional',
         subcategory: 'eletrico',
         client: 'Arquiteto',
         location: 'Porto Alegre',
         year: 2023,
         description: 'Reforma elétrica institucional para sala de aula e banheiros',
         coverImage: '/assets/imagens/RENDER MA.png',
         details: {
           area: '300 m²',
           pavimentos: 3,
           ferramentas: ['Revit'],
           normas: ['NBR 5410:2004', 'NBR 13570:1996']
         },
         challenges: [
           'Reforma em edificação existente',
           'Infraestrutura para comunicação audiovisual',
           'Compatibilização com arquitetura existente'
         ],
         solutions: [
           'Eletrocalhas tipo perfilado acima do forro',
           'Integração com sistema HDMI e multimídia',
           'Redistribuição de pontos elétricos'
         ],
         results: [
           'Modernização da sala de aula',
           'Infraestrutura robusta para uso educacional',
           'Execução sem problemas'
         ],
         tags_extra: ['Elétrico', 'Institucional', 'Reforma', 'Revit'],
         images: [
           {
             src: '/assets/imagens/RENDER MA.png',
             alt: 'Render do projeto Marista',
             caption: 'Vista geral do projeto'
           }
         ],
         documents: [],
         metrics: {
           area: 300,
           team: 2
         }
       },

               'rodrigo-empresa': {
          id: 'rodrigo-empresa',
          title: 'RE',
          subtitle: 'Projeto Elétrico e Hidrossanitário Comercial',
          category: 'predial',
          subcategory: 'eletrico-hidrossanitario',
          client: 'Empresa de Internet',
          location: 'Alvorada/RS',
          year: 2024,
          description: 'Edifício comercial para empresa de provedores de internet - 3 pavimentos mais cobertura',
          coverImage: '/assets/imagens/rodrigo-empresa_rodrigo-empresa.png',
         details: {
           area: '500 m²',
           pavimentos: 3,
           ferramentas: ['Revit', 'AutoCAD', 'Dialux'],
           normas: ['NBR 5410:2004', 'NBR 5626', 'NBR 5419', 'TIA/EIA']
         },
         challenges: [
           'Infraestrutura de comunicação para empresa de internet',
           'Áreas técnicas para equipamentos de rede',
           'Cozinha corporativa integrada',
           'Sistema de Proteção contra Descargas Atmosféricas (SPDA)'
         ],
         solutions: [
           'Projeto elétrico e hidrossanitário completos',
           'Modelagem 3D integral em Revit',
           'Infraestrutura para redes de comunicação',
           'Compatibilização de todas as disciplinas'
         ],
         results: [
           'Projeto executivo completo',
           'Compatibilização sem conflitos',
           'Infraestrutura robusta para empresa de tecnologia'
         ],
         tags_extra: ['Elétrico', 'Hidrossanitário', 'Comercial', 'Revit', 'BIM'],
         images: [
           {
             src: '/assets/imagens/rodrigo-empresa_rodrigo-empresa.png',
             alt: 'Render do edifício comercial',
             caption: 'Vista geral do projeto'
           }
         ],
                   documents: [],
         metrics: {
           area: 500,
           team: 2
         }
       },

               'zotti': {
          id: 'zotti',
          title: 'DZ',
          subtitle: 'Projeto Elétrico Comercial',
          category: 'comercial',
          subcategory: 'eletrico',
          client: 'Arquiteto',
          location: 'Porto Alegre',
          year: 2023,
          description: 'Loja comercial com duas unidades consumidoras - térreo e mezanino',
          coverImage: '/assets/imagens/render dz.png',
          details: {
            area: '250 m²',
            pavimentos: 2,
            ferramentas: ['Revit'],
            normas: ['NBR 5410:2004', 'NBR 13570:1996']
          },
          challenges: [
            'Duas unidades consumidoras independentes',
            'Infraestrutura mista (aparente e embutida)',
            'Compatibilização com projetos hidrossanitário e estrutural'
          ],
          solutions: [
            'Quadros de distribuição individualizados',
            'Eletrocalhas tipo perfilado para infraestrutura aparente',
            'Modelagem 3D completa no Revit'
          ],
          results: [
            'Projeto executivo completo',
            'Flexibilidade para divisão de espaços',
            'Infraestrutura robusta e organizada'
          ],
          tags_extra: ['Elétrico', 'Comercial', 'Revit', 'BIM'],
          images: [
            {
              src: '/assets/imagens/render dz.png',
              alt: 'Render da loja Zotti',
              caption: 'Vista geral do projeto'
            }
          ],
          documents: [],
          metrics: {
            area: 250,
            team: 1
          }
        },

        'predio-comercio': {
          id: 'predio-comercio',
          title: 'PC',
          subtitle: 'Projeto Elétrico e Hidrossanitário Comercial',
          category: 'predial',
          subcategory: 'eletrico-hidrossanitario',
          client: 'Construtora',
          location: 'Alvorada',
          year: 2024,
          description: 'Edificação multifamiliar com comércio — 4 andares / 13 apartamentos / entrada CE Equatorial',
          coverImage: '/assets/imagens/render predio comercio.png',
          details: {
            area: '400 m²',
            pavimentos: 4,
            ferramentas: ['AutoCAD'],
            normas: ['NBR 5410:2004', 'NBR 5626', 'NBR 5419:2015', 'NBR 8160:1999']
          },
          challenges: [
            'Projeto elétrico e hidrossanitário integrados',
            'Compatibilização BIM completa',
            'Infraestrutura para uso comercial'
          ],
          solutions: [
            'Modelagem 3D em Revit',
            'Projetos elétrico e hidrossanitário completos',
            'Compatibilização de todas as disciplinas'
          ],
          results: [
            'Projeto executivo completo',
            'Compatibilização sem conflitos',
            'Infraestrutura robusta para uso comercial'
          ],
          tags_extra: ['Elétrico', 'Hidrossanitário', 'Comercial', 'Revit', 'BIM'],
          images: [
            {
              src: '/assets/imagens/render predio comercio.png',
              alt: 'Render do edifício comercial',
              caption: 'Vista geral do projeto'
            }
          ],
          documents: [],
          metrics: {
            area: 400,
            team: 2
          }
        },

         'casa-gp': {
       id: 'casa-gp',
       title: 'Casa GP',
       subtitle: 'Projeto Elétrico Residencial',
       category: 'residencial',
       subcategory: 'eletrico',
       client: 'Arquiteto',
       location: 'Porto Alegre',
       year: 2023,
       description: 'Residência unifamiliar — 3 pavimentos / 280 m² — com rooftop e espera fotovoltaica',
       coverImage: '/assets/imagens/rendergp.png',
       details: {
         area: '280 m²',
         pavimentos: 3,
         ferramentas: ['AutoCAD'],
         normas: ['NBR 5410:2004', 'NBR 13570:1996', 'NBR 14565:2000']
       },
       challenges: [
         'Rooftop com cobertura funcional',
         'Espera técnica para instalação de inversor solar',
         'Sistemas dedicados de energia, comunicação e climatização'
       ],
       solutions: [
         'Quadros elétricos divididos por pavimento e função',
         'Infraestrutura de comunicação com eletrocalhas independentes',
         'Duto de reserva e espaço para inversor no terceiro pavimento'
       ],
       results: [
         'Projeto executivo para facilidade de implantação',
         'Compatibilidade com futuras expansões',
         'Sistema fotovoltaico preparado'
       ],
       tags_extra: ['Elétrico', 'Residencial', 'AutoCAD', 'Fotovoltaico'],
       images: [
         {
           src: '/assets/imagens/rendergp.png',
           alt: 'Render da Casa GP',
           caption: 'Vista geral do projeto'
         }
       ],
       documents: [],
       metrics: {
         area: 280,
         team: 1
       }
     },

         'casa-cd': {
       id: 'casa-cd',
       title: 'Casa CD',
       subtitle: 'Projeto Elétrico Residencial',
       category: 'residencial',
       subcategory: 'eletrico',
       client: 'SEFERIN CD',
       location: 'Gravataí',
       year: 2022,
       description: 'Residência de alto padrão — 2 pavimentos / entrada de energia detalhada',
       coverImage: '/assets/imagens/render cd.png',
       details: {
         area: '200 m²',
         pavimentos: 2,
         ferramentas: ['AutoCAD'],
         normas: ['NBR 5410:2004', 'NBR 13570:1996']
       },
       challenges: [
         'Dimensionamentos executivos',
         'Documentação para aprovação junto à concessionária',
         'Entrada de energia detalhada'
       ],
       solutions: [
         'Projeto completo da entrada padrão com eletrodutos',
         'Balanceamento de circuitos por ambiente e função',
         'Dimensionamento elétrico completo'
       ],
       results: [
         'Projeto aprovado pela concessionária',
         'Execução em campo sem problemas',
         'Eficiência energética otimizada'
       ],
       tags_extra: ['Elétrico', 'Residencial', 'AutoCAD'],
       images: [
         {
           src: '/assets/imagens/render cd.png',
           alt: 'Render da Casa CD',
           caption: 'Vista geral do projeto'
         }
       ],
       documents: [],
       metrics: {
         area: 200,
         team: 1
       }
     },

           'casa-gt': {
         id: 'casa-gt',
         title: 'Casa GT',
         subtitle: 'Projeto Elétrico Residencial',
         category: 'residencial',
         subcategory: 'eletrico',
         client: 'Arquiteto',
         location: 'Porto Alegre',
         year: 2022,
         description: 'Residência unifamiliar — projeto elétrico completo com espera para energia solar',
         coverImage: '/assets/imagens/render gt.png',
         details: {
           area: '290 m²',
           pavimentos: 2,
           ferramentas: ['AutoCAD 2023'],
           normas: ['NBR 5410:2004', 'NBR 13570:1996']
         },
         challenges: [
           'Flexibilidade para o futuro',
           'Detalhamento técnico para execução direta em obra',
           'Espera para painéis solares com inversor'
         ],
         solutions: [
           'Entrada de energia executiva com detalhamento',
           'Quadros de cargas organizados por pavimento e função',
           'Reserva física e elétrica para futura instalação de sistema solar'
         ],
         results: [
           'Projeto flexível para expansões futuras',
           'Execução direta em obra',
           'Sistema fotovoltaico preparado'
         ],
         tags_extra: ['Elétrico', 'Residencial', 'AutoCAD', 'Fotovoltaico'],
         images: [
           {
             src: '/assets/imagens/render gt.png',
             alt: 'Render da Casa GT',
             caption: 'Vista geral do projeto'
           }
         ],
         documents: [],
         metrics: {
           area: 290,
           team: 1
         }
       },

    'reforma-adriene': {
      id: 'reforma-adriene',
      title: 'Reforma Casa',
      subtitle: 'Projeto Elétrico Residencial',
      category: 'residencial',
      subcategory: 'eletrico',
      client: 'Arquiteto',
      location: 'Porto Alegre, RS',
      year: 2024,
      description: 'Reforma elétrica completa de residência térrea — atualização total da infraestrutura elétrica',
      coverImage: '/assets/imagens/1_photo-1_adriene.jpg',
      details: {
        area: '180 m²',
        pavimentos: 2,
        ferramentas: ['AutoCAD', 'Sketchup'],
        normas: ['NBR 5410:2004', 'NBR 14565']
      },
      challenges: [
        'Integração com projeto de interiores',
        'Readequação de quadro de distribuição',
        'Redefinição de iluminação',
        'Infraestrutura para comunicação'
      ],
      solutions: [
        'Novo quadro de distribuição completo',
        'Iluminação baseada no projeto de interiores',
        'Circuitos independentes para eletrodomésticos',
        'Projeto de comunicação integrado'
      ],
      results: [
        'Projeto integrado com interiores',
        'Funcionalidade e segurança garantidas',
        'Flexibilidade para futuras expansões',
        'Execução sem problemas'
      ],
      tags_extra: ['Elétrico', 'Residencial', 'AutoCAD', 'Reforma'],
      images: [
        {
          src: '/assets/imagens/1_photo-1_adriene.jpg',
          alt: 'Fachada renderizada',
          caption: 'Fachada principal'
        }
      ],
      documents: [],
      metrics: {
        area: 180,
        team: 1
      }
    },

    'projeto-alexandre': {
      id: 'projeto-alexandre',
      title: 'AL',
      subtitle: 'Projeto Elétrico e Hidrossanitário Residencial',
      category: 'residencial',
      subcategory: 'eletrico-hidrossanitario',
      client: 'Arquiteto',
      location: 'Condomínio fechado – RS',
      year: 2019,
      description: 'Projeto completo para residência unifamiliar de alto padrão com 3 pavimentos',
      coverImage: '/assets/imagens/render_photo-2_alexandre.jpg',
      details: {
        area: '360 m²',
        pavimentos: 3,
        ferramentas: ['AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 5626', 'NBR 8160:1999']
      },
      challenges: [
        'Projeto elétrico completo',
        'Sistema hidrossanitário integrado',
        'Eficiência energética',
        'Sustentabilidade'
      ],
      solutions: [
        'Instalações elétricas otimizadas',
        'Sistema de água fria e quente',
        'Iluminação eficiente',
        'Infraestrutura sustentável'
      ],
      results: [
        'Projeto completo e integrado',
        'Eficiência energética',
        'Sustentabilidade garantida',
        'Execução sem problemas'
      ],
      tags_extra: ['Elétrico', 'Hidrossanitário', 'Residencial', 'AutoCAD', 'Revit'],
      images: [
        {
          src: '/assets/imagens/render_photo-2_alexandre.jpg',
          alt: 'Vista da residência',
          caption: 'Fachada principal'
        }
      ],
      documents: [],
      metrics: {
        area: 360,
        team: 1
      }
    },

    'projeto-nairo': {
      id: 'projeto-nairo',
      title: 'NF',
      subtitle: 'Projeto Elétrico e Hidrossanitário Residencial',
      category: 'residencial',
      subcategory: 'eletrico-hidrossanitario',
      client: 'Arquiteto',
      location: 'Condomínio fechado – RS',
      year: 2018,
      description: 'Projeto completo para residência de luxo com 2 pavimentos + subsolo, piscina e garagem subterrânea',
      coverImage: '/assets/imagens/foto_photo-1_nairo.jpg',
      details: {
        area: '300 m²',
        pavimentos: 3,
        ferramentas: ['AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 5626', 'NBR 8160:1999']
      },
      challenges: [
        'Projeto elétrico completo',
        'Iluminação eficiente',
        'Infraestrutura para automação',
        'Segurança elétrica'
      ],
      solutions: [
        'Instalações elétricas otimizadas',
        'Iluminação LED eficiente',
        'Infraestrutura para automação',
        'Quadro de distribuição seguro'
      ],
      results: [
        'Projeto completo e seguro',
        'Eficiência energética',
        'Flexibilidade para automação',
        'Execução sem problemas'
      ],
      tags_extra: ['Elétrico', 'Residencial', 'AutoCAD'],
      images: [
        {
          src: '/assets/imagens/foto_photo-1_nairo.jpg',
          alt: 'Vista da residência',
          caption: 'Fachada principal'
        }
      ],
      documents: [],
      metrics: {
        area: 300,
        team: 1
      }
    },

    'projeto-lep': {
      id: 'projeto-lep',
      title: 'Projeto LEP',
      subtitle: 'Projeto Elétrico e Hidrossanitário Residencial',
      category: 'residencial',
      subcategory: 'eletrico-hidrossanitario',
      client: 'LUIZ EDUARDO E PREICILA',
      location: 'Condomínio fechado – RS',
      year: 2020,
      description: 'Projeto completo de instalações elétricas e hidrossanitárias para residência de alto padrão',
      coverImage: '/assets/imagens/01-personalizado_lep.jpg',
      details: {
        area: '300 m²',
        pavimentos: 3,
        ferramentas: ['AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 5626:2020', 'NBR 8160:1999']
      },
      challenges: [
        'Projeto elétrico completo',
        'Iluminação eficiente',
        'Infraestrutura para automação',
        'Segurança elétrica'
      ],
      solutions: [
        'Instalações elétricas otimizadas',
        'Iluminação LED eficiente',
        'Infraestrutura para automação',
        'Quadro de distribuição seguro'
      ],
      results: [
        'Projeto completo e seguro',
        'Eficiência energética',
        'Flexibilidade para automação',
        'Execução sem problemas'
      ],
      tags_extra: ['Elétrico', 'Residencial', 'AutoCAD'],
      images: [
        {
          src: '/assets/imagens/01-personalizado_lep.jpg',
          alt: 'Vista da residência',
          caption: 'Fachada principal'
        }
      ],
      documents: [],
      metrics: {
        area: 300,
        team: 1
      }
    },

    'projeto-rafael': {
      id: 'projeto-rafael',
      title: 'RP',
      subtitle: 'Projeto Elétrico e Hidrossanitário Residencial',
      category: 'residencial',
      subcategory: 'eletrico-hidrossanitario',
      client: 'Arquiteto',
      location: 'São Leopoldo – RS',
      year: 2020,
      description: 'Projeto completo para residência unifamiliar com sistema séptico individual',
      coverImage: '/assets/imagens/render_rafael.jpg',
      details: {
        area: '200 m²',
        pavimentos: 2,
        ferramentas: ['AutoCAD'],
        normas: ['NBR 5410:2004', 'NBR 5626', 'NBR 8160:1999', 'NBR 7229:1993', 'NBR 13969:1997']
      },
      challenges: [
        'Projeto elétrico completo',
        'Sistema hidrossanitário integrado',
        'Eficiência energética',
        'Sustentabilidade'
      ],
      solutions: [
        'Instalações elétricas otimizadas',
        'Sistema de água fria e quente',
        'Iluminação eficiente',
        'Infraestrutura sustentável'
      ],
      results: [
        'Projeto completo e integrado',
        'Eficiência energética',
        'Sustentabilidade garantida',
        'Execução sem problemas'
      ],
      tags_extra: ['Elétrico', 'Hidrossanitário', 'Residencial', 'AutoCAD', 'Revit'],
      images: [
        {
          src: '/assets/imagens/render_rafael.jpg',
          alt: 'Vista da residência',
          caption: 'Fachada principal'
        }
      ],
      documents: [],
      metrics: {
        area: 200,
        team: 1
      }
    }
  },

  // Métricas gerais
  metrics: {
    totalProjects: 15,
    totalArea: 6280,
    categories: {
      predial: 4,
      residencial: 10,
      comercial: 1
    },
    services: {
      eletrico: 15,
      hidrossanitario: 8
    }
  },

  // Clientes
  clients: [
    'BARÃO DE UBA',
    'CASA SITIO',
    'DOM PEDRITO',
    'SICREDI',
    'LOJA JOAO WALLIG',
    'LOJA AVENIDA DO FORTE',
    'SEFERIN GP',
    'SEFERIN CD',
    'SEFERIN GT',
    'ADRIENE',
    'ALEXANDRE',
    'NAIRO',
    'LUIZ EDUARDO E PREICILA',
    'RAFAEL SPICKER'
  ],

  // Tecnologias utilizadas
  technologies: [
    'Revit',
    'AutoCAD',
    'NBR 5410:2004',
    'NBR 14039:2005',
    'NBR 13570:1996',
    'NBR 8160:1999',
    'NBR 13534:1995'
  ]
}; 

