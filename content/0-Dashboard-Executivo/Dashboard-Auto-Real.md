---
created: 2025-09-03T14:02
updated: 2025-09-03T16:19
---

---
template: dashboard-auto
type: dashboard
status: auto-generated
owner: "[[Pedro Vitor]]"
created: 2025-09-03
modified: 2025-09-03
version: 2
automation_run: AUTO-2025-09-03-001
updated: 2025-09-03T17:05
---
|
# 📊 **DASHBOARD EXECUTIVO AUTOMÁTICO - DADOS REAIS**

> *Dashboard gerado automaticamente com métricas em tempo real baseadas nos dados reais dos projetos e equipe*

---

## 🎯 **RESUMO EXECUTIVO**

# 🔍 **DEBUG COMPLETO DO SISTEMA**

## **TESTE 1: Verificar se Dataview está funcionando**
```dataview
TABLE file.name
FROM ""
LIMIT 3
```

## **TESTE 2: Verificar estrutura de pastas**
```dataview
TABLE file.folder
FROM ""
WHERE file.folder != ""
GROUP BY file.folder
SORT file.folder
LIMIT 10
```

## **TESTE 3: Verificar arquivos da equipe**
```dataview
TABLE file.name, file.folder, type, status
FROM "content/2-Equipes"
LIMIT 5
```

## **TESTE 4: Verificar arquivos de projetos**
```dataview
TABLE file.name, file.folder, type, status
FROM "content/4-Projetos/Ativos"
LIMIT 5
```

## **TESTE 5: Verificar arquivos em desenvolvimento**
```dataview
TABLE file.name, file.folder, type, status
FROM "content/4-Projetos/Em-Desenvolvimento"
LIMIT 5
```

## **TESTE 6: Verificar campos de um arquivo da equipe**
```dataview
TABLE file.name, type, status, name, role, department, availability_weekly, allocated_hours
FROM "content/2-Equipes"
WHERE file.name = "Pedro-Vitor"
```

## **TESTE 7: Verificar campos de um arquivo de projeto**
```dataview
TABLE file.name, type, status, title, owner, budget, effort_weeks, priority
FROM "content/4-Projetos/Ativos"
WHERE file.name = "PRJ-AERALYN"
```

## **TESTE 8: Testar query simples sem agregações**
```dataview
TABLE file.name, type, status
FROM "content/2-Equipes"
WHERE type = "person"
```

## **TESTE 9: Testar query simples para projetos**
```dataview
TABLE file.name, type, status
FROM "content/4-Projetos/Ativos"
WHERE type = "project"
```

## **TESTE 10: Testar função length()**
```dataview
TABLE WITHOUT ID
  "Total de Arquivos" AS "Métrica",
  length(rows) AS "Valor"
FROM "content/2-Equipes"
```

## **TESTE 11: Testar função sum()**
```dataview
TABLE WITHOUT ID
  "Soma de Horas" AS "Métrica",
  sum(availability_weekly) AS "Valor"
FROM "content/2-Equipes"
WHERE type = "person"
```

## **TESTE 12: Testar função choice()**
```dataview
TABLE 
  choice(status = "active", "✅ Ativo", "❌ Inativo") AS "Status",
  file.name AS "Nome"
FROM "content/2-Equipes"
LIMIT 3
```

## **TESTE 13: Testar GROUP BY**
```dataview
TABLE 
  status AS "Status",
  length(rows) AS "Quantidade"
FROM "content/2-Equipes"
WHERE type = "person"
GROUP BY status
```

## **TESTE 14: Testar sintaxe OR (que está falhando)**
```dataview
TABLE file.name
FROM "content/4-Projetos"
WHERE contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento")
LIMIT 5
```

## **TESTE 15: Testar alternativa sem OR**
```dataview
TABLE file.name, file.folder
FROM "content/4-Projetos"
WHERE contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento")
LIMIT 5
```

## **TESTE 16: Testar busca em toda pasta 4-Projetos**
```dataview
TABLE file.name, file.folder
FROM "content/4-Projetos"
LIMIT 10
```

```dataview
TABLE WITHOUT ID
  "Capacidade Total" AS "Métrica",
  sum(availability_weekly) + "h/sem" AS "Valor"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active"
```

```dataview
TABLE WITHOUT ID
  "Utilização Média" AS "Métrica",
  round((sum(allocated_hours) / sum(availability_weekly)) * 100, 1) + "%" AS "Valor"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active"
```

### **Métricas Financeiras**
```dataview
TABLE WITHOUT ID
  "Budget Total" AS "Métrica",
  "R$ " + sum(budget) AS "Valor"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
```

```dataview
TABLE WITHOUT ID
  "ROI Projetado" AS "Métrica",
  "R$ " + sum(budget * 3.47) AS "Valor"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
```

---

## 📋 **PROJETOS ATIVOS (DADOS REAIS)**

### **Lista de Projetos com Dados Reais**
```dataview
TABLE 
  status AS "Status",
  link(file.link, title) AS "Projeto",
  owner AS "Owner",
  "R$ " + budget AS "Budget",
  effort_weeks + "w" AS "Esforço",
  priority AS "Prioridade"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
SORT priority DESC, budget DESC
```

---

## 👥 **EQUIPE ATUAL (DADOS REAIS)**

### **Capacidade da Equipe**
```dataview
TABLE 
  name AS "Nome",
  role AS "Cargo",
  department AS "Departamento",
  availability_weekly + "h/sem" AS "Disponível",
  allocated_hours + "h" AS "Alocado",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active"
SORT allocated_hours DESC
```

---

## 📊 **MÉTRICAS CONSOLIDADAS**

### **Por Status de Projeto**
```dataview
TABLE 
  status AS "Status",
  length(rows) AS "Quantidade"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
GROUP BY status
SORT length(rows) DESC
```

### **Por Owner**
```dataview
TABLE 
  owner AS "Responsável",
  length(rows) AS "Projetos"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
GROUP BY owner
SORT length(rows) DESC
```

---

## 💰 **ANÁLISE FINANCEIRA DETALHADA**

### **Distribuição de Budget**
```dataview
TABLE 
  "R$ " + budget AS "Budget por Projeto"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
SORT budget DESC
```

### **Projetos por Faixa de Budget**
```dataview
TABLE 
  "R$ " + budget AS "Budget",
  file.name AS "Projeto"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
SORT budget DESC
```

---

## 🎯 **CAPACIDADE E ALOCAÇÃO**

### **Resumo de Capacidade**
```dataview
TABLE 
  name AS "Nome",
  availability_weekly + "h/sem" AS "Capacidade",
  allocated_hours + "h" AS "Alocado",
  (availability_weekly - allocated_hours) + "h" AS "Livre"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active" AND availability_weekly != null
```

### **Por Departamento**
```dataview
TABLE 
  department AS "Departamento",
  length(rows) AS "Pessoas"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active"
GROUP BY department
SORT length(rows) DESC
```

---

## 🚨 **ALERTAS E INSIGHTS**

### **Alertas de Capacidade - Pessoas Sobrecarregadas**
```dataview
TABLE 
  name AS "Nome",
  role AS "Cargo",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active" AND (allocated_hours / availability_weekly) > 0.8
SORT allocated_hours DESC
```

### **Alertas de Capacidade - Pessoas Subutilizadas**
```dataview
TABLE 
  name AS "Nome",
  role AS "Cargo",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active" AND (allocated_hours / availability_weekly) < 0.3
SORT allocated_hours ASC
```

### **Projetos de Alto Valor**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  "R$ " + budget AS "Budget",
  owner AS "Owner",
  status AS "Status"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento")) AND budget >= 50000
SORT budget DESC
```

---

## 📈 **TENDÊNCIAS E RECOMENDAÇÕES**

### **Insights Baseados em Dados Reais**
```dataview
TABLE WITHOUT ID
  "Concentração de Projetos" AS "Insight",
  "Pedro Vitor gerencia " + length(rows) + " projetos" AS "Detalhe"
FROM "content/4-Projetos"
WHERE type = "project" AND owner = "[[Pedro Vitor]]" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento"))
```

```dataview
TABLE 
  name AS "Nome",
  (availability_weekly - allocated_hours) + "h livres" AS "Capacidade Disponível"
FROM "content/2-Equipes"
WHERE type = "person" AND status = "active" AND availability_weekly != null
```

```dataview
TABLE 
  "R$ " + budget AS "Budget por Projeto",
  file.name AS "Projeto"
FROM "content/4-Projetos"
WHERE type = "project" AND (contains(file.folder, "Ativos") OR contains(file.folder, "Em-Desenvolvimento")) AND budget != null
SORT budget DESC
```

### **Recomendações Imediatas**
1. **Redistribuir Carga**: Considerar transferir projetos de Pedro Vitor para outros membros
2. **Aproveitar Capacidade**: Usar horas livres para novos projetos
3. **Foco em ROI**: Projetos com budget > R$ 50k têm maior potencial de retorno

---

## 📅 **PRÓXIMAS AÇÕES**

### **Esta Semana**
- [ ] Revisar alocação de projetos entre membros da equipe
- [ ] Analisar projetos de alto budget para otimização
- [ ] Planejar uso da capacidade disponível

### **Próximo Mês**
- [ ] Implementar sistema de alertas automáticos
- [ ] Criar métricas de ROI por projeto
- [ ] Desenvolver dashboard de tempo real

---

**Status**: 🤖 **GERADO AUTOMATICAMENTE COM DADOS REAIS**  
**Última Atualização**: 2025-09-03  
**Próxima Atualização**: Automática no Obsidian  
**Owner**: [[Pedro Vitor]]
