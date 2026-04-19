"use client";

import { type ReactNode } from "react";
import { LocaleProvider } from "@/context/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/**
 * Client shell: wraps all interactive components (Header, Footer, page content)
 * inside the LocaleProvider so they all share the same locale state.
 * This file must be "use client" because LocaleProvider uses React Context.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <div className="relative" style={{ zIndex: 10 }}>
        <Header />
        <main className="page-wrapper">{children}</main>
        <Footer />
      </div>
    </LocaleProvider>
  );
}
