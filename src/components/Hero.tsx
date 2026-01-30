"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const screenshots = [
  {
    src: "/screenshot-pitchpipe.png",
    alt: "Pocket Pitch — Pitch Pipe screen",
    label: "Pitch Pipe",
  },
  {
    src: "/screenshot-piano.png",
    alt: "Pocket Pitch — Piano keyboard",
    label: "Piano",
  },
  {
    src: "/screenshot-tuner.png",
    alt: "Pocket Pitch — Vocal tuner",
    label: "Tuner",
  },
  {
    src: "/screenshot-warmup.png",
    alt: "Pocket Pitch — Vocal warmups",
    label: "Warmups",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-gradient-subtle relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left — Text Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:flex-1">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                781,000+ downloads worldwide
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Your vocal toolkit,{" "}
              <span className="gradient-text">always in your pocket</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              Pitch pipe, piano, tuner, and vocal warmups — everything a singer
              needs, right on your phone. From choir rehearsal to solo practice,
              Pocket Pitch is always with you.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="https://apps.apple.com/us/app/pocket-pitch-the-singer-app/id1005725401"
                target="_blank"
                rel="noopener noreferrer"
                className="glow inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary/5"
              >
                See Features
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* App Store Rating */}
            <div className="mt-8 flex items-center gap-3 text-muted">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "text-amber-400" : "text-amber-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">
                4.6 stars from 1,954 ratings
              </span>
            </div>
          </div>

          {/* Right — Animated Screenshot */}
          <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-1">
            <div className="relative h-[420px] w-[200px] md:h-[480px] md:w-[230px]">
              {screenshots.map((shot, i) => (
                <div
                  key={shot.label}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{ opacity: i === activeIndex ? 1 : 0 }}
                >
                  <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={290}
                      height={628}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {screenshots.map((shot, i) => (
                <button
                  key={shot.label}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Show ${shot.label} screenshot`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-muted">
              {screenshots[activeIndex].label}
            </span>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
    </section>
  );
}
