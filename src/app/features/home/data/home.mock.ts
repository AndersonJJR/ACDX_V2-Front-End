// src/app/features/home/data/home.mock.ts
import { HomeViewModel } from './home.models';

export const MOCK_HOME_VM: HomeViewModel = {
  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Esta estrutura foi criada apenas para simular conteúdo real da home
  // até a API do back-end disponibilizar os dados oficiais.
  heroTitle: 'Gestão, vendas e inteligência em uma única plataforma',
  heroSubtitle:
    'Centralize produtos, indicadores comerciais, serviços e oportunidades de investimento com uma experiência moderna e preparada para crescer.',

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Logos de parceiros apenas ilustrativos para a home.
  partnerLogos: ['URM Capital', 'Nova Trade', 'Axis Cloud', 'Blue Retail', 'Lumen Tech'],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // KPIs demonstrativos para compor a dobra principal.
  kpis: [
    { label: 'Clientes ativos', value: '1.280+', detail: 'Base operacional em expansão' },
    { label: 'Volume transacionado', value: 'R$ 12,4 mi', detail: 'Últimos 90 dias' },
    { label: 'Tempo médio de resposta', value: '1,8s', detail: 'Serviços monitorados' },
  ],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Destaques criados para ilustrar os diferenciais do projeto.
  highlights: [
    {
      title: 'Operação integrada',
      description: 'Conecte áreas comerciais, serviços e indicadores em uma experiência unificada.',
      tag: 'Eficiência',
    },
    {
      title: 'Leitura de resultados',
      description: 'Acompanhe métricas estratégicas com visão executiva e foco em decisão rápida.',
      tag: 'Analytics',
    },
    {
      title: 'Escalabilidade por módulos',
      description: 'Ative novos blocos do sistema conforme o crescimento do negócio.',
      tag: 'Arquitetura',
    },
  ],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Cartões de produtos simulados para prévia da área de catálogo.
  productCards: [
    {
      title: 'Catálogo corporativo',
      description: 'Organize portfólio, status comercial e categorias estratégicas.',
      link: '/products',
    },
    {
      title: 'Combos e pacotes',
      description: 'Monte ofertas por segmento, região ou sazonalidade.',
      link: '/products',
    },
    {
      title: 'Precificação inteligente',
      description: 'Visualize regras comerciais e margens em um só fluxo.',
      link: '/products',
    },
  ],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Cartões de serviços simulados para prévia operacional.
  serviceCards: [
    {
      title: 'Atendimento e suporte',
      description: 'Acompanhe solicitações, filas e prazos por contrato.',
      link: '/services',
    },
    {
      title: 'Projetos recorrentes',
      description: 'Gerencie entregas, responsáveis e marcos operacionais.',
      link: '/services',
    },
    {
      title: 'Consultoria especializada',
      description: 'Disponibilize ofertas de acompanhamento técnico e estratégico.',
      link: '/services',
    },
  ],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Depoimentos ilustrativos para reforço de credibilidade visual.
  testimonials: [
    {
      name: 'Marina Costa',
      role: 'Gerente Comercial',
      company: 'Nova Trade',
      quote: 'A plataforma trouxe uma visão mais clara da operação e reduziu retrabalho entre vendas e serviços.',
    },
    {
      name: 'Carlos Mendes',
      role: 'Diretor de Operações',
      company: 'Axis Cloud',
      quote: 'Conseguimos sair de planilhas dispersas para uma leitura centralizada e muito mais rápida.',
    },
    {
      name: 'Juliana Rocha',
      role: 'Head Financeira',
      company: 'URM Capital',
      quote: 'A combinação entre dados de negócio e visão estratégica melhorou nossa tomada de decisão.',
    },
  ],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // Perguntas frequentes simuladas até integração com CMS ou API.
  faqs: [
    {
      question: 'A plataforma é modular?',
      answer: 'Sim. O projeto foi pensado para habilitar novos blocos como produtos, vendas, investimentos e serviços sem reestruturar toda a base.',
    },
    {
      question: 'É possível integrar com API Spring?',
      answer: 'Sim. A arquitetura já pode consumir APIs REST por feature, mantendo cada domínio isolado.',
    },
    {
      question: 'Os dashboards são em tempo real?',
      answer: 'Isso depende da estratégia do back-end, mas a estrutura front-end já pode ser preparada para atualização periódica.',
    },
  ],

  // DADOS FICTÍCIOS TEMPORÁRIOS:
  // CTA final criado para fechar a narrativa da home.
  ctaTitle: 'Comece com uma base preparada para crescer',
  ctaText: 'Implemente uma home institucional moderna hoje e evolua para módulos completos de negócio amanhã.',
};
