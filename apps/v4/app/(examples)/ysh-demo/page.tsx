"use client";

import { GradientButton } from "@/components/ysh/gradient-button";
import { GradientCard } from "@/components/ysh/gradient-card";
import { GradientBadge } from "@/components/ysh/gradient-badge";
import { GradientIcon } from "@/components/ysh/gradient-icon";
import { Rocket } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-dvh bg-[var(--geist-bg)] text-[var(--geist-fg)] p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold ysh-text-gradient">Yello · Canvas Kit</h1>

        <GradientCard title="Ação rápida">
          <p>Componentes alinhados ao Geist, com stroke/borda em degradê YSH.</p>
          <div className="mt-4 flex items-center gap-3">
            <GradientButton glow>Executar</GradientButton>
            <GradientBadge>Beta</GradientBadge>
            <GradientIcon Icon={Rocket} size={28} />
          </div>
        </GradientCard>
      </div>
    </main>
  );
}