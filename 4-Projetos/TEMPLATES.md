---
title: Templates de Projetos
created: 2025-09-01T02:40
updated: 2025-09-01T15:27
permalink: /projetos/templates-guia/
---
# 📋 **TEMPLATES DE PROJETOS**

> *Documentação dos templates disponíveis para criação de novos projetos*

---

## 🎯 **OBJETIVO**

Este arquivo documenta todos os templates de projetos disponíveis no sistema. Os templates têm status "template" e **NÃO aparecem nos dashboards** para manter a limpeza dos dados.

---

## 📁 **TEMPLATES DISPONÍVEIS**

### **Templates de Projetos (4-Projetos/Templates/)**

#### **1. TEMPLATE Projeto-Exemplo-Sistema.md**
- **Tipo**: Template completo de projeto empresarial
- **Status**: template
- **Uso**: Para criar novos projetos seguindo o padrão empresarial
- **Campos**: Todos os campos do template projeto-empresarial

#### **2. TEMPLATE 2025-01-20 — projeto — Assistente-Transcricao-Juridica.md**
- **Tipo**: Exemplo de projeto jurídico
- **Status**: template
- **Uso**: Referência para projetos do setor jurídico
- **Campos**: Exemplo completo com dados preenchidos

### **Templates de Pilotos (4-Projetos/Templates/)**

#### **3. TEMPLATE Piloto-Exemplo-Sistema.md**
- **Tipo**: Template de piloto empresarial
- **Status**: template
- **Uso**: Para criar novos pilotos seguindo o padrão empresarial
- **Campos**: Todos os campos do template piloto-empresarial

#### **4. TEMPLATE Piloto_CRM_Arquitetos.md**
- **Tipo**: Exemplo de piloto CRM para arquitetos
- **Status**: template
- **Uso**: Referência para pilotos de CRM
- **Campos**: Exemplo completo com dados preenchidos

### **Templates de Intake (4-Projetos/Templates/)**

#### **5. Exemplo_Primeira_Cartada.md**
- **Tipo**: Template de primeira cartada (informações básicas)
- **Status**: template
- **Uso**: Para submeter ideias iniciais de projetos
- **Campos**: Informações básicas obrigatórias

#### **6. Exemplo_Minimalista.md**
- **Tipo**: Template simplificado
- **Status**: template
- **Uso**: Para projetos simples e rápidos
- **Campos**: Campos essenciais apenas

#### **7. Exemplo_Intake_Preenchido.md**
- **Tipo**: Exemplo de intake completo
- **Status**: template
- **Uso**: Referência de como preencher um intake
- **Campos**: Exemplo com dados preenchidos

---

## 🔧 **COMO USAR OS TEMPLATES**

### **Para Criar Novo Projeto**
1. **Copiar** o template desejado
2. **Renomear** para o nome do projeto
3. **Alterar status** de "template" para "active" ou "idea"
4. **Preencher** todos os campos necessários
5. **Salvar** na pasta apropriada

### **Exemplo de Comando**
```bash
# Copiar template
cp "4-Projetos/Templates/TEMPLATE Projeto-Exemplo-Sistema.md" "4-Projetos/Ativos/PRJ-Novo-Projeto.md"

# Editar status no novo arquivo
# Mudar de: status: template
# Para: status: active
```

---

## 📊 **FILTROS NOS DASHBOARDS**

Todos os dashboards do sistema filtram automaticamente projetos com status "template":

### **Dashboards Afetados**
- [[0-Dashboard-Executivo/Home-Executivo]] - Dashboard principal
- [[0-Dashboard-Executivo/Innovation-Pipeline]] - Pipeline de inovação
- [[0-Dashboard-Executivo/Executive-Auto]] - Dashboard automatizado
- [[0-Dashboard-Executivo/Dashboard-Projetos-Prazo]] - Projetos por prazo
- [[0-Dashboard-Executivo/Dashboard-Projetos-Prazo-Visual]] - Projetos por prazo (visual)

### **Filtro Aplicado**
```dataview
WHERE (type = "project" OR type = "pilot") AND status != "template" AND type != "template"
```

---

## 🎯 **BENEFÍCIOS**

### **Para o Sistema**
- **Dashboards limpos** - apenas projetos reais
- **Métricas precisas** - sem interferência de templates
- **Organização clara** - separação entre templates e projetos

### **Para a Equipe**
- **Templates disponíveis** - sempre à mão
- **Padronização** - todos seguem o mesmo formato
- **Facilidade** - criação rápida de novos projetos

---

## 📝 **MANUTENÇÃO**

### **Adicionar Novo Template**
1. Criar arquivo com prefixo "TEMPLATE"
2. Definir status como "template"
3. Adicionar à documentação neste arquivo
4. Testar filtros dos dashboards

### **Atualizar Template**
1. Editar o template
2. Atualizar documentação
3. Verificar se projetos existentes precisam ser atualizados

---

## 🔗 **LINKS ÚTEIS**

### **Templates**
- [[4-Projetos/Templates/TEMPLATE Projeto-Exemplo-Sistema]] - Template principal
- [[4-Projetos/Templates/TEMPLATE 2025-01-20 — projeto — Assistente-Transcricao-Juridica]] - Exemplo jurídico
- [[4-Projetos/Templates/TEMPLATE Piloto-Exemplo-Sistema]] - Template de piloto
- [[4-Projetos/Templates/TEMPLATE Piloto_CRM_Arquitetos]] - Exemplo de piloto CRM
- [[4-Projetos/Templates/Exemplo_Primeira_Cartada]] - Template primeira cartada
- [[4-Projetos/Templates/Exemplo_Minimalista]] - Template simplificado
- [[4-Projetos/Templates/Exemplo_Intake_Preenchido]] - Exemplo preenchido

### **Documentação**
- [[z_Templates/README]] - Documentação geral de templates
- [[z_Templates/COMO_USAR_TEMPLATES_MASTER]] - Como usar templates master

---

**Status**: ✅ **ATIVO**  
**Última Atualização**: 2025-09-01  
**Próxima Revisão**: 2025-09-15
