// Sidebar Navigation System - Global Functions
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const searchInput = document.querySelector('#sidebar-search');
  
  // Global functions for onclick HTML
  function openSidebar() {
    console.log('Opening sidebar');
    sidebar.classList.add('open');
    if (window.matchMedia('(max-width: 768px)').matches) {
      body.classList.add('sidebar-open');
      if (overlay) overlay.classList.add('active');
    }
  }
  
  function closeSidebar() {
    console.log('Closing sidebar');
    sidebar.classList.remove('open');
    body.classList.remove('sidebar-open');
    if (overlay) overlay.classList.remove('active');
  }
  
  function toggleSidebar() {
    console.log('Toggling sidebar');
    if (sidebar.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
  
  // Expose functions globally for onclick HTML
  window.toggleSidebar = toggleSidebar;
  window.closeSidebar = closeSidebar;
  window.openSidebar = openSidebar;
  
  // Safe event listeners
  document.querySelectorAll('.mobile-sidebar-toggle, .sidebar-toggle')
    .forEach(btn => btn.addEventListener('click', toggleSidebar));
    
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }
  
  // ESC key to close
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });
  
  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value.toLowerCase();
      const treeItems = document.querySelectorAll('.tree-item');
      
      treeItems.forEach(item => {
        const link = item.querySelector('.tree-link');
        if (link) {
          const text = link.textContent.toLowerCase();
          const shouldShow = text.includes(query);
          item.style.display = shouldShow ? 'block' : 'none';
        }
      });
    });
  }
  
  // Tree toggle functionality
  window.toggleTreeNode = function(button) {
    const treeItem = button.closest('.tree-item');
    const children = treeItem.querySelector('.tree-children');
    const icon = button.querySelector('.tree-icon');
    
    if (children) {
      const isExpanded = children.style.display !== 'none';
      children.style.display = isExpanded ? 'none' : 'block';
      icon.textContent = isExpanded ? '▶' : '▼';
    }
  };
  
  // Auto-expand current page path
  const currentUrl = window.location.pathname;
  const activeLink = document.querySelector(`.tree-link[href="${currentUrl}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
    
    // Expand parent folders
    let parent = activeLink.closest('.tree-item');
    while (parent) {
      const children = parent.querySelector('.tree-children');
      const toggle = parent.querySelector('.tree-toggle');
      const icon = parent.querySelector('.tree-icon');
      
      if (children) {
        children.style.display = 'block';
        if (icon) icon.textContent = '▼';
      }
      
      parent = parent.parentElement.closest('.tree-item');
    }
  }
  
  console.log('Sidebar JS loaded successfully');
});