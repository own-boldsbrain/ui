"use client"

import { CanvasShell } from "@/components/canvas/CanvasShell"
import { InlineCommentThread } from "@/components/canvas/InlineCommentThread"
import { InlineSuggestion } from "@/components/canvas/InlineSuggestion"
import {
  ShortcutMenu,
  ShortcutMenuAction,
} from "@/components/canvas/ShortcutMenu"
import {
  VerticalToolbar,
  Tool,
  ToolId,
} from "@/components/canvas/VerticalToolbar"
import {
  Version,
  VersionHistoryTimeline,
} from "@/components/canvas/VersionHistoryTimeline"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  PanelRightIcon,
  CornerDownLeftIcon,
  Wand2,
  AlignLeft,
  FileCode2,
  Bug,
  Languages,
} from "lucide-react"
import { useState } from "react"

export default function CanvasExamplePage() {
  const [showShortcutMenu, setShowShortcutMenu] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(false)
  const [activeToolId, setActiveToolId] = useState<ToolId | undefined>(
    undefined
  )

  // Ferramentas de exemplo para a barra vertical
  const tools: Tool[] = [
    {
      id: "suggest-edits",
      label: "Sugerir edições",
      icon: Wand2,
      onClick: () => setActiveToolId("suggest-edits"),
    },
    {
      id: "adjust-length-shorter",
      label: "Encurtar texto",
      icon: AlignLeft,
      onClick: () => setActiveToolId("adjust-length-shorter"),
    },
    {
      id: "review-code",
      label: "Revisar código",
      icon: FileCode2,
      onClick: () => setActiveToolId("review-code"),
    },
    {
      id: "fix-bugs",
      label: "Corrigir bugs",
      icon: Bug,
      onClick: () => setActiveToolId("fix-bugs"),
    },
    {
      id: "port-language",
      label: "Portar linguagem",
      icon: Languages,
      onClick: () => setActiveToolId("port-language"),
    },
  ]

  // Comentários de exemplo
  const comments = [
    {
      id: "1",
      author: "Usuário Teste",
      text: "Este é um comentário de exemplo no Canvas.",
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      author: "Outro Usuário",
      text: "Resposta ao comentário anterior.",
      createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutos atrás
    },
  ]

  // Versões de exemplo
  const versions: Version[] = [
    {
      id: "v1",
      label: "Versão Inicial",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 horas atrás
    },
    {
      id: "v2",
      label: "Alterações na Seção 2",
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutos atrás
    },
    {
      id: "v3",
      label: "Versão Atual",
      createdAt: new Date().toISOString(),
    },
  ]

  // Ação para o menu de atalhos
  const handleShortcutAction = (id: ShortcutMenuAction) => {
    console.log("Ação de atalho:", id)
    setShowShortcutMenu(false)
    setActiveToolId(id as ToolId)
  }

  return (
    <CanvasShell
      title="Exemplo do Canvas"
      left={<VerticalToolbar tools={tools} active={activeToolId} />}
      onBack={() => console.log("Voltar")}
      onOpenVersions={() => setShowRightPanel(true)}
      right={
        showRightPanel ? (
          <div className="space-y-6 p-4">
            <div>
              <h3 className="mb-2 text-lg font-medium">Comentários</h3>
              <InlineCommentThread
                comments={comments}
                onReply={(text) => {
                  console.log("Enviando resposta:", text)
                }}
              />
            </div>
            <Separator />
            <div>
              <h3 className="mb-2 text-lg font-medium">Histórico de Versões</h3>
              <VersionHistoryTimeline
                versions={versions}
                onRestore={(id) => {
                  console.log("Restaurando versão:", id)
                }}
              />
            </div>
          </div>
        ) : null
      }
    >
      <div className="space-y-8 p-8">
        <h1 className="text-3xl font-bold">
          Demonstração dos Componentes Canvas
        </h1>
        <p className="text-muted-foreground text-lg">
          Esta página demonstra os componentes Canvas-like para Next.js 15 com
          Radix (via shadcn/ui), Framer Motion, Lucide Icons e Geist Fonts.
        </p>

        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">Sugestão Inline</h2>
          <InlineSuggestion
            text="Este texto será substituído pela sugestão."
            suggestion="Este é o novo texto sugerido pelo assistente."
            onAccept={() => console.log("Sugestão aceita")}
            onReject={() => console.log("Sugestão rejeitada")}
          />
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">
            Barra de Ferramentas Vertical
          </h2>
          <p>
            A barra de ferramentas vertical está visível no lado esquerdo da
            tela. Passe o mouse sobre os ícones para ver os tooltips.
          </p>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu de Atalhos</h2>
          <p>
            Clique no botão abaixo para abrir o menu de atalhos, ou pressione{" "}
            <kbd className="rounded border px-2 py-1">Ctrl</kbd>+
            <kbd className="rounded border px-2 py-1">K</kbd>.
          </p>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => setShowShortcutMenu(true)}
          >
            <CornerDownLeftIcon className="mr-2 h-4 w-4" />
            Abrir Menu de Atalhos
          </Button>
        </div>

        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">Painel Lateral</h2>
          <p>
            Clique no botão "Versões" no cabeçalho para mostrar o painel lateral
            com comentários e histórico de versões.
          </p>
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => setShowRightPanel(!showRightPanel)}
          >
            <PanelRightIcon className="mr-2 h-4 w-4" />
            {showRightPanel ? "Fechar Painel" : "Abrir Painel"}
          </Button>
        </div>
      </div>

      {/* Menu de atalhos */}
      <ShortcutMenu
        open={showShortcutMenu}
        onOpenChange={setShowShortcutMenu}
        onAction={handleShortcutAction}
      />
    </CanvasShell>
  )
}
