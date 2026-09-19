import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ImageFrame } from "@/components/image-frame";
import type { Room } from "@/data/site";
import { formatEuro } from "@/lib/utils";

export function RoomCard({ room }: { room: Room }) {
  return (
    <Link
      to="/stay/$slug"
      params={{ slug: room.slug }}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
    >
      <ImageFrame
        src={room.image}
        alt={room.name}
        className="aspect-photo rounded-xl"
        imgClassName="transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="kicker">{room.kind}</p>
          <h3 className="mt-1 font-serif text-2xl font-medium tracking-tight text-ink">
            {room.name}
          </h3>
          <p className="mt-1 text-sm text-muted">
            {room.size} m² · {room.guests} guests · from {formatEuro(room.priceFrom)}
          </p>
        </div>
        <ArrowUpRight
          className="mt-6 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
