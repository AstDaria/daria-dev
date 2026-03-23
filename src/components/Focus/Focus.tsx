import React, { useEffect } from "react";
import "./Focus.scss";

const achievements = [
  {
    title: "Modernized Codemagic's marketing website",
    result: "↓40% load time · pixel-perfect design parity across all pages",
  },
  {
    title: "Unified multi-platform form integrations",
    result: "↑100% lead reliability · zero duplicated or missing data",
  },
  {
    title: "Built a company-wide Storybook design system",
    result: "↑30% UI delivery speed · full visual consistency across features",
  },
  {
    title: "Optimized build & deployment pipeline",
    result: "↓15 min → 2 min deploy time · fully automated via Codemagic CI/CD",
  },
  {
    title: "Defined frontend architecture standards",
    result: "Adopted company-wide · improved onboarding and code scalability",
  },
  {
    title: "Improved accessibility & UX across landing pages",
    result: "WCAG-compliant · ↑20% engagement on key pages",
  },
];

const Focus = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".focus__item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("focus__item--visible");
          } else if (entry.intersectionRatio === 0) {
            entry.target.classList.remove("focus__item--visible");
          }
        });
      },
      { threshold: [0, 0.15] },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="focus" id="achivements">
      <div className="focus__inner">
        <h2 className="focus__title">Impact & results</h2>
        <div className="focus__list">
          {achievements.map((a) => (
            <div key={a.title} className="focus__item">
              <h3 className="focus__item-title">{a.title}</h3>
              <p className="focus__result">{a.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Focus;
