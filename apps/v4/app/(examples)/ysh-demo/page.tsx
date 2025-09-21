"use client"

import { GradientButton } from "@/components/ysh/gradient-button"
import { GradientCard } from "@/components/ysh/gradient-card"
import { GradientBadge } from "@/components/ysh/gradient-badge"
import { GradientIcon } from "@/components/ysh/gradient-icon"
import { useThemeConfig } from "@/components/active-theme"
import { THEMES } from "@/lib/themes"
import { Rocket } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york-v4/ui/select"

export default function Page() {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <main className="min-h-dvh bg-[var(--geist-bg)] p-6 text-[var(--geist-fg)]">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="ysh-text-gradient text-3xl font-semibold">
            Yello · Canvas Kit
          </h1>
          <Select defaultValue={activeTheme} onValueChange={setActiveTheme}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecione um tema" />
            </SelectTrigger>
            <SelectContent>
              {THEMES.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  {theme.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <GradientCard title="Ação rápida">
          <p>
            Componentes alinhados ao Geist, com stroke/borda em degradê YSH.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <GradientButton glow>Executar</GradientButton>
            <GradientBadge>Beta</GradientBadge>
            <GradientIcon Icon={Rocket} size={28} />
          </div>
        </GradientCard>

        <GradientCard title="Cores primárias do tema">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-primary text-primary-foreground flex h-20 items-center justify-center rounded-md">
              Primary
            </div>
            <div className="border-border flex h-20 items-center justify-center rounded-md border">
              Border
            </div>
            <div className="ring-ring flex h-20 items-center justify-center rounded-md ring-2">
              Ring
            </div>
          </div>
        </GradientCard>

        <p className="text-muted-foreground text-center text-sm">
          Tema atual:{" "}
          <span className="font-medium">
            {THEMES.find((t) => t.value === activeTheme)?.name}
          </span>
        </p>
      </div>
    </main>
  )
}
