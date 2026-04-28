const coreTools = [
  {
    title: "Pitch Pipe",
    description:
      "Play or identify any musical note, instantly. Chromatic pitch pipe with clear, sustained tones — perfect for choir directors and ensemble singers.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        />
      </svg>
    ),
  },
  {
    title: "Piano",
    description:
      "A responsive, full-range piano keyboard right in your pocket. Play chords, find harmonies, and practice intervals anywhere.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
        />
      </svg>
    ),
  },
  {
    title: "Tuner",
    description:
      "Precision vocal tuner that listens and shows your pitch in real-time. See exactly where you are and train your ear to stay on pitch.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
  },
  {
    title: "Metronome",
    description:
      "Lock in your tempo with a clean, customizable metronome. Practice rhythm, pace your warmups, and rehearse with confidence.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const extraFeatures = [
  {
    title: "Vocal Warmups",
    description:
      "Warm up your voice. Anywhere. Guided exercises with scales, arpeggios, and patterns designed for singers of all levels.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Practice Tests",
    description:
      "Train your ear and musical knowledge. See & Play, Hear & Sing, Hear & Play — track your Singer Score and grow with every session.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const useCases = [
  "Rehearsals",
  "Auditions",
  "Choir practice",
  "Performances",
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Four core tools, plus more
          </h2>
          <p className="mt-4 text-lg text-muted">
            Pitch pipe, piano, tuner, metronome — everything a singer needs in
            one simple app. No bulky equipment, no complicated setup.
          </p>
        </div>

        {/* Core Tools */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreTools.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Features */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {extraFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Use Case Strip */}
        <div className="mt-20 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 p-10 text-center md:p-16">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-3xl font-bold text-foreground md:text-4xl">
              Play or identify any musical note,{" "}
              <span className="gradient-text">instantly.</span>
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Always have the note, wherever you are. Pocket Pitch lives on
              your phone — ready the moment you need it, whether you&apos;re
              backstage, in the choir loft, or practicing at home.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {useCases.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-primary/20 bg-white px-5 py-2 text-sm font-semibold text-primary"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
