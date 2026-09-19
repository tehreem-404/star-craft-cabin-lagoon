import { createFileRoute, Link } from "@tanstack/react-router";
import { ImageFrame } from "@/components/image-frame";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/site";

export const Route = createFileRoute("/_site/coast")({
  component: CoastPage,
  head: () => ({
    meta: [
      { title: "Coast — Solara" },
      {
        name: "description",
        content: "Walks, swimming, and the stone baths at Solara, on the cliff at Cala Solara.",
      },
    ],
  }),
});

function CoastPage() {
  return (
    <main id="content" className="pt-24 md:pt-28">
      <section className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="kicker">Coast</p>
        <h1 className="mt-4 max-w-2xl font-serif text-display font-medium leading-none tracking-tight">
          What the cliff is for.
        </h1>
        <p className="mt-5 max-w-xl text-lede text-ink-soft">
          The house is a place to sleep and eat. The rest of the day belongs
          to the path, the water, and a room of stone.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-20">
          {experiences.map((item, index) => (
            <article
              key={item.slug}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <ImageFrame
                src={item.image}
                alt={item.name}
                className="aspect-photo rounded-2xl"
                priority={index === 0}
              />
              <div>
                <p className="kicker">{item.time}</p>
                <h2 className="mt-3 font-serif text-title font-medium tracking-tight">
                  {item.name}
                </h2>
                <p className="mt-4 text-ink-soft">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-paper-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center md:px-8">
          <p className="max-w-md font-serif text-2xl font-medium tracking-tight">
            Ask the house to set a time for the baths, or a picnic for the chapel.
          </p>
          <Button asChild>
            <Link to="/inquire">Inquire</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
