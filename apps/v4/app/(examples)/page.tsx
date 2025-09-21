"use client"

import { Card } from "@/registry/new-york-v4/ui/card"
import Link from "next/link"
import { GradientCard } from "@/components/ysh/gradient-card"

export default function ExamplesPage() {
  return (
    <main className="bg-background min-h-dvh p-6">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-semibold">Exemplos</h1>

        <p className="text-muted-foreground">
          Confira os exemplos disponíveis para o shadcn/ui e temas
          personalizados.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-medium">Dashboard</h2>
            <p className="text-muted-foreground mt-2">
              Exemplo de dashboard com gráficos e estatísticas.
            </p>
            <div className="mt-4">
              <Link href="/dashboard" className="text-primary hover:underline">
                Ver exemplo
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-medium">Dashboard 03</h2>
            <p className="text-muted-foreground mt-2">
              Variação alternativa de dashboard.
            </p>
            <div className="mt-4">
              <Link
                href="/dashboard-03"
                className="text-primary hover:underline"
              >
                Ver exemplo
              </Link>
            </div>
          </Card>

          <GradientCard title="YSH Demo">
            <p>Demonstração do tema YSH com componentes de gradiente.</p>
            <div className="mt-4">
              <Link href="/ysh-demo" className="text-primary hover:underline">
                Ver demo
              </Link>
            </div>
          </GradientCard>

          <GradientCard title="YSH Documentação">
            <p>Documentação completa do tema YSH, componentes e utilidades.</p>
            <div className="mt-4">
              <Link href="/ysh-docs" className="text-primary hover:underline">
                Ver documentação
              </Link>
            </div>
          </GradientCard>
        </div>
      </div>
    </main>
  )
}
