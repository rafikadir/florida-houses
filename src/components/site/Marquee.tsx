import { Waves, Droplets, BedDouble, Utensils, Wifi, Car, Sofa } from "lucide-react";

const items = [
  { label: "Ocean-View Homes", Icon: Waves },
  { label: "Private Pool Options", Icon: Droplets },
  { label: "King-Size Bedrooms", Icon: BedDouble },
  { label: "Fully Equipped Kitchens", Icon: Utensils },
  { label: "Fast Reliable Wi-Fi", Icon: Wifi },
  { label: "Easy On-Site Parking", Icon: Car },
  { label: "Contemporary Interiors", Icon: Sofa },
];

export function Marquee() {
  const list = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/40 py-6 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {list.map(({ label, Icon }, i) => (
          <span key={i} className="font-display text-2xl md:text-4xl text-foreground/70 inline-flex items-center gap-4">
            <Icon className="h-7 w-7 md:h-9 md:w-9 text-accent shrink-0" strokeWidth={1.5} />
            {label}
            {/* <span className="text-accent mx-6">✦</span> */}
          </span>
        ))}
      </div>
    </div>
  );
}
