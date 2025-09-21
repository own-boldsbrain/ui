// lib/ysh/tailwind-config.ts
import type { Config } from "tailwindcss";

export const yshTailwindConfig = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        bg: "var(--geist-bg)",
        elev: "var(--geist-elev)",
        border: "var(--geist-border)",
        fg: "var(--geist-fg)",
        muted: "var(--geist-fg-muted)",
        subtle: "var(--geist-fg-subtle)",
        ysh: {
          pink: "var(--ysh-pink)",
          orange: "var(--ysh-orange)",
          amber: "var(--ysh-amber)",
          gold: "var(--ysh-gold)",
          cream: "var(--ysh-cream)",
        },
      },
      boxShadow: {
        geist: "var(--geist-shadow-md)",
        "geist-sm": "var(--geist-shadow-sm)",
      },
      backgroundImage: {
        "ysh-linear": "var(--ysh-linear)",
        "ysh-conic": "var(--ysh-conic)",
        "ysh-radial": "var(--ysh-radial)",
      },
    },
  },
} satisfies Partial<Config["theme"]>;
