"use client";
import { useEffect, useState } from "react";

const phrases = [
  "product that runs.",
  "system that scales.",
  "tool your team loves.",
  "platform you own.",
];

export default function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setIsTransitioning(false);
      }, 400);
    }, 3400);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="hero-h1">
      From rough idea to a{" "}
      <span className="hero-phrase-container">
        <span
          className={`hero-phrase-text ${isTransitioning ? "slide-out" : "slide-in"}`}
        >
          {phrases[index]}
        </span>
        <span className="hero-cursor" aria-hidden="true" />
      </span>
    </h1>
  );
}
