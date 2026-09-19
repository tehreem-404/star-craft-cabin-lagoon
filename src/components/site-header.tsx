import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/stay", label: "Stay" },
  { to: "/table", label: "Table" },
  { to: "/coast", label: "Coast" },
] as const;

function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="13" r="6.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 22.5h24" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const overlay = isHome && !scrolled;
  const tone = overlay ? "text-paper" : "text-ink";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-200",
        overlay ? "bg-transparent" : "bg-paper/92 shadow-border backdrop-blur-md",
      )}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        <Link
          to="/"
          className={cn(
            "flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage",
            tone,
          )}
        >
          <Mark className="size-7" />
          <span className="font-serif text-xl font-medium tracking-wide md:text-2xl">
            Solara
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative text-sm font-medium tracking-wide transition-opacity duration-150 hover:opacity-70",
                  tone,
                  active && "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:bg-current",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant={overlay ? "paper" : "solid"} size="sm" className="hidden sm:inline-flex">
            <Link to="/inquire">Inquire</Link>
          </Button>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className={cn(
                  "pressable inline-flex size-11 items-center justify-center rounded-md md:hidden",
                  tone,
                )}
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
              <Dialog.Content
                className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-paper px-6 py-6 text-ink shadow-border focus:outline-none"
              >
                <Dialog.Description className="sr-only">
                  House navigation
                </Dialog.Description>
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-serif text-2xl font-medium">Solara</Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="pressable inline-flex size-11 items-center justify-center rounded-md"
                      aria-label="Close menu"
                    >
                      <X className="size-5" strokeWidth={1.5} />
                    </button>
                  </Dialog.Close>
                </div>
                <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
                  {[...nav, { to: "/inquire", label: "Inquire" }].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="rounded-md py-3 font-serif text-3xl font-medium tracking-tight"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <p className="mt-auto text-sm text-muted">Cala Solara, Campania</p>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
