"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/useLocale";
import { personalInfo } from "@/data/portfolio-data";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.navHome, href: "/" },
    { label: t.navLinks, href: "/links" },
    { label: t.navStartups, href: "/startups" },
    { label: t.navFreelance, href: "/freelance" },
  ];

  const { scrollY } = useScroll();

  // Pill shrink effect: at 0 scroll → full width bar; at 80px → compact floating pill
  const paddingX = useTransform(scrollY, [0, 80], [32, 20]);
  const paddingY = useTransform(scrollY, [0, 80], [20, 10]);
  const borderRadius = useTransform(scrollY, [0, 80], [0, 50]);
  const top = useTransform(scrollY, [0, 80], [0, 16]);
  const maxWidth = useTransform(scrollY, [0, 80], [1400, 860]);
  const blur = useTransform(scrollY, [0, 80], [0, 16]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0.95, 0.75]);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="fixed left-0 right-0 z-50 flex justify-center pointer-events-none hidden md:flex"
        style={{ top }}
      >
        <motion.div
          className="w-full pointer-events-auto relative"
          style={{
            maxWidth,
            paddingLeft: paddingX,
            paddingRight: paddingX,
            paddingTop: paddingY,
            paddingBottom: paddingY,
            borderRadius,
            backgroundColor: theme === "dark"
              ? `rgba(7, 13, 26, calc(${bgOpacity}))`
              : `rgba(248, 250, 255, calc(${bgOpacity}))`,
          }}
        >
          {/* Glass border */}
          <motion.div
            className="absolute inset-0 rounded-[inherit] border border-white/10 pointer-events-none"
            style={{ opacity: borderOpacity }}
          />
          {/* Blur backdrop */}
          <motion.div
            className="absolute inset-0 rounded-[inherit] backdrop-blur-xl pointer-events-none -z-10"
            style={{ opacity: borderOpacity }}
          />

          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link href="/" className="font-display font-bold text-base-content text-lg tracking-tight flex-shrink-0">
              LC<span className="text-primary">.</span>
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "bg-primary/15 text-primary"
                      : "text-base-content/60 hover:text-base-content hover:bg-base-content/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="btn btn-ghost btn-sm btn-circle text-base-content/60 hover:text-base-content"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <a
                id="download-cv"
                href={personalInfo.cvPath}
                download
                className="btn btn-primary btn-sm gap-1.5 font-medium rounded-full"
              >
                <Download size={14} />
                <span>{t.downloadCv}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 backdrop-blur-xl border-b border-white/5 bg-base-100/80 md:hidden">
        <Link href="/" className="font-display font-bold text-base-content text-lg">
          LC<span className="text-primary">.</span>
        </Link>
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="btn btn-ghost btn-sm btn-circle text-base-content"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed top-16 left-4 right-4 z-40 rounded-2xl bg-base-200/95 backdrop-blur-xl border border-white/10 p-4 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  pathname === link.href
                    ? "bg-primary/15 text-primary"
                    : "text-base-content/70 hover:text-base-content hover:bg-base-content/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="btn btn-ghost btn-sm btn-circle text-base-content/60"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
              <a href={personalInfo.cvPath} download className="btn btn-primary btn-sm gap-1.5 rounded-full flex-1">
                <Download size={14} />
                {t.downloadCv}
              </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
