---
title: Digital Garden Empresarial - Multisocios
layout: base
permalink: /
created: 2025-01-02
updated: 2025-09-02T22:21
type: base
status: active
---

# 🌱 Digital Garden Empresarial - Multisocios

Bem-vindo ao **Sistema de Gestão de Conhecimento** da Multisocios! Este é seu hub central para navegar por todas as informações, projetos e processos da empresa.

## 🎯 Navegação Principal

### 📊 [Dashboard Executivo](/dashboard-executivo/)
- **[Home Executivo](/dashboard-executivo/)** - Visão geral completa
- **[KPIs Principais](/dashboard-executivo/kpis-principais/)** - Métricas em tempo real
- **[Innovation Pipeline](/dashboard-executivo/innovation-pipeline/)** - Pipeline de inovação
- **[Executive Auto](/dashboard-executivo/executive-auto/)** - Dashboard automático

### 🏛️ [Governança](/governanca/)
- Compliance e políticas empresariais
- Estrutura societária e acordos
- Revisões legais e aprovações

### 👥 [Equipes](/equipes/)
- Gestão de pessoas e capacidades
- Organograma e responsabilidades
- Avaliações e desenvolvimento

### 📈 [Mercado](/mercado/)
- Análise de mercado e concorrentes
- Tendências e oportunidades
- Inteligência competitiva

### 📋 [Projetos](/projetos/)
- **[Ativos](/projetos/ativos/)** - Projetos em execução
- **[Em Desenvolvimento](/projetos/em-desenvolvimento/)** - Desenvolvimento ativo
- **[Templates](/projetos/templates/)** - Modelos e guias

### ⚙️ [Processos](/processos/)
- Workflows e SOPs
- Automações e integrações
- Documentação técnica

### 🤝 [Reuniões](/reunioes/)
- Atas de reunião
- Decisões e follow-ups
- Calendário de eventos

### 📚 [Conhecimento](/conhecimento/)
- Base de conhecimento
- Documentação técnica
- Melhores práticas

## 🚀 Funcionalidades

### 🔍 Sistema de Busca
- Busca global em todo o conteúdo
- Filtros por categoria e tags
- Links inteligentes entre páginas

### 📊 Dashboards Dinâmicos
- Métricas atualizadas automaticamente
- Visualizações interativas
- Relatórios personalizados

### 🔗 Navegação Inteligente
- Links bidirecionais automáticos
- Breadcrumbs contextuais
- Sidebar adaptativa

### 🛡️ Segurança e Compliance
- **Política de IA - 3 Níveis**:
  - **Nível 1**: Aprovação do owner
  - **Nível 2**: Aprovação do owner + legal
  - **Nível 3**: Aprovação do conselho + legal + validação
- **LGPD Compliance** integrado
- **Audit Trail** completo

## 📈 Métricas em Tempo Real

<div class="metric-grid">
  <div class="metric-card metric-card-info">
    <h3>Projetos Ativos</h3>
    <div class="metric-value">{{ collections.projetos_ativos.length or 0 }}</div>
    <div class="metric-label">Em execução</div>
  </div>
  
  <div class="metric-card metric-card-success">
    <h3>Pilotos Validados</h3>
    <div class="metric-value">{{ collections.pilotos_validados.length or 0 }}</div>
    <div class="metric-label">Score ≥ 8</div>
  </div>
  
  <div class="metric-card metric-card-warning">
    <h3>Total de Páginas</h3>
    <div class="metric-value">{{ collections.all.length or 0 }}</div>
    <div class="metric-label">Documentos</div>
  </div>
</div>

## 🔧 Ferramentas e Automações

### 📝 Templates Master
- **[Template Empresa Master](99%20-%20RESOURCES/99%20-%20TEMPLATE/Empresariais/Template_Empresa_Master/)** - Documento único da empresa
- **[Template Reunião Master](99%20-%20RESOURCES/99%20-%20TEMPLATE/Reunioes/Template_Reuniao_Master/)** - Documento único de reunião

### 🤖 Automações Inteligentes
- Dashboard automático via GitHub Actions
- Validação de compliance
- Indexação automática de conteúdo

### 📊 Monitoramento
- Health checks automáticos
- Logs centralizados
- Backup automático

## 🎯 Acesso Rápido

### 🔥 Páginas Mais Acessadas
- [Executive Auto Dashboard](/dashboard-executivo/executive-auto/)
- [Home Executivo](/dashboard-executivo/)
- [Projetos Ativos](/projetos/ativos/)
- [Innovation Pipeline](/dashboard-executivo/innovation-pipeline/)

### 📅 Atualizações Recentes
{% for item in collections.all | recentPages(7) | limit(5) %}
- [{{ item.data.title or item.fileSlug }}]({{ item.url }}) - {{ item.data.updated or item.data.created | date }}
{% endfor %}

## 📞 Suporte e Contato

- **Issues**: GitHub Issues do repositório
- **Documentação**: Este README e manuais técnicos
- **Logs**: Arquivos de log em `automation/logs/`
- **Owner**: Pedro Vitor

---

**Versão**: 2.0 | **Status**: ✅ **OPERACIONAL** | **Última Atualização**: {{ "now" | date }}

<style>
.metric-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.metric-card {
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid var(--background-modifier-border);
}

.metric-card-info { background: rgba(59, 130, 246, 0.1); }
.metric-card-success { background: rgba(34, 197, 94, 0.1); }
.metric-card-warning { background: rgba(251, 191, 36, 0.1); }

.metric-value {
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.metric-label {
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
