import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "muted" | "success" | "danger";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-white/10 bg-white/10 text-zinc-100",
  accent: "border-red-500/30 bg-red-500/15 text-red-200",
  muted: "border-zinc-700 bg-zinc-900 text-zinc-400",
  success: "border-emerald-500/30 bg-emerald-500/15 text-emerald-200",
  danger: "border-red-500/30 bg-red-950 text-red-100",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-md border px-2 text-xs font-semibold",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
