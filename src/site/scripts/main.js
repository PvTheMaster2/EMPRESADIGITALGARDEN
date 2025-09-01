// Main JavaScript file for Digital Garden Empresarial

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Digital Garden Empresarial loaded successfully!');
    
    // Initialize all modules
    initializeTheme();
    initializeSearch();
    initializeNavigation();
    initializeAnimations();
    initializeCallouts();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Search Functionality
function initializeSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchClose = document.querySelector('.search-close');
    
    if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', toggleSearch);
    }
    
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                toggleSearch();
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                toggleSearch();
            }
        });
    }
}

function toggleSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    
    if (searchOverlay) {
        searchOverlay.classList.toggle('active');
        
        if (searchOverlay.classList.contains('active')) {
            searchInput.focus();
        }
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase();
    const searchResults = document.getElementById('search-results');
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    // Simple search implementation
    // In a real implementation, you'd want to use a search index
    const searchableContent = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
    const results = [];
    
    searchableContent.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query)) {
            results.push({
                title: element.textContent.substring(0, 100),
                url: window.location.pathname + '#' + (element.id || ''),
                type: element.tagName.toLowerCase()
            });
        }
    });
    
    displaySearchResults(results.slice(0, 10));
}

function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">Nenhum resultado encontrado.</p>';
        return;
    }
    
    const resultsHTML = results.map(result => `
        <div class="search-result">
            <a href="${result.url}" class="search-result-link">
                <h4 class="search-result-title">${result.title}</h4>
                <span class="search-result-type">${result.type}</span>
            </a>
        </div>
    `).join('');
    
    searchResults.innerHTML = resultsHTML;
}

// Navigation
function initializeNavigation() {
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Mobile menu toggle (if needed)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
}

// Animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    const animateElements = document.querySelectorAll('.feature-card, .stat-card, .update-item');
    animateElements.forEach(el => observer.observe(el));
}

// Callouts (Obsidian-style callouts)
function initializeCallouts() {
    const callouts = document.querySelectorAll('.callout.is-collapsible');
    
    callouts.forEach(callout => {
        const foldButton = callout.querySelector('.callout-fold');
        if (foldButton) {
            foldButton.addEventListener('click', function() {
                callout.classList.toggle('is-collapsed');
            });
        }
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Global functions for use in templates
window.toggleSearch = toggleSearch;
window.toggleTheme = toggleTheme;

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeTheme,
        initializeSearch,
        initializeNavigation,
        initializeAnimations,
        initializeCallouts,
        toggleSearch,
        toggleTheme
    };
}
