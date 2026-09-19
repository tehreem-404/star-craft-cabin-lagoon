import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/image-frame";
import { NotFound } from "@/components/not-found";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/site";
import { formatEuro } from "@/lib/utils";

export const Route = createFileRoute("/_site/stay/$slug")({
  component: RoomPage,
  head: ({ params }) => {
    const room = rooms.find((item) => item.slug === params.slug);
    return {
      meta: [
        { title: room ? `${room.name} — Solara` : "Room — Solara" },
        { name: "description", content: room?.blurb ?? "A room at Solara." },
      ],
    };
  },
});

function RoomPage() {
  const { slug } = Route.useParams();
  const room = rooms.find((item) => item.slug === slug);
  if (!room) return <NotFound />;

  const others = rooms.filter((item) => item.slug !== room.slug);

  return (
    <main id="content" className="pt-24 md:pt-28">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="kicker">
          <Link to="/stay" className="hover:text-ink">
            Stay
          </Link>
          {" / "}
          {room.kind}
        </p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h1 className="font-serif text-display font-medium leading-none tracking-tight">
            {room.name}
          </h1>
          <p className="text-sm text-muted tabular-nums">
            {room.size} m² · {room.guests} guests · from {formatEuro(room.priceFrom)}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-5 md:px-8">
        <ImageFrame
          src={room.gallery[0] ?? room.image}
          alt={room.name}
          className="aspect-video rounded-2xl"
          priority
        />
        {room.gallery.length > 1 ? (
          <div className="mt-3 grid grid-cols-2 gap-3">
            {room.gallery.slice(1, 3).map((src) => (
              <ImageFrame
                key={src}
                src={src}
                alt=""
                className="aspect-video rounded-xl"
              />
            ))}
          </div>
        ) : null}
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-7">
          <p className="text-lede text-ink-soft">{room.blurb}</p>
          <p className="mt-6 text-ink-soft">{room.description}</p>
          <Button asChild className="mt-8" size="lg">
            <Link to="/inquire" search={{ room: room.slug }}>
              Inquire about this room
            </Link>
          </Button>
        </div>
        <aside className="md:col-span-4 md:col-start-9">
          <p className="kicker">In the room</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>{room.beds}</li>
            {room.amenities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="kicker">Also in the house</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                to="/stay/$slug"
                params={{ slug: item.slug }}
                className="group block"
              >
                <ImageFrame
                  src={item.image}
                  alt={item.name}
                  className="aspect-photo rounded-xl"
                />
                <h2 className="mt-3 font-serif text-2xl font-medium tracking-tight">
                  {item.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{item.kind}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
