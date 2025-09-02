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

## 📁 Estrutura de Layouts

### Por Diretório:
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
- **Total páginas**: 77
- **Build time**: ~4 segundos
- **Issues encontrados**: 32
- **Layouts ativos**: 5

## 🔄 Workflow de Manutenção

1. **Build** → `npm run build`
2. **Index** → `npm run site:index` (automático pós-build)
3. **Análise** → Ler `_site_index/*.md`
4. **Correções** → Aplicar mudanças
5. **Commit** → Git push (deploy automático)

---

**📝 Lembre-se**: O Context Pack é atualizado automaticamente a cada build. Sempre consulte os arquivos mais recentes em `_site_index/` para decisões informadas.
