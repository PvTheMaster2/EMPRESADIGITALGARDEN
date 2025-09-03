---
template: dashboard-visual
type: dashboard
status: active
priority: high
owner: "[[Pedro Vitor]]"
created: <% tp.date.now() %>
updated: <% tp.date.now() %>
version: 1.0
css_class: dashboard-visual
---

# 🏢 **<%= tp.file.title %>**

> *Dashboard visual padronizado com estilo AERALYN*

---

<div class="dashboard-header">
### 🎯 **RESUMO EXECUTIVO**
- **Total de Projetos**: <% tp.file.find_tfile("0-Dashboard-Executivo/Home-Executivo").then(file => file ? "8 projetos" : "Calculando...") %>
- **Budget Total**: R$ 297.000
- **ROI Médio**: 347%
- **Status Geral**: ✅ **Sistema Funcionando**
</div>

## 📊 **MÉTRICAS PRINCIPAIS**

<div class="metric-grid">

<div class="metric-card metric-card-success">
### 🚀 **PROJETOS ATIVOS**
**8 Projetos**
**Status**: ✅ Funcionando
**Tendência**: ↗️ Crescendo
</div>

<div class="metric-card metric-card-warning">
### 💰 **BUDGET TOTAL**
**R$ 297.000**
**Utilizado**: 65%
**Disponível**: R$ 103.950
</div>

<div class="metric-card metric-card-info">
### 📈 **ROI PROJETADO**
**347%**
**Receita**: R$ 1.031.000
**Lucro**: R$ 734.000
</div>

<div class="metric-card metric-card-danger">
### ⚡ **EFICIÊNCIA**
**85%**
**Projetos no Prazo**: 6/8
**Qualidade**: ⭐⭐⭐⭐⭐
</div>

</div>

## 🚀 **PIPELINE DE INOVAÇÃO**

<div class="section-header">
### **Status dos Projetos por Fase**
</div>

```mermaid
graph LR
    A[💡 Ideias] --> B[🔍 Validação]
    B --> C[🚀 Desenvolvimento]
    C --> D[✅ Concluído]
    
    A --> A1[3 projetos]
    B --> B1[2 projetos]
    C --> C1[2 projetos]
    D --> D1[1 projeto]
    
    style A fill:#e3f2fd
    style B fill:#fff3e0
    style C fill:#e8f5e8
    style D fill:#fce4ec
```

## 💰 **PERFORMANCE FINANCEIRA**

<div class="section-header">
### **Distribuição de Budget por Prioridade**
</div>

```mermaid
pie title Budget por Prioridade
    "Alta Prioridade" : 45
    "Média Prioridade" : 35
    "Baixa Prioridade" : 20
```

## 👥 **EQUIPE E PERFORMANCE**

<div class="section-header">
### **Produtividade por Área**
</div>

<div class="area-grid">

<div class="area-card area-card-tech">
### 🖥️ **TECNOLOGIA**
**Projetos**: 3 ativos
**Eficiência**: 92%
**Tendência**: ↗️ Crescendo
</div>

<div class="area-card area-card-commercial">
### 💼 **COMERCIAL**
**Projetos**: 2 ativos
**Eficiência**: 88%
**Tendência**: ↗️ Estável
</div>

<div class="area-card area-card-operations">
### ⚙️ **OPERAÇÕES**
**Projetos**: 2 ativos
**Eficiência**: 85%
**Tendência**: → Estável
</div>

<div class="area-card area-card-marketing">
### 📢 **MARKETING**
**Projetos**: 1 ativo
**Eficiência**: 78%
**Tendência**: ↗️ Melhorando
</div>

</div>

## ⚠️ **ALERTAS E NOTIFICAÇÕES**

<div class="callout-warning">
### ⚠️ **ATENÇÃO**
- **Projeto X** precisa de revisão de budget
- **Deadline** próximo para entrega Y
- **Recursos** limitados na área Z
</div>

<div class="callout-success">
### ✅ **SUCESSOS**
- **Projeto A** concluído com sucesso
- **Meta B** atingida antes do prazo
- **Equipe C** superou expectativas
</div>

## 📋 **PRÓXIMAS AÇÕES**

| Ação | Responsável | Prazo | Status |
|------|-------------|-------|--------|
| Revisão de budget | PV | 2025-09-05 | 🔄 Em andamento |
| Entrega projeto X | Equipe | 2025-09-10 | ⏳ Pendente |
| Reunião estratégica | Todos | 2025-09-15 | 📅 Agendada |

## 🔗 **LINKS RÁPIDOS**

- [[0-Dashboard-Executivo/Home-Executivo|🏠 Home Executivo]]
- [[0-Dashboard-Executivo/Innovation-Pipeline|🚀 Innovation Pipeline]]
- [[0-Dashboard-Executivo/KPIs-Principais|📊 KPIs Principais]]
- [[4-Projetos/|📁 Projetos]]
- [[6-Reunioes/|🤝 Reuniões]]

---

**Última Atualização**: <% tp.date.now("YYYY-MM-DD HH:mm") %>
**Próxima Revisão**: <% tp.date.now("YYYY-MM-DD", 7) %>
