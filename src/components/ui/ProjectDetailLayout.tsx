"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Target, Trophy, Milestone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { type Project, type ProjectContent } from "@/data/portfolio-data";

type LocalizedProject = Project & ProjectContent;

interface ProjectDetailLayoutProps {
  project: LocalizedProject;
  backLabel?: string;
  resultsLabel?: string;
  featuresLabel?: string;
  techStackLabel?: string;
}

export function ProjectDetailLayout({
  project,
  backLabel = "Torna ai progetti",
  resultsLabel = "Risultati",
  featuresLabel = "Caratteristiche Chiave",
  techStackLabel = "Stack Tecnologico",
}: ProjectDetailLayoutProps) {
  return (
    <div className="relative min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/freelance"
            className="inline-flex items-center gap-2 text-sm font-medium text-base-content/40 hover:text-primary transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {backLabel}
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              {project.logo ? (
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-4xl">
                  {project.emoji || "🚀"}
                </div>
              )}
              <div>
                <span className="text-primary text-xs font-semibold uppercase tracking-widest mb-1 block">
                  {project.client}
                </span>
                <h1 className="font-display font-black text-4xl sm:text-5xl text-base-content tracking-tight">
                  {project.title}
                </h1>
              </div>
            </div>
            <p className="text-xl text-base-content/60 leading-relaxed max-w-2xl">
              {project.tagline}
            </p>
          </motion.div>
        </section>

        {/* Bento Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                <Cpu size={20} />
              </div>
              <h3 className="font-display font-bold text-lg">{techStackLabel}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-base-content/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-8 border border-white/5 bg-primary/5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/20 text-primary">
                <Trophy size={20} />
              </div>
              <h3 className="font-display font-bold text-lg">{resultsLabel}</h3>
            </div>
            <p className="text-sm text-base-content/70 leading-relaxed italic">
              &ldquo;{project.results}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-white/5">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2"
          >
            <h3 className="font-display font-bold text-2xl mb-6">Overview</h3>
            <div className="prose prose-invert max-w-none text-base-content/70 leading-relaxed space-y-4">
              {project.fullDescription}
            </div>
          </motion.div>

          {/* Right: Key Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-display font-bold text-xl mb-6">{featuresLabel}</h3>
            <div className="space-y-6">
              {project.keyFeatures?.map((feature, i) => (
                <div key={i} className="relative pl-6 border-l border-primary/20">
                  <div className="absolute top-0 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />
                  <h4 className="font-bold text-base-content mb-1 text-sm">{feature.title}</h4>
                  <p className="text-xs text-base-content/50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
