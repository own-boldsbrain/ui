"use client";

import { cn } from "@/lib/utils";

export function GradientCard({
  title,
  children,
  className,
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn("ysh-gradient-border bg-elev rounded-2xl", className)}
    >
      <div className="p-4">
        {title && (
          <h3 className="ysh-text-gradient text-lg font-semibold">{title}</h3>
        )}
        <div
          className={cn(title ? "mt-2" : "", "text-[var(--geist-fg-muted)]")}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
