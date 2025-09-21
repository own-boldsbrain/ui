"use client"

import { CanvasShell } from "@/components/canvas/CanvasShell"
import {
  InlineCommentThread,
  Comment,
} from "@/components/canvas/InlineCommentThread"
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
import { Badge } from "@/registry/new-york-v4/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Progress } from "@/registry/new-york-v4/ui/progress"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs"
import {
  TrendingUpIcon,
  TargetIcon,
  UsersIcon,
  DollarSignIcon,
  BarChart3Icon,
  PieChartIcon,
  GlobeIcon,
  ZapIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  MinusIcon,
  PresentationIcon,
  FileTextIcon,
  LightbulbIcon,
  SettingsIcon,
} from "lucide-react"
import { useState } from "react"

// Dados da análise de portfólio
const portfolioData = {
  company: {
    name: "Dynamis Importadora",
    founded: "2018",
    headquarters: "São Paulo, Brasil",
    employees: "45",
    revenue: "R$ 28M (2024)",
    growth: "+45% YoY",
  },
  products: [
    {
      category: "Eletrônicos",
      percentage: 35,
      growth: "+28%",
      keyProducts: ["Smartphones", "Notebooks", "Tablets", "Acessórios"],
      strategy: "Foco em marcas premium com margem alta",
    },
    {
      category: "Moda e Lifestyle",
      percentage: 28,
      growth: "+52%",
      keyProducts: ["Roupas", "Calçados", "Acessórios", "Cosméticos"],
      strategy: "Parcerias com designers emergentes",
    },
    {
      category: "Casa e Decoração",
      percentage: 22,
      growth: "+31%",
      keyProducts: ["Móveis", "Decoração", "Eletrodomésticos", "Utensílios"],
      strategy: "Produtos sustentáveis e design moderno",
    },
    {
      category: "Esportes e Lazer",
      percentage: 15,
      growth: "+67%",
      keyProducts: [
        "Equipamentos",
        "Roupas esportivas",
        "Suplementos",
        "Acessórios",
      ],
      strategy: "Foco em bem-estar e saúde",
    },
  ],
  marketPosition: {
    competitors: ["Magazine Luiza", "Mercado Livre", "Amazon Brasil", "Shopee"],
    strengths: [
      "Rede de fornecedores internacionais diversificada",
      "Especialização em produtos premium",
      "Logística otimizada",
      "Atendimento personalizado",
    ],
    opportunities: [
      "Expansão para e-commerce B2B",
      "Parcerias com influencers",
      "Internacionalização",
      "Produtos sustentáveis",
    ],
    threats: [
      "Flutuações cambiais",
      "Concorrência de marketplaces",
      "Regulamentações de importação",
      "Dependência de fornecedores",
    ],
  },
  strategy: {
    shortTerm: [
      "Otimização da logística",
      "Expansão da base de fornecedores",
      "Implementação de IA no atendimento",
      "Lançamento de marketplace próprio",
    ],
    longTerm: [
      "Internacionalização para América Latina",
      "Desenvolvimento de produtos próprios",
      "Parcerias estratégicas globais",
      "Liderança em sustentabilidade",
    ],
  },
}

export default function PortfolioAnalysisPage() {
  const [showShortcutMenu, setShowShortcutMenu] = useState(false)
  const [showRightPanel, setShowRightPanel] = useState(false)
  const [activeToolId, setActiveToolId] = useState<ToolId | undefined>(
    undefined
  )
  const [activeSection, setActiveSection] = useState("overview")

  // Ferramentas para análise
  const tools: Tool[] = [
    {
      id: "suggest-edits",
      label: "Sugerir edições",
      icon: LightbulbIcon,
      onClick: () => setActiveToolId("suggest-edits"),
    },
    {
      id: "review-code",
      label: "Revisar dados",
      icon: BarChart3Icon,
      onClick: () => setActiveToolId("review-code"),
    },
    {
      id: "fix-bugs",
      label: "Corrigir métricas",
      icon: SettingsIcon,
      onClick: () => setActiveToolId("fix-bugs"),
    },
    {
      id: "port-language",
      label: "Exportar análise",
      icon: FileTextIcon,
      onClick: () => setActiveToolId("port-language"),
    },
  ]

  // Comentários da análise
  const comments: Comment[] = [
    {
      id: "1",
      author: "Ana Silva",
      text: "Excelente análise do portfólio. Os dados de crescimento são impressionantes.",
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    },
    {
      id: "2",
      author: "Carlos Mendes",
      text: "Concordo com a estratégia de foco em produtos premium. Margens maiores justificam o investimento.",
      createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    },
  ]

  // Versões da análise
  const versions: Version[] = [
    {
      id: "v1",
      label: "Análise Inicial - Q1 2024",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 90).toISOString(),
    },
    {
      id: "v2",
      label: "Atualização - Q2 2024",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
    },
    {
      id: "v3",
      label: "Análise Completa - Q3 2024",
      createdAt: new Date().toISOString(),
    },
  ]

  const handleShortcutAction = (id: ShortcutMenuAction) => {
    console.log("Ação de atalho:", id)
    setShowShortcutMenu(false)
    setActiveToolId(id as ToolId)
  }

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita 2024</CardTitle>
            <DollarSignIcon className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 28M</div>
            <p className="text-muted-foreground text-xs">
              <span className="flex items-center text-green-600">
                <ArrowUpIcon className="mr-1 h-3 w-3" />
                +45% vs ano anterior
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funcionários</CardTitle>
            <UsersIcon className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-muted-foreground text-xs">
              <span className="flex items-center text-green-600">
                <ArrowUpIcon className="mr-1 h-3 w-3" />
                +15% crescimento
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mercados</CardTitle>
            <GlobeIcon className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-muted-foreground text-xs">
              Países de origem dos produtos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Crescimento Médio
            </CardTitle>
            <TrendingUpIcon className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+44%</div>
            <p className="text-muted-foreground text-xs">
              Média por categoria de produto
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Perfil da Empresa</CardTitle>
          <CardDescription>
            Informações básicas sobre a Dynamis Importadora
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium">Fundação</p>
              <p className="text-muted-foreground text-sm">
                {portfolioData.company.founded}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Sede</p>
              <p className="text-muted-foreground text-sm">
                {portfolioData.company.headquarters}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Equipe</p>
              <p className="text-muted-foreground text-sm">
                {portfolioData.company.employees} funcionários
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">Receita</p>
              <p className="text-muted-foreground text-sm">
                {portfolioData.company.revenue}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProducts = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {portfolioData.products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {product.category}
                <Badge variant="secondary">{product.percentage}%</Badge>
              </CardTitle>
              <CardDescription>
                <span className="flex items-center text-green-600">
                  <ArrowUpIcon className="mr-1 h-3 w-3" />
                  {product.growth} crescimento
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="mb-2 text-sm font-medium">Produtos Principais</p>
                <div className="flex flex-wrap gap-1">
                  {product.keyProducts.map((item, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium">Estratégia</p>
                <p className="text-muted-foreground text-sm">
                  {product.strategy}
                </p>
              </div>
              <Progress value={product.percentage} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderMarketPosition = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TargetIcon className="mr-2 h-5 w-5" />
              Pontos Fortes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {portfolioData.marketPosition.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ZapIcon className="mr-2 h-5 w-5" />
              Oportunidades
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {portfolioData.marketPosition.opportunities.map(
                (opportunity, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                    <span className="text-sm">{opportunity}</span>
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3Icon className="mr-2 h-5 w-5" />
              Concorrentes Principais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {portfolioData.marketPosition.competitors.map(
                (competitor, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="justify-center"
                  >
                    {competitor}
                  </Badge>
                )
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChartIcon className="mr-2 h-5 w-5" />
              Ameaças
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {portfolioData.marketPosition.threats.map((threat, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <span className="text-sm">{threat}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderStrategy = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Curto Prazo (1-2 anos)</CardTitle>
            <CardDescription>Objetivos e ações imediatas</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {portfolioData.strategy.shortTerm.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Longo Prazo (3-5 anos)</CardTitle>
            <CardDescription>Visão estratégica de futuro</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {portfolioData.strategy.longTerm.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recomendações Estratégicas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <h4 className="mb-2 font-medium text-blue-900">
                Foco em Sustentabilidade
              </h4>
              <p className="text-sm text-blue-800">
                Desenvolver linha de produtos ecológicos para atender demanda
                crescente por consumo responsável.
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4">
              <h4 className="mb-2 font-medium text-green-900">
                Expansão Digital
              </h4>
              <p className="text-sm text-green-800">
                Investir em marketplace próprio e parcerias com plataformas de
                e-commerce.
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4">
              <h4 className="mb-2 font-medium text-purple-900">
                Internacionalização
              </h4>
              <p className="text-sm text-purple-800">
                Explorar mercados da América Latina com produtos adaptados às
                necessidades locais.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <CanvasShell
      title="Análise de Portfólio 360º - Dynamis Importadora"
      left={<VerticalToolbar tools={tools} active={activeToolId} />}
      onBack={() => console.log("Voltar")}
      onOpenVersions={() => setShowRightPanel(true)}
      right={
        showRightPanel ? (
          <div className="space-y-6 p-4">
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Comentários da Análise
              </h3>
              <InlineCommentThread
                comments={comments}
                onReply={(text) => {
                  console.log("Novo comentário:", text)
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent">
              Análise de Portfólio 360º
            </h1>
            <p className="text-muted-foreground mt-2 text-xl">
              Estratégia de Produtos e Posicionamento de Mercado
            </p>
            <p className="mt-1 text-lg font-medium text-blue-600">
              Dynamis Importadora
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowShortcutMenu(true)}>
              <PresentationIcon className="mr-2 h-4 w-4" />
              Atalhos
            </Button>
            <Button
              variant="outline"
              onClick={() => setShowRightPanel(!showRightPanel)}
            >
              <FileTextIcon className="mr-2 h-4 w-4" />
              {showRightPanel ? "Fechar Painel" : "Abrir Painel"}
            </Button>
          </div>
        </div>

        <Tabs
          value={activeSection}
          onValueChange={setActiveSection}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="products">Portfólio de Produtos</TabsTrigger>
            <TabsTrigger value="market">Posicionamento</TabsTrigger>
            <TabsTrigger value="strategy">Estratégia</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {renderOverview()}
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            {renderProducts()}
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            {renderMarketPosition()}
          </TabsContent>

          <TabsContent value="strategy" className="space-y-6">
            {renderStrategy()}
          </TabsContent>
        </Tabs>

        {activeToolId === "suggest-edits" && (
          <div className="mt-8">
            <InlineSuggestion
              text="A Dynamis Importadora apresenta crescimento consistente em todas as categorias de produto."
              suggestion="A Dynamis Importadora apresenta crescimento excepcional, especialmente na categoria de Esportes e Lazer com +67% YoY, demonstrando forte adaptação às tendências de bem-estar e saúde."
              onAccept={() => setActiveToolId(undefined)}
              onReject={() => setActiveToolId(undefined)}
            />
          </div>
        )}
      </div>

      <ShortcutMenu
        open={showShortcutMenu}
        onOpenChange={setShowShortcutMenu}
        onAction={handleShortcutAction}
      />
    </CanvasShell>
  )
}
