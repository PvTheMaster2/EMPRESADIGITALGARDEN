---
title: Dashboard Executivo
description: Visão geral do conhecimento empresarial e projetos em andamento
permalink: /dashboard-overview/
layout: base.njk
created: 2025-09-01T15:18
updated: 2025-09-01T16:21
---

# 🌱 Digital Garden Empresarial

Bem-vindo ao sistema de gestão de conhecimento da empresa. Este ambiente integra todas as informações críticas para tomada de decisão e acompanhamento de projetos.

## 📊 Visão Geral

<div class="dashboard-grid">

### 🚀 Projetos Ativos
{% set projetosAtivos = collections.projetos_ativos %}
**{{ projetosAtivos.length }}** projetos em portfólio ativo

{% for projeto in projetosAtivos | limit(4) %}
- **[{{ projeto.data.title }}]({{ projeto.url }})** 
  {% if projeto.data.status %} - Status: {{ projeto.data.status }}{% endif %}
  {% if projeto.data.effort_weeks %} - {{ projeto.data.effort_weeks }} semanas{% endif %}
{% endfor %}

{% if projetosAtivos.length > 4 %}
<a href="/projetos/ativos/" class="view-all-link">Ver todos os {{ projetosAtivos.length }} projetos ativos →</a>
{% endif %}

### ⚡ Em Andamento
{% set projetosAndamento = collections.projetos_andamento %}
**{{ projetosAndamento.length }}** projetos em execução

{% for projeto in projetosAndamento | limit(3) %}
- **[{{ projeto.data.title }}]({{ projeto.url }})** 
  {% if projeto.data.effort_weeks %}({{ projeto.data.effort_weeks }} semanas){% endif %}
  {% if projeto.data.validation_score %} - Score: {{ projeto.data.validation_score }}/10{% endif %}
{% endfor %}

{% if projetosAndamento.length > 3 %}
<a href="/projetos/em-andamento/" class="view-all-link">Ver todos →</a>
{% endif %}

### ⭐ Pilotos Validados
{% set pilotosValidados = collections.pilotos_validados %}
**{{ pilotosValidados.length }}** projetos com alta validação (8+)

{% for projeto in pilotosValidados | limit(3) %}
- **[{{ projeto.data.title }}]({{ projeto.url }})** 
  (⭐ {{ projeto.data.validation_score }}/10)
  {% if projeto.data.revenue_potential %} - {{ projeto.data.revenue_potential }}{% endif %}
{% endfor %}

### 📋 Governança
{% set documentosGovernanca = collections.governanca %}
**{{ documentosGovernanca.length }}** documentos de governança

{% for doc in documentosGovernanca | limit(3) %}
- **[{{ doc.data.title }}]({{ doc.url }})**
{% endfor %}

<a href="/governanca/" class="view-all-link">Ver toda a governança →</a>

### 🤝 Reuniões Recentes  
{% set reunioesRecentes = collections.reunioes | reverse %}
**{{ reunioesRecentes.length }}** atas e registros

{% for reuniao in reunioesRecentes | limit(3) %}
- **[{{ reuniao.data.title }}]({{ reuniao.url }})**
  {% if reuniao.data.date %}({{ reuniao.data.date | date("dd/MM/yyyy") }}){% endif %}
{% endfor %}

<a href="/reunioes/" class="view-all-link">Ver todas as reuniões →</a>

</div>

## 🗺️ Navegação Rápida

<div class="navigation-grid">

<div class="nav-card">
  <h3>📈 [Projetos](/4-projetos/)</h3>
  <p>Portfólio completo, pilotos, ideias e análises de ROI</p>
</div>

<div class="nav-card">
  <h3>⚖️ [Governança](/1-governanca/)</h3>
  <p>Políticas, compliance, acordo de sócios e ética</p>
</div>

<div class="nav-card">
  <h3>👥 [Equipes](/2-equipes/)</h3>
  <p>Estrutura organizacional e capacidades</p>
</div>

<div class="nav-card">
  <h3>🎯 [Processos](/5-processos/)</h3>
  <p>SOPs, workflows e sistemas de gestão</p>
</div>

<div class="nav-card">
  <h3>🌍 [Mercado](/3-mercado/)</h3>
  <p>Clientes, concorrentes e tendências</p>
</div>

<div class="nav-card">
  <h3>🧠 [Conhecimento](/7-conhecimento/)</h3>
  <p>Base de conhecimento e aprendizados</p>
</div>

</div>

## 📊 Métricas Rápidas

<div class="metrics-row">
  <div class="metric-card">
    <span class="metric-number">{{ collections.projetos.length }}</span>
    <span class="metric-label">Total de Projetos</span>
  </div>
  
  <div class="metric-card">
    <span class="metric-number">{{ collections.projetos_andamento.length }}</span>
    <span class="metric-label">Em Execução</span>
  </div>
  
  <div class="metric-card">
    <span class="metric-number">{{ collections.pilotos_validados.length }}</span>
    <span class="metric-label">Validados (8+)</span>
  </div>
  
  <div class="metric-card">
    <span class="metric-number">{{ collections.all.length }}</span>
    <span class="metric-label">Total de Páginas</span>
  </div>
</div>

---

> **💡 Dica:** Use a busca (🔍) para encontrar rapidamente qualquer informação ou utilize os links [[wiki]] para navegar entre páginas relacionadas.

*Última atualização: {% date %}*
