import { createFileRoute } from "@tanstack/react-router";
import { InquireForm } from "@/components/inquire-form";
import { site } from "@/data/site";

type InquireSearch = {
  room?: string;
};

export const Route = createFileRoute("/_site/inquire")({
  component: InquirePage,
  validateSearch: (search: Record<string, unknown>): InquireSearch => ({
    room: typeof search.room === "string" ? search.room : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Inquire — Solara" },
      {
        name: "description",
        content: "Request a stay at Solara, a sixteen-room house on the cliff in Cala Solara.",
      },
    ],
  }),
});

function InquirePage() {
  const { room } = Route.useSearch();

  return (
    <main id="content" className="pt-24 md:pt-28">
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 md:grid-cols-12 md:px-8 md:pb-28">
        <div className="md:col-span-5">
          <p className="kicker">Inquire</p>
          <h1 className="mt-4 font-serif text-display font-medium leading-none tracking-tight">
            Tell us when you would like the house.
          </h1>
          <p className="mt-5 text-lede text-ink-soft">
            We write back within a day. The season runs {site.season}. Check-in
            from {site.checkIn}.
          </p>
          <dl className="mt-10 space-y-3 text-sm text-ink-soft">
            <div>
              <dt className="kicker">Post</dt>
              <dd className="mt-1">{site.address}</dd>
            </div>
            <div>
              <dt className="kicker">Mail</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="hover:text-sage">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="kicker">Telephone</dt>
              <dd className="mt-1">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-sage">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <InquireForm initialRoom={room} />
        </div>
      </section>
    </main>
  );
}
