// Dados da empresa PVP Projects
module.exports = {
  // Informações básicas
  name: 'PVP Projects',
  fullName: 'PVP Projects - Engenharia de Qualidade',
  tagline: 'Soluções integradas que unem técnica, segurança e design',
  
  // Informações de contato
  contact: {
    email: 'pedrovitor.pagliarin@hotmail.com',
    phone: '(+55 54) 99159-0379',
    address: 'Porto Alegre, RS, Brasil',
    whatsapp: 'https://wa.me/5554991590379'
  },
  
  // Sobre a empresa
  about: {
    description: 'Soluções técnicas lideradas por um Engenheiro Eletricista com experiência em projetos de alta qualidade – unindo segurança e design para encantar arquitetos e clientes.',
    history: 'Fundada pelo Eng. Pedro Vitor Pagliarin, a PVP Projects nasceu da paixão pela engenharia de qualidade. Com 8 anos de experiência sólida, desenvolvemos projetos que unem técnica avançada, segurança e design funcional.',
    focus: 'Nosso foco é entregar projetos que não apenas atendem às normas técnicas, mas também otimizam a eficiência energética e proporcionam conforto aos usuários.',
    experience: '8 anos de experiência na área de projetos complementares',
    education: 'Engenharia Elétrica – UFRGS',
    title: 'Engenheiro Eletricista CREA-RS',
    mission: 'Transformar ideias em projetos executáveis através da excelência técnica e inovação.',
    vision: 'Ser referência nacional em projetos de engenharia elétrica e hidrossanitária, consolidando nossa base no Rio Grande do Sul.',
    values: [
      'Transparência e Competência Técnica',
      'Colaboração Estratégica',
      'Foco no Cliente',
      'Inovação e Eficiência'
    ]
  },
  
  // Métricas da empresa
  metrics: {
    experience: '8 anos',
    projects: '70+',
    area: '+ de 10 000 m²',
    satisfaction: '100%'
  },
  
  // Serviços oferecidos
  services: [
    {
      id: 'eletricos',
      title: '⚡ Projetos Elétricos',
      description: 'Instalações de baixa tensão residenciais e comerciais (BT) com normas ABNT, documentação executiva e compatibilização BIM.',
      icon: '⚡',
      color: 'primary',
      bgColor: 'accent-50', // Amarelo fraco
      features: [
        'Instalações residenciais e comerciais (setorização por ambiente/uso)',
        'Quadros de distribuição e proteção (QDG/QD, balanceamento de fases, seletividade)',
        'Iluminação e tomadas (TIL/TUG/TE por ambiente e por uso)',
        'Medição individualizada e coletiva (centro de medição / padrão da concessionária)',
        'Diagramas unifilar e multifilar com identificação completa dos circuitos',
        'Proteção de dispositivos: disjuntores, DR (RCD), DPS e coordenação de proteção',
        'Dimensionamento de condutores (corrente admissível, queda de tensão, fatores de agrupamento/temperatura)',
        'Dimensionamento de eletrodutos/eletrocalhas (taxa de ocupação, raio de curvatura, reservas)',
        'Especificação de equipamentos especiais (motores, aquecimentos, climatização e cargas dedicadas)',
        'Quadros elétricos e de comunicação (QEE, QCOM/patch, automação)',
        'Normas ABNT aplicáveis: NBR 5410 (BT) + padrões da concessionária',
        'Aprovação junto a concessionárias (documentação técnica, atendimento a exigências)',
        'Emissão de ART (acompanhando o escopo contratado)',
        'Memoriais, listas de materiais e pranchas executivas',
        'Compatibilização com outras disciplinas (Arquitetura, Hidrossanitário, Comunicação/TI e Estrutural) via Revit/AutoCAD — clash, furos e passagens coordenadas'
      ]
    },
    {
      id: 'hidrossanitarios',
      title: '💧 Projetos Hidrossanitários',
      description: 'Água fria/quente, esgoto sanitário e pluvial com detalhamento executivo, NBRs atendidas e suporte à aprovação.',
      icon: '💧',
      color: 'secondary',
      bgColor: 'primary-50', // Azul fraco
      features: [
        'Água fria e quente: traçados em planta, isométricos, barriletes e prumadas',
        'Reservação e pressurização (dimensionamento de reservatórios, bombas e válvulas de controle)',
        'Esgoto sanitário (cloacal): coletores, ventilação, caixas de inspeção e caixa de gordura quando aplicável',
        'Águas pluviais: captação, condutores horizontais/verticais, dispositivos de retenção/absorção',
        'Soluções sépticas (quando não há rede pública): fossa + filtro anaeróbico (NBR 13969/7229)',
        'Materiais e diâmetros: critérios de velocidade/ruído, perdas de carga e setorização por uso',
        'Detalhamento executivo: plantas, cortes, isométricos, memoriais e quantitativos para compras',
        'Aprovação junto a concessionárias/órgãos (ex.: DMAE/SEMAE), quando requerido',
        'Normas ABNT aplicáveis: NBR 5626 (água), NBR 8160 (esgoto), NBR 13969/7229 (tanque séptico)',
        'Compatibilização com Arquitetura, Elétrica e Estrutural (coordenação CAD ↔ Revit)'
      ]
    },
    {
      id: 'comunicacao',
      title: '📡 Projetos de Comunicação (Dados/Telefonia/TV)',
      description: 'Cabeamento estruturado e infraestrutura completa (dados, voz, TV) com documentação clara e crescimento planejado.',
      icon: '📡',
      color: 'accent',
      bgColor: 'success-50', // Verde fraco
      features: [
        'Planta de pontos (dados/voz/TV) e traçado de dutos/eletrocalhas',
        'Cabeamento Cat6/Cat6A com patch panels, DIO e organização em racks',
        'Fibra óptica para backbone e interligação entre pavimentos/salas técnicas',
        'Telefonia (VoIP) e TV (coletiva/por ambiente) — distribuição e pontos',
        'Topologia, identificação e documentação (as built, mapas de cabos, rotulagem por porta)',
        'Quadros/patch dedicados (QCOM) e infraestrutura para automação',
        'Compatibilização com elétrica e climatização de salas técnicas (energia, espaço, ventilação)',
        'Norma ABNT aplicável: NBR 14565 (infraestrutura de telecomunicações)'
      ]
    },
    {
      id: 'consultoria-bim',
      title: '🧭 Consultoria em Engenharia / BIM',
      description: 'Compatibilização, modelagem e auditoria técnica para reduzir retrabalho, acelerar aprovações e dar previsibilidade.',
      icon: '🧭',
      color: 'success',
      bgColor: 'secondary-50', // Cinza fraco
      features: [
        'Compatibilização BIM (Revit) entre Arquitetura, Elétrica, Hidrossanitário e Estrutural',
        'Detecção e resolução de conflitos (clash detection) antes da execução',
        'Modelagem 3D paramétrica para visualização e coordenação de projetos',
        'Auditoria técnica de projetos e especificações',
        'Otimização de processos construtivos e redução de retrabalho',
        'Treinamento e capacitação de equipes em BIM',
        'Consultoria em normas técnicas e regulamentações',
        'Suporte à aprovação junto a órgãos e concessionárias',
        'Desenvolvimento de padrões e templates para projetos',
        'Gestão de informações técnicas e documentação executiva'
      ]
    }
  ],
  
  // Ferramentas técnicas
  tools: [
    'Revit - Modelagem BIM',
    'AutoCAD - Detalhamento',
    'NBR - Normas Técnicas',
    'CEEE Equatorial - Concessionária',
    'DMAE/SEMAE - Água'
  ],
  
  // Certificações e credenciais
  certifications: [
    'Engenheiro Eletricista - UFRGS',
    'CREA/RS Ativo',
    'Especialização em Projetos Elétricos',
    'Certificação Revit Architecture'
  ],
  
  // Redes sociais
  social: {
    linkedin: 'https://linkedin.com/in/pedro-vitor-pagliarin',
    whatsapp: 'https://wa.me/5554991590379',
    email: 'mailto:pedrovitor.pagliarin@hotmail.com'
  }
}; 