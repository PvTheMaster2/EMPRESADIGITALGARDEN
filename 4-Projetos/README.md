---
title: Portfólio de Projetos
created: 2025-08-31T21:15
updated: 2025-09-01T19:45
type: overview
status: active
priority: high
owner: Pedro Vitor
eleventyNavigation:
  key: projetos
  title: 📋 Projetos
  order: 4
---
# 📋 GESTÃO DE PROJETOS

> *Iniciativas e projetos da empresa*

---

## 🎯 **PROPÓSITO**

Esta pasta contém todos os projetos e iniciativas da empresa, organizados por status e tipo. Utiliza frontmatter padronizado para facilitar consultas Dataview e automação.

---

## 📁 **ESTRUTURA DE SUBPASTAS**

### **Ativos/**
- **Propósito**: Projetos em andamento
- **Status**: Projetos com status "in-progress"
- **Conteúdo**: Projetos ativos sendo executados

### **Concluidos/**
- **Propósito**: Projetos finalizados
- **Status**: Projetos com status "deployed" ou "archived"
- **Conteúdo**: Projetos concluídos com sucesso

### **Backlog/**
- **Propósito**: Ideias aprovadas
- **Status**: Projetos com status "idea" ou "planning"
- **Conteúdo**: Ideias aprovadas aguardando execução

### **Pilotos/**
- **Propósito**: Experimentos e pilotos
- **Subpastas**:
  - **Ideias/** - Ideias de pilotos
  - **Em-Execucao/** - Pilotos ativos

---

## 📊 **FRONTMATTER PADRONIZADO**

### **Campos Obrigatórios**
```yaml
---
template: projeto-empresarial
type: project                    # project | pilot
status: idea                     # idea | planning | in-progress | pilot | deployed | archived
priority: medium                 # low | medium | high | critical
owner: ""                       # formato [[Nome]]
market_segment: ""              # segmento de mercado
effort_weeks: 0                 # inteiro (esforço em semanas)
budget: 0                       # numérico R$ (sem formatação)
metrics_first_month: ""         # string comparável
ia_assets:                      # assets de IA utilizados
  prompts: []                   # lista de prompts
  models: []                    # modelos utilizados
  datasets: []                  # datasets necessários
compliance_level: 1             # 1=básico | 2=dados | 3=crítico
legal_review: false             # boolean
created: {{date}}               # timestamp criação
modified: {{date}}              # timestamp modificação
---
```

---

## 📈 **QUERIES DATAVIEW ÚTEIS**

### **Todos os Projetos**
```dataview
TABLE choice(status, "💡","📋","🚧","🧪","🚀") AS "Status",
 link(file.link, title) AS "Projeto",
 owner AS "Owner",
 effort_weeks + "w" AS "Esforço",
 "R$ " + budget AS "Budget"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
SORT status, priority DESC, file.cday ASC
```

### **Projetos por Status**
```dataview
TABLE length(rows) as "Quantidade",
 round(sum(budget) / 1000, 1) + "k" as "Orçamento Total (R$)"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY status
SORT length(rows) DESC
```

### **Projetos por Prioridade**
```dataview
TABLE length(rows) as "Quantidade",
 round(sum(budget) / 1000, 1) + "k" as "Orçamento Total (R$)"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY priority
SORT priority DESC
```

---

## 🔗 **LINKS RÁPIDOS**

- [[0-Dashboard-Executivo/Innovation-Pipeline]] - Dashboard de pipeline
- [[z_Templates/Projetos/]] - Templates de projetos
- [[5-Processos/README]] - Processos de gestão
- [[6-Reunioes/README]] - Reuniões de projetos

---

## 📋 **TEMPLATES DISPONÍVEIS**

- **project.md** - Template para projetos principais
- **pilot.md** - Template para pilotos e experimentos
- **task.md** - Template para tarefas
- **sprint.md** - Template para sprints
- **person.md** - Template para pessoas

---

**Status**: 🔄 **EM DESENVOLVIMENTO**  
**Próximo**: Implementar templates e automação
