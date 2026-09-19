import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/image-frame";
import { Button } from "@/components/ui/button";
import { menu } from "@/data/site";

export const Route = createFileRoute("/_site/table")({
  component: TablePage,
  head: () => ({
    meta: [
      { title: "Table — Solara" },
      {
        name: "description",
        content: "Dinner at Mare: one menu, two seatings, from the boats and the grove.",
      },
    ],
  }),
});

function TablePage() {
  return (
    <main id="content" className="pt-24 md:pt-28">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="kicker">{menu.kitchen}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-display font-medium leading-none tracking-tight">
          A single menu, written in the morning.
        </h1>
        <p className="mt-5 max-w-xl text-lede text-ink-soft">{menu.note}</p>
      </section>

      <section className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 px-5 md:h-96 md:flex-row md:px-8">
        <ImageFrame
          src="/images/dining.jpg"
          alt="The terrace at Mare"
          className="h-72 rounded-2xl md:h-full md:w-3/5"
          priority
        />
        <ImageFrame
          src="/images/dish.jpg"
          alt="The catch, plated"
          className="h-72 rounded-2xl md:h-full md:flex-1"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <p className="kicker">This evening</p>
          <h2 className="mt-4 font-serif text-title font-medium tracking-tight">
            Seatings at {menu.seating}.
          </h2>
          <p className="mt-5 text-ink-soft">
            Dinner is for the house. If you are not staying with us, write
            ahead — we keep two chairs when we can.
          </p>
          <p className="mt-4 text-sm text-muted">{menu.wine}</p>
          <Button asChild className="mt-8">
            <Link to="/inquire">Ask for a table</Link>
          </Button>
        </div>
        <ol className="space-y-8 md:col-span-6 md:col-start-7">
          {menu.courses.map((course, index) => (
            <li key={course.name} className="border-t border-ink/10 pt-6">
              <p className="kicker">
                {String(index + 1).padStart(2, "0")} · {course.name}
              </p>
              <p className="mt-2 font-serif text-2xl font-medium tracking-tight">
                {course.dish}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
