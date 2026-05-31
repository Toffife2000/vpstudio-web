"use client";

import { useEffect } from "react";

export function IntroReveal() {
  useEffect(() => {
    const shell = document.querySelector<HTMLElement>(".intro-shell");
    const isDesktop = window.matchMedia("(min-width: 900px) and (hover: hover)").matches;

    if (!isDesktop) {
      shell?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
      return;
    }

    document.documentElement.classList.add("vp-intro-lock");
    shell?.classList.add("intro-live");

    const leaveTimer = window.setTimeout(() => {
      shell?.classList.add("intro-reveal-out");
    }, 2500);
    const hideTimer = window.setTimeout(() => {
      shell?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
    }, 4200);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      shell?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
    };
  }, []);

  return null;
}
