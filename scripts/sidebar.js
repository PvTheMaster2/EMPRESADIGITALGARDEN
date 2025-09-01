// Sidebar Navigation System
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.mobile-sidebar-toggle');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const navigationTree = document.getElementById('navigation-tree');
    const searchInput = document.querySelector('.sidebar-search input');
    
    // Navigation data (will be populated from the server)
    const navigationData = window.navigationData || [];
    
    // Toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        document.body.classList.toggle('sidebar-open');
    }
    
    // Close sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    }
    
    // Event listeners
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
    
    // Generate navigation tree HTML
    function generateNavigationTree(items, level = 0) {
        if (!items || !Array.isArray(items)) return '';
        
        let html = '<ul class="nav-tree">';
        
        items.forEach(item => {
            const hasChildren = item.children && item.children.length > 0;
            const itemClass = hasChildren ? 'nav-item has-children' : 'nav-item';
            const iconHtml = item.icon ? `<span class="nav-icon">${item.icon}</span>` : '';
            
            html += `<li class="${itemClass}">`;
            
            if (hasChildren) {
                html += `
                    <div class="nav-toggle" data-level="${level}">
                        <span class="nav-expand">▶</span>
                        ${iconHtml}
                        <span class="nav-title">${item.title}</span>
                    </div>
                    <div class="nav-children" style="display: none;">
                        ${generateNavigationTree(item.children, level + 1)}
                    </div>
                `;
            } else {
                html += `
                    <a href="${item.url}" class="nav-link" data-level="${level}">
                        ${iconHtml}
                        <span class="nav-title">${item.title}</span>
                    </a>
                `;
            }
            
            html += '</li>';
        });
        
        html += '</ul>';
        return html;
    }
    
    // Populate navigation tree
    function populateNavigationTree() {
        if (navigationTree && navigationData.length > 0) {
            navigationTree.innerHTML = generateNavigationTree(navigationData);
            
            // Add click handlers for expandable items
            const toggles = navigationTree.querySelectorAll('.nav-toggle');
            toggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const children = this.nextElementSibling;
                    const expand = this.querySelector('.nav-expand');
                    
                    if (children.style.display === 'none') {
                        children.style.display = 'block';
                        expand.textContent = '▼';
                        this.classList.add('expanded');
                    } else {
                        children.style.display = 'none';
                        expand.textContent = '▶';
                        this.classList.remove('expanded');
                    }
                });
            });
            
            // Highlight current page
            const currentPath = window.location.pathname;
            const currentLink = navigationTree.querySelector(`a[href="${currentPath}"]`);
            if (currentLink) {
                currentLink.classList.add('current');
                
                // Expand parent items
                let parent = currentLink.closest('.nav-children');
                while (parent) {
                    parent.style.display = 'block';
                    const toggle = parent.previousElementSibling;
                    if (toggle) {
                        toggle.classList.add('expanded');
                        const expand = toggle.querySelector('.nav-expand');
                        if (expand) expand.textContent = '▼';
                    }
                    parent = parent.parentElement.closest('.nav-children');
                }
            }
        }
    }
    
    // Search functionality
    function filterNavigation(searchTerm) {
        const items = navigationTree.querySelectorAll('.nav-item');
        searchTerm = searchTerm.toLowerCase();
        
        items.forEach(item => {
            const title = item.querySelector('.nav-title');
            if (title) {
                const text = title.textContent.toLowerCase();
                const matches = text.includes(searchTerm);
                item.style.display = matches || searchTerm === '' ? 'block' : 'none';
                
                // Show parent if child matches
                if (matches) {
                    let parent = item.closest('.nav-children');
                    while (parent) {
                        parent.style.display = 'block';
                        const toggle = parent.previousElementSibling;
                        if (toggle) {
                            toggle.classList.add('expanded');
                            const expand = toggle.querySelector('.nav-expand');
                            if (expand) expand.textContent = '▼';
                        }
                        parent = parent.parentElement.closest('.nav-children');
                    }
                }
            }
        });
    }
    
    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterNavigation(this.value);
        });
    }
    
    // Initialize navigation
    populateNavigationTree();
});
