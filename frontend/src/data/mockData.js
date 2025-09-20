// Mock data for the Reaply application

export const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Gerente de RH",
    company: "TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b97c",
    content: "A Reaply revolucionou como nossos funcionários veem os benefícios. Agora eles realmente aproveitam cada centavo!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    role: "CFO",
    company: "InnovaCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    content: "Implementamos a Reaply há 6 meses e já vemos 40% de aumento na satisfação com benefícios. ROI incrível!",
    rating: 5
  },
  {
    id: 3,
    name: "Mariana Santos",
    role: "Funcionária",
    company: "StartupXYZ",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    content: "Meu saldo de VR estava parado. Com a Reaply, já rendi R$ 200 em 3 meses investindo o que sobrava!",
    rating: 5
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    description: "Perfeito para pequenas empresas",
    price: "Grátis",
    period: "até 50 funcionários",
    features: [
      "Saldo flexível básico",
      "Cashback de 2%",
      "Dashboard simples",
      "Suporte por email",
      "Relatórios básicos"
    ],
    highlighted: false,
    buttonText: "Começar Grátis"
  },
  {
    id: 2,
    name: "Professional",
    description: "Para empresas em crescimento",
    price: "R$ 12",
    period: "por funcionário/mês",
    features: [
      "Tudo do Starter",
      "Cashback de 5%",
      "Investimentos inteligentes",
      "Dashboard avançado",
      "Suporte prioritário",
      "Relatórios detalhados",
      "API completa"
    ],
    highlighted: true,
    buttonText: "Teste 30 Dias Grátis"
  },
  {
    id: 3,
    name: "Enterprise",
    description: "Para grandes corporações",
    price: "Personalizado",
    period: "consulte-nos",
    features: [
      "Tudo do Professional",
      "Cashback personalizado",
      "Consultoria especializada",
      "Integração customizada",
      "Suporte 24/7",
      "Gerente de conta dedicado",
      "SLA garantido"
    ],
    highlighted: false,
    buttonText: "Falar com Vendas"
  }
];

export const howItWorksSteps = [
  {
    id: 1,
    title: "Cadastre sua empresa",
    description: "Configure os benefícios da sua empresa em minutos. Nossa plataforma se integra facilmente ao seu sistema atual.",
    icon: "Building"
  },
  {
    id: 2,
    title: "Funcionários se conectam",
    description: "Colaboradores baixam o app e conectam seus cartões de benefícios existentes de forma segura.",
    icon: "Users"
  },
  {
    id: 3,
    title: "Usam normalmente",
    description: "Continuam usando benefícios normalmente - alimentação, transporte, saúde. Nada muda na rotina.",
    icon: "CreditCard"
  },
  {
    id: 4,
    title: "Saldo trabalha",
    description: "Saldos não utilizados são automaticamente investidos ou ficam disponíveis para cashback e outros usos.",
    icon: "TrendingUp"
  }
];

export const features = [
  {
    id: 1,
    title: "Saldo Flexível",
    description: "Use seu saldo de benefícios para alimentação, transporte, investimentos ou cashback. Total flexibilidade na palma da sua mão.",
    icon: "Zap",
    color: "emerald"
  },
  {
    id: 2,
    title: "Investimentos Inteligentes",
    description: "Saldos não utilizados são automaticamente investidos em produtos financeiros seguros com rentabilidade acima da poupança.",
    icon: "TrendingUp",
    color: "blue"
  },
  {
    id: 3,
    title: "Cashback Garantido",
    description: "Ganhe cashback em todas as compras realizadas através da plataforma. Quanto mais usa, mais economiza.",
    icon: "Gift",
    color: "purple"
  },
  {
    id: 4,
    title: "Dashboard Didático",
    description: "Acompanhe em tempo real seus ganhos, investimentos e uso dos benefícios com relatórios visuais e intuitivos.",
    icon: "BarChart3",
    color: "orange"
  },
  {
    id: 5,
    title: "Segurança Total",
    description: "Seus dados e recursos são protegidos com criptografia de nível bancário e compliance com LGPD.",
    icon: "Shield",
    color: "red"
  },
  {
    id: 6,
    title: "Experiência Gamificada",
    description: "Conquiste badges, participe de desafios e compete com colegas para maximizar seus benefícios.",
    icon: "Trophy",
    color: "yellow"
  }
];

export const stats = [
  {
    id: 1,
    value: "12%",
    label: "Rendimento médio anual",
    description: "Acima da inflação"
  },
  {
    id: 2,
    value: "500+",
    label: "Empresas parceiras",
    description: "E crescendo"
  },
  {
    id: 3,
    value: "50mil+",
    label: "Usuários ativos",
    description: "Economizando juntos"
  },
  {
    id: 4,
    value: "R$ 2M+",
    label: "Economizado pelos usuários",
    description: "Nos últimos 12 meses"
  }
];