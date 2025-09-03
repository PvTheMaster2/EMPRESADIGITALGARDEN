/* ============================================
   SIDEBAR JAVASCRIPT - À PROVA DE BALA
   ============================================ */

(function() {
  'use strict';
  
  console.log('🔧 Sidebar JS iniciando...');
  
  // Elementos DOM
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  
  // Verificação crítica
  if (!sidebar || !overlay) {
    console.warn('⚠️ [SIDEBAR] Markup não encontrado:', {
      sidebar: !!sidebar,
      overlay: !!overlay
    });
    return;
  }
  
  console.log('✅ Elementos encontrados:', {
    sidebar: sidebar.className,
    overlay: overlay.className
  });
  
  // Utilitários
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
  
  // Funções principais
  function openSidebar() {
    console.log('📂 Abrindo sidebar...');
    sidebar.classList.add('open');
    sidebar.setAttribute('data-state', 'open');
    sidebar.setAttribute('aria-hidden', 'false');
    
    if (isMobile()) {
      body.classList.add('sidebar-open');
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
    }
  }
  
  function closeSidebar() {
    console.log('📁 Fechando sidebar...');
    sidebar.classList.remove('open');
    sidebar.setAttribute('data-state', 'closed');
    sidebar.setAttribute('aria-hidden', 'true');
    
    body.classList.remove('sidebar-open');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
  }
  
  function toggleSidebar() {
    console.log('🔄 Toggle sidebar...');
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
  
  // Expor funções globalmente para onclick HTML
  window.toggleSidebar = toggleSidebar;
  window.closeSidebar = closeSidebar;
  window.openSidebar = openSidebar;
  
  console.log('🌐 Funções globais expostas:', {
    toggleSidebar: typeof window.toggleSidebar,
    closeSidebar: typeof window.closeSidebar,
    openSidebar: typeof window.openSidebar
  });
  
  // Event Listeners seguros
  try {
    // Fechar no overlay
    overlay.addEventListener('click', closeSidebar);
    
    // Fechar com ESC
    window.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeSidebar();
      }
    });
    
    // Botões toggle
    document.querySelectorAll('.mobile-sidebar-toggle, .sidebar-toggle')
      .forEach(btn => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          toggleSidebar();
        });
      });
    
    console.log('✅ Event listeners configurados');
  } catch (error) {
    console.error('❌ Erro ao configurar event listeners:', error);
  }
  
  // Guard de resize - CRÍTICO
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      // Desktop: sidebar sempre "aberta" e overlay desabilitado
      sidebar.classList.add('open');
      overlay.classList.remove('active');
      body.classList.remove('sidebar-open');
      sidebar.setAttribute('data-state', 'open');
      sidebar.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'true');
    } else {
      // Mobile: respeitar estado atual
      if (sidebar.getAttribute('data-state') === 'closed') {
        sidebar.classList.remove('open');
      }
    }
  });
  
  // Estado inicial coerente
  function setInitialState() {
    if (!isMobile()) {
      // Desktop: sempre aberta
      sidebar.classList.add('open');
      sidebar.setAttribute('data-state', 'open');
      sidebar.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'true');
    } else {
      // Mobile: fechada por padrão
      sidebar.classList.remove('open');
      sidebar.setAttribute('data-state', 'closed');
      sidebar.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
    }
  }
  
  // Search functionality
  const searchInput = document.querySelector('#sidebar-search, .search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      const treeItems = document.querySelectorAll('.tree-item');
      
      treeItems.forEach(item => {
        const link = item.querySelector('.tree-link');
        if (link) {
          const text = link.textContent.toLowerCase();
          const shouldShow = text.includes(query) || query === '';
          item.style.display = shouldShow ? 'block' : 'none';
          
          // Mostrar pais se filho match
          if (shouldShow && query !== '') {
            let parent = item.parentElement?.closest('.tree-item');
            while (parent) {
              parent.style.display = 'block';
              const parentChildren = parent.querySelector('.tree-children');
              if (parentChildren) parentChildren.style.display = 'block';
              parent = parent.parentElement?.closest('.tree-item');
            }
          }
        }
      });
    });
    
    console.log('🔍 Search configurado');
  }
  
  // Tree toggle functionality
  window.toggleTreeNode = function(button) {
    const treeItem = button.closest('.tree-item');
    const children = treeItem?.querySelector('.tree-children');
    const icon = button.querySelector('.tree-icon');
    
    if (children && icon) {
      const isExpanded = children.style.display !== 'none';
      children.style.display = isExpanded ? 'none' : 'block';
      icon.textContent = isExpanded ? '▶' : '▼';
      button.setAttribute('aria-expanded', !isExpanded);
    }
  };
  
  // Auto-expand current page path
  function expandCurrentPath() {
    const currentUrl = window.location.pathname;
    const activeLink = document.querySelector(`.tree-link[href="${currentUrl}"]`);
    
    if (activeLink) {
      activeLink.classList.add('active');
      
      // Expandir pastas pais
      let parent = activeLink.closest('.tree-item');
      while (parent) {
        const children = parent.querySelector('.tree-children');
        const toggle = parent.querySelector('.tree-toggle');
        const icon = parent.querySelector('.tree-icon');
        
        if (children) {
          children.style.display = 'block';
          if (icon) icon.textContent = '▼';
          if (toggle) toggle.setAttribute('aria-expanded', 'true');
        }
        
        parent = parent.parentElement?.closest('.tree-item');
      }
    }
  }
  
  // Inicialização
  document.addEventListener('DOMContentLoaded', function() {
    setInitialState();
    expandCurrentPath();
    console.log('🚀 Sidebar inicializada com sucesso!');
  });
  
  // Se DOM já carregado
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setInitialState();
      expandCurrentPath();
    });
  } else {
    setInitialState();
    expandCurrentPath();
  }
  
  console.log('✅ Sidebar JS carregado completamente');
})();