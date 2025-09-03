// Search functionality for Digital Garden Empresarial
let searchIndex = [];

// Carregar dados de busca
async function loadSearchData() {
  try {
    const response = await fetch('/search.json');
    searchIndex = await response.json();
    console.log('Índice de busca carregado:', searchIndex.length, 'páginas');
  } catch (error) {
    console.error('Erro ao carregar dados de busca:', error);
  }
}

// Função de busca
function searchPages(query) {
  if (!query || query.length < 2) return [];
  
  const searchTerm = query.toLowerCase().trim();
  const results = [];
  
  searchIndex.forEach(page => {
    let score = 0;
    
    // Busca no título (peso maior)
    if (page.title.toLowerCase().includes(searchTerm)) {
      score += 10;
    }
    
    // Busca no conteúdo
    if (page.content.toLowerCase().includes(searchTerm)) {
      score += 5;
    }
    
    // Busca na categoria
    if (page.category.toLowerCase().includes(searchTerm)) {
      score += 3;
    }
    
    // Busca nas palavras-chave
    if (page.keywords && page.keywords.some(keyword => keyword.includes(searchTerm))) {
      score += 2;
    }
    
    if (score > 0) {
      results.push({ ...page, score });
    }
  });
  
  // Ordenar por relevância
  return results.sort((a, b) => b.score - a.score).slice(0, 20);
}

// Exibir resultados
function displaySearchResults(results, query) {
  const searchResults = document.getElementById('searchResults');
  
  if (results.length === 0) {
    searchResults.innerHTML = `
      <div class="no-results">
        <h3>🔍 Nenhum resultado encontrado</h3>
        <p>Não encontramos resultados para "${query}"</p>
        <p>Tente usar termos diferentes ou mais gerais.</p>
      </div>
    `;
    return;
  }
  
  const resultsHTML = `
    <div class="search-header">
      <h3>🔍 ${results.length} resultado${results.length !== 1 ? 's' : ''} para "${query}"</h3>
    </div>
    <div class="search-list">
      ${results.map(result => `
        <div class="search-item">
          <div class="search-item-header">
            <h4><a href="${result.url}">${result.title}</a></h4>
            <span class="search-category">${result.category.replace('-', ' ')}</span>
          </div>
          <div class="search-item-content">
            <p>${highlightText(result.content.substring(0, 200), query)}...</p>
          </div>
          <div class="search-item-footer">
            <a href="${result.url}" class="search-link">📖 Ler →</a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  searchResults.innerHTML = resultsHTML;
}

// Destacar termo buscado
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

// Debounce para otimizar busca
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

// Inicializar busca
document.addEventListener('DOMContentLoaded', function() {
  loadSearchData();
  
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    const debouncedSearch = debounce((query) => {
      const results = searchPages(query);
      displaySearchResults(results, query);
    }, 300);
    
    searchInput.addEventListener('input', function(e) {
      const query = e.target.value;
      if (query.length >= 2) {
        debouncedSearch(query);
      } else {
        document.getElementById('searchResults').innerHTML = '';
      }
    });
  }
  
  // Busca URL params
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  if (searchQuery && searchInput) {
    searchInput.value = searchQuery;
    setTimeout(() => {
      const results = searchPages(searchQuery);
      displaySearchResults(results, searchQuery);
    }, 500);
  }
});
