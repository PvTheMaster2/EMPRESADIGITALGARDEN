// Search functionality for Digital Garden Empresarial

class SearchEngine {
    constructor() {
        this.searchIndex = [];
        this.searchResults = [];
        this.isInitialized = false;
    }

    // Initialize search index
    async initialize() {
        if (this.isInitialized) return;
        
        try {
            // In a real implementation, you'd load a search index from a JSON file
            // For now, we'll build the index from the current page content
            this.buildSearchIndex();
            this.isInitialized = true;
            console.log('Search engine initialized');
        } catch (error) {
            console.error('Failed to initialize search engine:', error);
        }
    }

    // Build search index from page content
    buildSearchIndex() {
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, td, th');
        
        searchableElements.forEach((element, index) => {
            const text = element.textContent.trim();
            if (text.length > 10) { // Only index meaningful content
                this.searchIndex.push({
                    id: index,
                    title: this.extractTitle(element),
                    content: text,
                    url: this.getUrl(element),
                    type: element.tagName.toLowerCase(),
                    element: element
                });
            }
        });
    }

    // Extract title from element
    extractTitle(element) {
        if (element.tagName.match(/^H[1-6]$/)) {
            return element.textContent.trim();
        }
        
        // For other elements, try to find a nearby heading
        const heading = element.closest('section')?.querySelector('h1, h2, h3, h4, h5, h6');
        return heading ? heading.textContent.trim() : 'Página';
    }

    // Get URL for element
    getUrl(element) {
        const id = element.id;
        if (id) {
            return window.location.pathname + '#' + id;
        }
        return window.location.pathname;
    }

    // Search in the index
    search(query) {
        if (!this.isInitialized) {
            this.initialize();
        }

        const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
        
        if (searchTerms.length === 0) {
            return [];
        }

        this.searchResults = this.searchIndex
            .map(item => {
                const score = this.calculateScore(item, searchTerms);
                return { ...item, score };
            })
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);

        return this.searchResults;
    }

    // Calculate search score
    calculateScore(item, searchTerms) {
        let score = 0;
        const content = item.content.toLowerCase();
        const title = item.title.toLowerCase();

        searchTerms.forEach(term => {
            // Title matches get higher score
            if (title.includes(term)) {
                score += 10;
            }
            
            // Content matches
            if (content.includes(term)) {
                score += 5;
            }

            // Exact phrase match
            if (content.includes(searchTerms.join(' '))) {
                score += 15;
            }

            // Heading elements get bonus
            if (item.type.match(/^h[1-6]$/)) {
                score += 3;
            }
        });

        return score;
    }

    // Highlight search terms in results
    highlightTerms(text, searchTerms) {
        let highlightedText = text;
        searchTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        });
        return highlightedText;
    }
}

// Global search engine instance
const searchEngine = new SearchEngine();

// Enhanced search functionality
function enhancedSearch(query) {
    const results = searchEngine.search(query);
    return results.map(result => ({
        title: result.title,
        content: result.content.substring(0, 150) + '...',
        url: result.url,
        type: result.type,
        score: result.score
    }));
}

// Search result display with highlighting
function displayEnhancedSearchResults(results, query) {
    const searchResults = document.getElementById('search-results');
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <p>Nenhum resultado encontrado para "${query}"</p>
                <p class="search-tips">Dicas de busca:</p>
                <ul>
                    <li>Tente usar termos mais específicos</li>
                    <li>Verifique a ortografia</li>
                    <li>Use palavras-chave relacionadas ao conteúdo</li>
                </ul>
            </div>
        `;
        return;
    }

    const resultsHTML = results.map(result => {
        const highlightedTitle = searchEngine.highlightTerms(result.title, searchTerms);
        const highlightedContent = searchEngine.highlightTerms(result.content, searchTerms);
        
        return `
            <div class="search-result">
                <a href="${result.url}" class="search-result-link">
                    <h4 class="search-result-title">${highlightedTitle}</h4>
                    <p class="search-result-content">${highlightedContent}</p>
                    <div class="search-result-meta">
                        <span class="search-result-type">${result.type}</span>
                        <span class="search-result-score">Relevância: ${result.score}</span>
                    </div>
                </a>
            </div>
        `;
    }).join('');

    searchResults.innerHTML = resultsHTML;
}

// Debounced search handler
const debouncedSearch = debounce(function(query) {
    const results = enhancedSearch(query);
    displayEnhancedSearchResults(results, query);
}, 300);

// Enhanced search input handler
function handleEnhancedSearch(e) {
    const query = e.target.value.trim();
    
    if (query.length < 2) {
        document.getElementById('search-results').innerHTML = '';
        return;
    }

    debouncedSearch(query);
}

// Keyboard navigation for search results
function initializeSearchKeyboardNavigation() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (!searchInput || !searchResults) return;

    let currentIndex = -1;
    const resultLinks = [];

    searchInput.addEventListener('keydown', function(e) {
        const links = searchResults.querySelectorAll('.search-result-link');
        
        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                currentIndex = Math.min(currentIndex + 1, links.length - 1);
                updateSelection(links, currentIndex);
                break;
                
            case 'ArrowUp':
                e.preventDefault();
                currentIndex = Math.max(currentIndex - 1, -1);
                updateSelection(links, currentIndex);
                break;
                
            case 'Enter':
                e.preventDefault();
                if (currentIndex >= 0 && links[currentIndex]) {
                    links[currentIndex].click();
                }
                break;
                
            case 'Escape':
                toggleSearch();
                break;
        }
    });
}

function updateSelection(links, index) {
    links.forEach((link, i) => {
        if (i === index) {
            link.classList.add('selected');
            link.scrollIntoView({ block: 'nearest' });
        } else {
            link.classList.remove('selected');
        }
    });
}

// Search analytics
function trackSearch(query, resultsCount) {
    // In a real implementation, you'd send this to analytics
    console.log(`Search: "${query}" returned ${resultsCount} results`);
}

// Initialize enhanced search
document.addEventListener('DOMContentLoaded', function() {
    searchEngine.initialize();
    initializeSearchKeyboardNavigation();
    
    // Replace the basic search handler with enhanced one
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.removeEventListener('input', handleSearch);
        searchInput.addEventListener('input', handleEnhancedSearch);
    }
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SearchEngine,
        enhancedSearch,
        displayEnhancedSearchResults,
        handleEnhancedSearch
    };
}
