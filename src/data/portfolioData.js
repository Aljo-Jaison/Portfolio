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
    id: "columsprout",
    title: "Columsprout AI",
    category: "SaaS eCommerce",
    tagline: "AI Agents for eCommerce Growth",
    description: "Transforming customer engagement, proactive storefront assistance, and sales conversions for modern online brands with autonomous on-site AI agents.",
    tags: ["AI Agents", "eCommerce Growth", "SaaS Platform", "Storefront UI"],
    liveUrl: "https://columsprout.ai/",
    color: "#4F46E5",
    bgColor: "bg-indigo-50/50",
    mockupType: "saas",
    logoSrc: "/assets/clients/columsprout.png",
  },
  {
    id: "tutoz",
    title: "Tutoz",
    category: "EdTech & AI Learning",
    tagline: "Where Every Doubt Leads to Discovery",
    description: "India’s first AI-powered learning app developed in collaboration with IIT Palakkad. Delivering 24/7 personalized tutoring, adaptive STEM explanations, and interactive doubt resolution.",
    tags: ["EdTech", "AI Learning App", "IIT Palakkad", "STEM Education"],
    liveUrl: "https://tutoz.in/",
    color: "#0284C7",
    bgColor: "bg-sky-50/50",
    mockupType: "mobile",
    logoSrc: "/assets/clients/tutoz.png",
  },
  {
    id: "ceknpy",
    title: "College of Engineering Karunagappally",
    category: "Higher Ed & Institutional Web",
    tagline: "Official Institutional Campus Web Portal",
    description: "Redesigned the official digital campus portal for CEK (IHRD, Govt. of Kerala), centralizing academic departments, admissions, placements, and student resources into an accessible, responsive experience.",
    tags: ["Higher Education", "Institutional Portal", "UI/UX Redesign", "WCAG 2.2 AA"],
    liveUrl: "https://ceknpy.vercel.app/",
    color: "#16A34A",
    bgColor: "bg-emerald-50/50",
    mockupType: "institutional",
    logoSrc: "/assets/clients/ceknpy.png",
  },
  {
    id: "mkskab",
    title: "MK SKAB General Constructions",
    category: "Engineering & Industrial Contracting",
    tagline: "Civil Engineering, Heavy Equipment & Contracting KSA",
    description: "Corporate web presence for a premier industrial contracting group in Saudi Arabia, highlighting heavy machinery rental fleets, infrastructure engineering, and turn-key industrial services.",
    tags: ["Industrial Contracting", "Heavy Equipment Fleet", "Civil Engineering", "Corporate Web"],
    liveUrl: "https://www.mkskab.com/",
    color: "#B45309",
    bgColor: "bg-amber-50/50",
    mockupType: "engineering",
    logoSrc: "/assets/clients/mkskab.png",
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
