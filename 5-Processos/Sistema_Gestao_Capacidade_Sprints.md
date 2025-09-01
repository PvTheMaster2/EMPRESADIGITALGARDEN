---
title: Sistema de Gestão de Capacidade e Sprints
created: 2025-01-20T10:00
updated: 2025-09-01T20:33
type: system
---
# 📊 SISTEMA DE GESTÃO DE CAPACIDADE E SPRINTS

> *Sistema integrado para controle de capacidade, alocação e rendimento por sprint*

---

## 🎯 **PROPÓSITO**

Este sistema permite gerenciar eficientemente a capacidade de trabalho de cada pessoa, alocar tarefas de forma otimizada e acompanhar o rendimento por sprint, considerando que todos têm outros compromissos e empregos.

---

## 🏗️ **ESTRUTURA DO SISTEMA**

### **Componentes Principais**

#### **1. Pessoas**
- **Nome da pessoa**
- **Horas disponíveis por semana/mês**
- **Horas alocadas na sprint** (soma das horas estimadas das tarefas atribuídas)
- **Horas trabalhadas no mês** (soma das horas realizadas em tarefas concluídas)
- **Horas trabalhadas no total** (soma de todas as horas realizadas)

#### **2. Projetos**
- **Nome do projeto**
- **Status** (Ideia, Em andamento, Concluído)
- **Datas de início e conclusão**
- **Horas estimadas** (soma das tarefas associadas)
- **Horas realizadas** (soma das tarefas concluídas)
- **Relação com tarefas e sprints**

#### **3. Sprints**
- **Nome da sprint**
- **Datas de início e fim**
- **Capacidade total em horas** (soma das horas disponíveis das pessoas)
- **Horas planejadas** (soma das horas estimadas das tarefas da sprint)
- **Horas realizadas** (soma das horas registradas nas tarefas da sprint)
- **Status** (Planejada, Em andamento, Concluída)
- **Relação com pessoas e tarefas**

#### **4. Tarefas**
- **Nome da tarefa**
- **Projeto associado**
- **Sprint associada**
- **Pessoa responsável**
- **Tempo estimado original**
- **Tempo estimado atualizado**
- **Tempo realizado**
- **Status** (Backlog, Em andamento, Concluída, Bloqueada)
- **Datas de início e conclusão**
- **Observações**

---

## 📋 **REGRAS E CÁLCULOS IMPORTANTES**

### **Cálculos de Capacidade**

#### **Horas Alocadas por Pessoa**
```
Horas Alocadas = Σ(Horas Estimadas das Tarefas da Pessoa na Sprint)
```

#### **Horas Disponíveis Restantes**
```
Horas Disponíveis Restantes = Horas Disponíveis - Horas Alocadas
```

#### **Controle de Sprint**
```
Capacidade Total da Sprint = Σ(Horas Disponíveis de Todas as Pessoas)
Horas Planejadas = Σ(Horas Estimadas das Tarefas da Sprint)
Saldo = Capacidade Total - Horas Planejadas
```

#### **Horas Mensais Trabalhadas**
```
Horas Mensais = Σ(Tempo Realizado em Tarefas Concluídas no Mês)
```

### **Regras de Negócio**

#### **1. Limites de Capacidade**
- **Máximo 80% de utilização** por pessoa por sprint
- **Mínimo 20% de buffer** para imprevistos
- **Capacidade total da sprint** não pode exceder 100% da equipe

#### **2. Priorização**
- **Tarefas críticas** têm prioridade sobre tarefas normais
- **Dependências** devem ser respeitadas na alocação
- **Especialização** da pessoa deve ser considerada

#### **3. Flexibilidade**
- **Estimativas podem ser ajustadas** durante a sprint
- **Tarefas podem ser realocadas** se necessário
- **Horas extras** devem ser aprovadas previamente

---

## 📊 **MÉTRICAS E KPIs**

### **Métricas de Capacidade**

#### **Utilização por Pessoa**
```
Utilização (%) = (Horas Alocadas / Horas Disponíveis) × 100
```

#### **Eficiência da Sprint**
```
Eficiência (%) = (Horas Realizadas / Horas Planejadas) × 100
```

#### **Precisão das Estimativas**
```
Precisão (%) = |(Horas Estimadas - Horas Realizadas) / Horas Estimadas| × 100
```

### **Métricas de Produtividade**

#### **Velocidade da Equipe**
```
Velocidade = Σ(Story Points Concluídos) / Número de Sprints
```

#### **Throughput**
```
Throughput = Número de Tarefas Concluídas / Período de Tempo
```

#### **Lead Time**
```
Lead Time = Data de Conclusão - Data de Início
```

---

## 🔄 **WORKFLOW DE GESTÃO**

### **1. Planejamento de Sprint**

#### **Passo 1: Definir Capacidade**
- [x] Listar todas as pessoas disponíveis
- [x] Confirmar horas disponíveis por pessoa
- [x] Calcular capacidade total da sprint

#### **Passo 2: Selecionar Tarefas**
- [ ] Revisar backlog de tarefas
- [ ] Priorizar tarefas por importância
- [ ] Estimar horas para cada tarefa

#### **Passo 3: Alocar Tarefas**
- [ ] Distribuir tarefas considerando especialização
- [ ] Verificar limites de capacidade
- [ ] Validar dependências

#### **Passo 4: Validar Sprint**
- [ ] Confirmar que capacidade ≥ horas planejadas
- [ ] Aprovar sprint com equipe
- [ ] Documentar decisões

### **2. Execução da Sprint**

#### **Passo 1: Acompanhamento Diário**
- [ ] Registrar horas trabalhadas
- [ ] Atualizar progresso das tarefas
- [ ] Identificar bloqueios

#### **Passo 2: Ajustes Durante Sprint**
- [ ] Revisar estimativas se necessário
- [ ] Realocar tarefas se preciso
- [ ] Comunicar mudanças à equipe

#### **Passo 3: Controle de Qualidade**
- [ ] Validar entregáveis
- [ ] Aprovar tarefas concluídas
- [ ] Documentar lições aprendidas

### **3. Encerramento da Sprint**

#### **Passo 1: Revisão de Resultados**
- [ ] Comparar planejado vs realizado
- [ ] Analisar métricas de performance
- [ ] Identificar melhorias

#### **Passo 2: Retrospectiva**
- [ ] Coletar feedback da equipe
- [ ] Documentar lições aprendidas
- [ ] Definir ações de melhoria

#### **Passo 3: Atualização de Dados**
- [ ] Atualizar métricas históricas
- [ ] Ajustar estimativas futuras
- [ ] Preparar próxima sprint

---

## 📈 **DASHBOARDS E RELATÓRIOS**

### **Dashboard de Capacidade**

#### **Visão Geral da Equipe**
```dataview
TABLE 
  availability_weekly + "h/sem" AS "Disponível",
  availability_weekly - allocated_hours + "h" AS "Livre",
  round((allocated_hours / availability_weekly) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person"
SORT allocated_hours DESC
```

#### **Capacidade por Departamento**
```dataview
TABLE 
  sum(availability_weekly) + "h" AS "Capacidade Total",
  sum(allocated_hours) + "h" AS "Alocado",
  round((sum(allocated_hours) / sum(availability_weekly)) * 100, 1) + "%" AS "Utilização"
FROM "2-Equipes"
WHERE type = "person"
GROUP BY department
SORT sum(allocated_hours) DESC
```

### **Dashboard de Sprints**

#### **Status das Sprints**
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

#### **Performance por Sprint**
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

### **Dashboard de Projetos**

#### **Status dos Projetos**
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

#### **Progresso por Projeto**
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

## 🛠️ **FERRAMENTAS E TEMPLATES**

### **Templates Disponíveis**

#### **1. Template de Pessoa**
- **Arquivo**: `z_Templates/Projetos/Template_Pessoa.md`
- **Uso**: Criar perfil de cada membro da equipe
- **Campos**: Capacidade, especialização, histórico

#### **2. Template de Sprint**
- **Arquivo**: `z_Templates/Projetos/Template_Sprint.md`
- **Uso**: Planejar e acompanhar sprints
- **Campos**: Capacidade, tarefas, métricas

#### **3. Template de Tarefa**
- **Arquivo**: `z_Templates/Projetos/Template_Tarefa.md`
- **Uso**: Detalhar e acompanhar tarefas
- **Campos**: Estimativas, progresso, dependências

#### **4. Template de Projeto**
- **Arquivo**: `z_Templates/Projetos/Template_Projeto.md`
- **Uso**: Gerenciar projetos completos
- **Campos**: Escopo, cronograma, recursos

### **Scripts de Automação**

#### **1. Cálculo de Capacidade**
```python
def calcular_capacidade_sprint(pessoas, sprint):
    capacidade_total = sum(p.availability_weekly for p in pessoas)
    horas_planejadas = sum(t.estimated_hours for t in sprint.tarefas)
    return {
        'capacidade_total': capacidade_total,
        'horas_planejadas': horas_planejadas,
        'saldo': capacidade_total - horas_planejadas,
        'utilizacao': (horas_planejadas / capacidade_total) * 100
    }
```

#### **2. Validação de Alocação**
```python
def validar_alocacao(pessoa, tarefas_sprint):
    horas_alocadas = sum(t.estimated_hours for t in tarefas_sprint if t.assignee == pessoa)
    utilizacao = (horas_alocadas / pessoa.availability_weekly) * 100
    
    if utilizacao > 80:
        return False, f"Utilização muito alta: {utilizacao:.1f}%"
    elif utilizacao < 20:
        return False, f"Utilização muito baixa: {utilizacao:.1f}%"
    else:
        return True, f"Utilização adequada: {utilizacao:.1f}%"
```

---

## 📝 **PROCEDIMENTOS OPERACIONAIS**

### **Procedimento 1: Criação de Nova Sprint**

#### **1.1 Preparação**
- [ ] Definir período da sprint (2-4 semanas)
- [ ] Confirmar disponibilidade da equipe
- [ ] Revisar backlog de tarefas

#### **1.2 Planejamento**
- [ ] Calcular capacidade total disponível
- [ ] Selecionar tarefas prioritárias
- [ ] Estimar horas para cada tarefa

#### **1.3 Alocação**
- [ ] Distribuir tarefas por pessoa
- [ ] Validar limites de capacidade
- [ ] Confirmar dependências

#### **1.4 Aprovação**
- [ ] Revisar sprint com equipe
- [ ] Aprovar cronograma final
- [ ] Documentar decisões

### **Procedimento 2: Acompanhamento Diário**

#### **2.1 Standup Diário**
- [ ] Cada pessoa reporta progresso
- [ ] Identificar bloqueios
- [ ] Ajustar estimativas se necessário

#### **2.2 Atualização de Dados**
- [ ] Registrar horas trabalhadas
- [ ] Atualizar status das tarefas
- [ ] Calcular métricas de progresso

#### **2.3 Comunicação**
- [ ] Informar mudanças à equipe
- [ ] Escalar problemas se necessário
- [ ] Documentar decisões importantes

### **Procedimento 3: Encerramento de Sprint**

#### **3.1 Revisão Final**
- [ ] Validar todas as tarefas
- [ ] Calcular métricas finais
- [ ] Preparar relatório de resultados

#### **3.2 Retrospectiva**
- [ ] Coletar feedback da equipe
- [ ] Identificar melhorias
- [ ] Definir ações para próxima sprint

#### **3.3 Atualização de Dados**
- [ ] Atualizar métricas históricas
- [ ] Ajustar estimativas futuras
- [ ] Preparar planejamento da próxima sprint

---

## 🔍 **CONTROLES DE QUALIDADE**

### **Checklist de Validação**

#### **Antes de Iniciar Sprint**
- [ ] Capacidade total calculada e validada
- [ ] Tarefas estimadas e priorizadas
- [ ] Alocação respeita limites de capacidade
- [ ] Dependências identificadas e respeitadas
- [ ] Equipe aprovou o planejamento

#### **Durante a Sprint**
- [ ] Progresso acompanhado diariamente
- [ ] Estimativas atualizadas quando necessário
- [ ] Bloqueios identificados e resolvidos
- [ ] Comunicação mantida com equipe
- [ ] Qualidade dos entregáveis validada

#### **Ao Final da Sprint**
- [ ] Todas as tarefas revisadas
- [ ] Métricas calculadas e analisadas
- [ ] Retrospectiva realizada
- [ ] Lições aprendidas documentadas
- [ ] Próxima sprint planejada

### **Indicadores de Qualidade**

#### **Indicadores de Capacidade**
- **Utilização ideal**: 60-80%
- **Subutilização**: < 50%
- **Sobrecarga**: > 90%

#### **Indicadores de Produtividade**
- **Eficiência da sprint**: > 80%
- **Precisão das estimativas**: ±20%
- **Taxa de conclusão**: > 90%

#### **Indicadores de Qualidade**
- **Tarefas sem rework**: > 95%
- **Satisfação da equipe**: > 7/10
- **Cumprimento de prazos**: > 85%

---

## 📚 **REFERÊNCIAS E LINKS**

### **Templates Relacionados**
- [[z_Templates/Projetos/Template_Pessoa]] - Template para pessoas
- [[z_Templates/Projetos/Template_Sprint]] - Template para sprints
- [[z_Templates/Projetos/Template_Tarefa]] - Template para tarefas
- [[z_Templates/Projetos/Template_Projeto]] - Template para projetos

### **Dashboards Relacionados**
- [[0-Dashboard-Executivo/Home-Executivo]] - Dashboard principal
- [[0-Dashboard-Executivo/KPIs-Principais]] - KPIs da empresa
- [[0-Dashboard-Executivo/Sistema_Metricas_Avancadas]] - Métricas avançadas

### **Processos Relacionados**
- [[5-Processos/README]] - Processos da empresa
- [[4-Projetos/README]] - Gestão de projetos
- [[6-Reunioes/README]] - Reuniões e decisões

---

**Status**: ✅ **IMPLEMENTADO**  
**Versão**: 1.0  
**Última Atualização**: 2025-01-20
