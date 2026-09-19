import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { RoomCard } from "@/components/room-card";
import { rooms, viewLabels, type RoomView } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/stay/")({
  component: StayPage,
  head: () => ({
    meta: [
      { title: "Stay — Solara" },
      {
        name: "description",
        content: "Sixteen rooms on the cliff at Cala Solara. Suites, a garden room, and a small house of its own.",
      },
    ],
  }),
});

const filters: Array<"all" | RoomView> = ["all", "sea", "garden", "house"];

function StayPage() {
  const [filter, setFilter] = useState<"all" | RoomView>("all");
  const visible = useMemo(
    () => (filter === "all" ? rooms : rooms.filter((room) => room.view === filter)),
    [filter],
  );

  return (
    <main id="content" className="pt-24 md:pt-28">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="kicker">Stay</p>
        <h1 className="mt-4 max-w-2xl font-serif text-display font-medium leading-none tracking-tight">
          Rooms that face the water, the grove, or the dusk.
        </h1>
        <p className="mt-5 max-w-xl text-lede text-ink-soft">
          Sixteen in the house. Four we show here — the ones guests write
          back about.
        </p>

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter rooms">
          {filters.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={filter === key}
              onClick={() => setFilter(key)}
              className={cn(
                "pressable h-11 min-h-11 rounded-full px-4 text-sm font-medium",
                filter === key
                  ? "bg-ink text-paper"
                  : "bg-paper-deep text-ink hover:bg-stone",
              )}
            >
              {viewLabels[key]}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        {visible.length === 0 ? (
          <p className="text-muted">Nothing in that corner of the house.</p>
        ) : (
          <div className="grid gap-12 sm:grid-cols-2">
            {visible.map((room) => (
              <RoomCard key={room.slug} room={room} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
