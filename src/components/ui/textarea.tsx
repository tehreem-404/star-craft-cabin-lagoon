import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-lg border border-ink/15 bg-paper px-3 py-3 font-sans text-sm text-ink outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
