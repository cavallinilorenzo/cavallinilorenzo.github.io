"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, localizeProject } from "@/data/portfolio-data";
import { useLocale } from "@/hooks/useLocale";

export default function FreelancePage() {
  const { t, locale } = useLocale();
  const freelanceProjects = projects
    .filter((p) => p.type === "freelance")
    .map((p) => localizeProject(p, locale));

  return (
    <div className="relative min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-sky-500/15 border border-sky-500/20">
              <Zap size={22} className="text-sky-400" />
            </div>
            <span className="text-sky-400 text-sm font-medium uppercase tracking-widest">
              {t.freelanceBadge}
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-base-content mb-4">
            {t.freelanceTitle}
          </h1>
          <p className="text-base-content/55 text-lg max-w-xl leading-relaxed">
            {t.freelanceDesc}
          </p>
        </motion.div>

        {/* Project cards — no status badge, localized title/description/client */}
        {freelanceProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {freelanceProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                hideStatus={true}
                clientLabel={t.client}
                discoverLabel={t.discoverProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-base-content/30">
            <p className="text-xl font-medium">
              {locale === "it" ? "Progetti in arrivo..." : "Projects coming soon..."}
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 rounded-2xl border border-primary/20 bg-primary/8 p-10 text-center"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-base-content mb-3">
            {t.ctaTitle}
          </h2>
          <p className="text-base-content/55 mb-6 max-w-md mx-auto">{t.ctaDesc}</p>
          <a
            id="freelance-contact-cta"
            href="mailto:cavallinilorenzo05@gmail.com"
            className="btn btn-primary rounded-full px-8 font-medium"
          >
            {t.ctaButton}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
