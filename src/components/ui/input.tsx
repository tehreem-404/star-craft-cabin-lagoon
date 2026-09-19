import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md border border-ink/15 bg-paper px-3 font-sans text-sm text-ink shadow-none outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-sage/20 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
