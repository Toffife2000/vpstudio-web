"use client";

import { useEffect } from "react";

export function NeonHover() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      return;
    }

    const cards = Array.from(document.querySelectorAll<HTMLElement>(".neon-card"));

    const cleanups = cards.map((card) => {
      const onMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      };

      card.addEventListener("mousemove", onMove);
      return () => card.removeEventListener("mousemove", onMove);
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
