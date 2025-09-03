---
template: faq-compliance
type: faq
category: compliance
status: active
priority: high
owner: "[[Gui]]"
created: 2025-08-31
modified: 2025-08-31
version: "1.0"
target_audience: Equipe completa
last_updated: 2025-08-31
updated: 2025-09-01T01:46
---

# ❓ **FAQ - COMPLIANCE E SISTEMA**

> *Perguntas frequentes sobre uso responsável do sistema empresarial*

---

## 📋 **PERGUNTAS GERAIS**

### **Q1: O que é compliance no contexto do nosso sistema?**
**R**: Compliance é o conjunto de práticas que garantem que todas as atividades da empresa estejam em conformidade com:
- Políticas internas de uso de IA
- Lei Geral de Proteção de Dados (LGPD)
- Boas práticas de segurança
- Ética empresarial

### **Q2: Por que precisamos de compliance para IA?**
**R**: Porque o uso de IA envolve:
- **Riscos**: Decisões automáticas podem ter impactos significativos
- **Dados**: Processamento de informações pessoais e sensíveis
- **Responsabilidade**: A empresa é responsável pelos outputs da IA
- **Transparência**: Stakeholders precisam entender como decisões são tomadas

### **Q3: Quem precisa seguir as políticas de compliance?**
**R**: **Todos** que utilizam o sistema:
- Colaboradores da empresa
- Sócios e stakeholders
- Terceiros autorizados
- Consultores e parceiros

---

## 🛠️ **USO DO SISTEMA**

### **Q4: Como criar um novo projeto no sistema?**
**R**: 
1. Abrir pasta `4-Projetos/`
2. Escolher pasta apropriada (Ativos/Pilotos/Backlog)
3. Criar novo arquivo `.md`
4. Aplicar template `Template_Projeto.md`
5. Preencher frontmatter obrigatório
6. Definir compliance level adequado

### **Q5: Qual compliance level usar para meu projeto?**
**R**: 
- **Nível 1**: Projetos internos, sem dados pessoais
- **Nível 2**: Com dados pessoais, impacto moderado
- **Nível 3**: Decisões críticas, alto impacto financeiro/operacional

### **Q6: Como documentar uso de IA no projeto?**
**R**: No frontmatter do projeto:
```yaml
ia_assets:
  prompts: ["Análise de mercado", "Geração de relatório"]
  models: ["GPT-4", "Claude-3"]
  datasets: ["Dados públicos", "Relatórios anônimos"]
compliance_level: 2
legal_review: true
```

### **Q7: Onde encontrar os dashboards do sistema?**
**R**: Na pasta `0-Dashboard-Executivo/`:
- `Home-Executivo.md` - Visão geral
- `KPIs-Principais.md` - Métricas principais
- `Innovation-Pipeline.md` - Pipeline de inovação

---

## 🔒 **SEGURANÇA E PRIVACIDADE**

### **Q8: O que são dados pessoais?**
**R**: Qualquer informação que identifique uma pessoa:
- Nomes, emails, CPFs
- Endereços, telefones
- Dados biométricos
- Histórico de navegação

### **Q9: Como proteger dados pessoais?**
**R**: 
1. **Anonimizar**: Remover identificadores
2. **Minimizar**: Coletar apenas o necessário
3. **Criptografar**: Proteger em trânsito e repouso
4. **Consentir**: Obter autorização explícita

### **Q10: Posso usar dados pessoais sem consentimento?**
**R**: **NÃO**. Sempre é necessário:
- Consentimento explícito
- Base legal adequada
- Finalidade específica
- Documentação completa

### **Q11: O que fazer se suspeitar de violação de dados?**
**R**: 
1. **Imediato**: Contatar lead de compliance
2. **Documentar**: Preencher relatório de incidente
3. **Contenção**: Ação imediata para conter danos
4. **Análise**: Investigação completa

---

## 📊 **MÉTRICAS E MONITORAMENTO**

### **Q12: Como verificar se meu projeto está em compliance?**
**R**: 
1. Verificar frontmatter completo
2. Confirmar compliance level adequado
3. Validar documentação de IA
4. Verificar aprovações necessárias
5. Revisar logs de auditoria

### **Q13: Quais métricas de compliance são importantes?**
**R**: 
- **Taxa de Aprovação**: % de solicitações aprovadas
- **Tempo de Aprovação**: Tempo médio de aprovação
- **Taxa de Violação**: % de violações de política
- **Satisfação**: Satisfação da equipe com processos

### **Q14: Como acessar logs de auditoria?**
**R**: 
- **Logs Diários**: Sistema automático
- **Logs de Compliance**: Template `Template_Compliance_Log.md`
- **Logs de Projeto**: Frontmatter de cada projeto
- **Logs de Sistema**: Dashboard executivo

---

## 🚨 **INCIDENTES E PROBLEMAS**

### **Q15: O que é um incidente de compliance?**
**R**: Qualquer situação que viole:
- Políticas de IA
- Proteção de dados
- Procedimentos de segurança
- Aprovações necessárias

### **Q16: Como reportar um incidente?**
**R**: 
1. **Contato Imediato**: Lead de compliance
2. **Email**: compliance@empresa.com
3. **Slack**: #compliance-emergency
4. **Documentação**: Relatório detalhado

### **Q17: Quais são as consequências de violar compliance?**
**R**: 
- **Primeira vez**: Aviso e treinamento
- **Segunda vez**: Suspensão temporária
- **Terceira vez**: Suspensão permanente
- **Crítico**: Ação legal imediata

### **Q18: Como corrigir uma violação de compliance?**
**R**: 
1. **Identificar**: Causa raiz do problema
2. **Corrigir**: Implementar solução imediata
3. **Documentar**: Registrar ações tomadas
4. **Prevenir**: Implementar controles adicionais
5. **Treinar**: Capacitar equipe

---

## 📚 **TREINAMENTO E CERTIFICAÇÃO**

### **Q19: Quem precisa fazer treinamento de compliance?**
**R**: **Todos** os colaboradores:
- Treinamento inicial obrigatório
- Reciclagem anual
- Treinamento específico por função
- Certificação obrigatória

### **Q20: Como obter certificação de compliance?**
**R**: 
1. Participar do treinamento completo
2. Aprovar teste teórico (80% mínimo)
3. Concluir exercícios práticos (100%)
4. Assinar compromisso de compliance
5. Receber certificado válido por 1 ano

### **Q21: O que acontece se não renovar a certificação?**
**R**: 
- **Aviso**: 30 dias antes do vencimento
- **Suspensão**: Acesso limitado ao sistema
- **Treinamento**: Reciclagem obrigatória
- **Reativação**: Após nova certificação

### **Q22: Onde encontrar materiais de treinamento?**
**R**: 
- `Manual_Treinamento_Compliance.md`
- `etica_uso_IA.md`
- Templates de compliance
- Vídeos de treinamento
- Exercícios práticos

---

## 🔧 **SUPORTE TÉCNICO**

### **Q23: Como obter ajuda técnica?**
**R**: 
- **Lead Técnico**: [[Pedro Vitor]]
- **Lead Compliance**: [[Participante 6]]
- **Email**: suporte@empresa.com
- **Slack**: #suporte-tecnico

### **Q24: Como reportar bugs no sistema?**
**R**: 
1. Documentar o problema
2. Capturar screenshots
3. Descrever passos para reproduzir
4. Enviar para lead técnico
5. Acompanhar resolução

### **Q25: Como solicitar novas funcionalidades?**
**R**: 
1. Documentar necessidade
2. Justificar benefício
3. Avaliar impacto de compliance
4. Submeter para aprovação
5. Implementar após aprovação

### **Q26: Como acessar o sistema remotamente?**
**R**: 
- **VPN**: Obrigatória para acesso externo
- **2FA**: Autenticação de dois fatores
- **Logs**: Todos os acessos são registrados
- **Aprovação**: Necessária para novos dispositivos

---

## 📋 **PROCEDIMENTOS**

### **Q27: Como solicitar aprovação para projeto?**
**R**: 
1. Completar documentação do projeto
2. Definir compliance level adequado
3. Submeter para aprovação via sistema
4. Aguardar revisão dos responsáveis
5. Implementar feedback recebido

### **Q28: Como fazer backup de dados importantes?**
**R**: 
- **Automático**: Sistema faz backup diário
- **Manual**: Usar função de exportação
- **Verificação**: Confirmar integridade dos dados
- **Armazenamento**: Local seguro e criptografado

### **Q29: Como encerrar um projeto com compliance?**
**R**: 
1. Finalizar todas as atividades
2. Documentar resultados e lições aprendidas
3. Arquivar dados conforme política
4. Atualizar status para "Concluído"
5. Gerar relatório final de compliance

### **Q30: Como transferir responsabilidade de projeto?**
**R**: 
1. Notificar lead de compliance
2. Documentar transferência
3. Treinar novo responsável
4. Atualizar frontmatter
5. Validar acesso e permissões

---

## 🔄 **ATUALIZAÇÕES E MANUTENÇÃO**

### **Q31: Com que frequência as políticas são atualizadas?**
**R**: 
- **Revisão Mensal**: Políticas internas
- **Revisão Trimestral**: Procedimentos
- **Revisão Semestral**: Treinamentos
- **Revisão Anual**: Políticas principais

### **Q32: Como ficar informado sobre mudanças?**
**R**: 
- **Email**: Notificações automáticas
- **Slack**: Canal #compliance-updates
- **Dashboard**: Seção de alertas
- **Reuniões**: Atualizações regulares

### **Q33: Como sugerir melhorias no sistema?**
**R**: 
1. Documentar sugestão
2. Justificar benefício
3. Avaliar impacto
4. Submeter para análise
5. Implementar se aprovada

### **Q34: Como reportar problemas de performance?**
**R**: 
1. Documentar sintomas
2. Capturar métricas
3. Identificar padrões
4. Reportar para lead técnico
5. Acompanhar resolução

---

## 📞 **CONTATOS DE EMERGÊNCIA**

### **Emergências de Compliance**
- **Lead Compliance**: [[Participante 6]]
- **Email**: compliance@empresa.com
- **Slack**: #compliance-emergency
- **Telefone**: (11) 99999-9999

### **Emergências Técnicas**
- **Lead Técnico**: [[Pedro Vitor]]
- **Email**: suporte@empresa.com
- **Slack**: #suporte-emergency
- **Telefone**: (11) 99999-9998

### **Emergências de Segurança**
- **Lead Segurança**: [[Gui]]
- **Email**: seguranca@empresa.com
- **Slack**: #seguranca-emergency
- **Telefone**: (11) 99999-9997

---

## 📚 **RECURSOS ADICIONAIS**

### **Documentação**
- [[Manual_Treinamento_Compliance]] - Manual completo
- [[etica_uso_IA]] - Política de IA
- [[Template_Compliance_Log]] - Template de logs
- [[CHECKLIST_FINAL]] - Checklist de compliance

### **Canais de Comunicação**
- **Email Geral**: info@empresa.com
- **Slack Geral**: #geral
- **Slack Suporte**: #suporte
- **Slack Compliance**: #compliance

### **Horários de Suporte**
- **Segunda a Sexta**: 8h às 18h
- **Sábados**: 9h às 13h
- **Emergências**: 24/7

---

**Status**: ✅ **ATIVO**  
**Última Atualização**: 31/08/2025  
**Próxima Revisão**: 30/09/2025  
**Owner**: [[Gui]]
