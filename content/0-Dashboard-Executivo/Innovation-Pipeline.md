---
created: 2025-08-31T20:54
updated: 2025-09-01T01:46
---
# 🚀 INNOVATION PIPELINE - MULTISÓCIOS

> *Dashboard dinâmico do pipeline de inovação com projetos e pilotos*

---

## 📊 **PIPELINE DE INOVAÇÃO**

```dataview
TABLE choice(status, "💡","📋","🚧","🧪","🚀") AS "Status",
 link(file.link, title) AS "Projeto",
 owner AS "Owner",
 effort_weeks + "w" AS "Esforço",
 "R$ " + budget AS "Budget",
 metrics_first_month AS "Meta 1º Mês"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
SORT status, priority DESC, file.cday ASC
```

---

## 📈 **MÉTRICAS DO PIPELINE**

### **Projetos por Status**
```dataview
TABLE length(rows) as "Quantidade",
 round(sum(budget) / 1000, 1) + "k" as "Orçamento Total (R$)"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
GROUP BY status
SORT length(rows) DESC
```

### **Projetos por Prioridade**
```dataview
TABLE length(rows) as "Quantidade",
 round(sum(budget) / 1000, 1) + "k" as "Orçamento Total (R$)"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
GROUP BY priority
SORT priority DESC
```

---

## 🎯 **PRÓXIMOS MARCO**

### **Projetos em Andamento**
```dataview
LIST
FROM "4-Projetos/Ativos"
WHERE status = "in-progress"
SORT file.cday ASC
LIMIT 5
```

### **Pilotos em Execução**
```dataview
LIST
FROM "4-Projetos/Pilotos/Em-Execucao"
WHERE status = "pilot"
SORT file.cday ASC
LIMIT 5
```

---

## 📋 **BACKLOG DE IDEIAS**

### **Ideias Pendentes**
```dataview
LIST
FROM "4-Projetos/Backlog"
WHERE status = "idea"
SORT priority DESC, file.cday ASC
LIMIT 10
```

### **Pilotos Ideias**
```dataview
LIST
FROM "4-Projetos/Pilotos/Ideias"
WHERE status = "idea"
SORT priority DESC, file.cday ASC
LIMIT 10
```

---

## 🔗 **LINKS RÁPIDOS**

- [[Home-Executivo]] - Dashboard principal
- [[KPIs-Principais]] - Indicadores-chave
- [[Decisoes-Estrategicas]] - Log de decisões
- [[etica_uso_IA]] - Política de IA

---

**Última Atualização**: {{date}}  
**Status**: ✅ Dashboard funcional  
**Próxima Ação**: Implementar no vault
