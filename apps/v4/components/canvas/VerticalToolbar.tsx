"use client"

import * as Tooltip from "@radix-ui/react-tooltip"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type ToolId =
  | "suggest-edits" | "adjust-length-shorter" | "adjust-length-longer"
  | "reading-level" | "final-polish" | "add-emojis"
  | "review-code" | "add-logs" | "add-comments" | "fix-bugs" | "port-language"

export type Tool = { 
  id: ToolId
  label: string
  icon: LucideIcon
  onClick: () => void 
}

export function VerticalToolbar({ tools, active }: { tools: Tool[]; active?: ToolId }) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <ul className="flex flex-col gap-1">
        {tools.map((t) => {
          const Icon = t.icon
          return (
            <li key={t.id}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={t.onClick}
                    className={cn(
                      "h-10 w-10 grid place-items-center rounded-lg",
                      active === t.id ? "bg-neutral-900 text-white" : "hover:bg-neutral-100"
                    )}
                    aria-label={t.label}
                    title={t.label}
                  >
                    <Icon className="size-5" />
                  </motion.button>
                </Tooltip.Trigger>
                <Tooltip.Content side="right" sideOffset={8} className="rounded-md bg-black text-white px-2 py-1 text-xs">
                  {t.label}
                </Tooltip.Content>
              </Tooltip.Root>
            </li>
          )
        })}
      </ul>
    </Tooltip.Provider>
  )
}