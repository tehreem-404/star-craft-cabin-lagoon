import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  return (
    <div className="min-h-dvh bg-paper font-sans text-ink antialiased">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
