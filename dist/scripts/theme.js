// Theme management for Digital Garden Empresarial

class ThemeManager {
    constructor() {
        this.currentTheme = 'light';
        this.themes = {
            light: {
                name: 'Claro',
                icon: '🌙',
                class: 'theme-light'
            },
            dark: {
                name: 'Escuro',
                icon: '☀️',
                class: 'theme-dark'
            },
            auto: {
                name: 'Automático',
                icon: '🔄',
                class: 'theme-auto'
            }
        };
        
        this.init();
    }

    init() {
        this.loadSavedTheme();
        this.setupEventListeners();
        this.applyTheme();
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.currentTheme = savedTheme;
    }

    setupEventListeners() {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (this.currentTheme === 'auto') {
                    this.applyTheme();
                }
            });
        }
    }

    toggleTheme() {
        const themeOrder = ['light', 'dark', 'auto'];
        const currentIndex = themeOrder.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        this.setTheme(themeOrder[nextIndex]);
    }

    setTheme(theme) {
        if (!this.themes[theme]) {
            console.warn(`Theme "${theme}" not found`);
            return;
        }

        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        this.applyTheme();
        this.updateUI();
    }

    applyTheme() {
        const root = document.documentElement;
        const body = document.body;
        
        // Remove all theme classes
        Object.values(this.themes).forEach(theme => {
            root.classList.remove(theme.class);
        });
        
        // Apply current theme
        if (this.currentTheme === 'auto') {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const themeClass = isDark ? 'theme-dark' : 'theme-light';
            root.classList.add(themeClass);
            root.setAttribute('data-theme', isDark ? 'dark' : 'light');
        } else {
            root.classList.add(this.themes[this.currentTheme].class);
            root.setAttribute('data-theme', this.currentTheme);
        }

        // Update meta theme-color
        this.updateMetaThemeColor();
        
        // Dispatch theme change event
        this.dispatchThemeChangeEvent();
    }

    updateUI() {
        const themeIcon = document.querySelector('.theme-icon');
        const themeName = document.querySelector('.theme-name');
        
        if (themeIcon) {
            themeIcon.textContent = this.themes[this.currentTheme].icon;
        }
        
        if (themeName) {
            themeName.textContent = this.themes[this.currentTheme].name;
        }
    }

    updateMetaThemeColor() {
        let metaThemeColor = document.querySelector('meta[name="theme-color"]');
        
        if (!metaThemeColor) {
            metaThemeColor = document.createElement('meta');
            metaThemeColor.name = 'theme-color';
            document.head.appendChild(metaThemeColor);
        }

        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        metaThemeColor.content = isDark ? '#0f172a' : '#ffffff';
    }

    dispatchThemeChangeEvent() {
        const event = new CustomEvent('themechange', {
            detail: {
                theme: this.currentTheme,
                isDark: document.documentElement.getAttribute('data-theme') === 'dark'
            }
        });
        document.dispatchEvent(event);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    isDarkMode() {
        return document.documentElement.getAttribute('data-theme') === 'dark';
    }

    // Theme transition management
    enableTransitions() {
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }

    disableTransitions() {
        document.body.style.transition = 'none';
    }

    // Smooth theme transition
    async transitionToTheme(newTheme) {
        this.disableTransitions();
        this.setTheme(newTheme);
        
        // Force a reflow
        document.body.offsetHeight;
        
        this.enableTransitions();
    }
}

// Global theme manager instance
const themeManager = new ThemeManager();

// Enhanced theme toggle with animation
function enhancedToggleTheme() {
    const currentTheme = themeManager.getCurrentTheme();
    const isDark = themeManager.isDarkMode();
    
    // Add transition class for smooth animation
    document.body.classList.add('theme-transitioning');
    
    // Toggle theme
    themeManager.toggleTheme();
    
    // Remove transition class after animation
    setTimeout(() => {
        document.body.classList.remove('theme-transitioning');
    }, 300);
}

// Theme-aware component updates
function updateThemeAwareComponents() {
    // Update charts and graphs if they exist
    const charts = document.querySelectorAll('[data-theme-aware]');
    charts.forEach(chart => {
        if (chart.updateTheme) {
            chart.updateTheme(themeManager.isDarkMode());
        }
    });

    // Update code syntax highlighting
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        if (window.hljs) {
            window.hljs.highlightElement(block);
        }
    });
}

// Listen for theme changes
document.addEventListener('themechange', function(e) {
    console.log(`Theme changed to: ${e.detail.theme} (Dark: ${e.detail.isDark})`);
    updateThemeAwareComponents();
});

// Initialize theme-aware components on page load
document.addEventListener('DOMContentLoaded', function() {
    updateThemeAwareComponents();
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        themeManager,
        enhancedToggleTheme,
        updateThemeAwareComponents
    };
}

// Global functions for use in templates
window.enhancedToggleTheme = enhancedToggleTheme;
window.themeManager = themeManager;
