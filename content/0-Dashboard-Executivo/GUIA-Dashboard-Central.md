---
title: Guia do Dashboard Central Integrado
created: 2025-01-20
updated: 2025-01-20
type: documentation
status: active
priority: high
owner: Pedro Vitor
---

# 📖 **GUIA DO DASHBOARD CENTRAL INTEGRADO**

> *Manual completo para usar o novo dashboard executivo centralizado com funcionalidades avançadas*

---

## 🎯 **O QUE FOI CRIADO**

### **Dashboard Central Integrado**
- **URL**: `/dashboard-central/`
- **Arquivo**: `Dashboard-Central-Integrado.md`
- **Funcionalidades**: Métricas em tempo real, popups interativos, navegação inteligente

### **Arquivos Adicionais**
- **CSS**: `src/styles/dashboard-central.css`
- **JavaScript**: `src/scripts/dashboard-central.js`
- **Guia**: Este documento

---

## 🚀 **FUNCIONALIDADES PRINCIPAIS**

### **1. Métricas Centralizadas**
- **Todos os projetos** em uma única visualização
- **Queries Dataview** automáticas que puxam dados dos arquivos `.md`
- **Cálculos automáticos** de ROI, budget, eficiência
- **Atualização em tempo real** das métricas

### **2. Sistema de Popups (Estilo Obsidian)**
- **Hover sobre links** mostra preview instantâneo
- **Informações do projeto** sem sair da página
- **Navegação rápida** com um clique
- **Atalhos de teclado** para melhor produtividade

### **3. Análises Integradas**
- **Por prazo**: Curto, médio e longo prazo
- **Por prioridade**: Alta, média, baixa
- **Por segmento**: Mercados diferentes
- **Por owner**: Distribuição de responsabilidades

---

## 📊 **COMO USAR O DASHBOARD**

### **Navegação Principal**
1. **Acesse**: `/dashboard-central/`
2. **Explore as seções**:
   - Hero Metrics (topo)
   - Pipeline de Projetos
   - Análise Financeira
   - Gestão de Equipe
   - Compliance
   - Alertas

### **Sistema de Popups**
1. **Passe o mouse** sobre qualquer link azul
2. **Aguarde 0.5s** para o popup aparecer
3. **Veja o preview** com informações do projeto
4. **Clique** para navegar ou **ESC** para fechar

### **Atalhos de Teclado**
- **Ctrl/Cmd + K**: Busca rápida
- **Ctrl/Cmd + R**: Atualizar métricas
- **ESC**: Fechar popups/modais

---

## 🔧 **QUERIES DATAVIEW INTEGRADAS**

### **Pipeline de Projetos**
```dataview
TABLE 
  choice(status, "💡","📋","🚧","🧪","🚀","✅") AS "Status",
  link(file.link, title) AS "Projeto",
  owner AS "Owner",
  effort_weeks + "w" AS "Esforço",
  "R$ " + budget AS "Budget"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template"
SORT priority DESC, budget DESC
```

### **Métricas por Status**
```dataview
TABLE 
  status AS "Status",
  length(rows) AS "Qtd",
  round(sum(budget) / 1000, 1) + "k" AS "Budget (R$)"
FROM "4-Projetos"
WHERE (type = "project" OR type = "pilot") AND status != "template"
GROUP BY status
SORT length(rows) DESC
```

### **ROI por Projeto**
```dataview
TABLE 
  link(file.link, title) AS "Projeto",
  "R$ " + budget AS "Investimento",
  round(budget * 3.47, 0) AS "Retorno Esperado"
FROM "4-Projetos"
WHERE type = "project" AND budget > 0
SORT budget DESC
```

---

## 💡 **COMO FUNCIONA A INTEGRAÇÃO**

### **Dados Automáticos**
- **Puxam de**: Todos os arquivos `.md` em `4-Projetos/`
- **Campos usados**: `budget`, `status`, `priority`, `owner`, `market_segment`
- **Cálculos**: ROI automático (budget × 3.47), totais, médias
- **Filtros**: Exclui templates e arquivos de configuração

### **Sistema de Links Inteligentes**
- **Smart Links**: `<span class="smart-link" data-popup="/url/">`
- **Preview automático**: JavaScript detecta hover
- **Dados do popup**: Função `getMockPreviewData()`
- **Navegação**: Clique redireciona para a página

### **Responsividade**
- **Desktop**: Layout completo em grid
- **Tablet**: Adaptação automática
- **Mobile**: Layout em coluna única
- **Print**: Versão otimizada para impressão

---

## 🎨 **PERSONALIZAÇÃO**

### **Cores e Temas**
```css
:root {
  --primary-color: #667eea;    /* Azul principal */
  --secondary-color: #764ba2;  /* Roxo secundário */
  --success-color: #2ed573;    /* Verde sucesso */
  --warning-color: #ffa502;    /* Laranja aviso */
  --danger-color: #ff4757;     /* Vermelho perigo */
}
```

### **Métricas Personalizadas**
- **Edite**: `Dashboard-Central-Integrado.md`
- **Adicione queries**: Novas seções com `dataview`
- **Modifique cálculos**: Altere fórmulas de ROI
- **Novos campos**: Use qualquer campo dos projetos

### **Popups Customizados**
- **Edite**: `src/scripts/dashboard-central.js`
- **Função**: `getMockPreviewData()`
- **Adicione dados**: Novos campos nos popups
- **Modifique layout**: CSS no arquivo de estilos

---

## 📱 **FUNCIONALIDADES AVANÇADAS**

### **Auto-refresh**
- **Métricas**: Atualizam a cada 30 segundos
- **Indicador visual**: Loading animation
- **Detecção de foco**: Atualiza quando volta à aba
- **Manual**: Ctrl/Cmd + R

### **Busca Rápida**
- **Atalho**: Ctrl/Cmd + K
- **Busca em**: Projetos, dashboards, métricas
- **Resultados**: Preview instantâneo
- **Navegação**: Clique para ir

### **Sistema de Toasts**
- **Notificações**: Ações realizadas
- **Tipos**: Success, info, warning, error
- **Auto-dismiss**: 3 segundos
- **Posição**: Canto superior direito

---

## 🔗 **INTEGRAÇÃO COM OUTROS DASHBOARDS**

### **Links Inteligentes Para**
- **Home Executivo**: `/dashboard-executivo/`
- **Innovation Pipeline**: `/dashboard-executivo/innovation-pipeline/`
- **KPIs Principais**: `/dashboard-executivo/kpis-principais/`
- **Capacidade Equipe**: `/dashboard-executivo/dashboard-capacidade-equipe/`
- **Projetos por Prazo**: `/dashboard-executivo/dashboard-projetos-prazo/`

### **Dados Compartilhados**
- **Projetos**: `4-Projetos/` (fonte única)
- **Reuniões**: `6-Reunioes/` (decisões)
- **Governança**: `1-Governanca/` (compliance)
- **Processos**: `5-Processos/` (capacidade)

---

## ⚠️ **TROUBLESHOOTING**

### **Popups Não Aparecem**
- **Verifique**: JavaScript habilitado
- **Aguarde**: 0.5s após hover
- **Console**: F12 para ver erros
- **Cache**: Ctrl+F5 para refresh completo

### **Métricas Incorretas**
- **Campos obrigatórios**: `budget`, `status`, `type`
- **Templates**: Devem ter `type: "template"`
- **Números**: Budget deve ser numérico
- **Status**: Usar valores padrão do sistema

### **Layout Quebrado**
- **CSS**: Verificar se `dashboard-central.css` carregou
- **Responsive**: Testar em diferentes tamanhos
- **Browser**: Compatível com Chrome, Firefox, Safari
- **Cache**: Limpar cache do navegador

---

## 🚀 **PRÓXIMAS MELHORIAS**

### **Planejadas**
- **Gráficos interativos**: Chart.js integration
- **Exportação**: PDF/Excel dos relatórios
- **Filtros dinâmicos**: Por data, status, owner
- **Notificações push**: Alertas em tempo real

### **Possíveis**
- **Integração API**: Dados externos
- **Dashboard mobile**: App nativo
- **IA insights**: Análises automáticas
- **Colaboração**: Comentários em tempo real

---

## 📋 **CHECKLIST DE USO**

### **Para Usuários**
- [ ] Acessar `/dashboard-central/`
- [ ] Explorar popups nos links
- [ ] Usar atalhos de teclado
- [ ] Verificar métricas atualizadas

### **Para Administradores**
- [ ] Manter campos obrigatórios nos projetos
- [ ] Atualizar dados regularmente
- [ ] Monitorar performance
- [ ] Backup dos arquivos de configuração

### **Para Desenvolvedores**
- [ ] CSS e JS carregando corretamente
- [ ] Queries dataview funcionando
- [ ] Responsive em todos dispositivos
- [ ] Performance otimizada

---

## 📞 **SUPORTE**

### **Problemas Técnicos**
- **Desenvolvedor**: Pedro Vitor
- **Arquivos**: `Dashboard-Central-Integrado.md`, CSS, JS
- **Logs**: Console do navegador (F12)
- **Build**: `npm run build` para regenerar

### **Novos Recursos**
- **Solicitações**: Via reuniões executivas
- **Priorização**: Baseada no impacto
- **Timeline**: Conforme roadmap do projeto
- **Testes**: Beta com usuários selecionados

---

**Status**: ✅ **ATIVO**  
**Versão**: 2.0  
**Última Atualização**: 2025-01-20  
**Próxima Revisão**: 2025-01-27
