import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import a from "@/assets/bedroom.jpg";
import b from "@/assets/interior-living.jpg";
import c from "@/assets/pool.jpg";
import d from "@/assets/beach.jpg";
import e from "@/assets/house-exterior.jpg";
import f from "@/assets/hero-beach.jpg";

export function Gallery() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gal-item").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 80, opacity: 0, duration: 1, ease: "power3.out", delay: (i % 3) * 0.1,
        });
        gsap.to(el.querySelector("img"), {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const imgs = [a, b, c, d, e, f];
  const captions = ["Master Suite", "Great Room", "Infinity Pool", "Private Beach", "Sunset Deck", "Twilight"];

  return (
    <section ref={root} id="gallery" className="py-32 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">— Gallery</span>
            <h2 className="font-display text-5xl md:text-7xl mt-3">In frames.</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {imgs.map((src, i) => (
            <figure
              key={i}
              className="gal-item relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img src={src} alt={captions[i]} loading="lazy" className="h-[120%] w-full object-cover" />
              <figcaption className="absolute bottom-3 left-3 text-xs uppercase tracking-widest text-white bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                {captions[i]}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
