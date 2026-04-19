// =============================================
// PORTFOLIO DATA — BILINGUAL (IT / EN)
// =============================================
// To add a new project:
// 1. Copy an existing block below
// 2. Paste it at the end of the `projects` array
// 3. Fill in all fields (both `it` and `en` translations)
// That's it — the site regenerates automatically.
// =============================================

export type Locale = "it" | "en";

export type ProjectContent = {
  title: string;
  tagline: string;
  description: string;
  client?: string;
};

export type Project = {
  id: string;
  type: "startup" | "freelance";
  it: ProjectContent;
  en: ProjectContent;
  emoji?: string;
  logo?: string; // path relative to /public, e.g. "/assets/gnam-logo.png"
  url?: string;
  featured?: boolean;
  status: "active" | "completed" | "wip";
};

/** Returns the project with content in the correct locale */
export function localizeProject(project: Project, locale: Locale): Project & ProjectContent {
  const content = locale === "en" ? project.en : project.it;
  return { ...project, ...content };
}

export const projects: Project[] = [
  // ======== STARTUPS ========
  {
    id: "gnam",
    type: "startup",
    logo: "/assets/gnam-logo.png",
    url: "https://gnam.app",
    featured: true,
    status: "active",
    it: {
      title: "GNAM!",
      tagline: "La cucina intelligente",
      description:
        "GNAM! è la mia startup principale. Un'app che trasforma la gestione della cucina grazie all'intelligenza artificiale: pianificazione dei pasti, lista della spesa smart e gestione dell'inventario in tempo reale.",
    },
    en: {
      title: "GNAM!",
      tagline: "The intelligent kitchen",
      description:
        "GNAM! is my main startup. An app that transforms kitchen management through artificial intelligence: meal planning, smart shopping lists and real-time inventory management.",
    },
  },

  // ======== FREELANCE ========
  // Copy this block to add a new freelance project ↓
  {
    id: "automazione-ecommerce",
    type: "freelance",
    emoji: "⚡",
    featured: true,
    status: "completed",
    it: {
      title: "Automazione E-commerce",
      tagline: "Workflow automatizzato per gestione ordini",
      description:
        "Sviluppo di un sistema di automazione completo: integrazione tra CRM, magazzino e sistemi di spedizione con notifiche automatiche e dashboard analitica.",
      client: "Cliente privato (e-commerce)",
    },
    en: {
      title: "E-commerce Automation",
      tagline: "Automated workflow for order management",
      description:
        "Development of a complete automation system: integration between CRM, warehouse and shipping systems with automatic notifications and an analytics dashboard.",
      client: "Private client (e-commerce)",
    },
  },
  {
    id: "lead-generation",
    type: "freelance",
    emoji: "🎯",
    featured: false,
    status: "completed",
    it: {
      title: "Lead Generation Pipeline",
      tagline: "Sistema automatizzato di acquisizione clienti",
      description:
        "Funnel automatizzato per la generazione e qualifica di lead: scraping etico, pulizia dati, arricchimento con AI e inserimento automatico nel CRM.",
      client: "Cliente privato (consulenza)",
    },
    en: {
      title: "Lead Generation Pipeline",
      tagline: "Automated client acquisition system",
      description:
        "Automated funnel for lead generation and qualification: ethical scraping, data cleaning, AI enrichment and automatic CRM insertion.",
      client: "Private client (consulting)",
    },
  },
];

// =============================================
// LINKS DATA
// =============================================

export type LinkItem = {
  label: string;
  url: string;
  description?: string;
  description_en?: string;
  icon?: string;
};

export const links: {
  contacts: LinkItem[];
  socials: LinkItem[];
  certificates: LinkItem[];
} = {
  contacts: [
    {
      label: "Email",
      url: "mailto:cavallini.lorenzo@icloud.com",
      description: "Scrivimi per collaborazioni o freelance",
      description_en: "Write me for collaborations or freelance",
      icon: "mail",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/lorenzo-cavallini",
      description: "Il mio profilo professionale",
      description_en: "My professional profile",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/lorenzocavallini",
      description: "I miei progetti open source",
      description_en: "My open source projects",
      icon: "github",
    },
    {
      label: "Instagram",
      url: "https://instagram.com/lorenzocavallini",
      description: "Il mio lato più personale",
      description_en: "My more personal side",
      icon: "instagram",
    },
    {
      label: "TikTok",
      url: "https://tiktok.com/@lorenzocavallini",
      description: "Contenuti sul mondo startup e tech",
      description_en: "Content about the startup and tech world",
      icon: "tiktok",
    },
  ],
  certificates: [
    {
      label: "Cambridge B2 English",
      url: "#",
      description: "Certificazione Cambridge B2 First",
      description_en: "Cambridge B2 First Certificate",
      icon: "award",
    },
  ],
};

// =============================================
// PERSONAL INFO
// =============================================

export const personalInfo = {
  name: "Lorenzo Cavallini",
  age: 21,
  location: "Mantova, Italia",
  university: "UniMoRe — Ingegneria Informatica",
  cvPath: "/assets/cv.pdf",
};
