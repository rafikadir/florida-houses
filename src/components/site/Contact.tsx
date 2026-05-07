import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Contact() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-line", {
        scrollTrigger: { trigger: root.current, start: "top 70%" },
        y: 80, opacity: 0, duration: 1, stagger: 0.1, ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="contact" className="py-32 md:py-44 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <span className="cta-line inline-block text-xs uppercase tracking-[0.3em] text-accent">— Reserve</span>
        <h2 className="cta-line font-display text-6xl md:text-8xl mt-4 leading-[0.95] text-balance">
          Your <em className="text-primary">slow season</em><br/> begins here.
        </h2>
        <p className="cta-line mt-8 max-w-xl mx-auto text-muted-foreground text-lg">
          Tell us your dates and we'll respond within 24 hours with availability and a tailored quote.
        </p>

        <form className="cta-line mt-12 max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 text-left">
          <input className="rounded-full border border-border bg-card px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
          <input className="rounded-full border border-border bg-card px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Email" type="email" />
          <input className="rounded-full border border-border bg-card px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2" placeholder="Dates (e.g. June 12 – 19)" />
          <textarea className="rounded-2xl border border-border bg-card px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary sm:col-span-2 min-h-32" placeholder="Tell us about your trip…" />
          <button type="button" className="sm:col-span-2 rounded-full bg-btn text-btn-foreground px-7 py-4 text-sm font-medium hover:opacity-90 transition-opacity">
            Request availability →
          </button>
        </form>
      </div>
    </section>
  );
}
