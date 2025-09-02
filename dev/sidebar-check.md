---
layout: base
title: Sidebar Self Test
created: 2025-09-01T21:18
updated: 2025-09-01T21:52
---

<button class="mobile-sidebar-toggle" onclick="toggleSidebar()">🔧 Abrir/Fechar Sidebar</button>

<div style="padding:2rem;background:#f0f8ff;border:1px solid #007acc;border-radius:8px;margin:2rem 0;">
  <h2>🧪 Diagnóstico Completo da Sidebar</h2>
  <pre id="dbg" style="background:#1e1e1e;color:#00ff00;padding:1rem;border-radius:4px;overflow:auto;"></pre>
</div>

<div style="padding:1rem;background:#fff3cd;border:1px solid #ffeaa7;border-radius:8px;">
  <h3>📋 Checklist Manual:</h3>
  <ul>
    <li>✅ Botão acima deve abrir/fechar a sidebar</li>
    <li>✅ No desktop: sidebar sempre visível à esquerda</li>
    <li>✅ No mobile: sidebar escondida, overlay quando aberta</li>
    <li>✅ Conteúdo deve ser empurrado no desktop</li>
  </ul>
</div>

<script>
(function(){
  const d = document.getElementById('dbg');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const main = document.querySelector('main');
  
  const diagnostico = {
    // Elementos DOM
    hasSidebar: !!sidebar,
    hasOverlay: !!overlay,
    hasMain: !!main,
    
    // Classes e IDs
    sidebarClasses: sidebar?.className || 'SIDEBAR NÃO ENCONTRADA',
    mainClass: main?.className || 'MAIN NÃO ENCONTRADO',
    mainId: main?.id || 'sem ID',
    
    // JavaScript
    toggleType: typeof window.toggleSidebar,
    closeSidebarType: typeof window.closeSidebar,
    
    // CSS computado
    sidebarWidth: sidebar ? getComputedStyle(sidebar).width : 'N/A',
    sidebarLeft: sidebar ? getComputedStyle(sidebar).left : 'N/A',
    mainMarginLeft: main ? getComputedStyle(main).marginLeft : 'N/A',
    
    // Viewport
    windowWidth: window.innerWidth,
    isMobile: window.innerWidth <= 768,
    
    // Assets carregados
    scriptsCarregados: Array.from(document.scripts).map(s => s.src).filter(s => s.includes('sidebar')),
    cssCarregados: Array.from(document.styleSheets).length
  };
  
  d.textContent = JSON.stringify(diagnostico, null, 2);
  
  // Log adicional no console
  console.log('🔍 DIAGNÓSTICO SIDEBAR:', diagnostico);
})();
</script>
