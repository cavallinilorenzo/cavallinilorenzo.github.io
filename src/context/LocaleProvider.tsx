"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { type Locale, translations } from "@/i18n/translations";

// ── Context ────────────────────────────────────────────────────────────
type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations.it;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

// ── Provider ───────────────────────────────────────────────────────────
export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("it");

  useEffect(() => {
    // 1. User manual override persisted in localStorage
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "it" || saved === "en") {
      setLocaleState(saved);
      return;
    }
    // 2. Auto-detect from browser language
    const lang = navigator.language ?? "it";
    setLocaleState(lang.startsWith("it") ? "it" : "en");
  }, []);

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem("locale", next);
    setLocaleState(next); // triggers re-render in ALL consumers simultaneously
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

// ── Hook ───────────────────────────────────────────────────────────────
export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
