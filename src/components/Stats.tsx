const stats = [
  {
    value: "800K+",
    label: "Singers",
  },
  {
    value: "4.6",
    label: "App Store Rating",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            By the numbers
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Trusted by singers worldwide
          </h2>
          <p className="mt-4 text-lg text-muted">
            From solo vocalists to massive choirs, Pocket Pitch has become an
            essential tool for singers across the globe.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl gap-8 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <p className="gradient-text text-5xl font-extrabold">
                {stat.value}
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
