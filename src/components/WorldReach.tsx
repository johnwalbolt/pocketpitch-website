// Approximate positions for dots on a world map (using Natural Earth-style projection)
// Each dot represents a region where Pocket Pitch is actively used
const regions = [
  // North America
  { x: 165, y: 155, label: "North America", delay: "0s" },
  { x: 195, y: 175, label: "USA East", delay: "0.3s" },
  { x: 130, y: 170, label: "USA West", delay: "0.6s" },
  { x: 170, y: 130, label: "Canada", delay: "0.9s" },
  // South America
  { x: 240, y: 310, label: "Brazil", delay: "0.2s" },
  { x: 220, y: 370, label: "Argentina", delay: "0.5s" },
  // Europe
  { x: 420, y: 135, label: "UK", delay: "0.1s" },
  { x: 450, y: 145, label: "Central Europe", delay: "0.4s" },
  { x: 440, y: 110, label: "Scandinavia", delay: "0.7s" },
  { x: 480, y: 140, label: "Eastern Europe", delay: "1.0s" },
  // Africa
  { x: 440, y: 250, label: "West Africa", delay: "0.3s" },
  { x: 480, y: 290, label: "East Africa", delay: "0.8s" },
  { x: 460, y: 340, label: "South Africa", delay: "0.5s" },
  // Asia
  { x: 530, y: 175, label: "Middle East", delay: "0.2s" },
  { x: 590, y: 200, label: "India", delay: "0.6s" },
  { x: 680, y: 155, label: "East Asia", delay: "0.4s" },
  { x: 650, y: 220, label: "Southeast Asia", delay: "0.9s" },
  { x: 700, y: 145, label: "Japan/Korea", delay: "0.7s" },
  // Oceania
  { x: 710, y: 350, label: "Australia", delay: "0.3s" },
  { x: 750, y: 380, label: "New Zealand", delay: "0.6s" },
];

export default function WorldReach() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Global Community
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Singers around the world
          </h2>
          <p className="mt-4 text-lg text-muted">
            Pocket Pitch is used by singers of all ages, in choirs, on stages,
            and in practice rooms across every continent.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12">
          <div className="relative aspect-[2/1] w-full">
            <svg
              viewBox="0 0 800 450"
              className="absolute inset-0 h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* World map continents — simplified outlines */}
              <g
                fill="none"
                stroke="rgba(148, 163, 184, 0.15)"
                strokeWidth="1.2"
                strokeLinejoin="round"
              >
                {/* North America */}
                <path d="M60,120 L80,95 L110,80 L140,75 L165,70 L190,78 L210,95 L220,110 L215,130 L225,140 L220,155 L210,165 L200,180 L185,190 L170,195 L155,192 L140,195 L125,190 L115,185 L100,175 L90,165 L80,155 L70,145 L65,135 Z" />
                {/* Greenland */}
                <path d="M250,55 L270,48 L290,50 L300,60 L295,75 L280,82 L265,78 L255,68 Z" />
                {/* Central America */}
                <path d="M140,195 L150,205 L155,215 L160,225 L155,235 L150,240 L145,235 L140,225 L135,215 L130,205 Z" />
                {/* South America */}
                <path d="M195,240 L210,235 L230,240 L250,250 L265,270 L270,290 L268,310 L260,330 L250,350 L240,365 L228,380 L215,390 L205,385 L200,370 L198,350 L200,330 L205,310 L210,290 L208,270 L200,255 Z" />
                {/* Europe */}
                <path d="M395,75 L410,70 L425,72 L440,78 L455,85 L465,95 L470,110 L475,125 L478,140 L470,150 L460,155 L448,152 L435,148 L420,145 L410,140 L400,135 L395,125 L390,110 L388,95 Z" />
                {/* British Isles */}
                <path d="M390,100 L398,95 L405,100 L402,110 L395,112 Z" />
                {/* Scandinavia */}
                <path d="M430,55 L445,48 L455,55 L460,70 L458,85 L450,90 L440,85 L435,72 Z" />
                {/* Africa */}
                <path d="M410,175 L425,170 L440,172 L455,178 L470,185 L480,200 L488,220 L492,245 L490,270 L485,295 L478,315 L468,335 L455,350 L440,355 L425,348 L415,335 L410,315 L412,295 L415,270 L418,245 L420,220 L418,200 L412,188 Z" />
                {/* Middle East */}
                <path d="M490,155 L510,150 L530,155 L545,165 L550,180 L545,195 L535,200 L520,198 L505,192 L495,182 L490,170 Z" />
                {/* India */}
                <path d="M565,165 L580,160 L595,168 L605,180 L608,200 L605,220 L595,235 L582,240 L572,232 L565,215 L562,195 L560,180 Z" />
                {/* East Asia / China */}
                <path d="M600,100 L620,90 L645,88 L665,92 L685,100 L700,115 L705,130 L700,148 L690,160 L675,168 L658,170 L640,165 L625,155 L615,142 L608,128 L602,115 Z" />
                {/* Japan */}
                <path d="M710,115 L718,108 L725,112 L728,125 L725,140 L718,148 L712,142 L708,130 Z" />
                {/* Southeast Asia */}
                <path d="M630,195 L645,190 L660,195 L670,208 L668,222 L658,230 L645,228 L635,218 L630,208 Z" />
                {/* Indonesia */}
                <path d="M620,248 L640,245 L660,248 L680,252 L695,258 L690,265 L675,268 L655,265 L635,262 L622,258 Z" />
                {/* Australia */}
                <path d="M670,310 L690,300 L715,298 L735,305 L748,318 L750,338 L742,358 L728,372 L710,378 L692,375 L678,365 L670,348 L668,330 Z" />
                {/* New Zealand */}
                <path d="M758,365 L765,358 L770,365 L772,378 L768,390 L762,392 L758,385 L756,375 Z" />
                {/* Russia / Northern Asia */}
                <path d="M480,65 L510,55 L545,50 L580,48 L615,52 L650,58 L680,62 L700,70 L710,82 L705,95 L690,100 L660,92 L630,88 L600,90 L570,88 L540,82 L510,78 L490,75 Z" />
              </g>

              {/* Animated dots for each region */}
              {regions.map((region, i) => (
                <g key={i}>
                  {/* Glow ring */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r="12"
                    fill="none"
                    stroke="rgba(196, 1, 238, 0.3)"
                    strokeWidth="2"
                    className="animate-pulse-dot"
                    style={{ animationDelay: region.delay }}
                  />
                  {/* Dot */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r="5"
                    fill="#D201BD"
                    className="animate-pulse-dot"
                    style={{ animationDelay: region.delay }}
                  />
                </g>
              ))}
            </svg>

            {/* Overlay text */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <p className="text-sm font-medium text-slate-400">
                Active in 100+ countries
              </p>
              <p className="mt-1 text-3xl font-extrabold text-white md:text-4xl">
                775,000+ singers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
