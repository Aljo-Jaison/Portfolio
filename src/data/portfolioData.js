export const personalInfo = {
  name: "Aljo K J",
  role: "UI/UX & Product Designer",
  status: "Available for new projects",
  location: "India / Remote",
  bio: "Product Designer owning end-to-end product design across research, interaction, visual design, and developer handoff. Designing AI-powered SaaS and modern digital products with scalable design systems.",
  email: "aljojaisonk1@gmail.com",
  phone: "+918590055019",
  socials: {
    linkedin: "https://www.linkedin.com/in/aljo-kj/",
    behance: "https://www.behance.net/aljojaison",
    github: "https://github.com/Aljo-Jaison",
    pinterest: "https://in.pinterest.com/Aljo_Jaison/",
    calendly: "https://calendly.com/aljojaisonk1/aljo-jaison-meeting",
  },
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Products Shipped", value: "10+" },
    { label: "Client Satisfaction", value: "99%" },
    { label: "Avg. Conversion Lift", value: "+44%" },
  ]
};

export const projects = [
  {
    id: "pulse-saas",
    title: "PulseFlow AI",
    category: "B2B SaaS Platform",
    tagline: "Enterprise workflow automation for data teams",
    description: "Led end-to-end product design from zero to launch. Redesigned multi-tenant permissions, automated trigger builders, and consolidated 14 disjointed workflows into a single drag-and-drop canvas.",
    metrics: [
      { label: "Activation Rate", value: "+54%" },
      { label: "Weekly Retention", value: "+38%" }
    ],
    tags: ["Figma", "Design System", "Complex UX", "SaaS"],
    liveUrl: "https://example.com/pulseflow",
    color: "#6366F1",
    bgColor: "bg-indigo-50/50",
    mockupType: "dashboard",
    highlights: [
      "Engineered an 80+ component accessible design system in Figma",
      "Cut new user onboarding friction from 14 minutes down to 3.8 minutes",
      "Conducted 24 moderated user interviews with DevOps leads"
    ]
  },
  {
    id: "strata-fintech",
    title: "Strata Pay",
    category: "Fintech & Mobile App",
    tagline: "Cross-border treasury & instant payments for creators",
    description: "Designed an iOS and Web application allowing remote agencies and creators to receive multi-currency payouts with zero FX fee surprises.",
    metrics: [
      { label: "Monthly Volume", value: "$12M+" },
      { label: "App Store Rating", value: "4.9 ★" }
    ],
    tags: ["Mobile UX", "iOS / Android", "Fintech", "Micro-interactions"],
    liveUrl: "https://example.com/strata",
    color: "#10B981",
    bgColor: "bg-emerald-50/50",
    mockupType: "mobile",
    highlights: [
      "Streamlined KYC verification flow with 92% first-try pass rate",
      "Interactive fluid haptic animations and gesture-driven card interactions",
      "Seamless light and dark mode native mobile tokens"
    ]
  },
  {
    id: "nordic-commerce",
    title: "Kōhī Artisan",
    category: "E-Commerce & Branding",
    tagline: "Direct-to-consumer artisanal coffee subscription platform",
    description: "Crafted a bespoke e-commerce buying experience featuring interactive flavor profiling, dynamic bundle builders, and a 1-click subscription management portal.",
    metrics: [
      { label: "Checkout Conversion", value: "+46%" },
      { label: "Average Order Value", value: "+32%" }
    ],
    tags: ["E-Commerce", "Conversion Rate Opt", "Web Design", "Framer"],
    liveUrl: "https://example.com/kohi",
    color: "#F59E0B",
    bgColor: "bg-amber-50/50",
    mockupType: "ecommerce",
    highlights: [
      "Tailored quiz algorithm guiding users to their bean taste profile",
      "Shopify headless architecture integration with micro-animations",
      "Reduced cart abandonment by optimizing one-page checkout"
    ]
  },
  {
    id: "aura-design-system",
    title: "Aura Tokens",
    category: "Design System & Tools",
    tagline: "Multi-brand design system powering 6 enterprise applications",
    description: "Built and documented a comprehensive tokenized design system used daily by 45+ designers and engineers. WCAG 2.1 AAA compliant with automated Figma-to-code pipelines.",
    metrics: [
      { label: "Design Debt", value: "-60%" },
      { label: "Feature Velocity", value: "2.4x" }
    ],
    tags: ["Design Systems", "Tokens", "WCAG 2.1", "Developer Handoff"],
    liveUrl: "https://example.com/aura",
    color: "#06B6D4",
    bgColor: "bg-cyan-50/50",
    mockupType: "system",
    highlights: [
      "Comprehensive typography, color, spacing, and elevation token library",
      "120+ interactive Figma components with variable bindings and states",
      "Shared Storybook integration with React code parity"
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover & Deconstruct",
    description: "Deep dive into business goals, user frustrations, and competitive landscape. We define clear KPIs before touching a single pixel.",
    deliverables: ["User Personas", "Journey Maps", "Technical Scope & KPI Sheet"]
  },
  {
    step: "02",
    title: "Information Architecture",
    description: "Mapping intuitive flows, structural navigation, and wireframing key views to validate concepts early without visual distractions.",
    deliverables: ["Interactive Lo-Fi Wireframes", "User Flow Diagrams", "IA Hierarchy"]
  },
  {
    step: "03",
    title: "Design System & High-Fi UI",
    description: "Crafting modern, accessible, and high-conversion interfaces. Building scalable token systems, typography, and cohesive UI elements.",
    deliverables: ["Figma Component Library", "Pixel-Perfect Screens", "Responsive Layouts"]
  },
  {
    step: "04",
    title: "Prototype, Test & Handoff",
    description: "Building clickable interactive prototypes, stress-testing with users, and providing production-ready developer handoff specs.",
    deliverables: ["Interactive Clickable Prototype", "Dev Specs & Assets", "QA Review Support"]
  }
];

export const skillsAndTools = [
  {
    name: "Figma & FigJam",
    level: "Specialist (1+ Yrs)",
    description: "Auto-layout wizardry, advanced component variants, design tokens, and interactive variables.",
    icon: "figma"
  },
  {
    name: "Product Strategy & UX",
    level: "Specialist",
    description: "User research, rapid wireframing, heuristic evaluations, and data-informed product discovery.",
    icon: "strategy"
  },
  {
    name: "Design Systems & Tokens",
    level: "Architect",
    description: "Scalable enterprise component libraries, multi-brand themes, and WCAG accessibility standards.",
    icon: "components"
  },
  {
    name: "Prototyping & Motion",
    level: "Advanced",
    description: "Framer, ProtoPie, and micro-interactions that communicate intent and delight users.",
    icon: "motion"
  },
  {
    name: "Developer Handoff & Code",
    level: "Bridged",
    description: "Understanding React, Tailwind CSS, DOM tree, and Git workflows to ensure pixel-perfect engineering.",
    icon: "code"
  },
  {
    name: "Conversion Optimization",
    level: "Proven Impact",
    description: "A/B testing flows, funnel drop-off diagnosis, checkout streamline, and UX copy alignment.",
    icon: "growth"
  }
];
