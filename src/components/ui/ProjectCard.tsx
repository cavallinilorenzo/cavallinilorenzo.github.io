"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, User } from "lucide-react";
import { type Project, type ProjectContent } from "@/data/portfolio-data";

// ProjectCard accepts a localized project (flat merged object from localizeProject)
type LocalizedProject = Project & ProjectContent;

interface ProjectCardProps {
  project: LocalizedProject;
  index?: number;
  hideStatus?: boolean;
  clientLabel?: string;
  discoverLabel?: string;
  activeLabel?: string;
  wipLabel?: string;
}

export function ProjectCard({
  project,
  index = 0,
  hideStatus = false,
  clientLabel = "Cliente",
  discoverLabel = "Scopri il progetto",
  activeLabel = "Attivo",
  wipLabel = "In Sviluppo",
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
      className="group relative"
    >
      <div className="relative h-full rounded-2xl border border-white/8 bg-base-200/60 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-base-200/80 hover:shadow-[0_0_40px_rgba(37,99,235,0.12)]">
        {/* Hover gradient shimmer */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-sky-500/10" />

        <div className="relative p-6 flex flex-col gap-4 h-full">
          {/* Top row: logo/emoji + status badge */}
          <div className="flex items-start justify-between gap-3">
            {project.logo ? (
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <span className="text-3xl leading-none flex-shrink-0">{project.emoji}</span>
            )}

            {!hideStatus && project.status === "active" && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-emerald-500/15 text-emerald-400 border-emerald-500/20 flex-shrink-0">
                {activeLabel}
              </span>
            )}
            {!hideStatus && project.status === "wip" && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-amber-500/15 text-amber-400 border-amber-500/20 flex-shrink-0">
                {wipLabel}
              </span>
            )}
          </div>

          {/* Localized content */}
          <div className="flex-1">
            <h3 className="font-display font-bold text-xl text-base-content mb-1">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-primary/80 mb-3">{project.tagline}</p>
            <p className="text-sm text-base-content/60 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Client (freelance only) */}
          {project.client && (
            <div className="flex items-center gap-2 text-xs text-base-content/40">
              <User size={12} />
              <span>
                {clientLabel}:{" "}
                <span className="text-base-content/60">{project.client}</span>
              </span>
            </div>
          )}

          {/* CTA link */}
          {(project.url || project.fullDescription) && (
            <Link
              href={project.fullDescription ? `/freelance/${project.id}` : (project.url || "#")}
              target={project.fullDescription ? "_self" : "_blank"}
              rel={project.fullDescription ? undefined : "noopener noreferrer"}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-sky-400 transition-colors"
            >
              {discoverLabel}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
