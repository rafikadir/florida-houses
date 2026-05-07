import bedroom from "@/assets/bedroom.jpg";
import living from "@/assets/interior-living.jpg";
import pool from "@/assets/pool.jpg";
import { Link } from "@tanstack/react-router";

const suites = [
  { name: "Sand Dollar Cottage", img: bedroom, tag: "Beachfront · 3BR", price: "from $980/night", slug: "sand-dollar-cottage" },
  { name: "House Gulf", img: living, tag: "Gulf View · 4BR", price: "from $1,240/night", slug: "house-gulf" },
  { name: "House Bay", img: pool, tag: "Bayside · 4BR", price: "from $1,180/night", slug: "house-bay" },
];

export function HorizontalSuites() {
  return (
    <section id="suites" className="py-32 md:py-44 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">— Spaces</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95] text-balance text-heading">
            Three houses. <em className="text-primary">One horizon.</em>
          </h2>
          <p className="mt-6 text-paragraph md:text-lg max-w-xl">
            Each home has its own character — pick the one that matches your stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suites.map((s) => (
            <article key={s.slug} className="group flex flex-col">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-6">
                <div className="text-xs uppercase tracking-[0.25em] text-accent mb-2">{s.tag}</div>
                <h3 className="font-display text-3xl md:text-4xl text-heading">{s.name}</h3>
                <div className="mt-2 text-sm text-paragraph">{s.price}</div>
                <Link
                  to="/properties/$slug"
                  params={{ slug: s.slug }}
                  className="mt-5 inline-flex items-center gap-2 bg-btn text-btn-foreground px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View property <span aria-hidden>›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
