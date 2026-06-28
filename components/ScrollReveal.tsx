"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = [".fade-up", ".fade-left", ".fade-right", ".fade-scale"];
    const allEls = document.querySelectorAll(selectors.join(","));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    allEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
