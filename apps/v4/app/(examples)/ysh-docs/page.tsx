"use client"

import { GradientCard } from "@/components/ysh/gradient-card"
import { GradientButton } from "@/components/ysh/gradient-button"
import { GradientBadge } from "@/components/ysh/gradient-badge"
import { GradientIcon } from "@/components/ysh/gradient-icon"
import { useThemeConfig } from "@/components/active-theme"
import { THEMES } from "@/lib/themes"
import { Code, Rocket } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"

export default function YshDocsPage() {
  const { activeTheme, setActiveTheme } = useThemeConfig()

  return (
    <main className="min-h-dvh bg-[var(--geist-bg)] p-6 text-[var(--geist-fg)]">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="ysh-text-gradient mb-2 text-4xl font-semibold">
              YSH Theme Kit
            </h1>
            <p className="text-[var(--geist-fg-muted)]">
              Kit de tema com degradês e componentes para o Yello / shadcn UI
            </p>
          </div>
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

        <Tabs defaultValue="visaogeral">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="visaogeral">Visão Geral</TabsTrigger>
            <TabsTrigger value="componentes">Componentes</TabsTrigger>
            <TabsTrigger value="utilidades">Utilidades CSS</TabsTrigger>
            <TabsTrigger value="instalacao">Instalação</TabsTrigger>
          </TabsList>

          <TabsContent value="visaogeral" className="mt-6 space-y-6">
            <GradientCard title="Sobre o YSH Theme Kit">
              <p>
                O YSH Theme Kit é uma coleção de componentes e utilidades CSS
                para criar interfaces com o estilo visual Yello - utilizando
                degradês nos tons de rosa, laranja, âmbar e dourado.
              </p>
              <p className="mt-2">
                Este kit foi projetado para funcionar com o shadcn/ui e pode ser
                usado de duas formas:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Como tema global através do seletor de temas do sistema</li>
                <li>
                  Como componentes independentes que podem ser usados em
                  qualquer tema
                </li>
              </ul>
            </GradientCard>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <GradientCard title="Componentes">
                <p>O kit inclui componentes React com estilos de degradê:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>GradientButton - Botão com borda em degradê</li>
                  <li>GradientCard - Card com borda em degradê</li>
                  <li>GradientBadge - Badge com texto em degradê</li>
                  <li>GradientIcon - Ícone com preenchimento em degradê</li>
                </ul>
              </GradientCard>

              <GradientCard title="Utilidades CSS">
                <p>Classes CSS para aplicar estilos de degradê:</p>
                <ul className="mt-2 list-disc space-y-1 pl-6">
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      ysh-gradient-border
                    </code>{" "}
                    - Borda com degradê
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      ysh-outline
                    </code>{" "}
                    - Outline com degradê no hover
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      ysh-text-gradient
                    </code>{" "}
                    - Texto com degradê
                  </li>
                </ul>
              </GradientCard>
            </div>
          </TabsContent>

          <TabsContent value="componentes" className="mt-6 space-y-6">
            <GradientCard title="GradientButton">
              <p className="mb-4">
                Botão com borda em degradê e efeito de glow opcional.
              </p>

              <div className="mt-4 flex flex-wrap gap-4">
                <GradientButton>Padrão</GradientButton>
                <GradientButton glow>Com Glow</GradientButton>
                <GradientButton variant="outline">Outline</GradientButton>
                <GradientButton variant="ghost">Ghost</GradientButton>
              </div>

              <div className="bg-muted mt-6 rounded-md p-4">
                <p className="mb-2 text-sm font-medium">Exemplo de uso:</p>
                <pre className="overflow-x-auto text-xs">
                  {`import { GradientButton } from "@/components/ysh/gradient-button"

export default function Page() {
  return (
    <GradientButton glow>Botão com Glow</GradientButton>
  )
}`}
                </pre>
              </div>
            </GradientCard>

            <GradientCard title="GradientCard">
              <p className="mb-4">
                Card com borda em degradê. Aceita uma prop 'title' opcional.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <GradientCard title="Card com Título">
                  Conteúdo do card com título
                </GradientCard>
                <GradientCard>Card sem título</GradientCard>
              </div>

              <div className="bg-muted mt-6 rounded-md p-4">
                <p className="mb-2 text-sm font-medium">Exemplo de uso:</p>
                <pre className="overflow-x-auto text-xs">
                  {`import { GradientCard } from "@/components/ysh/gradient-card"

export default function Page() {
  return (
    <GradientCard title="Meu Card">
      Conteúdo do card
    </GradientCard>
  )
}`}
                </pre>
              </div>
            </GradientCard>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <GradientCard title="GradientBadge">
                <p className="mb-4">Badge com texto em degradê.</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <GradientBadge>Badge</GradientBadge>
                  <GradientBadge>YSH</GradientBadge>
                  <GradientBadge>Novo</GradientBadge>
                </div>

                <div className="bg-muted mt-6 rounded-md p-4">
                  <p className="mb-2 text-sm font-medium">Exemplo de uso:</p>
                  <pre className="overflow-x-auto text-xs">
                    {`import { GradientBadge } from "@/components/ysh/gradient-badge"

export default function Page() {
  return <GradientBadge>Badge</GradientBadge>
}`}
                  </pre>
                </div>
              </GradientCard>

              <GradientCard title="GradientIcon">
                <p className="mb-4">Ícone com preenchimento em degradê.</p>

                <div className="mt-4 flex items-center gap-4">
                  <GradientIcon Icon={Rocket} size={24} />
                  <GradientIcon Icon={Code} size={32} />
                  <GradientIcon Icon={Rocket} size={48} />
                </div>

                <div className="bg-muted mt-6 rounded-md p-4">
                  <p className="mb-2 text-sm font-medium">Exemplo de uso:</p>
                  <pre className="overflow-x-auto text-xs">
                    {`import { GradientIcon } from "@/components/ysh/gradient-icon"
import { Rocket } from "lucide-react"

export default function Page() {
  return <GradientIcon Icon={Rocket} size={32} />
}`}
                  </pre>
                </div>
              </GradientCard>
            </div>
          </TabsContent>

          <TabsContent value="utilidades" className="mt-6 space-y-6">
            <GradientCard title="Utilidades CSS">
              <p>
                O YSH Theme Kit inclui várias classes utilitárias CSS que podem
                ser aplicadas diretamente a elementos HTML.
              </p>

              <h3 className="mt-6 mb-2 text-lg font-medium">
                Borda com Degradê
              </h3>
              <div className="border-border bg-card rounded-md border p-6">
                <div className="ysh-gradient-border bg-background rounded-md p-4">
                  Elemento com borda em degradê usando{" "}
                  <code className="bg-muted rounded px-1 py-0.5">
                    ysh-gradient-border
                  </code>
                </div>
                <pre className="bg-muted mt-4 overflow-x-auto rounded-md p-3 text-xs">
                  {`<div className="ysh-gradient-border p-4 rounded-md bg-background">
  Elemento com borda em degradê
</div>`}
                </pre>
              </div>

              <h3 className="mt-6 mb-2 text-lg font-medium">
                Outline com Degradê no Hover
              </h3>
              <div className="border-border bg-card rounded-md border p-6">
                <div className="ysh-outline bg-background border-border rounded-md border p-4 hover:border-transparent">
                  Passe o mouse aqui para ver o outline em degradê
                </div>
                <pre className="bg-muted mt-4 overflow-x-auto rounded-md p-3 text-xs">
                  {`<div className="ysh-outline p-4 rounded-md border border-border hover:border-transparent">
  Passe o mouse aqui para ver o outline em degradê
</div>`}
                </pre>
              </div>

              <h3 className="mt-6 mb-2 text-lg font-medium">
                Texto com Degradê
              </h3>
              <div className="border-border bg-card rounded-md border p-6">
                <h4 className="ysh-text-gradient text-2xl font-bold">
                  Texto com Degradê
                </h4>
                <pre className="bg-muted mt-4 overflow-x-auto rounded-md p-3 text-xs">
                  {`<h4 className="ysh-text-gradient text-2xl font-bold">
  Texto com Degradê
</h4>`}
                </pre>
              </div>

              <h3 className="mt-6 mb-2 text-lg font-medium">Variáveis CSS</h3>
              <div className="border-border bg-card rounded-md border p-6">
                <p className="mb-2">
                  O tema define as seguintes variáveis CSS:
                </p>
                <ul className="list-disc space-y-1 pl-6">
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-pink
                    </code>
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-orange
                    </code>
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-amber
                    </code>
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-gold
                    </code>
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-cream
                    </code>
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-linear
                    </code>{" "}
                    - degradê linear
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-conic
                    </code>{" "}
                    - degradê cônico
                  </li>
                  <li>
                    <code className="bg-muted rounded px-1 py-0.5">
                      --ysh-radial
                    </code>{" "}
                    - degradê radial
                  </li>
                </ul>
              </div>
            </GradientCard>
          </TabsContent>

          <TabsContent value="instalacao" className="mt-6 space-y-6">
            <GradientCard title="Instalação e Configuração">
              <h3 className="mb-4 text-lg font-medium">
                1. Adicione o tema YSH à lista de temas
              </h3>
              <p className="mb-2">
                Adicione "YSH" ao array THEMES em{" "}
                <code className="bg-muted rounded px-1 py-0.5">
                  lib/themes.ts
                </code>
                :
              </p>
              <pre className="bg-muted mb-6 overflow-x-auto rounded-md p-3 text-xs">
                {`export const THEMES = [
  // outros temas...
  {
    name: "YSH",
    value: "ysh",
  },
]`}
              </pre>

              <h3 className="mb-4 text-lg font-medium">
                2. Crie o arquivo CSS do tema
              </h3>
              <p className="mb-2">
                Crie um arquivo{" "}
                <code className="bg-muted rounded px-1 py-0.5">
                  styles/ysh-theme.css
                </code>{" "}
                com as variáveis e utilidades CSS:
              </p>
              <pre className="bg-muted mb-6 overflow-x-auto rounded-md p-3 text-xs">
                {`:root {
  /* Geist neutrals */
  --geist-bg: #ffffff;
  --geist-fg: #111111;
  /* ... outras variáveis ... */

  /* YSH palette */
  --ysh-pink: #FA2348;
  --ysh-orange: #F95120;
  --ysh-amber: #FB8304;
  --ysh-gold: #FAB013;
  --ysh-cream: #F9DFCA;

  /* Variáveis para integração com o sistema de temas */
  --ysh-primary: var(--ysh-pink);
  --ysh-primary-foreground: white;
  --ysh-accent: var(--ysh-orange);
  /* ... outras variáveis ... */

  /* Gradients */
  --ysh-linear: linear-gradient(135deg,
      var(--ysh-pink) 0%,
      var(--ysh-orange) 30%,
      var(--ysh-amber) 60%,
      var(--ysh-gold) 85%,
      var(--ysh-cream) 100%);
  /* ... outros gradientes ... */
}

/* Utilities CSS */
.ysh-gradient-border {
  position: relative;
  border-radius: inherit;
}
/* ... outras utilidades ... */`}
              </pre>

              <h3 className="mb-4 text-lg font-medium">
                3. Importe o CSS do tema
              </h3>
              <p className="mb-2">
                Importe o arquivo CSS em{" "}
                <code className="bg-muted rounded px-1 py-0.5">
                  styles/globals.css
                </code>
                :
              </p>
              <pre className="bg-muted mb-6 overflow-x-auto rounded-md p-3 text-xs">
                {`@import "./themes.css";
@import "./ysh-theme.css";
/* outros imports */`}
              </pre>

              <h3 className="mb-4 text-lg font-medium">
                4. Crie os componentes YSH
              </h3>
              <p className="mb-2">
                Crie os componentes na pasta{" "}
                <code className="bg-muted rounded px-1 py-0.5">
                  components/ysh/
                </code>
                :
              </p>
              <ul className="mb-6 list-disc space-y-1 pl-6">
                <li>
                  <code className="bg-muted rounded px-1 py-0.5">
                    gradient-button.tsx
                  </code>
                </li>
                <li>
                  <code className="bg-muted rounded px-1 py-0.5">
                    gradient-card.tsx
                  </code>
                </li>
                <li>
                  <code className="bg-muted rounded px-1 py-0.5">
                    gradient-badge.tsx
                  </code>
                </li>
                <li>
                  <code className="bg-muted rounded px-1 py-0.5">
                    gradient-icon.tsx
                  </code>
                </li>
                <li>
                  <code className="bg-muted rounded px-1 py-0.5">
                    index.tsx
                  </code>{" "}
                  (para exportações)
                </li>
              </ul>

              <h3 className="mb-4 text-lg font-medium">
                5. Configure o tema no arquivo themes.css
              </h3>
              <p className="mb-2">
                Adicione a configuração do tema YSH em{" "}
                <code className="bg-muted rounded px-1 py-0.5">
                  styles/themes.css
                </code>
                :
              </p>
              <pre className="bg-muted overflow-x-auto rounded-md p-3 text-xs">
                {`.theme-ysh .theme-container {
  /* Utiliza as variáveis do tema YSH definidas em ysh-theme.css */
  --primary: var(--ysh-primary);
  --primary-foreground: var(--ysh-primary-foreground);
  --ring: var(--ysh-accent);
  /* ... outras variáveis ... */

  @variant dark {
    --primary: var(--ysh-primary-dark);
    --primary-foreground: var(--ysh-primary-foreground-dark);
    /* ... outras variáveis para modo escuro ... */
  }
}`}
              </pre>
            </GradientCard>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
