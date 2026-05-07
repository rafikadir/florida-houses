import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  { n: "01", t: "Prime Locations", d: "Near the beach, dining, and local spots." },
  { n: "02", t: "Private Amenities", d: "Pools, patios, and space to slow down." },
  { n: "03", t: "Room to Unwind", d: "Comfortable rooms and layouts that feel easy." },
  { n: "04", t: "Longer Stays", d: "Layouts built for practical comfort over a full week and beyond." },
  { n: "05", t: "Quiet Details", d: "Soft finishes, thoughtful amenities, and a calmer rhythm throughout." },
  { n: "06", t: "Florida Mood", d: "Bright rooms, warm light, and spaces shaped around time away." },
];

export function Experiences() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-row", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 80, opacity: 0, stagger: 0.15, duration: 1, ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="experiences" className="py-32 md:py-44 bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="exp-row max-w-3xl mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">— Experiences</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95] text-balance">
            Crafted moments, <em className="text-primary">unhurried</em>.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {items.map((it) => (
            <div key={it.n} className="exp-row group grid grid-cols-12 gap-6 py-10 items-baseline cursor-pointer hover:bg-secondary/40 transition-colors px-2">
              <div className="col-span-2 md:col-span-1 font-display text-xl text-accent">{it.n}</div>
              <h3 className="col-span-10 md:col-span-4 font-display text-3xl md:text-5xl group-hover:translate-x-2 transition-transform">{it.t}</h3>
              <p className="col-span-12 md:col-span-6 text-muted-foreground md:text-lg">{it.d}</p>
              <div className="col-span-12 md:col-span-1 text-right text-2xl text-foreground/40 group-hover:text-accent transition-colors">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
