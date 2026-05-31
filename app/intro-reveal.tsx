"use client";

import { useEffect } from "react";

export function IntroReveal() {
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".intro-shell");
    const isDesktop = window.matchMedia("(min-width: 900px)").matches;

    if (!isDesktop) {
      shell?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
      return;
    }

    document.documentElement.classList.add("vp-intro-lock");
    shell?.classList.add("intro-live");

    if (shell && !shell.querySelector(".intro-shatter")) {
      const shatter = document.createElement("div");
      shatter.className = "intro-shatter";
      shatter.setAttribute("aria-hidden", "true");

      const pieces = [
        [-46, -34, -34, 0.9],
        [-28, -42, 18, 0.72],
        [-8, -39, -12, 0.8],
        [18, -44, 24, 0.68],
        [42, -32, 42, 0.86],
        [-55, -10, 24, 0.66],
        [-31, -14, -46, 0.84],
        [-7, -12, 36, 0.7],
        [17, -11, -22, 0.78],
        [45, -8, 16, 0.72],
        [-48, 17, -18, 0.86],
        [-24, 14, 35, 0.7],
        [0, 20, -8, 0.82],
        [25, 16, -38, 0.7],
        [52, 18, 28, 0.78],
        [-36, 42, 44, 0.62],
        [-12, 46, -28, 0.76],
        [14, 43, 14, 0.66],
        [38, 38, -18, 0.82],
        [0, 0, 0, 1]
      ];

      pieces.forEach(([x, y, r, s], index) => {
        const piece = document.createElement("span");
        piece.className = "intro-shard";
        piece.style.setProperty("--x", `${x}vw`);
        piece.style.setProperty("--y", `${y}vh`);
        piece.style.setProperty("--r", `${r}deg`);
        piece.style.setProperty("--s", `${s}`);
        piece.style.setProperty("--d", `${index * 0.018}s`);
        shatter.appendChild(piece);
      });

      shell.appendChild(shatter);
    }

    const leaveTimer = window.setTimeout(() => {
      shell?.classList.add("intro-reveal-out");
    }, 3400);
    const hideTimer = window.setTimeout(() => {
      shell?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
    }, 5600);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      shell?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
    };
  }, []);

  return null;
}
