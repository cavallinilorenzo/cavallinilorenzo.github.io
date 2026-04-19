"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HighlightedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function HighlightedText({ text, className = "", delay = 0 }: HighlightedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {/* Animated highlighter stroke */}
      <motion.span
        aria-hidden="true"
        className="absolute -inset-x-1 -inset-y-0.5 rounded-sm"
        style={{
          background: "linear-gradient(135deg, rgba(37,99,235,0.35) 0%, rgba(56,189,248,0.3) 100%)",
          originX: 0,
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.5, delay: delay + 0.3, ease: "easeOut" }}
      />
      {/* Highlight shimmer sweep */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-sm overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.8 }}
      >
        <span
          className="absolute inset-0 w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent animate-shimmer-slide"
          style={{ animationDelay: `${delay + 0.8}s` }}
        />
      </motion.span>
      <span className="relative text-inherit">{text}</span>
    </span>
  );
}
