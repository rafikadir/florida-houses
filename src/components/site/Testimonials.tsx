import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const quotes = [
  { q: "We came for a weekend and stayed a week. The house breathes with the ocean.", a: "— Amelia R., NYC" },
  { q: "The most magical sunsets we've ever witnessed. The chef? Otherworldly.", a: "— Daniel & Sofia, London" },
  { q: "Every detail considered. We've already booked next year.", a: "— The Hartwell Family" },
];

export function Testimonials() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".q-card", {
        scrollTrigger: { trigger: root.current, start: "top 75%" },
        y: 60, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="py-32 bg-gradient-ocean text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">— Guests</span>
          <h2 className="font-display text-5xl md:text-7xl mt-3">Whispered, fondly.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="q-card bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15">
              <div className="text-accent text-5xl font-display leading-none mb-4">"</div>
              <p className="font-display text-xl md:text-2xl leading-snug">{q.q}</p>
              <footer className="mt-6 text-sm text-white/70">{q.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
