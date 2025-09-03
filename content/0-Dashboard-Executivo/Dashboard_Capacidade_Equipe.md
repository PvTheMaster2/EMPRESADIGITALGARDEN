---
created: 2025-01-20T10:00
updated: 2025-09-02T21:24
---
# 📊 DASHBOARD DE CAPACIDADE DA EQUIPE

> *Visão executiva da capacidade, alocação e rendimento da equipe*

---

## 🎯 **RESUMO EXECUTIVO**

### **Capacidade Total da Equipe**
- **Total de Pessoas**: 0
- **Capacidade Semanal**: 0h
- **Capacidade Mensal**: 0h
- **Utilização Atual**: 0%

### **Status da Sprint Atual**
- **Sprint**: [[Sprint Atual]]
- **Capacidade Disponível**: 0h
- **Horas Planejadas**: 0h
- **Horas Realizadas**: 0h
- **Progresso**: 0%

---

## 👥 **CAPACIDADE POR PESSOA**

### **Visão Geral da Equipe**
```dataview
TABLE 
  availability_weekly + "h/sem" AS "Disponível",
  availability_weekly - allocated_hours + "h" AS "Livre",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person" AND status = "active"
SORT allocated_hours DESC
```

### **Capacidade por Departamento**
```dataview
TABLE 
  sum(availability_weekly) + "h" AS "Capacidade Total",
  sum(allocated_hours) + "h" AS "Alocado",
  round((sum(allocated_hours) / sum(availability_weekly)) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person" AND status = "active"
GROUP BY department
SORT sum(allocated_hours) DESC
```

### **Top 5 Mais Utilizados**
```dataview
TABLE 
  role AS "Cargo",
  department AS "Departamento",
  allocated_hours + "h" AS "Alocado",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person" AND status = "active"
SORT allocated_hours DESC
LIMIT 5
```

---

## 📈 **MÉTRICAS DE PERFORMANCE**

### **Produtividade por Departamento**
```dataview
TABLE 
  department AS "Departamento",
  sum(actual_hours) + "h" AS "Horas Realizadas",
  sum(estimated_hours) + "h" AS "Horas Estimadas",
  round((sum(actual_hours) / sum(estimated_hours)) * 100, 1) + "%" AS "Eficiência"
FROM "4-Projetos"
WHERE type = "task"
GROUP BY department
SORT sum(actual_hours) DESC
```

### **Precisão das Estimativas**
```dataview
TABLE 
  assignee AS "Responsável",
  sum(estimated_hours) + "h" AS "Estimado",
  sum(actual_hours) + "h" AS "Realizado",
  round(abs((sum(estimated_hours) - sum(actual_hours)) / sum(estimated_hours)) * 100, 1) + "%" AS "Variação"
FROM "4-Projetos"
WHERE type = "task" AND actual_hours > 0
GROUP BY assignee
SORT sum(actual_hours) DESC
```

---

## 🎯 **SPRINTS E PROJETOS**

### **Status das Sprints**
```dataview
TABLE 
  choice(status, "📋","🚧","✅") AS "Status",
  start_date + " a " + end_date AS "Período",
  total_capacity_hours + "h" AS "Capacidade",
  planned_hours + "h" AS "Planejado",
  actual_hours + "h" AS "Realizado",
  round(completion_rate, 1) + "%" AS "Conclusão"
FROM "4-Projetos"
WHERE type = "sprint"
SORT start_date DESC
```

### **Projetos por Status**
```dataview
TABLE 
  choice(status, "💡","🚧","✅") AS "Status",
  owner AS "Responsável",
  effort_weeks + "w" AS "Duração",
  budget + "R$" AS "Orçamento"
FROM "4-Projetos"
WHERE type = "project"
SORT status, priority DESC
```

### **Progresso por Projeto**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  round((actual_hours / estimated_hours) * 100, 1) + "%" AS "Progresso",
  actual_hours + "h/" + estimated_hours + "h" AS "Horas"
FROM "4-Projetos"
WHERE type = "project"
SORT actual_hours DESC
```

---

## ⚠️ **ALERTAS E RISCOS**

### **Pessoas Sobrecarregadas**
```dataview
TABLE 
  role AS "Cargo",
  department AS "Departamento",
  allocated_hours + "h" AS "Alocado",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person" AND status = "active" AND (allocated_hours / availability_weekly) > 0.8
SORT allocated_hours DESC
```

### **Pessoas Subutilizadas**
```dataview
TABLE 
  role AS "Cargo",
  department AS "Departamento",
  allocated_hours + "h" AS "Alocado",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person" AND status = "active" AND (allocated_hours / availability_weekly) < 0.3
SORT allocated_hours ASC
```

### **Sprints em Risco**
```dataview
TABLE 
  sprint_number AS "Sprint",
  round((planned_hours / total_capacity_hours) * 100, 1) + "%" AS "Utilização Planejada",
  round(completion_rate, 1) + "%" AS "Progresso",
  status AS "Status"
FROM "4-Projetos"
WHERE type = "sprint" AND (planned_hours / total_capacity_hours) > 0.9
SORT sprint_number DESC
```

---

## 📊 **TENDÊNCIAS E ANÁLISES**

### **Evolução da Capacidade (Últimos 3 Meses)**
```dataview
TABLE 
  dateformat(created, "MMMM yyyy") AS "Mês",
  sum(availability_weekly) + "h" AS "Capacidade Total",
  sum(allocated_hours) + "h" AS "Alocado",
  round((sum(allocated_hours) / sum(availability_weekly)) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person" AND status = "active"
GROUP BY dateformat(created, "MMMM yyyy")
SORT created DESC
LIMIT 3
```

### **Performance por Sprint**
```dataview
TABLE 
  sprint_number AS "Sprint",
  round((actual_hours / planned_hours) * 100, 1) + "%" AS "Eficiência",
  tasks_completed + "/" + tasks_count AS "Tarefas",
  round(completion_rate, 1) + "%" AS "Conclusão"
FROM "4-Projetos"
WHERE type = "sprint"
SORT sprint_number DESC
```

---

## 🎯 **RECOMENDAÇÕES**

### **Otimizações de Capacidade**

#### **Redistribuição de Carga**
- **Pessoas sobrecarregadas**: [Lista de pessoas com >80% utilização]
- **Ações recomendadas**: Redistribuir tarefas para pessoas com menor utilização
- **Impacto esperado**: Melhorar qualidade e reduzir riscos de burnout

#### **Melhoria de Estimativas**
- **Pessoas com baixa precisão**: [Lista de pessoas com >30% variação]
- **Ações recomendadas**: Treinamento em estimativas e revisão de processos
- **Impacto esperado**: Melhor planejamento e previsibilidade

#### **Otimização de Sprints**
- **Sprints com alta utilização**: [Lista de sprints com >90% utilização]
- **Ações recomendadas**: Reduzir escopo ou aumentar duração
- **Impacto esperado**: Maior flexibilidade e menor risco

---

## 📋 **PRÓXIMAS AÇÕES**

### **Ações Imediatas (Esta Semana)**
- [ ] Revisar alocação de pessoas sobrecarregadas
- [ ] Ajustar estimativas de tarefas em andamento
- [ ] Planejar próxima sprint considerando capacidade real

### **Ações de Médio Prazo (Próximo Mês)**
- [ ] Implementar treinamento em estimativas
- [ ] Revisar processos de planejamento de sprint
- [ ] Desenvolver métricas de qualidade

### **Ações de Longo Prazo (Próximo Trimestre)**
- [ ] Avaliar necessidade de contratações
- [ ] Implementar ferramentas de automação
- [ ] Desenvolver plano de crescimento da equipe

---

## 🔗 **LINKS RÁPIDOS**

### **Sistema de Gestão**
- [[5-Processos/Sistema_Gestao_Capacidade_Sprints]] - Sistema completo
- [[z_Templates/Projetos/Template_Pessoa]] - Template de pessoa
- [[z_Templates/Projetos/Template_Sprint]] - Template de sprint
- [[z_Templates/Projetos/Template_Tarefa]] - Template de tarefa

### **Formulários**
- [[utils/forms/Formulario_Capacidade_Pessoas]] - Formulário de capacidade

### **Dashboards Relacionados**
- [[0-Dashboard-Executivo/Dashboard-Central-Integrado]] - Dashboard principal
- [[0-Dashboard-Executivo/Dashboard-Projetos-Prazo]] - Projetos por prazo
- [[0-Dashboard-Executivo/Decisoes-Estrategicas]] - Decisões estratégicas

---

## 📈 **MÉTRICAS DE REFERÊNCIA**

### **Benchmarks de Qualidade**
- **Utilização ideal**: 60-80%
- **Eficiência da sprint**: > 80%
- **Precisão das estimativas**: ±20%
- **Taxa de conclusão**: > 90%

### **Indicadores de Risco**
- **Sobrecarga**: > 90% utilização
- **Subutilização**: < 30% utilização
- **Baixa precisão**: > 30% variação
- **Sprint em risco**: > 90% utilização planejada

---

**Status**: ✅ **ATIVO**  
**Última Atualização**: 2025-01-20  
**Próxima Revisão**: 2025-01-27
