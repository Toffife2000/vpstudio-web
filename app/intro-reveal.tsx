"use client";

import { useEffect, useState } from "react";

export function IntroReveal() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("vp-intro-lock");
    const seen = sessionStorage.getItem("vp-intro-seen");
    if (seen) {
      setVisible(false);
      document.querySelector(".intro-shell")?.remove();
      document.documentElement.classList.remove("vp-intro-lock");
      return;
    }

    setVisible(true);
    document.querySelector(".intro-shell")?.remove();
    sessionStorage.setItem("vp-intro-seen", "true");

    const leaveTimer = window.setTimeout(() => setLeaving(true), 1650);
    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.classList.remove("vp-intro-lock");
    }, 2500);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
      document.documentElement.classList.remove("vp-intro-lock");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro-reveal ${leaving ? "intro-reveal-out" : ""}`} aria-hidden="true">
      <div className="intro-vignette" />
      <div className="intro-logo-wrap">
        <div className="intro-logo-orbit" />
        <div className="intro-logo">
          <span className="intro-ring" />
          <span className="intro-cut" />
          <span className="intro-v">V</span>
          <span className="intro-p">P</span>
        </div>
        <div className="intro-brand">VP Studio</div>
        <div className="intro-line" />
      </div>
    </div>
  );
}
