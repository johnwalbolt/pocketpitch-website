import Image from "next/image";

const screenshots = [
  {
    src: "/screenshot-pitchpipe.png",
    alt: "Pocket Pitch — Pitch Pipe screen showing chromatic pitch circle",
    label: "Pitch Pipe",
  },
  {
    src: "/screenshot-piano.png",
    alt: "Pocket Pitch — Piano keyboard for playing notes and chords",
    label: "Piano",
  },
  {
    src: "/screenshot-tuner.png",
    alt: "Pocket Pitch — Vocal tuner detecting pitch in real-time",
    label: "Tuner",
  },
  {
    src: "/screenshot-warmup.png",
    alt: "Pocket Pitch — Vocal warmup exercises with scale and tempo controls",
    label: "Warmups",
  },
];

export default function Screenshots() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            The App
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            See it in action
          </h2>
          <p className="mt-4 text-lg text-muted">
            A clean, intuitive interface designed for singers who need quick
            access to the right tools.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {screenshots.map((shot) => (
            <div key={shot.label} className="flex flex-col items-center gap-4">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-transform hover:scale-[1.02]">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={280}
                  height={607}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <span className="text-sm font-semibold text-muted">
                {shot.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
