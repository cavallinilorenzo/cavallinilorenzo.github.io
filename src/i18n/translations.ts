// =============================================
// TRANSLATIONS — IT / EN
// =============================================

export type Locale = "it" | "en";

export const translations = {
  it: {
    metaTitle: "Lorenzo Cavallini — Startup founder & Developer",
    metaDescription:
      "Portfolio di Lorenzo Cavallini, 21 anni. Ingegnere informatico, founder di GNAM! e freelance developer. Di giorno studio, di notte costruisco.",
    downloadCv: "Scarica CV",
    openTo: "Open to collaborazioni",
    roles: "Startup founder · Studente di Ingegneria Informatica · Freelancer",
    // Slogan: parole da evidenziare = h1 e h2
    slogan: { pre: "Di giorno ", h1: "studio", mid: ", di notte ", h2: "costruisco", post: "" },
    bio: "Sono un ingegnere informatico in formazione con la mentalità di un entrepreneur. Costruisco prodotti digitali che risolvono problemi reali. Di giorno studio i fondamenti della tecnologia, di notte li uso per creare.",
    discoverProjects: "Scopri i miei progetti",
    contactMe: "Contattami",
    navHome: "Home",
    navStartups: "Startups",
    navFreelance: "Freelance",
    navLinks: "Links",
    featured: "In evidenza",
    selectedProjects: "Progetti selezionati",
    seeAll: "Vedi tutti",
    aboutSection: "Chi sono",
    aboutTitle: "Studente il giorno,",
    aboutTitleHighlight: "builder la notte",
    aboutDesc:
      "Studio Ingegneria Informatica a Mantova, presso l'Università di Modena e Reggio Emilia. Mentre imparo la teoria, la metto subito in pratica costruendo prodotti reali.",
    statYears: "Anni",
    statClients: "Clienti freelance",
    statStartups: "Startup attiva",
    statIdeas: "Progetti in testa",
    // Links page
    linksSubtitle: "Trovami ovunque",
    linksTitle: "Links",
    linksDesc: "Tutti i miei contatti, profili social e certificazioni in un unico posto.",
    contacts: "Contatti",
    contactsDesc: "Scrivimi direttamente",
    socials: "Social",
    socialsDesc: "Seguimi sui social",
    certificates: "Certificati",
    certificatesDesc: "Le mie qualifiche",
    // Startups page
    startupsBadge: "Imprenditoria",
    startupsTitle: "Le mie Startups",
    startupsDesc:
      "Non sono un semplice sviluppatore. Costruisco prodotti che risolvono problemi reali. Ogni startup è il frutto di notti insonni, pivoting continui e una voglia di cambiare le cose.",
    quoteText: "Il modo migliore per predire il futuro è costruirlo.",
    quoteAuthor: "Alan Kay",
    active: "Attivo",
    wip: "In Sviluppo",
    // Freelance page
    freelanceBadge: "Freelance",
    freelanceTitle: "Lavori per clienti",
    freelanceDesc:
      "Come side-business, aiuto aziende e professionisti ad automatizzare i loro processi con soluzioni su misura. Ogni progetto mi ha insegnato qualcosa di nuovo.",
    ctaTitle: "Hai un progetto in mente?",
    ctaDesc: "Sono sempre disponibile a valutare nuove collaborazioni. Scrivimi e parliamo.",
    ctaButton: "Scrivimi",
    client: "Cliente",
    discoverProject: "Scopri il progetto",
    // Footer
    footerTagline: "Di giorno studio, di notte costruisco.",
    footerRights: "Tutti i diritti riservati.",
    footerMadeby: "Fatto con",
  },

  en: {
    metaTitle: "Lorenzo Cavallini — Startup founder & Developer",
    metaDescription:
      "Portfolio of Lorenzo Cavallini, 21 years old. Computer Engineering student, GNAM! founder & freelance developer. I study by day, I build by night.",
    downloadCv: "Download CV",
    openTo: "Open to collaborations",
    roles: "Startup founder · Computer Engineering student · Freelancer",
    // Slogan: highlighted words = h1 ("study") and h2 ("build")
    slogan: { pre: "I ", h1: "study", mid: " by day, I ", h2: "build", post: " by night" },
    bio: "I'm a Computer Engineering student with an entrepreneur mindset. I build digital products that solve real problems. By day I study the foundations of technology, by night I use them to create.",
    discoverProjects: "Discover my projects",
    contactMe: "Contact me",
    navHome: "Home",
    navStartups: "Startups",
    navFreelance: "Freelance",
    navLinks: "Links",
    featured: "Featured",
    selectedProjects: "Selected projects",
    seeAll: "See all",
    aboutSection: "About me",
    aboutTitle: "Student by day,",
    aboutTitleHighlight: "builder by night",
    aboutDesc:
      "I study Computer Engineering in Mantua at the University of Modena and Reggio Emilia. While learning theory, I immediately put it into practice by building real products.",
    statYears: "Years old",
    statClients: "Freelance clients",
    statStartups: "Active startup",
    statIdeas: "Projects in my head",
    // Links page
    linksSubtitle: "Find me anywhere",
    linksTitle: "Links",
    linksDesc: "All my contacts, social profiles and certifications in one place.",
    contacts: "Contacts",
    contactsDesc: "Write to me directly",
    socials: "Social",
    socialsDesc: "Follow me on social media",
    certificates: "Certificates",
    certificatesDesc: "My qualifications",
    // Startups page
    startupsBadge: "Entrepreneurship",
    startupsTitle: "My Startups",
    startupsDesc:
      "I'm not just a developer. I build products that solve real problems. Every startup here is the result of sleepless nights, constant pivoting and a desire to change things.",
    quoteText: "The best way to predict the future is to build it.",
    quoteAuthor: "Alan Kay",
    active: "Active",
    wip: "In Development",
    // Freelance page
    freelanceBadge: "Freelance",
    freelanceTitle: "Client projects",
    freelanceDesc:
      "As a side business, I help companies and professionals automate their processes with custom solutions. Every project has taught me something new.",
    ctaTitle: "Have a project in mind?",
    ctaDesc: "I'm always open to evaluating new collaborations. Write to me and let's talk.",
    ctaButton: "Write to me",
    client: "Client",
    discoverProject: "Discover the project",
    // Footer
    footerTagline: "I study by day, I build by night.",
    footerRights: "All rights reserved.",
    footerMadeby: "Made with",
  },
};

export type TranslationKeys = keyof typeof translations.it;
