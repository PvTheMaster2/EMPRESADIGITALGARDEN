---
template: intake-simples
type: intake
status: draft
priority: medium
owner: "{{user}}"
created:
  "{ date }":
modified:
  "{ date }":
version: 1
updated: 2025-09-01T01:46
---

# 📝 **NOVA IDEIA DE PROJETO**

> *Template simplificado para submeter ideias de projeto*

---

## 🎯 **INFORMAÇÕES BÁSICAS**

### **Título do Projeto**
*Nome curto e claro para o projeto*

### **Problema / Dor**
*Qual dor real do mercado este projeto resolve?*

### **Público-alvo**
*Quem são os clientes potenciais? (Ex: escritórios de advocacia, clínicas)*

### **Proposta de Solução**
*Como o projeto resolve o problema (serviço, produto, automação)*

### **Dono do Projeto**
*Quem está liderando a iniciativa*

---

## 📊 **DETALHES ADICIONAIS**

### **Esforço Estimado**
- **Duração**: ___ semanas
- **Budget**: R$ ___
- **Prioridade**: [ ] Baixa [ ] Média [ ] Alta [ ] Crítica

### **Métrica de Sucesso**
*Como medir se o projeto foi bem-sucedido?*

### **Recursos Necessários**
*Que recursos precisamos? (pessoas, ferramentas, etc.)*

---

## ✅ **CHECKLIST DE SUBMISSÃO**

- [ ] Todas as informações básicas preenchidas
- [ ] Proposta de solução clara
- [ ] Público-alvo definido
- [ ] Métrica de sucesso estabelecida
- [ ] Dono do projeto identificado

---

## 📋 **PRÓXIMOS PASSOS**

1. **Submeter** este template no repositório central
2. **Agendar** reunião de discussão específica
3. **Validar** viabilidade técnica e comercial
4. **Aprovar** ou solicitar ajustes

---

**Status**: 📝 **RASCUNHO**  
**Submetido por**: {{user}}  
**Data**: {{date}}  
**Próxima Ação**: Reunião de discussão
template: projeto-empresarial
type: pilot
status: idea
priority: medium
owner: "[[Seu Nome]]"
market_segment: Tecnologia
effort_weeks: 4
budget: 10000
kpi_primary: 3 clientes teste no primeiro mês
validation_score: 0
ia_assets:
  prompts:
    - Análise de dados
  models:
    - GPT-4
  datasets:
    - Dados de teste
compliance_level: 1
legal_review: false
hypothesis_id: HYP-001
pilot_stage: design
sample_size: 10
consent_required: false
data_schema: schema_v1
gating_criteria: validation_score >= 2.5
tags: []
created: 2025-08-31
modified: 2025-08-31
version: 1
updated: 2025-08-31T21:56
---
  "{ date }":
modified:
  "{ date }":
updated: 2025-08-31T21:25
---

# {{title}}

> *Piloto/experimento para validar conceito*

---

## 🧪 **RESUMO DO PILOTO**

### **Hipótese a Testar**
[Descrever a hipótese principal que este piloto vai validar]

### **Objetivo do Teste**
[Explicar o que queremos descobrir com este piloto]

### **Critério de Sucesso**
[Definir claramente o que consideramos sucesso]

---

## 📊 **METODOLOGIA**

### **Abordagem**
- **Tipo de Teste**: [A/B, MVP, Protótipo, etc.]
- **Duração**: {{effort_weeks}} semanas
- **Amostra**: [Tamanho e perfil da amostra]

### **Variáveis Testadas**
- [ ] Variável 1
- [ ] Variável 2
- [ ] Variável 3

### **Métricas de Validação**
- **Métrica Primária**: {{metrics_first_month}}
- **Métricas Secundárias**: [Lista]
- **Métricas de Qualidade**: [Lista]

---

## 🎯 **CRONOGRAMA DO PILOTO**

### **Semana 1: Preparação**
- [ ] Setup do ambiente
- [ ] Recrutamento de participantes
- [ ] Preparação de materiais

### **Semana 2-3: Execução**
- [ ] Execução dos testes
- [ ] Coleta de dados
- [ ] Observações qualitativas

### **Semana 4: Análise**
- [ ] Processamento dos dados
- [ ] Análise dos resultados
- [ ] Preparação do relatório

---

## 📈 **RESULTADOS ESPERADOS**

### **Cenário Otimista**
- [Resultado esperado se tudo der certo]

### **Cenário Realista**
- [Resultado mais provável]

### **Cenário Pessimista**
- [Resultado se as coisas não funcionarem]

### **Gatilhos para Escala**
- [Condições que justificariam escalar o projeto]

---

## 🛠️ **RECURSOS NECESSÁRIOS**

### **Recursos Humanos**
- **Owner**: {{owner}}
- **Equipe**: [Lista de membros]
- **Participantes**: [Perfil dos testadores]

### **Recursos Técnicos**
- **Ferramentas**: [Lista de ferramentas]
- **Infraestrutura**: [Recursos necessários]
- **Orçamento**: R$ {{budget}}

### **Recursos de IA**
{{ia_assets.prompts}}
{{ia_assets.models}}
{{ia_assets.datasets}}

---

## 🔍 **PLANO DE ANÁLISE**

### **Dados a Coletar**
- [ ] Métricas quantitativas
- [ ] Feedback qualitativo
- [ ] Observações comportamentais
- [ ] Dados de performance

### **Métodos de Análise**
- [ ] Análise estatística
- [ ] Análise qualitativa
- [ ] Comparação com benchmarks
- [ ] Análise de tendências

### **Critérios de Decisão**
- **Continuar**: [Critérios para prosseguir]
- **Pivotar**: [Critérios para mudar direção]
- **Parar**: [Critérios para encerrar]

---

## 🔒 **COMPLIANCE E ÉTICA**

### **Nível de Compliance**
**Nível {{compliance_level}}**: 
- **1 (Básico)**: Sem dados pessoais
- **2 (Dados)**: Com dados pessoais
- **3 (Crítico)**: Dados sensíveis

### **Considerações Éticas**
- [ ] Consentimento informado obtido
- [ ] Privacidade dos participantes protegida
- [ ] Dados anonimizados quando possível
- [ ] Transparência sobre o propósito

### **Revisão Legal**
- **Status**: {{legal_review}}
- **Data**: [Data da revisão]
- **Responsável**: [Nome do revisor]

---

## 📝 **NOTAS DE EXECUÇÃO**

### **Observações Diárias**
- [Data] - [Observação importante]

### **Ajustes Realizados**
- [Data] - [Ajuste feito] - [Motivo]

### **Problemas Encontrados**
- [Data] - [Problema] - [Solução aplicada]

---

## 📊 **RELATÓRIO FINAL**

### **Resultados Obtidos**
- **Métrica Principal**: [Resultado]
- **Métricas Secundárias**: [Resultados]
- **Insights Qualitativos**: [Observações]

### **Conclusões**
- [Conclusão 1]
- [Conclusão 2]
- [Conclusão 3]

### **Recomendações**
- [ ] Recomendação 1
- [ ] Recomendação 2
- [ ] Recomendação 3

---

## 🔗 **LINKS RELACIONADOS**

### **Projetos Relacionados**
- [[Projeto Principal]]
- [[Outros Pilotos]]

### **Documentação**
- [[Briefing do Piloto]]
- [[Relatório de Resultados]]
- [[Próximos Passos]]

---

**Status**: {{status}}  
**Owner**: {{owner}}  
**Última Atualização**: {{modified}}
