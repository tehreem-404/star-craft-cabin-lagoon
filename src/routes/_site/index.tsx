import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ImageFrame } from "@/components/image-frame";
import { RoomCard } from "@/components/room-card";
import { Button } from "@/components/ui/button";
import { houseNotes, rooms, site } from "@/data/site";

export const Route = createFileRoute("/_site/")({
  component: Home,
  head: () => ({
    meta: [{ title: "Solara — A house on the cliff" }],
  }),
});

function Home() {
  return (
    <main id="content">
      <section className="relative min-h-dvh">
        <ImageFrame
          src="/images/hero.jpg"
          alt="Solara on the cliff above the cove at late afternoon"
          className="absolute inset-0 rounded-none"
          imgClassName="object-cover"
          framed={false}
          priority
        />
        <div className="hero-veil absolute inset-0" />
        <div className="relative flex min-h-dvh flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-16">
          <div className="mx-auto w-full max-w-6xl">
            <p className="kicker reveal text-paper/80">{site.place}</p>
            <h1 className="reveal reveal-2 mt-4 max-w-3xl font-serif text-display font-medium leading-none tracking-tight text-paper">
              A house on the cliff.
            </h1>
            <p className="reveal reveal-3 mt-5 max-w-md text-lede text-paper/80">
              Sixteen rooms. The sea below. Open {site.season}.
            </p>
            <div className="reveal reveal-4 mt-8 flex flex-wrap gap-3">
              <Button asChild variant="paper" size="lg">
                <Link to="/stay">See the rooms</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-paper/40 text-paper hover:bg-paper/10">
                <Link to="/inquire">Inquire</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-12 md:gap-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="kicker">The house</p>
          <h2 className="mt-4 font-serif text-title font-medium tracking-tight">
            Lime, linen, and a long view south.
          </h2>
        </div>
        <div className="space-y-5 text-ink-soft md:col-span-7 md:pt-8">
          <p>
            Solara is a small house on a limestone headland at Cala Solara, a
            cove the maps still call by an older name. We keep sixteen rooms,
            a kitchen that follows the boats, and a path that ends in deep water.
          </p>
          <p>
            The building is older than the road. We opened the shutters, kept
            the stone, and left the rest to the light. Come for a few nights.
            Stay long enough to learn the stairs in the dark.
          </p>
        </div>
      </section>

      <section className="px-5 md:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl">
          <ImageFrame
            src="/images/pool.jpg"
            alt="The infinity pool looking over the Tyrrhenian"
            className="aspect-video rounded-2xl"
            priority={false}
          />
        </div>
        <p className="mx-auto mt-4 max-w-6xl text-sm text-muted">
          The pool holds the afternoon. Swim before dinner, when the cliff
          throws shade.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="kicker">Stay</p>
            <h2 className="mt-4 font-serif text-title font-medium tracking-tight">
              Four rooms to begin with.
            </h2>
          </div>
          <Button asChild variant="outline">
            <Link to="/stay">
              All rooms
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {rooms.map((room) => (
            <RoomCard key={room.slug} room={room} />
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
          <ImageFrame
            src="/images/dining.jpg"
            alt="The terrace at Mare, set for dinner"
            className="aspect-terrace rounded-2xl"
          />
          <div>
            <p className="kicker">Table</p>
            <h2 className="mt-4 font-serif text-title font-medium tracking-tight">
              Dinner at Mare.
            </h2>
            <p className="mt-5 max-w-md text-ink-soft">
              One menu, two seatings. The kitchen writes it in the morning from
              whatever the boats brought and whatever the grove can spare.
              Breakfast is on the terrace until eleven.
            </p>
            <Button asChild className="mt-8" variant="solid">
              <Link to="/table">The kitchen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
        <div className="md:order-2">
          <ImageFrame
            src="/images/path.jpg"
            alt="The cliff path toward the chapel"
            className="aspect-photo rounded-2xl"
          />
        </div>
        <div className="md:order-1">
          <p className="kicker">Coast</p>
          <h2 className="mt-4 font-serif text-title font-medium tracking-tight">
            A path, a cove, a stone bath.
          </h2>
          <p className="mt-5 max-w-md text-ink-soft">
            Walk to the chapel at first light. Swim where the rock is cut.
            Book the cistern for an afternoon of water and quiet. The house
            will pack what you need.
          </p>
          <Button asChild className="mt-8" variant="outline">
            <Link to="/coast">On the coast</Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-ink/10">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <p className="kicker">House notes</p>
          <h2 className="mt-4 font-serif text-title font-medium tracking-tight">
            Practical things.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {houseNotes.map((note) => (
              <article key={note.title}>
                <h3 className="font-serif text-2xl font-medium tracking-tight">
                  {note.title}
                </h3>
                <p className="mt-3 text-ink-soft">{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sage text-paper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
          <div>
            <p className="kicker text-paper/70">
              {site.season}
            </p>
            <h2 className="mt-3 font-serif text-title font-medium tracking-tight">
              Write to the house.
            </h2>
          </div>
          <Button asChild variant="paper" size="lg">
            <Link to="/inquire">Inquire</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
