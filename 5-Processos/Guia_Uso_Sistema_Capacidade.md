---
created: 2025-01-20T10:00
updated: 2025-09-01T01:46
---
# 🚀 GUIA DE USO RÁPIDO - SISTEMA DE CAPACIDADE

> *Como usar o sistema de gestão de capacidade e sprints em 5 minutos*

---

## 🎯 **COMO PROCEDER AGORA**

### **Passo 1: Definir Capacidade das Pessoas**
1. **Acesse o formulário**: Abra `utils/forms/Formulario_Capacidade_Pessoas.html` no navegador
2. **Preencha os dados**: Cada pessoa deve preencher seu perfil de capacidade
3. **Use a calculadora**: Defina dias de trabalho e horas por dia para calcular automaticamente
4. **Salve o arquivo**: O formulário gera um arquivo `.md` pronto para usar

### **Passo 2: Criar Perfis das Pessoas**
1. **Use o template**: Copie `z_Templates/Projetos/Template_Pessoa.md`
2. **Personalize**: Adapte com os dados do formulário
3. **Salve na pasta correta**: Coloque em `2-Equipes/[Departamento]/`
4. **Atualize frontmatter**: Certifique-se que `type: person` está definido

### **Passo 3: Planejar Primeira Sprint**
1. **Use o template**: Copie `z_Templates/Projetos/Template_Sprint.md`
2. **Defina período**: Escolha datas de início e fim (2-4 semanas)
3. **Calcule capacidade**: Some as horas disponíveis de todas as pessoas
4. **Selecione tarefas**: Escolha tarefas do backlog que cabem na capacidade

### **Passo 4: Criar Tarefas**
1. **Use o template**: Copie `z_Templates/Projetos/Template_Tarefa.md`
2. **Estime horas**: Defina tempo estimado para cada tarefa
3. **Atribua responsável**: Escolha pessoa com capacidade disponível
4. **Defina dependências**: Identifique tarefas que dependem de outras

---

## 📋 **CHECKLIST DE IMPLEMENTAÇÃO**

### **✅ Preparação (Dia 1)**
- [ ] Todos preencheram o formulário de capacidade
- [ ] Perfis das pessoas criados com template
- [ ] Capacidade total da equipe calculada
- [ ] Backlog de tarefas organizado

### **✅ Planejamento (Dia 2)**
- [ ] Primeira sprint criada com template
- [ ] Tarefas estimadas e priorizadas
- [ ] Alocação respeita limites de capacidade
- [ ] Sprint aprovada pela equipe

### **✅ Execução (Dia 3+)**
- [ ] Standup diário implementado
- [ ] Horas trabalhadas registradas
- [ ] Progresso das tarefas atualizado
- [ ] Bloqueios identificados e resolvidos

### **✅ Revisão (Final da Sprint)**
- [ ] Métricas calculadas
- [ ] Retrospectiva realizada
- [ ] Lições aprendidas documentadas
- [ ] Próxima sprint planejada

---

## 🛠️ **FERRAMENTAS DISPONÍVEIS**

### **Templates Prontos**
- **`Template_Pessoa.md`** - Perfil completo de cada pessoa
- **`Template_Sprint.md`** - Planejamento e acompanhamento de sprint
- **`Template_Tarefa.md`** - Detalhamento e tracking de tarefas
- **`Template_Projeto.md`** - Gestão de projetos completos

### **Formulários Interativos**
- **`Formulario_Capacidade_Pessoas.html`** - Coleta dados de capacidade
- **Calculadora automática** - Define horas baseado em dias/trabalho
- **Validação inteligente** - Alerta sobre sobrecarga ou subutilização
- **Geração automática** - Cria arquivo Markdown pronto

### **Dashboards Executivos**
- **`Dashboard_Capacidade_Equipe.md`** - Visão geral da equipe
- **Queries Dataview** - Relatórios automáticos
- **Alertas de risco** - Identifica problemas proativamente
- **Métricas de performance** - Acompanha evolução

---

## 📊 **CÁLCULOS IMPORTANTES**

### **Capacidade da Sprint**
```
Capacidade Total = Σ(Horas Disponíveis de Todas as Pessoas)
Horas Planejadas = Σ(Horas Estimadas das Tarefas)
Saldo = Capacidade Total - Horas Planejadas
```

### **Utilização por Pessoa**
```
Utilização (%) = (Horas Alocadas / Horas Disponíveis) × 100
```

### **Eficiência da Sprint**
```
Eficiência (%) = (Horas Realizadas / Horas Planejadas) × 100
```

### **Limites Recomendados**
- **Utilização ideal**: 60-80%
- **Sobrecarga**: > 90%
- **Subutilização**: < 30%

---

## 🔄 **WORKFLOW DIÁRIO**

### **Standup Matinal (5 min)**
1. **Cada pessoa reporta**:
   - O que fez ontem
   - O que vai fazer hoje
   - Bloqueios encontrados

2. **Atualizações**:
   - Registra horas trabalhadas
   - Atualiza progresso das tarefas
   - Identifica riscos

### **Acompanhamento Semanal (30 min)**
1. **Revisão de progresso**:
   - Compara planejado vs realizado
   - Ajusta estimativas se necessário
   - Realoca tarefas se preciso

2. **Planejamento**:
   - Prepara próxima semana
   - Ajusta prioridades
   - Comunica mudanças

---

## ⚠️ **PONTOS DE ATENÇÃO**

### **Sinais de Alerta**
- **Pessoa com >90% utilização**: Risco de burnout
- **Pessoa com <30% utilização**: Capacidade desperdiçada
- **Sprint com >90% utilização**: Risco de não entregar
- **Estimativas com >30% variação**: Precisa melhorar precisão

### **Ações Corretivas**
- **Redistribuir tarefas** para equilibrar carga
- **Ajustar estimativas** baseado no histórico
- **Reduzir escopo** da sprint se necessário
- **Aumentar duração** da sprint se possível

---

## 📈 **MÉTRICAS PARA ACOMPANHAR**

### **Métricas de Capacidade**
- **Utilização média da equipe**
- **Distribuição de carga por departamento**
- **Evolução da capacidade ao longo do tempo**

### **Métricas de Produtividade**
- **Eficiência das sprints**
- **Precisão das estimativas**
- **Taxa de conclusão de tarefas**

### **Métricas de Qualidade**
- **Tarefas sem rework**
- **Satisfação da equipe**
- **Cumprimento de prazos**

---

## 🔗 **LINKS ÚTEIS**

### **Sistema Completo**
- [[5-Processos/Sistema_Gestao_Capacidade_Sprints]] - Documentação completa
- [[0-Dashboard-Executivo/Dashboard_Capacidade_Equipe]] - Dashboard executivo

### **Templates**
- [[z_Templates/Projetos/Template_Pessoa]] - Template de pessoa
- [[z_Templates/Projetos/Template_Sprint]] - Template de sprint
- [[z_Templates/Projetos/Template_Tarefa]] - Template de tarefa

### **Formulários**
- [[utils/forms/Formulario_Capacidade_Pessoas]] - Formulário de capacidade

---

## 🎯 **PRÓXIMOS PASSOS**

### **Imediato (Esta Semana)**
1. **Distribuir formulário** para todos preencherem
2. **Criar perfis** das pessoas com os dados
3. **Calcular capacidade total** da equipe
4. **Planejar primeira sprint** realista

### **Curto Prazo (Próximo Mês)**
1. **Executar 2-3 sprints** para validar o sistema
2. **Ajustar processos** baseado no feedback
3. **Melhorar estimativas** com dados históricos
4. **Otimizar alocação** de tarefas

### **Médio Prazo (Próximo Trimestre)**
1. **Automatizar relatórios** com Dataview
2. **Implementar métricas avançadas**
3. **Desenvolver dashboards personalizados**
4. **Integrar com outras ferramentas**

---

**Status**: ✅ **PRONTO PARA USO**  
**Tempo de Implementação**: 1-2 dias  
**Complexidade**: Baixa  
**Benefícios**: Controle total de capacidade e produtividade
