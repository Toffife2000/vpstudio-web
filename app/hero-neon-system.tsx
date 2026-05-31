"use client";

import { useEffect, useRef } from "react";

function drawArc(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  start: number,
  end: number,
  color: string,
  width: number,
  blur: number
) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = blur;
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(x, y, radius, start, end);
  ctx.stroke();
  ctx.restore();
}

export function HeroNeonSystem() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * (width < 700 ? 0.42 : 0.47);
      const base = Math.min(width, height) * (width < 700 ? 0.42 : 0.34);
      const pulse = 1 + Math.sin(time * 0.0022) * 0.075;
      const slowPulse = 1 + Math.sin(time * 0.0011 + 1.2) * 0.12;
      const rotation = time * 0.00034;

      const core = ctx.createRadialGradient(cx, cy, base * 0.08, cx, cy, base * 1.02);
      core.addColorStop(0, "rgba(236, 253, 245, 0.42)");
      core.addColorStop(0.16, "rgba(190, 242, 100, 0.22)");
      core.addColorStop(0.38, "rgba(34, 197, 94, 0.14)");
      core.addColorStop(0.72, "rgba(16, 185, 129, 0.05)");
      core.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, base * 1.15 * slowPulse, 0, Math.PI * 2);
      ctx.fill();

      for (let index = 0; index < 34; index += 1) {
        const angle = rotation * 1.8 + (Math.PI * 2 * index) / 34;
        const rayPulse = 0.25 + Math.max(0, Math.sin(time * 0.0025 + index * 0.48)) * 0.75;
        const from = base * 0.42;
        const to = base * (1.18 + rayPulse * 0.44);
        const x1 = cx + Math.cos(angle) * from;
        const y1 = cy + Math.sin(angle) * from;
        const x2 = cx + Math.cos(angle) * to;
        const y2 = cy + Math.sin(angle) * to;

        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, "rgba(236, 253, 245, 0.36)");
        gradient.addColorStop(0.32, "rgba(190, 242, 100, 0.22)");
        gradient.addColorStop(1, "rgba(34, 197, 94, 0)");

        ctx.save();
        ctx.globalAlpha = width < 700 ? 0.18 : 0.3;
        ctx.strokeStyle = gradient;
        ctx.lineWidth = width < 700 ? 0.7 : 1.15;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
      }

      drawArc(ctx, cx, cy, base * 0.82 * pulse, rotation, rotation + Math.PI * 1.62, "rgba(190, 242, 100, 0.96)", width < 700 ? 10 : 18, 34);
      drawArc(ctx, cx, cy, base * 0.82 * pulse, rotation + Math.PI * 1.78, rotation + Math.PI * 2.36, "rgba(236, 253, 245, 0.92)", width < 700 ? 4 : 7, 24);
      drawArc(ctx, cx, cy, base * 0.64 * (2 - pulse * 0.58), -rotation * 1.4, -rotation * 1.4 + Math.PI * 1.42, "rgba(52, 211, 153, 0.72)", width < 700 ? 4 : 8, 22);
      drawArc(ctx, cx, cy, base * 1.02 * slowPulse, rotation * 0.62 + Math.PI * 0.45, rotation * 0.62 + Math.PI * 1.02, "rgba(34, 211, 238, 0.42)", width < 700 ? 2 : 4, 18);

      for (let index = 0; index < 14; index += 1) {
        const angle = -rotation * 2.3 + (Math.PI * 2 * index) / 14;
        const orbit = base * (0.78 + (index % 3) * 0.12);
        const size = 1.6 + (index % 4) * 0.55;
        const x = cx + Math.cos(angle) * orbit;
        const y = cy + Math.sin(angle) * orbit * 0.72;

        ctx.save();
        ctx.shadowColor = "rgba(190, 242, 100, 0.95)";
        ctx.shadowBlur = 16;
        ctx.fillStyle = index % 4 === 0 ? "rgba(236, 253, 245, 0.9)" : "rgba(190, 242, 100, 0.72)";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      const flare = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * 0.55);
      flare.addColorStop(0, `rgba(236, 253, 245, ${0.08 + Math.sin(time * 0.003) * 0.04})`);
      flare.addColorStop(0.36, "rgba(190, 242, 100, 0.07)");
      flare.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = flare;
      ctx.beginPath();
      ctx.arc(cx, cy, base * 0.6, 0, Math.PI * 2);
      ctx.fill();

      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-100 mix-blend-screen"
    />
  );
}
