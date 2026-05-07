import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import exterior from "@/assets/house-exterior.jpg";

export function About() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-line", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
      });
      gsap.to(".about-img", {
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
        yPercent: -15, ease: "none",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="house" className="relative py-32 md:py-44 overflow-hidden bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 space-y-8">
          <span className="about-line inline-block text-xs uppercase tracking-[0.3em] text-accent">— Our Story</span>
          <h2 className="about-line font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            A <em className="text-primary">sanctuary</em> shaped by sand, sun & saltwater.
          </h2>
          <p className="about-line text-lg text-muted-foreground max-w-xl">
            Set directly on Florida's gulf coast, our house was designed to dissolve the line between inside
            and out. Whitewashed walls, raw timber, and floor-to-ceiling glass invite the ocean into every room.
          </p>
          <div className="about-line grid grid-cols-2 gap-6 max-w-md pt-4">
            {[
              ["Architecture", "Coastal modern by award-winning local studio"],
              ["Interiors", "Hand-curated, artisan-made, soulful"],
              ["Service", "Discreet 5★ concierge, on call 24/7"],
              ["Location", "30 steps to private white-sand beach"],
            ].map(([t, d]) => (
              <div key={t}>
                <div className="font-display text-xl">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-soft">
            <img src={exterior} alt="Beach house exterior" loading="lazy" className="about-img h-[120%] w-full object-cover scale-110" />
          </div>
          <div className="absolute -bottom-8 -left-8 hidden md:block bg-card border border-border rounded-2xl p-6 shadow-soft max-w-xs">
            <div className="font-display text-3xl text-primary">26°N</div>
            <div className="text-sm text-muted-foreground">Where the sun lingers longest, and the waves are warm year-round.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
