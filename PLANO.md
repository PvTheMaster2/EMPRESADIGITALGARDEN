---
created: 2025-09-03T00:30
updated: 2025-09-03T00:30
---
# 🎯 PLANO DE CORREÇÃO DO SISTEMA SIDEBAR E LINKS

> **Baseado na análise detalhada dos problemas identificados no sistema**

## 📋 **DIAGNÓSTICO DOS PROBLEMAS**

### **🔴 Problema 1: Sidebar "Fica na Frente"**
- **Causa**: Duas sidebars no DOM + JS forçando estado "aberta" no desktop
- **Evidência**: `base.njk` já tem `<aside class="sidebar">` completo
- **Impacto**: Sidebar não recolhe, sobrepõe conteúdo

### **🔴 Problema 2: Conteúdo do .md "Não Atualiza"**
- **Causa**: Conflito entre URLs numeradas vs URLs limpas
- **Evidência**: Pastas `6-Reunioes/` vs links `/reunioes/`
- **Impacto**: 404 ou página errada

### **🔴 Problema 3: Links Quebrados**
- **Causa**: Filtro `convertWikilinks` não resolve URLs finais corretamente
- **Evidência**: Wikilinks geram caminhos que não casam com permalinks
- **Impacto**: Links não funcionam, navegação quebrada

---

## ✅ **PLANO DE CORREÇÃO (5 ETAPAS)**

### **ETAPA 1: Garantir UMA Sidebar no DOM**
**Objetivo**: Eliminar duplicação de sidebars

**Ações**:
1. **Verificar**: `document.querySelectorAll('.sidebar').length` deve ser 1
2. **Remover**: Qualquer `<aside class="sidebar">` duplicado em componentes
3. **Manter**: Apenas a sidebar do `base.njk`
4. **Refatorar**: Componentes devem renderizar apenas o miolo (`<nav>`)

**Checklist**:
- [ ] Apenas 1 `.sidebar` no DOM
- [ ] Apenas 1 `.sidebar-overlay` no DOM
- [ ] Componentes não renderizam `<aside>`

---

### **ETAPA 2: Corrigir Comportamento Desktop**
**Objetivo**: Parar de "travar" sidebar aberta no desktop

**Problema Atual**:
```javascript
// sidebar.js - linha problemática
window.addEventListener('resize', function() {
  if (!isMobile()) {
    sidebar.classList.add('open'); // ← FORÇA ABERTA
  }
});
```

**Solução**:
- Implementar `data-sidebar-persistent` no `<body>`
- Só forçar "open" quando explicitamente marcado
- Deixar usuário controlar estado da sidebar

**Checklist**:
- [ ] Sidebar fecha no desktop quando solicitado
- [ ] `openSidebar()` e `closeSidebar()` funcionam
- [ ] Estado não é forçado no resize

---

### **ETAPA 3: Verificar Listeners do JS**
**Objetivo**: Garantir que eventos sempre funcionem

**Problema**: Script dá `return` se não achar elementos

**Ações**:
1. **Confirmar**: `base.njk` tem `<div class="sidebar-overlay">`
2. **Verificar**: Layouts alternativos não quebram o JS
3. **Melhorar**: Tolerância a ausência de elementos

**Checklist**:
- [ ] Todos os elementos necessários existem
- [ ] JS não falha em layouts alternativos
- [ ] Listeners são registrados corretamente

---

### **ETAPA 4: Padronizar URLs (CRÍTICO)**
**Objetivo**: Escolher UM padrão de URL e aplicar consistentemente

#### **Opção A: URLs "Bonitas" (RECOMENDADO)**
- **Permalinks**: `/projetos/`, `/reunioes/`, `/governanca/`
- **Ação**: Atualizar `navigation.js` para URLs limpas
- **Vantagem**: SEO, UX, profissional

#### **Opção B: URLs "Numeradas"**
- **Permalinks**: `/4-projetos/`, `/6-reunioes/`
- **Ação**: Ensinar filtro wikilinks a gerar URLs numeradas
- **Vantagem**: Ordenação interna, menos refatoração

**DECISÃO**: Implementar Opção A (URLs Bonitas)

**Checklist**:
- [ ] Todos os permalinks seguem padrão escolhido
- [ ] `navigation.js` atualizado
- [ ] Redirects configurados para URLs antigas

---

### **ETAPA 5: Corrigir Filtro de Wikilinks**
**Objetivo**: Resolver [[links]] para URLs reais do sistema

**Implementação**:
1. **Criar Collection**: Mapa `slug → url` no Eleventy
2. **Atualizar Filtro**: Usar mapa para resolução correta
3. **Fallback**: Marcar links não resolvidos como `.is-unresolved`

**Código Base**:
```javascript
// .eleventy.js
eleventyConfig.addCollection('bySlug', col => 
  Object.fromEntries(col.getAll().map(p => [p.fileSlug, p.url]))
);

// No filtro convertWikilinks
const urlMap = collections.bySlug;
if (urlMap[cleanSlug]) {
  return `<a href="${urlMap[cleanSlug]}">${displayName}</a>`;
}
```

**Checklist**:
- [ ] Collection `bySlug` criada
- [ ] Filtro usa mapa real de URLs
- [ ] Links não resolvidos marcados visualmente
- [ ] Todos os wikilinks funcionam

---

## 🧪 **TESTES DE VALIDAÇÃO**

### **Teste 1: Sidebar Única**
```javascript
// Console do navegador
document.querySelectorAll('.sidebar').length === 1
document.querySelectorAll('.sidebar-overlay').length === 1
```

### **Teste 2: Controle Desktop**
```javascript
// Deve funcionar sem forçar reabrir
openSidebar();
closeSidebar();
```

### **Teste 3: Links Funcionais**
- Clicar em 3-5 links que estavam quebrados
- Verificar se URLs seguem padrão escolhido
- Confirmar que páginas carregam corretamente

### **Teste 4: Responsividade**
- Desktop: Sidebar controlável pelo usuário
- Mobile: Overlay funciona corretamente
- Tablet: Transição suave entre modos

---

## 📊 **MÉTRICAS DE SUCESSO**

### **Antes (Problemas)**
- ❌ Sidebar "trava" aberta no desktop
- ❌ Links quebrados (404s)
- ❌ Navegação inconsistente
- ❌ URLs conflitantes

### **Depois (Objetivos)**
- ✅ Sidebar controlável em todos os dispositivos
- ✅ 100% dos links funcionando
- ✅ URLs consistentes e SEO-friendly
- ✅ Navegação fluída e intuitiva

### **KPIs Técnicos**
- **Sidebar**: 1 elemento no DOM (não 2+)
- **Links**: 0% de 404s em navegação interna
- **Performance**: Sem duplicações desnecessárias
- **UX**: Controle total da interface

---

## 🚀 **ORDEM DE EXECUÇÃO**

### **Prioridade ALTA (Resolve 80% dos problemas)**
1. **Etapa 1**: Sidebar única ← Resolve sobreposição
2. **Etapa 4**: Padronizar URLs ← Resolve navegação
3. **Etapa 5**: Corrigir wikilinks ← Resolve links quebrados

### **Prioridade MÉDIA**
4. **Etapa 2**: Comportamento desktop ← Melhora UX
5. **Etapa 3**: Listeners JS ← Garante estabilidade

### **Validação Final**
6. **Testes**: Executar todos os testes de validação
7. **Deploy**: Build e teste em produção

---

## 🎯 **RESULTADO ESPERADO**

### **Sistema Funcional**
- Sidebar responsiva e controlável
- Todos os links funcionando
- URLs consistentes e profissionais
- Navegação fluída entre seções

### **Código Limpo**
- Sem duplicações no DOM
- JavaScript estável
- CSS sem conflitos
- Build otimizado

### **UX Melhorada**
- Interface previsível
- Navegação intuitiva
- Performance consistente
- Acessibilidade mantida

---

## 📝 **NOTAS IMPORTANTES**

### **Não Executar Ainda**
- Este é apenas o **PLANO MAPEADO**
- Aguardar aprovação antes de implementar
- Executar etapas na ordem especificada

### **Backup Recomendado**
- Fazer commit antes de cada etapa
- Testar em ambiente local primeiro
- Manter rollback disponível

### **Monitoramento**
- Acompanhar métricas após cada etapa
- Validar funcionamento em diferentes dispositivos
- Documentar mudanças implementadas

---

**Status**: 📋 **PLANO MAPEADO - AGUARDANDO EXECUÇÃO**  
**Estimativa**: 2-3 horas de implementação  
**Risco**: Baixo (mudanças pontuais e testáveis)  
**Impacto**: Alto (resolve problemas críticos de UX)
