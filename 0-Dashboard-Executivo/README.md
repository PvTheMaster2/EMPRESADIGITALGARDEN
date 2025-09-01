---
created: 2025-08-31T21:15
updated: 2025-09-01T01:46
---
# 📊 DASHBOARD EXECUTIVO

> *Painéis principais e visão geral do negócio*

---

## 🎯 **PROPÓSITO**

Esta pasta contém os dashboards principais e visão geral do sistema empresarial, fornecendo uma visão executiva consolidada de todos os aspectos do negócio.

---

## 📁 **ARQUIVOS PRINCIPAIS**

### **Home-Executivo.md**
- **Status**: 🔄 Em desenvolvimento
- **Propósito**: Resumo executivo do negócio
- **Conteúdo**: Visão geral, KPIs principais, alertas críticos

### **KPIs-Principais.md**
- **Status**: 🔄 Em desenvolvimento
- **Propósito**: Indicadores-chave consolidados
- **Conteúdo**: Métricas financeiras, operacionais e de qualidade

### **Innovation-Pipeline.md** ✅
- **Status**: ✅ Implementado
- **Propósito**: Pipeline de inovação (Dataview)
- **Conteúdo**: Projetos e pilotos por status, métricas de pipeline

### **Decisoes-Estrategicas.md**
- **Status**: 🔄 Em desenvolvimento
- **Propósito**: Log de decisões estratégicas
- **Conteúdo**: Histórico de decisões importantes e suas justificativas

---

## 📊 **QUERIES DATAVIEW PRINCIPAIS**

### **Pipeline de Inovação**
```dataview
TABLE choice(status, "💡","📋","🚧","🧪","🚀") AS "Status",
 link(file.link, title) AS "Projeto",
 owner AS "Owner",
 effort_weeks + "w" AS "Esforço",
 "R$ " + budget AS "Budget",
 metrics_first_month AS "Meta 1º Mês"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
SORT status, priority DESC, file.cday ASC
```

### **Métricas por Status**
```dataview
TABLE length(rows) as "Quantidade",
 round(sum(budget) / 1000, 1) + "k" as "Orçamento Total (R$)"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY status
SORT length(rows) DESC
```

---

## 🔗 **LINKS RÁPIDOS**

- [[README]] - Documentação principal do sistema
- [[1-Governanca/README]] - Governança e compliance
- [[4-Projetos/README]] - Gestão de projetos
- [[5-Processos/README]] - Processos internos

---

**Status**: 🔄 **EM DESENVOLVIMENTO**  
**Próximo**: Implementar Home-Executivo.md e KPIs-Principais.md
