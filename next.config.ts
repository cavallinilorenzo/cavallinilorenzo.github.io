import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Static export for GitHub Pages ──────────────────────────────────
  output: "export",

  // GitHub Pages serve i file da una struttura piatta — trailing slash
  // garantisce che /startups/ funzioni come /startups/index.html
  trailingSlash: true,

  // next/image non ha un server di ottimizzazione in modalità statica,
  // quindi serviamo le immagini non ottimizzate (file sono già piccoli).
  images: {
    unoptimized: true,
  },

  // Il sito è hostato alla root di cavallinilorenzo.github.io
  // → nessun basePath necessario.
};

export default nextConfig;
