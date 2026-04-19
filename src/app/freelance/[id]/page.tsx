"use client";

import { useParams } from "next/navigation";
import { projects, localizeProject } from "@/data/portfolio-data";
import { useLocale } from "@/hooks/useLocale";
import { ProjectDetailLayout } from "@/components/ui/ProjectDetailLayout";
import { motion } from "framer-motion";

/**
 * Since this is a static project, normally we would use generateStaticParams.
 * But because we use a Client Side Context (LocaleProvider) and useLocale,
 * the page is a Client Component. Next.js still pre-renders it.
 * 
 * Note: generateStaticParams is for Server Components. For Client Components in static export,
 * they just render with the dynamic data from the data file.
 */

export default function ProjectDetailPage() {
  const { id } = useParams();
  const { t, locale } = useLocale();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl font-display font-bold mb-4">404</h1>
          <p className="text-base-content/50">Progetto non trovato / Project not found</p>
        </div>
      </div>
    );
  }

  const localizedProject = localizeProject(project, locale);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectDetailLayout
        project={localizedProject}
        backLabel={locale === "it" ? "Torna ai progetti" : "Back to projects"}
        featuresLabel={locale === "it" ? "Caratteristiche Chiave" : "Key Features"}
      />
    </motion.div>
  );
}
