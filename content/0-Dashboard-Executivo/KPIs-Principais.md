---
created: 2025-08-31T21:20
updated: 2025-09-01T01:46
---
# 📊 KPIs PRINCIPAIS - MULTISÓCIOS

> *Dashboard consolidado de indicadores-chave de performance*

---

## 🎯 **KPIs ESTRATÉGICOS**

### **Crescimento**
- **Taxa de Crescimento Mensal**: [X]%
- **Novos Projetos/Mês**: [X] projetos
- **Expansão de Mercado**: [X] novos segmentos
- **Captação de Talentos**: [X] novos sócios

### **Lucratividade**
- **ROI Médio por Projeto**: [X]%
- **Margem de Lucro**: [X]%
- **Payback Period**: [X] meses
- **LTV/CAC Ratio**: [X]:1

### **Eficiência**
- **Tempo Médio de Entrega**: [X] semanas
- **Taxa de Conversão**: [X]% (ideia → projeto)
- **Utilização de Recursos**: [X]%
- **Satisfação do Cliente**: [X]%

---

## 💰 **KPIs FINANCEIROS**

### **Receita e Budget**
```dataview
TABLE 
  "R$ " + sum(budget) AS "Budget Total",
  "R$ " + sum(budget * 1.5) AS "Receita Esperada",
  length(rows) AS "Projetos"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
```

### **Budget por Status**
```dataview
TABLE 
  status AS "Status",
  "R$ " + sum(budget) AS "Budget Total",
  length(rows) AS "Quantidade"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY status
SORT sum(budget) DESC
```

### **Budget por Prioridade**
```dataview
TABLE 
  priority AS "Prioridade",
  "R$ " + sum(budget) AS "Budget Total",
  length(rows) AS "Quantidade"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY priority
SORT priority DESC
```

### **ROI por Projeto**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  "R$ " + budget AS "Investimento",
  "R$ " + (budget * 1.5) AS "Retorno Esperado",
  "50%" AS "ROI"
FROM "4-Projetos"
WHERE type = "project" AND status = "deployed"
SORT budget DESC
LIMIT 10
```

---

## 📈 **KPIs OPERACIONAIS**

### **Pipeline de Projetos**
```dataview
TABLE 
  status AS "Status",
  length(rows) AS "Quantidade",
  round(avg(effort_weeks), 1) + "w" AS "Esforço Médio"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY status
SORT length(rows) DESC
```

### **Performance por Owner**
```dataview
TABLE 
  owner AS "Owner",
  length(rows) AS "Projetos",
  "R$ " + sum(budget) AS "Budget Total",
  round(avg(effort_weeks), 1) + "w" AS "Esforço Médio"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY owner
SORT length(rows) DESC
```

### **Segmentos de Mercado**
```dataview
TABLE 
  market_segment AS "Segmento",
  length(rows) AS "Projetos",
  "R$ " + sum(budget) AS "Budget Total"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY market_segment
SORT length(rows) DESC
```

---

## 🔒 **KPIs DE COMPLIANCE**

### **Status de Compliance**
```dataview
TABLE 
  compliance_level AS "Nível",
  length(rows) AS "Projetos",
  round(length(rows) * 100 / length(file("4-Projetos").file), 1) + "%" AS "Percentual"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY compliance_level
SORT compliance_level ASC
```

### **Revisões Legais Pendentes**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  owner AS "Owner",
  compliance_level AS "Nível",
  "PENDENTE" AS "Status"
FROM "4-Projetos"
WHERE legal_review = false AND compliance_level > 1
SORT compliance_level DESC
```

### **Métricas de Segurança**
- **Projetos Nível 1**: `= length(filter(file("4-Projetos").file, (f) => f.compliance_level = 1))`
- **Projetos Nível 2**: `= length(filter(file("4-Projetos").file, (f) => f.compliance_level = 2))`
- **Projetos Nível 3**: `= length(filter(file("4-Projetos").file, (f) => f.compliance_level = 3))`
- **Revisões Pendentes**: `= length(filter(file("4-Projetos").file, (f) => f.legal_review = false))`

---

## 👥 **KPIs DE EQUIPE**

### **Distribuição de Trabalho**
```dataview
TABLE 
  owner AS "Membro",
  length(rows) AS "Projetos Ativos",
  "R$ " + sum(budget) AS "Budget Gerenciado",
  round(avg(effort_weeks), 1) + "w" AS "Esforço Médio"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY owner
SORT length(rows) DESC
```

### **Produtividade por Área**
- **Tecnologia**: [X] projetos ativos - [X]% do budget
- **Comercial**: [X] projetos ativos - [X]% do budget
- **Operações**: [X] projetos ativos - [X]% do budget
- **Marketing**: [X] projetos ativos - [X]% do budget

### **Métricas de Engajamento**
- **Participação em Reuniões**: [X]%
- **Uso do Sistema**: [X]% dos membros
- **Feedback Positivo**: [X]%
- **Retenção de Talentos**: [X]%

---

## 📊 **KPIS DE QUALIDADE**

### **Taxa de Sucesso**
- **Projetos Concluídos**: [X]%
- **No Prazo**: [X]%
- **No Budget**: [X]%
- **Satisfação do Cliente**: [X]%

### **Métricas de Qualidade**
```dataview
TABLE 
  status AS "Status",
  length(rows) AS "Quantidade",
  round(length(rows) * 100 / length(file("4-Projetos").file), 1) + "%" AS "Percentual"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY status
SORT status ASC
```

### **Defeitos e Riscos**
- **Projetos com Riscos**: [X]%
- **Ações Corretivas**: [X] implementadas
- **Tempo de Resolução**: [X] dias
- **Prevenção de Problemas**: [X]%

---

## 📈 **KPIs DE CRESCIMENTO**

### **Expansão de Mercado**
```dataview
TABLE 
  market_segment AS "Segmento",
  length(rows) AS "Projetos",
  "R$ " + sum(budget) AS "Budget Total",
  round(sum(budget) * 100 / sum(map(file("4-Projetos").file, (f) => f.budget)), 1) + "%" AS "Market Share"
FROM "4-Projetos"
WHERE type = "project" OR type = "pilot"
GROUP BY market_segment
SORT length(rows) DESC
```

### **Tendências Temporais**
- **Crescimento Mensal**: [X]%
- **Novos Segmentos**: [X] por trimestre
- **Expansão Geográfica**: [X] novas regiões
- **Diversificação**: [X] novos tipos de projeto

---

## 🎯 **METAS E TARGETS**

### **Metas Trimestrais**
| KPI | Meta Q1 | Meta Q2 | Meta Q3 | Meta Q4 |
|-----|---------|---------|---------|---------|
| **Novos Projetos** | [X] | [X] | [X] | [X] |
| **ROI Médio** | [X]% | [X]% | [X]% | [X]% |
| **Satisfação** | [X]% | [X]% | [X]% | [X]% |
| **Crescimento** | [X]% | [X]% | [X]% | [X]% |

### **Metas Anuais**
- **Receita Total**: R$ [X] milhões
- **Projetos Ativos**: [X] projetos
- **Expansão**: [X] novos segmentos
- **Equipe**: [X] membros

---

## 📊 **DASHBOARD INTERATIVO**

### **Filtros Disponíveis**
- **Por Período**: [Seletor de datas]
- **Por Owner**: [Seletor de membros]
- **Por Status**: [Seletor de status]
- **Por Prioridade**: [Seletor de prioridade]

### **Exportação**
- **Relatório PDF**: [Botão de download]
- **Dados CSV**: [Botão de download]
- **Apresentação**: [Botão de download]

---

## 🔄 **ATUALIZAÇÃO AUTOMÁTICA**

### **Frequência de Atualização**
- **KPIs Críticos**: Tempo real
- **Métricas Operacionais**: A cada 15 minutos
- **Relatórios**: Diário às 08:00
- **Backup**: Automático diário

### **Alertas Configurados**
- **Budget excedido**: > 110% do planejado
- **Prazo vencido**: > 3 dias de atraso
- **Compliance**: Revisão legal pendente
- **Performance**: ROI < 20%

---

**Última Atualização**: {{date}}  
**Próxima Revisão**: [Data]  
**Responsável**: [Nome]
