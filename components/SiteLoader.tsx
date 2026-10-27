"use client";
import { useEffect, useState } from "react";

interface SiteLoaderProps {
  onComplete?: () => void;
}

export default function SiteLoader({ onComplete }: SiteLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Disable background scrolling while loader is active
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 1400; // 1.4s smooth loader

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(elapsed / duration, 1);
      
      // Easing function for natural acceleration/deceleration
      const ease = 1 - Math.pow(1 - progressFraction, 3);
      const currentVal = Math.floor(ease * 100);
      
      setProgress(currentVal);

      if (progressFraction < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "";
          if (onComplete) onComplete();
          // Remove from DOM after curtain slide transition completes (750ms)
          setTimeout(() => {
            setIsRemoved(true);
          }, 850);
        }, 180);
      }
    };

    const frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isRemoved) return null;

  return (
    <div
      className={`site-preloader ${isDone ? "is-exiting" : ""}`}
      aria-label="Site loading screen"
      role="status"
      aria-live="polite"
    >
      <div className="loader-curtain loader-curtain-top" />
      <div className="loader-curtain loader-curtain-bottom" />

      <div className="loader-content-wrap">
        {/* Top Studio Label */}
        <div className="loader-top-bar">
          <span className="loader-brand">AIIDL TECHNOLOGIES ®</span>
          <span className="loader-tag">DIGITAL ENGINEERING STUDIO · 2026</span>
        </div>

        {/* Central Monumental Counter */}
        <div className="loader-center">
          <div className="loader-number-row">
            <span className="loader-number">
              {progress.toString().padStart(2, "0")}
            </span>
            <span className="loader-percent">%</span>
          </div>
          <div className="loader-status-text">
            {progress < 40 && "INITIALIZING SYSTEMS..."}
            {progress >= 40 && progress < 80 && "LOADING STUDIO ASSETS..."}
            {progress >= 80 && progress < 100 && "PREPARING EXPERIENCE..."}
            {progress >= 100 && "WELCOME TO AIIDL"}
          </div>
        </div>

        {/* Bottom Progress Bar & Coordinates */}
        <div className="loader-bottom-bar">
          <div className="loader-coords">
            <span>28.6139° N, 77.2090° E</span>
            <span>NEW DELHI · GLOBAL</span>
          </div>
          <div className="loader-progress-rail">
            <div
              className="loader-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
