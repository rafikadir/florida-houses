import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import bedroom from "@/assets/bedroom.jpg";
import living from "@/assets/interior-living.jpg";
import pool from "@/assets/pool.jpg";
import beach from "@/assets/beach.jpg";

const PROPERTIES: Record<string, { name: string; tag: string; price: string; img: string; description: string; features: string[] }> = {
  "sand-dollar-cottage": {
    name: "Sand Dollar Cottage",
    tag: "Beachfront · 3BR",
    price: "from $980/night",
    img: bedroom,
    description:
      "A bright beachfront cottage with three bedrooms, an open kitchen, and a private patio steps from the sand. Designed for slow mornings and long evenings.",
    features: ["3 bedrooms · sleeps 6", "Private patio & outdoor shower", "Steps to the beach", "Fully equipped kitchen", "Fast Wi-Fi", "On-site parking"],
  },
  "house-gulf": {
    name: "House Gulf",
    tag: "Gulf View · 4BR",
    price: "from $1,240/night",
    img: living,
    description:
      "Gulf-facing windows, four bedrooms, and a calm interior built for longer stays. A wide deck holds the sunset every evening.",
    features: ["4 bedrooms · sleeps 8", "Gulf-facing deck", "Private pool", "King-size beds", "Open living & dining", "On-site parking"],
  },
  "house-bay": {
    name: "House Bay",
    tag: "Bayside · 4BR",
    price: "from $1,180/night",
    img: pool,
    description:
      "A bayside home with four bedrooms, a private pool, and quiet water views. Layouts that feel easy for families and friends.",
    features: ["4 bedrooms · sleeps 8", "Private pool & patio", "Bay views", "Contemporary interiors", "Fast Wi-Fi", "On-site parking"],
  },
};

export const Route = createFileRoute("/properties/$slug")({
  component: PropertyPage,
  head: ({ params }) => {
    const p = PROPERTIES[params.slug];
    return {
      meta: [
        { title: p ? `${p.name} — Florida Beachhouse` : "Property — Florida Beachhouse" },
        { name: "description", content: p?.description ?? "Florida Beachhouse property" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-5xl">Property not found</h1>
        <Link to="/" className="mt-6 inline-block underline">Back home</Link>
      </div>
    </div>
  ),
});

function PropertyPage() {
  const { slug } = Route.useParams();
  const p = PROPERTIES[slug];

  if (!p) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-5xl text-heading">Property not found</h1>
          <Link to="/" className="mt-6 inline-block underline">Back home</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-32">
        <article className="max-w-6xl mx-auto px-6 lg:px-10">
          <Link to="/" className="text-sm text-paragraph hover:text-heading">← Back</Link>
          <div className="mt-6 grid md:grid-cols-2 gap-10">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-accent">{p.tag}</span>
              <h1 className="font-display text-5xl md:text-6xl mt-3 text-heading leading-[0.95]">{p.name}</h1>
              <p className="mt-2 text-paragraph">{p.price}</p>
              <p className="mt-6 text-paragraph md:text-lg leading-relaxed">{p.description}</p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-paragraph">
                {p.features.map((f) => (
                  <li key={f} className="text-sm">— {f}</li>
                ))}
              </ul>
              <a
                href="/#contact"
                className="mt-10 inline-flex items-center gap-2 bg-btn text-btn-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Reserve this house <span aria-hidden>›</span>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[beach, pool, living].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={src} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
