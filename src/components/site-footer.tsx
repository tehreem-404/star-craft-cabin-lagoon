import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8 md:py-16">
        <div>
          <p className="font-serif text-3xl font-medium tracking-tight">Solara</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            A sixteen-room house on the cliff at {site.place}. Open {site.season}.
          </p>
        </div>
        <div>
          <p className="kicker">The house</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/stay" className="hover:text-sage">
                Stay
              </Link>
            </li>
            <li>
              <Link to="/table" className="hover:text-sage">
                Table
              </Link>
            </li>
            <li>
              <Link to="/coast" className="hover:text-sage">
                Coast
              </Link>
            </li>
            <li>
              <Link to="/inquire" className="hover:text-sage">
                Inquire
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker">Write to us</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>{site.address}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-sage">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-sage">
                {site.phone}
              </a>
            </li>
            <li>
              Check-in {site.checkIn} · Check-out {site.checkOut}
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
