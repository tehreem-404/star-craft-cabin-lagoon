import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <p className="kicker">Lost the path</p>
      <h1 className="mt-4 font-serif text-title font-medium tracking-tight">
        This page has gone out with the tide.
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The house is still here. Come back to the terrace.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Return to Solara</Link>
      </Button>
    </main>
  );
}
