import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { HorizontalSuites } from "@/components/site/HorizontalSuites";
import { Experiences } from "@/components/site/Experiences";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Florida Beachhouse — A Private Coastal Retreat" },
      { name: "description", content: "Beachfront luxury on Florida's gulf coast. Six suites, infinity pool, private chef and bespoke experiences." },
      { property: "og:title", content: "Florida Beachhouse — A Private Coastal Retreat" },
      { property: "og:description", content: "Beachfront luxury on Florida's gulf coast." },
    ],
  }),
});

function Index() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <HorizontalSuites />
        <Experiences />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
