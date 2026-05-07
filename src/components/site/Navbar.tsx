import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const links = [
  { label: "Home", href: "/" },
  { label: "Sand Dollar Cottage", href: "/properties/sand-dollar-cottage" },
  { label: "House Gulf", href: "/properties/house-gulf" },
  { label: "House Bay", href: "/properties/house-bay" },
  { label: "Island Information", href: "/#experiences" },
  { label: "Prices & Reservation", href: "/#contact" },
];

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="3.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 44 L14 30 L32 14 L50 30 L50 44 Z" />
        <path d="M6 54 Q17 47 28 54 T50 54 L58 52" />
      </g>
    </svg>
  );
}

export function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const linksColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(ref.current, { y: -40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (!drawerRef.current) return;
    const linkEls = linksColRef.current?.querySelectorAll(".nav-drawer__link") ?? [];
    if (open) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        linkEls,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.06, delay: 0.15 }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(linkEls, { y: 60, opacity: 0, duration: 0.5, ease: "power3.in", stagger: { each: 0.04, from: "end" } });
    }
  }, [open]);

  const transparent = !scrolled && !open;

  return (
    <>
      <header
        ref={ref}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent" : "bg-background border-b border-border"
        }`}
        style={{ color: transparent ? "#ffffff" : "var(--foreground)" }}
      >
        {transparent && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -translate-y-6"
            style={{
              height: "min(260px, 36vh)",
              transform: "translateY(-26px) scaleY(1.34)",
              transformOrigin: "top",
              background:
                "radial-gradient(96% 100% at 50% 0%, rgb(2 20 30 / 30%) 0%, rgb(2 20 30 / 16%) 34%, rgb(2 20 30 / 7%) 58%, rgb(2 20 30 / 2%) 76%, rgb(2 20 30 / 0%) 100%), linear-gradient(180deg, rgb(2 20 30 / 14%) 0%, rgb(2 20 30 / 4%) 44%, rgb(2 20 30 / 0%) 100%)",
              maskImage:
                "linear-gradient(180deg, rgb(0 0 0 / 1) 0%, rgb(0 0 0 / 0.95) 28%, rgb(0 0 0 / 0.78) 54%, rgb(0 0 0 / 0.48) 74%, rgb(0 0 0 / 0.2) 88%, rgb(0 0 0 / 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(180deg, rgb(0 0 0 / 1) 0%, rgb(0 0 0 / 0.95) 28%, rgb(0 0 0 / 0.78) 54%, rgb(0 0 0 / 0.48) 74%, rgb(0 0 0 / 0.2) 88%, rgb(0 0 0 / 0) 100%)",
            }}
          />
        )}
        <div className="relative z-10 mx-auto flex w-full max-w-[1920px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" aria-label="Florida Beach Houses" className="inline-flex h-9 items-center" style={{ color: "currentColor" }}>
            <BrandLogo className="block h-full w-auto" />
          </a>

          <nav className="hidden" aria-label="Primary navigation">
            <a href="#top" className="font-display text-base">Home</a>
          </nav>

          <div className="inline-flex items-center gap-1">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="relative inline-flex h-8 w-8 items-center justify-center rounded-[10px] transition-colors hover:bg-[color-mix(in_srgb,currentColor_14%,transparent)]"
            >
              {dark ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" /><path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" /><path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
                </svg>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="inline-flex h-8 w-8 flex-col items-center justify-center gap-1 rounded-[10px] transition-colors hover:bg-[color-mix(in_srgb,currentColor_14%,transparent)]"
            >
              <span className="block h-[1.5px] w-[18px] rounded-sm bg-current" />
              <span className="block h-[1.5px] w-[18px] rounded-sm bg-current" />
              <span className="block h-[1.5px] w-[18px] rounded-sm bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer */}
      <div
        ref={drawerRef}
        className={`fixed inset-0 z-[60] ${open ? "pointer-events-auto visible" : "pointer-events-none invisible"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute inset-0 cursor-default border-0 p-0 transition-all duration-700"
          style={{
            opacity: open ? 1 : 0,
            backdropFilter: open ? "blur(7.2px)" : "blur(0)",
            WebkitBackdropFilter: open ? "blur(7.2px)" : "blur(0)",
            background:
              "linear-gradient(90deg, rgb(from var(--background) r g b / 0) 0%, rgb(from var(--background) r g b / 0.05) 52%, rgb(from var(--background) r g b / 0.35) 75%, rgb(from var(--background) r g b / 0.75) 89%, rgb(from var(--background) r g b / 1) 100%)",
            transition: open
              ? "opacity 0.8s cubic-bezier(0.19,1,0.22,1), backdrop-filter 0.8s cubic-bezier(0.19,1,0.22,1)"
              : "opacity 0.9s cubic-bezier(0.64,0,0.78,0) 0.3s, backdrop-filter 0.9s cubic-bezier(0.64,0,0.78,0) 0.3s",
          }}
        />

        <nav
          aria-label="Mobile navigation"
          className="pointer-events-none absolute inset-y-0 right-0 flex w-[90vw] flex-col items-end justify-center px-8 py-8 lg:pr-[12.5vw]"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="pointer-events-auto absolute right-4 top-4 inline-flex items-center gap-1 border-0 bg-transparent p-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-sm font-light lowercase tracking-wide">close</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-[10px] transition-all hover:bg-[color-mix(in_srgb,currentColor_14%,transparent)]">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </span>
          </button>

          <div ref={linksColRef} className="pointer-events-auto flex flex-col items-start gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="nav-drawer__link group relative block self-start py-2 px-2 font-display font-light text-muted-foreground transition-colors hover:text-foreground"
                style={{ fontSize: "clamp(2rem, 3.6vw, 3.25rem)", lineHeight: 0.98, letterSpacing: "-0.045em" }}
              >
                <span className="relative inline-block">
                  {l.label}
                  <span className="pointer-events-none absolute left-[10%] right-[22%] h-[3.2px] rounded-full bg-foreground origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" style={{ top: "calc(1.05em + 5px)" }} />
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
