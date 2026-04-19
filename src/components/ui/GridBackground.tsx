"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive grid background:
 * - Base grid lines at ~5% opacity
 * - Mouse hover: radial area (radius 200px) brightens to ~10%
 *
 * Rendered at z-index 0 (pointer-events-none).
 * The solid page background is a separate div at z-index -1 in the layout.
 * Content sits at z-index 10+.
 */
export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CELL = 48;
    const BASE_ALPHA = 0.05;   // 5% opacity baseline
    const HOVER_ALPHA = 0.12;  // ~10-12% at the centre of the hover zone
    const RADIUS = 200;        // px radius of the brightened area

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      // Use scrollHeight so the grid covers the full document
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;
      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;
      ctx.lineWidth = 1;

      // Vertical lines
      for (let c = 0; c < cols; c++) {
        const lx = c * CELL;
        const clamped = Math.max(0, Math.min(canvas.height, my));
        const dist = Math.sqrt((lx - mx) ** 2 + (clamped - my) ** 2);
        const t = Math.max(0, 1 - dist / RADIUS);
        const alpha = BASE_ALPHA + (HOVER_ALPHA - BASE_ALPHA) * t;
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(lx, 0);
        ctx.lineTo(lx, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let r = 0; r < rows; r++) {
        const ly = r * CELL;
        const clamped = Math.max(0, Math.min(canvas.width, mx));
        const dist = Math.sqrt((clamped - mx) ** 2 + (ly - my) ** 2);
        const t = Math.max(0, 1 - dist / RADIUS);
        const alpha = BASE_ALPHA + (HOVER_ALPHA - BASE_ALPHA) * t;
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(0, ly);
        ctx.lineTo(canvas.width, ly);
        ctx.stroke();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY,
      };
    }

    function onMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    function onScroll() {
      // Optionally resize canvas if page height grew
      resize();
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // z-index 0: sits above the solid -z-10 background div, below content (z-10)
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
