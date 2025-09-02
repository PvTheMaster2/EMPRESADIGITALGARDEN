# 🎯 Cursor Rules - Digital Garden Empresarial [SISTEMA COMPONENTIZADO]

## 📋 Context Pack Integration

**SEMPRE consulte estes arquivos antes de propor mudanças:**

1. **`/_site_index/site_outline.md`** - Estrutura completa do site (77 páginas)
2. **`/_site_index/site_index.json`** - Metadados machine-readable
3. **`/_site_index/issues.md`** - Issues identificados (32 problemas)
4. **`/_site_index/layouts_analysis.md`** - Análise de layouts

## 🔍 Processo de Análise

### Antes de Editar:
1. ✅ **Ler Context Pack** - Verificar estado atual
2. ✅ **Identificar Layout** - Qual layout a página usa
3. ✅ **Verificar Issues** - Se há problemas conhecidos
4. ✅ **Mapear Estrutura** - Onde a página se encaixa

### Ao Propor Mudanças:
1. 🎯 **Respeitar URLs** - Usar URLs do Eleventy/Netlify
2. 🎯 **Manter Consistência** - Seguir padrões existentes
3. 🎯 **Aplicar Layout Correto** - Usar layout específico por seção
4. 🎯 **Atualizar Frontmatter** - Sempre incluir `title:`

## 📁 ESTRUTURA COMPLETA DO PROJETO

### **DIRETÓRIOS PRINCIPAIS:**
```
DIGITAL-GARDEN-EMPRESA/
├── 0-Dashboard-Executivo/          # 📊 Dashboards e KPIs executivos
├── 1-Governanca/                   # 🏛️ Compliance, políticas, acordos
├── 2-Equipes/                      # 👥 Gestão de pessoas e capacidade
├── 3-Mercado/                      # 📈 Análise de mercado e concorrentes
├── 4-Projetos/                     # 📋 Projetos e iniciativas empresariais
│   ├── Ativos/                     # Projetos em execução
│   ├── Backlog/                    # Ideias aprovadas
│   ├── Concluidos/                 # Projetos finalizados
│   ├── Em-Desenvolvimento/         # Projetos em desenvolvimento
│   ├── Pilotos/                    # Experimentos e validações
│   └── Templates/                  # Templates de projetos
├── 5-Processos/                    # ⚙️ Workflows, SOPs e automações
├── 6-Reunioes/                     # 🤝 Atas de reunião e decisões
├── 7-Conhecimento/                 # 📚 Base de conhecimento
├── 99 - RESOURCES/                 # 🛠️ Templates e recursos auxiliares
│   ├── 99 - TEMPLATE/              # Templates master
│   └── Imagens/                    # Assets visuais
├── 1000 - REUNIOES/               # 📝 Reuniões históricas (legado)
├── _data/                         # 🗂️ Dados globais do Eleventy
│   ├── company.js                 # Dados da empresa
│   ├── navigation.js              # Estrutura de navegação
│   └── site.js                    # Configurações do site
├── _includes/                     # 🧩 Componentes e includes
│   ├── components/                # Componentes reutilizáveis
│   │   ├── meta-head.njk         # SEO e CSS universal
│   │   ├── sidebar-nav.njk       # Navegação lateral
│   │   ├── main-navigation.njk   # Header principal
│   │   ├── page-header.njk       # Cabeçalho com metadados
│   │   ├── page-sidebar.njk      # Sidebar de página
│   │   └── scripts-bundle.njk    # Scripts universais
│   └── project-card.njk          # Card de projeto
├── _layouts/                      # 📄 Templates de layout
│   ├── base.njk                  # Layout base universal
│   ├── dashboard.njk             # Layout para dashboards
│   ├── governanca.njk            # Layout para governança
│   ├── projeto.njk               # Layout para projetos
│   └── reuniao.njk               # Layout para reuniões
├── _site_index/                   # 📊 Context pack gerado automaticamente
│   ├── site_index.json           # Metadados machine-readable
│   ├── site_outline.md           # Estrutura completa do site
│   ├── issues.md                 # Issues identificados
│   └── layouts_analysis.md       # Análise de layouts
├── _cursor_context/               # 🤖 Context pack avançado para Cursor
│   ├── project_patterns.md       # Padrões específicos do projeto
│   ├── template_guide.md         # Guia completo de templates
│   ├── business_rules.md         # Regras de negócio automatizadas
│   └── troubleshooting.md        # Soluções para problemas comuns
├── scripts/                       # 📜 Scripts JavaScript
│   ├── main.js                   # Script principal
│   ├── search.js                 # Funcionalidade de busca
│   ├── sidebar.js                # Lógica da sidebar
│   └── site-indexer.js           # Indexador automático
├── styles/                        # 🎨 Arquivos CSS
│   ├── main.css                  # Estilos principais
│   ├── sidebar.css               # Estilos da sidebar
│   ├── markdown-content.css      # Apresentação Obsidian-like
│   ├── dashboard.css             # Estilos específicos dashboards
│   ├── governanca.css            # Estilos específicos governança
│   ├── projeto.css               # Estilos específicos projetos
│   └── reuniao.css               # Estilos específicos reuniões
├── dev/                          # 🧪 Ferramentas de desenvolvimento
│   └── sidebar-check.md          # Página de diagnóstico da sidebar
├── dist/                         # 📦 Site gerado (ignorado no git)
├── node_modules/                 # 📚 Dependências (ignorado no git)
├── .eleventy.js                  # ⚙️ Configuração do Eleventy
├── package.json                  # 📋 Configuração do projeto
├── netlify.toml                  # 🌐 Configuração do Netlify
└── README.md                     # 📖 Documentação principal
```

### **LAYOUTS POR DIRETÓRIO:**
- **`/0-Dashboard-Executivo/`** → `dashboard.njk`
- **`/1-Governanca/`** → `governanca.njk`
- **`/4-Projetos/`** → `projeto.njk`
- **`/6-Reunioes/`** → `reuniao.njk`
- **Outros** → `base.njk` (último recurso)

### Campos Obrigatórios:
```yaml
---
title: "Título da Página"
created: 2025-09-01
updated: 2025-09-01T20:00
type: [dashboard|governanca|projeto|reuniao|base]
status: active
---
```

## 🚨 Issues Críticos (Prioridade)

### 1. Títulos Ausentes (27 páginas)
- **Localização**: Principalmente `/99 - RESOURCES/`, `/_site_index/`
- **Ação**: Adicionar `title:` no frontmatter
- **Template**: `title: "Nome Descritivo - Digital Garden"`

### 2. Páginas sem H1 (5 páginas)
- **Localização**: Templates e recursos
- **Ação**: Adicionar `# Título Principal`
- **Posição**: Logo após o frontmatter

### 3. Layout Base Excessivo (45 páginas)
- **Problema**: Muitas páginas usando layout genérico
- **Ação**: Migrar para layouts específicos
- **Prioridade**: Dashboard > Projetos > Reuniões > Governança

## 🔗 Links e Navegação

### URLs Corretas:
- ✅ `/4-Projetos/README/` (não `/projetos/`)
- ✅ `/1-Governanca/README/` (não `/governanca/`)
- ✅ `/6-Reunioes/README/` (não `/reunioes/`)

### Sidebar Navigation:
- Estrutura definida em `_data/navigation.js`
- 8 seções principais com sub-navegação
- 3 níveis de profundidade máximo

## 🛠️ Comandos Úteis

### Auditoria Estrutural:
```
Carregue /_site_index/site_outline.md e /_site_index/issues.md. 
Liste: (a) páginas sem título, (b) páginas usando base.njk que deveriam usar layout específico, (c) links quebrados. 
Proponha 3 correções mínimas.
```

### Plano de Layout:
```
Com base em layouts_analysis.md, proponha migração de páginas de base.njk para layouts específicos. 
Gere lista priorizada por impacto.
```

### Correção de Links:
```
Compare navigation.js com site_index.json. 
Identifique discrepâncias de URLs e gere tabela de correções necessárias.
```

## 📊 Métricas de Qualidade

### Targets:
- **Páginas com título**: 100% (atual: 65%)
- **Páginas com H1**: 100% (atual: 93%)
- **Layouts específicos**: 80% (atual: 42%)
- **Links funcionais**: 100% (atual: ~95%)

### Build Status:
- **Total páginas**: 79 (atualizado)
- **Build time**: ~3 segundos
- **Issues encontrados**: 33 (principalmente wikilinks)
- **Layouts ativos**: 5 (base, dashboard, governanca, projeto, reuniao)
- **Componentes**: 6 (sistema componentizado implementado)
- **Assets copiados**: 92 arquivos

## 🔄 Workflow de Manutenção

1. **Build** → `npm run build`
2. **Index** → `npm run site:index` (automático pós-build)
3. **Análise** → Ler `_site_index/*.md`
4. **Correções** → Aplicar mudanças
5. **Commit** → Git push (deploy automático)

## 🏗️ SISTEMA COMPONENTIZADO

### **Componentes Disponíveis:**
- **`meta-head.njk`** - SEO, CSS e meta tags universais
- **`sidebar-nav.njk`** - Navegação lateral completa
- **`main-navigation.njk`** - Header e navegação principal
- **`page-header.njk`** - Cabeçalho com metadados ricos
- **`page-sidebar.njk`** - Sidebar de página com backlinks
- **`scripts-bundle.njk`** - Scripts universais organizados

### **Como Usar Componentes:**
```nunjucks
<!-- Em qualquer layout .njk -->
{% include "components/meta-head.njk" %}
{% include "components/sidebar-nav.njk" %}
{% include "components/page-header.njk" %}
```

### **Vantagens do Sistema:**
- ✅ **Zero duplicação** de código entre layouts
- ✅ **Manutenção centralizada** - mudança em 1 lugar afeta todos
- ✅ **Consistência garantida** - todos os layouts usam mesma base
- ✅ **Cursor-friendly** - context pack completo para IA

## 🎨 CSS OBSIDIAN-LIKE

### **Classes Principais:**
- **`.markdown-content`** - Container principal do conteúdo
- **`.metric-grid`** - Grid responsivo para dashboards
- **`.metric-card-success/warning/info/danger`** - Cards coloridos
- **`.callout-info/warning/success/error`** - Blocos de destaque
- **`.section-header`** - Cabeçalhos de seção estilizados

### **Variáveis CSS Disponíveis:**
```css
--text-normal           /* Cor do texto principal */
--text-title            /* Cor dos títulos */
--text-accent           /* Cor de destaque */
--background-primary    /* Fundo principal */
--background-secondary  /* Fundo secundário */
--interactive-accent    /* Cor de interação */
```

---

**📝 Lembre-se**: O Context Pack é atualizado automaticamente a cada build. Sempre consulte os arquivos mais recentes em `_site_index/` para decisões informadas.

**🚀 Sistema 100% componentizado** - Use os componentes para máxima flexibilidade com zero duplicação!
