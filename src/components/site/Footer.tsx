import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import beach from "@/assets/beach.jpg";
import bedroom from "@/assets/bedroom.jpg";
import hero from "@/assets/hero-beach.jpg";
import exterior from "@/assets/house-exterior.jpg";
import interior from "@/assets/interior-living.jpg";
import pool from "@/assets/pool.jpg";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [bedroom, exterior, hero, interior, pool, beach, bedroom, exterior, interior, pool, beach, hero];

export function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".arc-img", {
        scale: 0.4,
        opacity: 0,
        y: 80,
        rotation: (i) => (i % 2 === 0 ? -20 : 20),
        stagger: { each: 0.06, from: "center" },
        ease: "power3.out",
        duration: 1.1,
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
      gsap.from(".arc-center > *", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        duration: 0.9,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Arc layout: images spread across a tall semicircle above the center content
  const total = IMAGES.length;
  const radiusX = 620;
  const radiusY = 720;

  return (
    <footer ref={ref} className="relative bg-secondary/40 overflow-hidden pt-32 pb-10">
      {/* Arc of images */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative h-[760px] md:h-[820px]">
          <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0">
            {IMAGES.map((src, i) => {
              const startDeg = -200;
              const endDeg = 20;
              const t = total === 1 ? 0.5 : i / (total - 1);
              const angle = (startDeg + (endDeg - startDeg) * t) * (Math.PI / 180);
              const x = Math.cos(angle) * radiusX;
              const y = Math.sin(angle) * radiusY;
              const rot = (startDeg + (endDeg - startDeg) * t) + 90;
              const size = 140 + (i % 3) * 14;
              return (
                <div
                  key={i}
                  className="arc-img absolute rounded-[28px] overflow-hidden shadow-soft border-[6px] border-white bg-white"
                  style={{
                    width: size,
                    height: size,
                    left: x,
                    top: y,
                    transform: `translate(-50%, -50%) rotate(${rot}deg)`,
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" style={{ transform: `rotate(${-rot}deg) scale(1.4)` }} />
                </div>
              );
            })}
          </div>

          {/* Center footer content */}
          <div className="arc-center absolute inset-0 flex flex-col items-center px-4 pt-72 md:pt-96">
            <div className="font-display text-3xl md:text-4xl text-heading">
              Florida<span className="text-accent">.</span>Beachhouse
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl text-heading text-balance max-w-2xl leading-[1.05] text-center">
              Your Coastal <br /> Escape Awaits
            </h2>
            <p className="mt-4 max-w-md text-paragraph text-center text-sm">
              A private beachfront retreat on Florida's gulf coast. Hosted with quiet care since 2014.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 bg-btn text-btn-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book Your Stay <span aria-hidden>›</span>
            </a>

            {/* Inner footer columns - sits within the arc */}
            <div className="mt-8 w-full max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-accent mb-2">The House</div>
                <ul className="space-y-1 text-sm text-paragraph">
                  <li>Six Suites</li>
                  <li>Infinity Pool</li>
                  <li>Private Chef</li>
                </ul>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-accent mb-2">Visit</div>
                <ul className="space-y-1 text-sm text-paragraph">
                  <li>Anna Maria Island, FL</li>
                  <li>+1 (941) 555-0188</li>
                  <li>stay@floridabeach.house</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-[10px] uppercase tracking-widest text-accent mb-2">Follow</div>
                <ul className="space-y-1 text-sm text-paragraph">
                  <li>Instagram</li>
                  <li>Pinterest</li>
                  <li>Journal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-12 max-w-7xl mx-auto px-6 lg:px-10 pt-6 text-xs flex flex-col sm:flex-row items-center justify-center gap-2 text-paragraph text-center">
        <span>© {new Date().getFullYear()} Florida Beachhouse. All rights reserved.</span>
        <span className="hidden sm:inline">·</span>
        <span>Crafted with salt air & sunshine.</span>
      </div>
    </footer>
  );
}
