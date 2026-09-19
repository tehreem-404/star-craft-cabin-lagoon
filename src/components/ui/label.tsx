import * as React from "react";
import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "text-xs font-medium tracking-wide text-ink-soft",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
