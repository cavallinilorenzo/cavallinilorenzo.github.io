"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Rocket, Zap, Link2 } from "lucide-react";
import { HighlightedText } from "@/components/ui/HighlightedText";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, localizeProject } from "@/data/portfolio-data";
import { useLocale } from "@/hooks/useLocale";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function HomePage() {
  const { t, locale } = useLocale();
  const featuredProjects = projects
    .filter((p) => p.featured)
    .map((p) => localizeProject(p, locale));

  const quickCards = [
    { href: "/startups", icon: Rocket, title: t.navStartups, description: locale === "it" ? "GNAM! e i progetti imprenditoriali" : "GNAM! and my entrepreneurial projects", color: "from-blue-600/20 to-blue-400/10", border: "hover:border-blue-500/40" },
    { href: "/freelance", icon: Zap, title: t.navFreelance, description: locale === "it" ? "Automazioni e progetti per clienti" : "Automations and client projects", color: "from-sky-500/20 to-cyan-400/10", border: "hover:border-sky-500/40" },
    { href: "/links", icon: Link2, title: t.navLinks, description: locale === "it" ? "Social, contatti e certificazioni" : "Social, contacts and certifications", color: "from-indigo-500/20 to-violet-400/10", border: "hover:border-indigo-500/40" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-16 pb-24">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {t.openTo}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-base-content leading-[1.05] tracking-tight mb-6"
        >
          Lorenzo
          <br />
          <span className="gradient-text">Cavallini</span>
        </motion.h1>

        {/* Roles */}
        <motion.p {...fadeUp(0.3)} className="text-base-content/50 font-medium text-base sm:text-lg mb-8 tracking-wide">
          {t.roles}
        </motion.p>

        {/* SLOGAN — highlighted words are h1 and h2 */}
        <motion.div {...fadeUp(0.4)} className="mb-10">
          <p className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-base-content leading-snug">
            {t.slogan.pre}
            <HighlightedText text={t.slogan.h1} delay={0.5} />
            {t.slogan.mid}
            <HighlightedText text={t.slogan.h2} delay={0.9} />
            {t.slogan.post}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p {...fadeUp(0.5)} className="max-w-xl text-base-content/60 text-base sm:text-lg leading-relaxed mb-10">
          {t.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-3 justify-center">
          <Link id="hero-cta-startups" href="/startups" className="btn btn-primary rounded-full gap-2 font-medium px-6">
            {t.discoverProjects}
            <ArrowRight size={16} />
          </Link>
          <Link id="hero-cta-links" href="/links" className="btn btn-ghost border border-white/10 rounded-full gap-2 font-medium px-6 hover:bg-white/5">
            {t.contactMe}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-base-content/30 mx-auto" />
        </motion.div>
      </section>

      {/* ── QUICK NAVIGATION ─────────────────────────── */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link
                  id={`quickcard-${card.title.toLowerCase()}`}
                  href={card.href}
                  className={`group block h-full rounded-2xl border border-white/8 bg-gradient-to-br ${card.color} backdrop-blur-sm p-6 transition-all duration-300 ${card.border} hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/8">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <ArrowRight size={16} className="text-base-content/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-base-content mb-1">{card.title}</h3>
                  <p className="text-sm text-base-content/50">{card.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────── */}
      <section className="px-6 pb-28 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-2">{t.featured}</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-content">{t.selectedProjects}</h2>
          </div>
          <Link href="/startups" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-base-content/40 hover:text-primary transition-colors">
            {t.seeAll} <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              hideStatus={project.type === "freelance"}
              clientLabel={t.client}
              discoverLabel={t.discoverProject}
              activeLabel={t.active}
              wipLabel={t.wip}
            />
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────── */}
      <section className="border-t border-white/6 py-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary text-sm font-medium uppercase tracking-widest mb-3">{t.aboutSection}</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-base-content mb-4">
              {t.aboutTitle}<br />
              <span className="gradient-text">{t.aboutTitleHighlight}</span>
            </h2>
            <p className="text-base-content/60 leading-relaxed">{t.aboutDesc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "21", label: t.statYears },
              { value: "2+", label: t.statClients },
              { value: "1", label: t.statStartups },
              { value: "∞", label: t.statIdeas },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-5 text-center">
                <div className="font-display font-extrabold text-3xl gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-base-content/50 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
