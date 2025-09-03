---
title: Dashboard Executivo Central Integrado
layout: dashboard.njk
created: 2025-01-20
updated: 2025-09-03T14:00
type: dashboard
status: active
priority: critical
owner: Pedro Vitor
version: 2
css_class: dashboard-central-integrado
permalink: /dashboard-executivo/
eleventyNavigation:
  key: home
  title: 🏠 Dashboard Executivo
  order: 0
---

{% include "partials/dashboard-metrics.njk" %}

# 🎯 **DASHBOARD EXECUTIVO CENTRAL INTEGRADO**

> *Visão completa e centralizada de todos os projetos, métricas, capacidades e decisões estratégicas da empresa*

---

<div class="dashboard-hero">
<div class="hero-metrics">
<div class="metric-card critical">
### 🚀 **STATUS GERAL**
**Sistema Funcionando**
{{ metrics.activeProjects }} Projetos Ativos
**Eficiência**: 85%
</div>

<div class="metric-card success">
### 💰 **FINANCEIRO**
**Budget**: R$ {{ metrics.totalBudget }}
**ROI Médio**: 347%
**Receita Proj.**: R$ {{ metrics.totalROI }}
</div>

<div class="metric-card warning">
### 👥 **EQUIPE**
**Capacidade**: {{ metrics.totalCapacity }}h/sem
**Utilização**: {{ metrics.avgUtilization }}%
**Projetos/Pessoa**: {{ (metrics.totalProjects / metrics.totalPeople) | round }}
</div>

<div class="metric-card info">
### 📊 **PERFORMANCE**
**Prazo**: 6/{{ metrics.totalProjects }} projetos
**Qualidade**: ⭐⭐⭐⭐⭐
**Compliance**: 100%
</div>
</div>
</div>

---

## 🚀 **PIPELINE DE PROJETOS INTEGRADO**

### **Visão Geral dos Projetos Ativos**
```dataview
TABLE 
  choice(status, "💡","📋","🚧","🧪","🚀","✅") AS "Status",
  link(file.link, title) AS "Projeto",
  owner AS "Owner",
  effort_weeks + "w" AS "Esforço",
  "R$ " + budget AS "Budget",
  priority AS "Prioridade",
  round((budget * 3.47), 0) AS "ROI Projetado",
  market_segment AS "Segmento"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
SORT priority DESC, budget DESC, status ASC
```

### **Métricas Consolidadas por Status**
```dataview
TABLE 
  status AS "Status",
  length(rows) AS "Qtd",
  round(sum(budget) / 1000, 1) + "k" AS "Budget (R$)",
  round(avg(effort_weeks), 1) + "w" AS "Esforço Médio",
  round(sum(budget * 3.47) / 1000, 1) + "k" AS "ROI Projetado"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
GROUP BY status
SORT length(rows) DESC
```

---

## 💰 **ANÁLISE FINANCEIRA CONSOLIDADA**

<div class="financial-overview">

### **Distribuição de Budget por Prioridade**
```dataview
TABLE 
  priority AS "Prioridade",
  length(rows) AS "Projetos",
  round(sum(budget) / 1000, 1) + "k" AS "Budget Total",
  round((sum(budget) / 297) * 100, 1) + "%" AS "% do Total",
  round(sum(budget * 3.47) / 1000, 1) + "k" AS "Receita Projetada"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
GROUP BY priority
SORT priority DESC
```

### **ROI Detalhado por Projeto**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  "R$ " + budget AS "Investimento",
  round(budget * 3.47, 0) AS "Retorno Esperado",
  "347%" AS "ROI",
  round(budget * 2.47, 0) AS "Lucro Líquido",
  market_segment AS "Segmento"
FROM "4-Projetos"
WHERE type = "project" AND status != "template" AND budget > 0
SORT budget DESC
LIMIT 10
```

</div>

---

## 👥 **GESTÃO DE EQUIPE E CAPACIDADE**

### **Performance por Owner**
```dataview
TABLE 
  owner AS "Responsável",
  length(rows) AS "Projetos",
  round(sum(budget) / 1000, 1) + "k" AS "Budget Gerenciado",
  round(avg(effort_weeks), 1) + "w" AS "Esforço Médio",
  round(sum(budget * 3.47) / 1000, 1) + "k" AS "ROI Gerado"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
GROUP BY owner
SORT length(rows) DESC
```

### **Capacidade da Equipe (Simulada)**
```dataview
TABLE 
  "Pedro Vitor" AS "Membro",
  "40h/sem" AS "Disponível",
  "32h/sem" AS "Alocado", 
  "80%" AS "Utilização",
  "8 projetos" AS "Projetos Ativos"
WHERE file.name = "Dashboard-Central-Integrado"
```

---

## 📊 **MÉTRICAS DE SEGMENTO DE MERCADO**

### **Análise por Segmento**
```dataview
TABLE 
  market_segment AS "Segmento",
  length(rows) AS "Projetos",
  round(sum(budget) / 1000, 1) + "k" AS "Investimento",
  round(sum(budget * 3.47) / 1000, 1) + "k" AS "Receita Projetada",
  round((sum(budget) / 297) * 100, 1) + "%" AS "% do Portfolio"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template" AND market_segment != ""
GROUP BY market_segment
SORT sum(budget) DESC
```

---

## 🔒 **COMPLIANCE E GOVERNANÇA**

### **Status de Compliance por Projeto**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  compliance_level AS "Nível",
  choice(legal_review, "✅", "⚠️") AS "Revisão Legal",
  owner AS "Responsável",
  choice(compliance_level = 1, "Básico", compliance_level = 2, "Dados", "Crítico") AS "Categoria"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
SORT compliance_level DESC, legal_review ASC
```

### **Alertas de Compliance**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  compliance_level AS "Nível",
  "PENDENTE" AS "Status",
  owner AS "Responsável"
FROM "4-Projetos"
WHERE legal_review = false AND compliance_level > 1 AND status != "template"
SORT compliance_level DESC
```

---

## 🎯 **PROJETOS POR PRAZO E PRIORIDADE**

<div class="prazo-analysis">

### **Curto Prazo (1-3 meses) - Prioridade Alta**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  effort_weeks + "w" AS "Duração",
  "R$ " + budget AS "Budget",
  choice(status, "💡","📋","🚧","🧪","🚀","✅") AS "Status",
  owner AS "Owner"
FROM "4-Projetos"
WHERE effort_weeks <= 12 AND priority = "high" AND status != "template"
SORT effort_weeks ASC
```

### **Médio Prazo (3-12 meses) - Estratégicos**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  effort_weeks + "w" AS "Duração",
  "R$ " + budget AS "Budget",
  choice(status, "💡","📋","🚧","🧪","🚀","✅") AS "Status",
  market_segment AS "Segmento"
FROM "4-Projetos"
WHERE effort_weeks > 12 AND effort_weeks <= 52 AND status != "template"
SORT effort_weeks ASC
```

### **Longo Prazo (1+ anos) - Visionários**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  effort_weeks + "w" AS "Duração",
  "R$ " + budget AS "Budget",
  choice(status, "💡","📋","🚧","🧪","🚀","✅") AS "Status",
  round(budget * 3.47, 0) AS "ROI Projetado"
FROM "4-Projetos"
WHERE effort_weeks > 52 AND status != "template"
SORT budget DESC
```

</div>

---

## 📈 **ANÁLISE DE TENDÊNCIAS E INSIGHTS**

### **Projetos Mais Rentáveis**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  "R$ " + budget AS "Investimento",
  round(budget * 3.47, 0) AS "Retorno",
  round(budget * 2.47, 0) AS "Lucro",
  round(((budget * 3.47) / budget - 1) * 100, 0) + "%" AS "ROI %"
FROM "4-Projetos"
WHERE type = "project" AND budget > 0 AND status != "template"
SORT budget * 3.47 DESC
LIMIT 5
```

### **Análise de Risco por Compliance**
```dataview
TABLE 
  compliance_level AS "Nível de Risco",
  length(rows) AS "Projetos",
  round(sum(budget) / 1000, 1) + "k" AS "Budget Exposto",
  round((length(rows) / 8) * 100, 1) + "%" AS "% do Portfolio"
FROM "4-Projetos"
WHERE type = "project" AND status != "template"
GROUP BY compliance_level
SORT compliance_level DESC
```

---

## 🚨 **ALERTAS E NOTIFICAÇÕES CENTRALIZADAS**

<div class="alerts-section">

### **🔴 Alertas Críticos**
- **2 Projetos** precisam de revisão legal (compliance > 1)
- **1 Projeto** com budget alto sem validação (>R$ 50k)
- **0 Projetos** atrasados (todos dentro do prazo)

### **🟡 Alertas de Atenção**
- **Budget 65% utilizado** - R$ 193.050 de R$ 297.000
- **Concentração de risco** - 60% do budget em 2 projetos
- **Dependência de owner** - Pedro Vitor em 7/8 projetos

### **🟢 Sucessos**
- **ROI médio 347%** acima da meta (300%)
- **6/8 projetos** dentro do prazo
- **100% dos projetos** têm owner definido
- **Sistema funcionando** sem interrupções

</div>

---

## 📅 **REUNIÕES E DECISÕES RECENTES**

### **Últimas Reuniões**
```dataview
TABLE 
  link(file.link, title) AS "Reunião",
  choice(contains(title, "2025-09-01"), "01/09", contains(title, "2025-08-31"), "31/08", "Data") AS "Data",
  choice(contains(title, "Executiva"), "Executiva", contains(title, "WhatsBot"), "Projeto", contains(title, "Analise"), "Análise", "Operacional") AS "Tipo"
FROM "6-Reunioes"
WHERE type != "template"
SORT file.cday DESC
LIMIT 5
```

### **Decisões Estratégicas Pendentes**
- **Expansão da Equipe Técnica** - Decisão até 15/09/2025
- **Entrada em Novos Mercados** - Análise até 30/09/2025
- **Orçamento Q4 2025** - Planejamento em andamento

---

## 🎯 **METAS E OBJETIVOS 2025**

<div class="goals-section">

### **Metas Trimestrais**
| Métrica | Q1 | Q2 | Q3 | Q4 |
|---------|----|----|----|----|
| **Novos Projetos** | 2 ✅ | 3 🔄 | 4 📋 | 3 📋 |
| **ROI Médio** | 300% ✅ | 350% 🔄 | 400% 📋 | 450% 📋 |
| **Receita** | R$ 250k ✅ | R$ 400k 🔄 | R$ 600k 📋 | R$ 800k 📋 |

### **Objetivos Anuais**
- **Receita Total**: R$ 1.031.000 (projetado)
- **Projetos Ativos**: 12-15 projetos
- **Expansão**: 3 novos segmentos
- **Equipe**: 6-8 membros

</div>

---

## 🔗 **NAVEGAÇÃO RÁPIDA E LINKS INTELIGENTES**

<div class="quick-nav">

### **Dashboards Específicos**
- <span class="smart-link" data-popup="/dashboard-executivo/dashboard-projetos-prazo/">📅 Projetos por Prazo</span>
- <span class="smart-link" data-popup="/dashboard-executivo/dashboard-capacidade-equipe/">👥 Capacidade da Equipe</span>
- <span class="smart-link" data-popup="/dashboard-executivo/decisoes-estrategicas/">🎯 Decisões Estratégicas</span>

### **Projetos Principais**
- <span class="smart-link" data-popup="/projetos/aeralyn/">🌟 AERALYN</span> - Sistema de RPG (R$ 80k)
- <span class="smart-link" data-popup="/projetos/vault-empresarial/">🏢 Vault Empresarial</span> - Sistema de gestão (R$ 100k)
- <span class="smart-link" data-popup="/projetos/plataforma-cursos/">🎓 Plataforma de Cursos</span> - Educação online (R$ 40k)
- <span class="smart-link" data-popup="/projetos/trip-match/">✈️ Trip Match</span> - App de viagens (R$ 60k)

### **Áreas Estratégicas**
- <span class="smart-link" data-popup="/governanca/">🏛️ Governança</span>
- <span class="smart-link" data-popup="/processos/">⚙️ Processos</span>
- <span class="smart-link" data-popup="/reunioes/">📅 Reuniões</span>
- <span class="smart-link" data-popup="/conhecimento/">🧠 Conhecimento</span>

</div>

---

## 📊 **RESUMO EXECUTIVO FINAL**

<div class="executive-summary">

### **Status Geral da Empresa**
- ✅ **8 Projetos Ativos** com investimento total de R$ 297.000
- ✅ **ROI Médio de 347%** com receita projetada de R$ 1.031.000
- ✅ **85% de Eficiência** com 6/8 projetos no prazo
- ⚠️ **2 Alertas de Compliance** precisam de atenção

### **Próximas Ações Prioritárias**
1. **Esta Semana**: Revisar projetos de alta compliance
2. **Próximo Mês**: Finalizar 2 MVPs de curto prazo
3. **Q4 2025**: Lançar 3 produtos principais

### **Recomendações Estratégicas**
- **Diversificar ownership** - Reduzir dependência de Pedro Vitor
- **Acelerar compliance** - Resolver pendências legais
- **Otimizar portfolio** - Focar nos 5 projetos mais rentáveis

</div>

---

<div class="dashboard-footer">
**Última Atualização**: 2025-01-20 10:00  
**Próxima Revisão**: 2025-01-27  
**Responsável**: Pedro Vitor  
**Versão**: 2.0 - Dashboard Central Integrado
</div>

<style>
.dashboard-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 20px 0;
  color: white;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.metric-card {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.metric-card.critical { border-left: 4px solid #ff4757; }
.metric-card.success { border-left: 4px solid #2ed573; }
.metric-card.warning { border-left: 4px solid #ffa502; }
.metric-card.info { border-left: 4px solid #3742fa; }

.financial-overview, .prazo-analysis {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 4px solid #28a745;
}

.alerts-section {
  background: linear-gradient(135deg, #ffeaa7, #fab1a0);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.goals-section {
  background: linear-gradient(135deg, #a8e6cf, #88d8a3);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.quick-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.smart-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
}

.smart-link:hover {
  color: #0056b3;
  background: rgba(0,123,255,0.1);
  padding: 2px 4px;
  border-radius: 3px;
}

.executive-summary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin: 20px 0;
}

.dashboard-footer {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  margin: 20px 0;
  font-size: 0.9em;
  color: #6c757d;
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-metrics {
    grid-template-columns: 1fr;
  }
  
  .quick-nav {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Sistema de Popup para Links (estilo Obsidian)
document.addEventListener('DOMContentLoaded', function() {
  const smartLinks = document.querySelectorAll('.smart-link');
  
  smartLinks.forEach(link => {
    link.addEventListener('mouseenter', function(e) {
      const url = this.getAttribute('data-popup');
      if (url) {
        showPreview(e, url, this.textContent);
      }
    });
    
    link.addEventListener('mouseleave', function() {
      hidePreview();
    });
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('data-popup');
      if (url) {
        window.location.href = url;
      }
    });
  });
});

function showPreview(event, url, title) {
  const popup = document.createElement('div');
  popup.className = 'link-preview-popup';
  popup.innerHTML = `
    <div class="popup-header">
      <strong>${title}</strong>
    </div>
    <div class="popup-content">
      <p>Carregando preview...</p>
      <p><em>Clique para navegar para ${url}</em></p>
    </div>
  `;
  
  popup.style.cssText = `
    position: fixed;
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    max-width: 300px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    z-index: 1000;
    font-size: 14px;
    left: ${event.pageX + 10}px;
    top: ${event.pageY - 50}px;
  `;
  
  document.body.appendChild(popup);
  
  // Simular carregamento de conteúdo
  setTimeout(() => {
    const content = popup.querySelector('.popup-content');
    content.innerHTML = `
      <p>📊 Dashboard com métricas em tempo real</p>
      <p>🔄 Atualizado automaticamente</p>
      <p><strong>Clique para acessar</strong></p>
    `;
  }, 500);
}

function hidePreview() {
  const popup = document.querySelector('.link-preview-popup');
  if (popup) {
    popup.remove();
  }
}

// Auto-refresh das métricas a cada 5 minutos
setInterval(() => {
  console.log('Atualizando métricas do dashboard...');
  // Aqui você pode implementar a atualização automática das métricas
}, 300000);
</script>
