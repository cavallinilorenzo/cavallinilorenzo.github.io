"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, localizeProject } from "@/data/portfolio-data";
import { useLocale } from "@/hooks/useLocale";

export default function StartupsPage() {
  const { t, locale } = useLocale();
  const startupProjects = projects
    .filter((p) => p.type === "startup")
    .map((p) => localizeProject(p, locale));

  return (
    <div className="relative min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="p-2.5 rounded-xl bg-primary/15 border border-primary/20">
              <Rocket size={20} className="text-primary" />
            </div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">
              {t.startupsBadge}
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-base-content mb-4">
            {t.startupsTitle}
          </h1>
          <p className="text-base-content/55 text-lg max-w-xl mx-auto leading-relaxed">
            {t.startupsDesc}
          </p>
        </motion.div>

        {/* Cards — centered */}
        {startupProjects.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-5">
            {startupProjects.map((project, i) => (
              <div key={project.id} className="w-full sm:w-80">
                <ProjectCard
                  project={project}
                  index={i}
                  discoverLabel={t.discoverProject}
                  activeLabel={t.active}
                  wipLabel={t.wip}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-base-content/30">
            <p className="text-xl font-medium">
              {locale === "it" ? "Progetti in arrivo..." : "Projects coming soon..."}
            </p>
          </div>
        )}

        {/* Manifesto quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 py-12 px-8 rounded-2xl glass-card text-center border border-primary/15"
        >
          <p className="font-display font-bold text-2xl sm:text-3xl text-base-content/80 leading-snug mb-4">
            &ldquo;{t.quoteText}&rdquo;
          </p>
          <cite className="text-sm text-base-content/40 not-italic">— {t.quoteAuthor}</cite>
        </motion.blockquote>
      </div>
    </div>
  );
}
