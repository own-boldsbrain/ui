"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  glow?: boolean
  variant?: "default" | "outline" | "ghost"
}

export const GradientButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, glow, variant = "default", children, ...rest }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative rounded-xl px-4 py-2 font-medium",
        variant === "default" &&
          "ysh-gradient-border bg-[var(--geist-bg)] text-[var(--geist-fg)]",
        variant === "outline" &&
          "ysh-outline border border-transparent bg-transparent text-[var(--geist-fg)] hover:border-transparent",
        variant === "ghost" &&
          "bg-transparent text-[var(--geist-fg)] hover:bg-[var(--geist-bg-soft)]",
        glow &&
          variant === "default" &&
          "shadow-[0_0_0_3px_rgba(250,35,72,.08)]",
        className
      )}
      {...(rest as any)}
    >
      {variant === "ghost" ? (
        <span className="ysh-text-gradient">{children}</span>
      ) : (
        <span>{children}</span>
      )}
    </motion.button>
  )
)
GradientButton.displayName = "GradientButton";
