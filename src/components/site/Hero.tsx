import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import hero from "@/assets/hero-beach.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 30, opacity: 0, duration: 0.8, delay: 0.4 })
        .from(".hero-word", { y: 120, opacity: 0, duration: 1.1, stagger: 0.08 }, "-=0.4")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-stat", { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3");

      gsap.to(".hero-bg", {
        yPercent: 25,
        scale: 1.15,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-content", {
        yPercent: -20,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="hero-bg absolute inset-0 will-change-transform">
        <video
          src="https://luxury-creponne-109c66.netlify.app/assets/hero/florida-beach-aerial-hero-desktop-1080p.webm"
          // poster={hero}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="hero-content relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em]">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Private Coastal Estate · Florida
        </span>
        <h1 className="font-display capitalize mt-8 text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] font-medium text-balance">
          <span className="block overflow-hidden"><span className="hero-word inline-block">Where</span> <span className="hero-word inline-block">tides</span></span>
          <span className="block overflow-hidden"><span className="hero-word inline-block">meet</span> <span className="hero-word inline-block">stillness</span>.</span>
        </h1>
        <p className="hero-sub mt-8 max-w-xl text-base md:text-lg text-white/80">
          A barefoot luxury beachfront retreat on Florida's gulf coast — designed for slow mornings,
          golden afternoons, and unforgettable nights under the stars.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="#suites" className="hero-cta inline-flex items-center gap-2 rounded-full bg-btn px-7 py-3.5 text-sm font-medium text-btn-foreground hover:shadow-glow transition-shadow">
            Reserve your stay →
          </a>
          <a href="#house" className="hero-cta inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 backdrop-blur px-7 py-3.5 text-sm font-medium text-white hover:bg-white/15 transition-colors">
            Discover the house
          </a>
        </div>

        <div className="absolute bottom-10 left-0 right-0 px-6">
          <div className="mx-auto max-w-3xl grid grid-cols-3 gap-4 text-center text-white/85">
            {[
              { k: "6", v: "Suites" },
              { k: "180°", v: "Ocean view" },
              { k: "4.9★", v: "Guest rating" },
            ].map((s) => (
              <div key={s.v} className="hero-stat">
                <div className="font-display text-3xl md:text-4xl">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
