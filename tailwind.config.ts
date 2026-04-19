import type { Config } from "tailwindcss";
// @ts-ignore
import daisyui from "daisyui";

const config: any = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        navy: {
          950: "#070d1a",
          900: "#0a1128",
          800: "#0d1635",
          700: "#111d45",
        },
        neon: "#38bdf8",
        highlight: "rgba(56, 189, 248, 0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.25), transparent)",
        "card-glow":
          "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.12), transparent)",
      },
      backgroundSize: {
        "grid-size": "64px 64px",
      },
      animation: {
        "shimmer-slide": "shimmer-slide 2.5s infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      keyframes: {
        "shimmer-slide": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px rgba(37,99,235,0.3)" },
          to: { boxShadow: "0 0 40px rgba(56,189,248,0.5)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#38bdf8",
          "secondary-content": "#0a1128",
          accent: "#818cf8",
          "accent-content": "#ffffff",
          neutral: "#1e293b",
          "neutral-content": "#cbd5e1",
          "base-100": "#070d1a",
          "base-200": "#0a1128",
          "base-300": "#0d1635",
          "base-content": "#e2e8f0",
          info: "#38bdf8",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#f87171",
        },
        light: {
          primary: "#2563eb",
          "primary-content": "#ffffff",
          secondary: "#0ea5e9",
          "secondary-content": "#ffffff",
          accent: "#6366f1",
          "accent-content": "#ffffff",
          neutral: "#f1f5f9",
          "neutral-content": "#1e293b",
          "base-100": "#f8faff",
          "base-200": "#eef2ff",
          "base-300": "#e0e7ff",
          "base-content": "#1e293b",
          info: "#0ea5e9",
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
  plugins: [daisyui],
};

export default config;
