"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { links } from "@/data/portfolio-data";
import { useLocale } from "@/hooks/useLocale";

// ── Brand SVG logos ───────────────────────────────────────────────────
function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.53V6.77a4.86 4.86 0 0 1-1.01-.08z" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

// Map icon key → component + color classes
const brandConfig: Record<string, { Component: React.ComponentType<{ className?: string }>; bg: string; fg: string; border: string }> = {
  mail: { Component: ({ className }: { className?: string }) => <Mail size={22} className={className} />, bg: "bg-blue-700/20", fg: "text-blue-300", border: "border-blue-600/25" },
  linkedin: { Component: LinkedInIcon, bg: "bg-[#0077b5]/20", fg: "text-[#0ea5e9]", border: "border-[#0077b5]/30" },
  github: { Component: GitHubIcon, bg: "bg-neutral-700/30", fg: "text-neutral-200", border: "border-neutral-600/30" },
  instagram: { Component: InstagramIcon, bg: "bg-pink-700/20", fg: "text-pink-300", border: "border-pink-600/25" },
  tiktok: { Component: TikTokIcon, bg: "bg-neutral-800/40", fg: "text-white", border: "border-neutral-600/25" },
  award: { Component: AwardIcon, bg: "bg-amber-600/20", fg: "text-amber-300", border: "border-amber-500/25" },
};

const sectionConfig = [
  { key: "contacts" as const, labelKey: "contacts" as const, descKey: "contactsDesc" as const },
  { key: "socials" as const, labelKey: "socials" as const, descKey: "socialsDesc" as const },
  { key: "certificates" as const, labelKey: "certificates" as const, descKey: "certificatesDesc" as const },
];

export default function LinksPage() {
  const { t, locale } = useLocale();

  return (
    <div className="relative min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.linksSubtitle}</p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-base-content mb-4">{t.linksTitle}</h1>
          <p className="text-base-content/50 text-lg max-w-md mx-auto">{t.linksDesc}</p>
        </motion.div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sectionConfig.map((section, si) => {
            const items = links[section.key];
            return (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: si * 0.1 }}
              >
                <div className="mb-4">
                  <h2 className="font-display font-bold text-xl text-base-content">{t[section.labelKey]}</h2>
                  <p className="text-sm text-base-content/40">{t[section.descKey]}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((item, i) => {
                    const config = brandConfig[item.icon ?? "mail"] ?? brandConfig.mail;
                    const { Component } = config;
                    return (
                      <motion.a
                        key={item.label}
                        id={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                        href={item.url}
                        target={item.url.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: si * 0.1 + i * 0.06 }}
                        className={`group relative flex flex-col gap-3 p-5 rounded-2xl border ${config.border} bg-base-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-base-200/80 overflow-hidden`}
                      >
                        {/* Gradient shimmer on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/3 to-transparent pointer-events-none rounded-2xl" />

                        {/* Icon + external link arrow */}
                        <div className="flex items-start justify-between">
                          <div className={`p-3 rounded-xl ${config.bg} border ${config.border}`}>
                            <Component className={`w-5 h-5 ${config.fg}`} />
                          </div>
                          <ExternalLink
                            size={14}
                            className="text-base-content/20 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1"
                          />
                        </div>

                        {/* Label + description */}
                        <div>
                          <div className="font-semibold text-base-content text-sm">{item.label}</div>
                          {(locale === "en" ? item.description_en : item.description) && (
                            <div className="text-xs text-base-content/45 mt-0.5">
                              {locale === "en" ? item.description_en : item.description}
                            </div>
                          )}
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
