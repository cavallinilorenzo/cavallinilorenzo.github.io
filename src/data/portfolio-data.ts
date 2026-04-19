// =============================================
// PORTFOLIO DATA — BILINGUAL (IT / EN)
// =============================================

export type Locale = "it" | "en";

export type Feature = {
  title: string;
  description: string;
};

export type ProjectContent = {
  title: string;
  tagline: string;
  description: string;
  client?: string;
  // Detailed page fields
  fullDescription?: string;
  techStack?: string[];
  keyFeatures?: Feature[];
  safetyAndSafety?: Feature[]; // Specific for technical projects
  results?: string;
  future?: string;
};

export type Project = {
  id: string;
  type: "startup" | "freelance";
  it: ProjectContent;
  en: ProjectContent;
  emoji?: string;
  logo?: string; 
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
      fullDescription: "GNAM! nasce dalla necessità di ottimizzare il tempo in cucina riducendo gli sprechi alimentari. Attraverso algoritmi di visione artificiale e LLM, l'app è in grado di suggerire ricette basate sugli ingredienti in scadenza, generare liste della spesa automatiche e sincronizzare l'inventario tra i membri del nucleo familiare.",
      techStack: ["React Native", "TypeScript", "Node.js", "Firebase", "OpenAI API"],
      keyFeatures: [
        { title: "Smart Inventory", description: "Riconoscimento di scontrini e prodotti per aggiornamento automatico." },
        { title: "AI Recipe Maker", description: "Generazione ricette personalizzate in base a gusti e intolleranze." }
      ],
      results: "Oltre 1000 utenti attivi in fase beta e riduzione del 30% stimata degli sprechi alimentari domestici."
    },
    en: {
      title: "GNAM!",
      tagline: "The intelligent kitchen",
      description:
        "GNAM! is my main startup. An app that transforms kitchen management through artificial intelligence: meal planning, smart shopping lists and real-time inventory management.",
      fullDescription: "GNAM! was born from the need to optimize time in the kitchen while reducing food waste. Through computer vision algorithms and LLMs, the app can suggest recipes based on expiring ingredients, generate automatic shopping lists, and synchronize inventory among family members.",
      techStack: ["React Native", "TypeScript", "Node.js", "Firebase", "OpenAI API"],
      keyFeatures: [
        { title: "Smart Inventory", description: "Receipt and product recognition for automatic inventory updates." },
        { title: "AI Recipe Maker", description: "Custom recipe generation based on tastes and intolerances." }
      ],
      results: "Over 1000 active beta users and an estimated 30% reduction in domestic food waste."
    },
  },

  // ======== FREELANCE ========
  {
    id: "macos-automation",
    type: "freelance",
    emoji: "💻",
    featured: true,
    status: "completed",
    it: {
      title: "Automazione File & Archiviazione",
      tagline: "Sistema di gestione documentale invisibile per macOS",
      description: "Automazione 'silenziosa' per Agenti Finanziari: riordino directory e standardizzazione file in tempo reale.",
      client: "Massimiliano (Agente Compass/MPS)",
      fullDescription: "Sviluppo di un servizio di background nativo per macOS dedicato alla gestione di elevati volumi di documenti sensibili. Il sistema elimina totalmente il data-entry manuale per la nomenclatura dei file, garantendo ordine assoluto e privacy totale.",
      techStack: ["Python 3", "macOS Launchd", "plist", "TCC Full Disk Access"],
      keyFeatures: [
        { title: "Smart Local Parsing", description: "Generazione automatica di alberature cartelle specifiche per pratiche Compass/MPS." },
        { title: "Rinomina Real-time", description: "Intercettazione di file via polling (5s) e rinomina sequenziale COGNOME_NOME_N." },
        { title: "Safety Shield", description: "Controllo metadati st_mtime per proteggere l'archivio storico da sovrascritture." }
      ],
      results: "Azzeramento ore mensili di data-entry manuale e 100% di conformità nella nomenclatura dei file richiesti dalla banca."
    },
    en: {
      title: "MacOS File & Storage Automation",
      tagline: "Invisible document management system for macOS",
      description: "Silent automation for Financial Agents: real-time directory reordering and file standardization.",
      client: "Massimiliano (Compass/MPS Agent)",
      fullDescription: "Development of a native macOS background service dedicated to managing high volumes of sensitive documents. The system totally eliminates manual data entry for file naming, ensuring absolute order and total privacy.",
      techStack: ["Python 3", "macOS Launchd", "plist", "TCC Full Disk Access"],
      keyFeatures: [
        { title: "Smart Local Parsing", description: "Automatic generation of folder structures specific to Compass/MPS practices." },
        { title: "Real-time Renaming", description: "Polling-based file interception (5s) and sequential LASTNAME_FIRSTNAME_N renaming." },
        { title: "Safety Shield", description: "Metadata st_mtime check to protect historical archives from overwriting." }
      ],
      results: "Elimination of monthly manual data entry hours and 100% compliance in file naming required by the bank."
    }
  },
  {
    id: "email-automation-loans",
    type: "freelance",
    emoji: "✉️",
    featured: true,
    status: "completed",
    it: {
      title: "Email Automation Loans",
      tagline: "Invio automatico conferme erogazione prestiti",
      description: "Sistema integrato con database per la notifica automatica ai clienti dell'avvenuta erogazione.",
      client: "Massimiliano (Freelance)",
      fullDescription: "Implementazione di un workflow automatizzato che monitora il database delle pratiche e invia mail di conferma personalizzate ai clienti nel momento esatto dell'erogazione del prestito.",
      techStack: ["Python", "SQL", "SMTP Protocols", "Automation Hooks"],
      keyFeatures: [
        { title: "DB Monitoring", description: "Polling costante del database per identificare nuove erogazioni in tempo reale." },
        { title: "Custom Templates", description: "Generazione di email dinamiche basate sui dati del cliente e della pratica." }
      ],
      results: "Riduzione delle chiamate di supporto del 40% e miglioramento immediato del customer feedback."
    },
    en: {
      title: "Email Automation Loans",
      tagline: "Automatic sending of loan disbursement confirmations",
      description: "Database-integrated system for automatic customer notification of completed disbursements.",
      client: "Massimiliano (Freelance)",
      fullDescription: "Implementation of an automated workflow that monitors the application database and sends personalized confirmation emails to clients at the exact moment of loan disbursement.",
      techStack: ["Python", "SQL", "SMTP Protocols", "Automation Hooks"],
      keyFeatures: [
        { title: "DB Monitoring", description: "Constant database polling to identify new disbursements in real-time." },
        { title: "Custom Templates", description: "Dynamic email generation based on client and application data." }
      ],
      results: "40% reduction in support calls and immediate improvement in customer feedback."
    }
  },
  {
    id: "mantovasoon-automation",
    type: "freelance",
    emoji: "🎭",
    featured: false,
    status: "completed",
    it: {
      title: "MantovaSoon Events Parser",
      tagline: "Aggregatore automatico di eventi locali",
      description: "Automazione che genera bozze di eventi giornalieri scansionando le fonti degli organizzatori locali.",
      client: "MantovaSoon",
      fullDescription: "Sistema di scraping e parsing che ogni giorno raccoglie gli eventi pubblicati dagli organizzatori di Mantova il giorno precedente, preparandoli come bozze pronte per la pubblicazione.",
      techStack: ["Python", "Web Scraping", "Data Cleaning", "API Integration"],
      keyFeatures: [
        { title: "Ethical Scraping", description: "Scansione rispettosa delle fonti per l'estrazione di date, luoghi e descrizioni." },
        { title: "Draft Generator", description: "Creazione automatica di bozze strutturate per il team editoriale." }
      ],
      results: "Velocizzazione del processo editoriale dell'80% e copertura totale degli eventi provinciali."
    },
    en: {
      title: "MantovaSoon Events Parser",
      tagline: "Automatic local events aggregator",
      description: "Automation that generates daily event drafts by scanning sources from local organizers.",
      client: "MantovaSoon",
      fullDescription: "Scraping and parsing system that daily collects events published by Mantua organizers the previous day, preparing them as ready-to-publish drafts.",
      techStack: ["Python", "Web Scraping", "Data Cleaning", "API Integration"],
      keyFeatures: [
        { title: "Ethical Scraping", description: "Respectful source scanning for extraction of dates, locations, and descriptions." },
        { title: "Draft Generator", description: "Automatic creation of structured drafts for the editorial team." }
      ],
      results: "Editorial process speed-up by 80% and total coverage of provincial events."
    }
  }
];

// =============================================
// LINKS DATA (unchanged except for IDs check)
// =============================================
export const links = {
  contacts: [
    { label: "Email", url: "mailto:cavallinilorenzo05@gmail.com", description: "Scrivimi per collaborazioni o freelance", description_en: "Write me for collaborations or freelance", icon: "mail" },
  ],
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/cavallini-lorenzo/", description: "Il mio profilo professionale", description_en: "My professional profile", icon: "linkedin" },
    { label: "GitHub", url: "https://github.com/cavallinilorenzo", description: "I miei progetti open source", description_en: "My open source projects", icon: "github" },
    { label: "Instagram", url: "https://instagram.com/its.cava", description: "Il mio lato più personale", description_en: "My more personal side", icon: "instagram" },
    { label: "TikTok", url: "https://tiktok.com/@cavallini.lorenzo", description: "Contenuti sul mondo startup e tech", description_en: "Content about the startup and tech world", icon: "tiktok" },
  ],
  certificates: [
    { label: "Cambridge B2 English", url: "#", description: "Certificazione Cambridge B2 First", description_en: "Cambridge B2 First Certificate", icon: "award" },
  ],
};

export const personalInfo = {
  name: "Lorenzo Cavallini",
  age: 21,
  location: "Mantova, Italia",
  university: "UniMoRe — Ingegneria Informatica",
  cvPath: "/assets/cv.pdf",
};
