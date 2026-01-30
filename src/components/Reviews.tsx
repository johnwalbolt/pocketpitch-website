const reviews = [
  {
    name: "jsgalschjodt",
    title: "LOVE THIS APP",
    rating: 5,
    text: "This app is a God send. I have had several pitch pipes over the years and they always seem to develop tuning issues. This app is so dependable and reliable. I love it!",
  },
  {
    name: "1994mets",
    title: "Be the one that knows the note",
    rating: 5,
    text: "Saved me at last night\u2019s rehearsal when not only did it find my F#, but I literally pounded notes with it. Simple, effective, and always ready when you need it.",
  },
  {
    name: "kittensandchocolate",
    title: "Use it!!!",
    rating: 5,
    text: "I would recommend this to any singer or musician. I use it almost daily. It\u2019s simple, reliable, and does exactly what you need.",
  },
  {
    name: "Star Wars Nerd 43",
    title: "This is Fantastic!",
    rating: 5,
    text: "Great app for choir work. Super useful for finding pitches quickly. I use it before every rehearsal and it has become an essential part of my routine.",
  },
  {
    name: "Hardly a voice",
    title: "A life saver for me",
    rating: 5,
    text: "I am a voice therapy patient and this app has been wonderful for scales and exercises. It\u2019s easy to use and has everything I need for my vocal recovery.",
  },
  {
    name: "LAappGrump",
    title: "Very handy",
    rating: 4,
    text: "Straightforward design and easy to use. The pitch pipe is great and the piano is a nice bonus. I keep it on my home screen so it\u2019s always one tap away.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Reviews
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Loved by singers everywhere
          </h2>
          <p className="mt-4 text-lg text-muted">
            Real reviews from the App Store — see what singers are saying about
            Pocket Pitch.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-slate-100 bg-white p-8"
            >
              <StarRating rating={review.rating} />
              <h3 className="mt-3 text-lg font-bold text-foreground">
                &ldquo;{review.title}&rdquo;
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{review.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <p className="text-sm font-medium text-muted">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* App Store link */}
        <div className="mt-12 text-center">
          <a
            href="https://apps.apple.com/us/app/pocket-pitch-the-singer-app/id1005725401"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            See all reviews on the App Store
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
