---
template: dashboard-auto
type: dashboard
status: auto-generated
owner: "[[Pedro Vitor]]"
created: 2025-08-31
modified: 2025-08-31
version: 1
automation_run: AUTO-2025-08-31-001
updated: 2025-09-02T21:24
---

# 📊 **DASHBOARD EXECUTIVO AUTOMÁTICO**

> *Dashboard gerado automaticamente com métricas em tempo real*

---

## 🎯 **RESUMO EXECUTIVO**

### **Status Geral**
- **Total de Projetos**: 2
- **Projetos Ativos**: 1
- **Projetos Concluídos**: 0
- **Pilotos Ativos**: 1
- **Pilotos Prontos**: 0
- **Violações de Compliance**: 0

### **Métricas Principais**
- **Score Médio de Validação**: 0.0
- **Reuniões Recentes**: 1
- **Ações Pendentes**: 3

---

## 📋 **PROJETOS ATIVOS**

```dataview
TABLE title, status, priority, effort_weeks, kpi_primary, owner, validation_score, compliance_level
FROM "4-Projetos"
WHERE status != "archived" AND status != "template"
SORT priority desc, modified desc
```

---

## 🧪 **PILOTOS EM EXECUÇÃO**

```dataview
TABLE title, status, pilot_stage, sample_size, validation_score, owner, gating_criteria
FROM "4-Projetos/Pilotos"
WHERE status != "archived"
SORT validation_score desc, modified desc
```

---

## 📊 **MÉTRICAS POR PRIORIDADE**

```dataview
TABLE length(rows) as "Quantidade", 
       round(average(priority)) as "Prioridade Média",
       sum(budget) as "Budget Total"
FROM "4-Projetos"
WHERE status != "archived" AND status != "template"
GROUP BY priority
SORT priority desc
```

---

## 📈 **MÉTRICAS POR STATUS**

```dataview
TABLE length(rows) as "Quantidade",
       round(average(effort_weeks)) as "Esforço Médio (semanas)",
       sum(budget) as "Budget Total"
FROM "4-Projetos"
WHERE status != "archived" AND status != "template"
GROUP BY status
SORT status asc
```

---

## 🔒 **COMPLIANCE E GOVERNANÇA**

### **Projetos por Nível de Compliance**
```dataview
TABLE length(rows) as "Quantidade",
       sum(budget) as "Budget Total"
FROM "4-Projetos"
WHERE status != "archived" AND status != "template"
GROUP BY compliance_level
SORT compliance_level asc
```

### **Alertas de Compliance**
```dataview
TABLE title, compliance_level, legal_review, owner
FROM "4-Projetos"
WHERE compliance_level > 1 AND legal_review = false AND status != "template"
SORT compliance_level desc
```

---

## 📅 **REUNIÕES RECENTES**

```dataview
TABLE title, date, decisions, action_items, participants
FROM "6-Reunioes"
WHERE date >= date(today) - dur(30 days)
SORT date desc
LIMIT 5
```

---

## 🎯 **PILOTOS PRONTOS PARA REVISÃO**

```dataview
TABLE title, validation_score, pilot_stage, owner, gating_criteria
FROM "4-Projetos/Pilotos"
WHERE validation_score >= 2.5 AND status = "done"
SORT validation_score desc
```

---

## 📝 **AÇÕES PENDENTES**

```dataview
TABLE title, action_items, date
FROM "6-Reunioes"
WHERE date >= date(today) - dur(30 days) AND action_items
SORT date desc
```

---

## 🔗 **PROJETOS POR OWNER**

```dataview
TABLE length(rows) as "Quantidade de Projetos",
       round(average(effort_weeks)) as "Esforço Médio",
       sum(budget) as "Budget Total"
FROM "4-Projetos"
WHERE status != "archived" AND status != "template"
GROUP BY owner
SORT length(rows) desc
```

---

## 📊 **MÉTRICAS DE VALIDAÇÃO**

### **Distribuição de Scores**
```dataview
TABLE length(rows) as "Quantidade",
       round(average(validation_score), 2) as "Score Médio"
FROM "4-Projetos/Pilotos"
WHERE status != "archived"
GROUP BY validation_score
SORT validation_score desc
```

---

## 🚨 **ALERTAS E NOTIFICAÇÕES**

### **Projetos com Budget Alto**
```dataview
TABLE title, budget, owner, status
FROM "4-Projetos"
WHERE budget > 50000 AND status != "archived" AND status != "template" AND type != "template"
SORT budget desc
```

### **Projetos Atrasados**
```dataview
TABLE title, effort_weeks, modified, owner
FROM "4-Projetos"
WHERE modified < date(today) - dur(30 days) AND status = "in-progress" AND status != "template" AND type != "template"
SORT modified asc
```

---

## 📈 **TENDÊNCIAS E INSIGHTS**

### **Crescimento de Projetos**
- **Projetos Criados (Último Mês)**: 2
- **Taxa de Conclusão**: 0%
- **Tempo Médio de Execução**: 8 semanas

### **Performance de Pilotos**
- **Taxa de Sucesso**: 0%
- **Score Médio de Validação**: 0.0
- **Pilotos Prontos para Escala**: 0

---

## 🎯 **RECOMENDAÇÕES**

### **Ações Imediatas**
1. **Revisar Compliance**: Verificar projetos com compliance_level > 1
2. **Acompanhar Pilotos**: Monitorar progresso dos pilotos em execução
3. **Atualizar Métricas**: Revisar KPIs e critérios de sucesso

### **Melhorias Sugeridas**
1. **Automatizar Alertas**: Configurar notificações para projetos atrasados
2. **Dashboard em Tempo Real**: Implementar atualizações automáticas
3. **Métricas de ROI**: Adicionar métricas de retorno sobre investimento

---

## 📅 **PRÓXIMAS AÇÕES**

### **Esta Semana**
- [ ] Revisar todos os projetos com compliance_level > 1
- [ ] Atualizar métricas de validação dos pilotos
- [ ] Preparar relatório para reunião executiva

### **Próximas 2 Semanas**
- [ ] Implementar sistema de alertas automáticos
- [ ] Configurar métricas de ROI
- [ ] Treinar equipe no uso dos novos templates

---

**Status**: 🤖 **GERADO AUTOMATICAMENTE**  
**Última Atualização**: 31/08/2025 21:45  
**Próxima Atualização**: 01/09/2025 22:45  
**Owner**: [[Pedro Vitor]]
