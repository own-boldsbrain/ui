# Componentes Canvas-like para Next.js 15

Este conjunto de componentes implementa uma interface inspirada no Canvas da OpenAI para o Next.js 15, utilizando:

- [shadcn/ui](https://ui.shadcn.com/) (baseado no Radix UI)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Geist Fonts](https://vercel.com/font)

## Componentes

### CanvasShell

O componente principal que fornece a estrutura de layout do Canvas, com barra superior, barra de ferramentas vertical e painel lateral opcional.

```tsx
<CanvasShell
  title="Meu Canvas"
  onBack={() => router.back()}
  onOpenVersions={() => setShowPanel(true)}
  left={<VerticalToolbar tools={tools} active={activeTool} />}
  right={panelContent}
>
  {/* Conteúdo principal */}
</CanvasShell>
```

### VerticalToolbar

Barra de ferramentas vertical com tooltips e animações de hover.

```tsx
const tools: Tool[] = [
  {
    id: "suggest-edits",
    label: "Sugerir edições",
    icon: Wand2,
    onClick: () => handleToolClick("suggest-edits")
  },
  // mais ferramentas...
]

<VerticalToolbar tools={tools} active={activeTool} />
```

### ShortcutMenu

Menu de atalhos no estilo palette de comandos.

```tsx
<ShortcutMenu
  open={showMenu}
  onOpenChange={setShowMenu}
  onAction={(id) => handleAction(id)}
/>
```

### InlineSuggestion

Componente para exibir sugestões de texto com opções para aceitar ou rejeitar.

```tsx
<InlineSuggestion
  text="Texto original que será substituído."
  suggestion="Nova sugestão de texto."
  onAccept={() => handleAccept()}
  onReject={() => handleReject()}
/>
```

### InlineCommentThread

Thread de comentários com área de rolagem e formulário para responder.

```tsx
const comments = [
  {
    id: "1",
    author: "Usuário",
    text: "Este é um comentário.",
    createdAt: new Date().toISOString(),
  },
  // mais comentários...
]

<InlineCommentThread
  comments={comments}
  onReply={(text) => handleReply(text)}
/>
```

### VersionHistoryTimeline

Timeline para visualizar e restaurar versões anteriores.

```tsx
const versions = [
  {
    id: "v1",
    label: "Versão Inicial",
    createdAt: new Date().toISOString(),
  },
  // mais versões...
]

<VersionHistoryTimeline
  versions={versions}
  onRestore={(id) => handleRestore(id)}
/>
```

## Como usar

1. Importe os componentes:

```tsx
import {
  CanvasShell,
  VerticalToolbar,
  ShortcutMenu,
  InlineSuggestion,
  InlineCommentThread,
  VersionHistoryTimeline
} from "@/components/canvas"
```

1. Configure seu estado:

```tsx
const [activeTool, setActiveTool] = useState<ToolId | undefined>(undefined)
const [showShortcutMenu, setShowShortcutMenu] = useState(false)
const [showPanel, setShowPanel] = useState(false)
```

1. Veja um exemplo completo na página de demonstração em `/app/(examples)/canvas/page.tsx`

## Personalização

Todos os componentes foram criados para funcionar com o tema do shadcn/ui e são facilmente personalizáveis através das classes do Tailwind CSS.
