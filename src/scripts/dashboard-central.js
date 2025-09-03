/**
 * Dashboard Central Integrado - JavaScript Avançado
 * Sistema de popups, métricas em tempo real e interatividade
 */

class DashboardCentral {
  constructor() {
    this.popupTimeout = null;
    this.currentPopup = null;
    this.metricsUpdateInterval = null;
    this.init();
  }

  init() {
    this.setupSmartLinks();
    this.setupMetricsUpdates();
    this.setupKeyboardShortcuts();
    this.setupSearchFunctionality();
    this.setupDataRefresh();
    console.log('🎯 Dashboard Central Integrado inicializado');
  }

  // Sistema de Smart Links com Popup (estilo Obsidian)
  setupSmartLinks() {
    const smartLinks = document.querySelectorAll('.smart-link');
    
    smartLinks.forEach(link => {
      link.addEventListener('mouseenter', (e) => {
        this.clearPopupTimeout();
        this.popupTimeout = setTimeout(() => {
          this.showLinkPreview(e, link);
        }, 500); // Delay para evitar popups acidentais
      });
      
      link.addEventListener('mouseleave', () => {
        this.clearPopupTimeout();
        setTimeout(() => this.hideLinkPreview(), 200);
      });
      
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateToLink(link);
      });
    });
  }

  showLinkPreview(event, linkElement) {
    const url = linkElement.getAttribute('data-popup');
    const title = linkElement.textContent.trim();
    
    if (!url || this.currentPopup) return;

    const popup = this.createPopup(title, url);
    this.positionPopup(popup, event);
    document.body.appendChild(popup);
    this.currentPopup = popup;

    // Adicionar listeners para manter popup aberto
    popup.addEventListener('mouseenter', () => {
      this.clearPopupTimeout();
    });
    
    popup.addEventListener('mouseleave', () => {
      setTimeout(() => this.hideLinkPreview(), 200);
    });

    // Carregar conteúdo do preview
    this.loadPreviewContent(popup, url, title);
  }

  createPopup(title, url) {
    const popup = document.createElement('div');
    popup.className = 'link-preview-popup';
    popup.innerHTML = `
      <div class="popup-header">
        <div class="popup-title">${title}</div>
        <div class="popup-url">${url}</div>
      </div>
      <div class="popup-content">
        <div class="loading-indicator">
          <div class="spinner"></div>
          <p>Carregando preview...</p>
        </div>
      </div>
      <div class="popup-footer">
        <button class="popup-action" data-action="navigate">Abrir</button>
        <button class="popup-action" data-action="copy">Copiar Link</button>
      </div>
    `;

    // Adicionar event listeners para ações
    popup.addEventListener('click', (e) => {
      const action = e.target.getAttribute('data-action');
      if (action === 'navigate') {
        this.navigateToLink({ getAttribute: () => url });
      } else if (action === 'copy') {
        this.copyToClipboard(window.location.origin + url);
        this.showToast('Link copiado!', 'success');
      }
    });

    return popup;
  }

  positionPopup(popup, event) {
    const rect = document.body.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    
    // Posicionamento inteligente para evitar sair da tela
    let left = x + 10;
    let top = y - 50;
    
    // Ajustar se sair da tela
    if (left + 350 > window.innerWidth) {
      left = x - 360;
    }
    if (top < 0) {
      top = y + 20;
    }
    if (top + 200 > window.innerHeight) {
      top = window.innerHeight - 220;
    }

    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  }

  loadPreviewContent(popup, url, title) {
    const contentDiv = popup.querySelector('.popup-content');
    
    // Simular carregamento de dados do projeto
    setTimeout(() => {
      const mockData = this.getMockPreviewData(url, title);
      contentDiv.innerHTML = `
        <div class="preview-stats">
          <div class="stat-item">
            <span class="stat-label">Status:</span>
            <span class="stat-value ${mockData.status.toLowerCase()}">${mockData.status}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Budget:</span>
            <span class="stat-value">R$ ${mockData.budget}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">ROI:</span>
            <span class="stat-value success">${mockData.roi}%</span>
          </div>
        </div>
        <div class="preview-description">
          <p>${mockData.description}</p>
        </div>
      `;
    }, 800);
  }

  getMockPreviewData(url, title) {
    // Dados mock baseados na URL/título
    const projectData = {
      '/projetos/aeralyn/': {
        status: 'Ativo',
        budget: '80.000',
        roi: '400',
        description: 'Sistema completo de RPG com 46.514 linhas de documentação'
      },
      '/projetos/vault-empresarial/': {
        status: 'Ativo',
        budget: '100.000',
        roi: '300',
        description: 'Sistema de gestão empresarial com 295 arquivos estruturados'
      },
      '/projetos/plataforma-cursos/': {
        status: 'Planejamento',
        budget: '40.000',
        roi: '500',
        description: 'Plataforma de cursos online com IA integrada'
      },
      '/dashboard-executivo/': {
        status: 'Ativo',
        budget: '0',
        roi: '0',
        description: 'Dashboard principal com métricas em tempo real'
      }
    };

    return projectData[url] || {
      status: 'Ativo',
      budget: '0',
      roi: '0',
      description: 'Informações detalhadas do projeto ou seção'
    };
  }

  hideLinkPreview() {
    if (this.currentPopup) {
      this.currentPopup.style.animation = 'popupFadeOut 0.2s ease-in forwards';
      setTimeout(() => {
        if (this.currentPopup && this.currentPopup.parentNode) {
          this.currentPopup.parentNode.removeChild(this.currentPopup);
        }
        this.currentPopup = null;
      }, 200);
    }
  }

  clearPopupTimeout() {
    if (this.popupTimeout) {
      clearTimeout(this.popupTimeout);
      this.popupTimeout = null;
    }
  }

  navigateToLink(linkElement) {
    const url = linkElement.getAttribute('data-popup') || linkElement.getAttribute('href');
    if (url) {
      // Adicionar efeito de transição
      document.body.style.opacity = '0.8';
      setTimeout(() => {
        window.location.href = url;
      }, 150);
    }
  }

  // Sistema de atualização de métricas
  setupMetricsUpdates() {
    this.updateMetrics();
    
    // Atualizar a cada 30 segundos
    this.metricsUpdateInterval = setInterval(() => {
      this.updateMetrics();
    }, 30000);
  }

  updateMetrics() {
    const metricCards = document.querySelectorAll('.metric-card');
    
    metricCards.forEach(card => {
      // Adicionar indicador de atualização
      card.classList.add('loading');
      
      setTimeout(() => {
        card.classList.remove('loading');
        // Aqui você pode implementar a lógica real de atualização
        this.simulateMetricUpdate(card);
      }, 1000);
    });
  }

  simulateMetricUpdate(card) {
    // Simular pequenas mudanças nas métricas
    const numbers = card.querySelectorAll('strong');
    numbers.forEach(num => {
      const current = num.textContent;
      if (current.includes('%')) {
        const value = parseInt(current);
        const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, ou 1
        const newValue = Math.max(0, Math.min(100, value + variation));
        num.textContent = newValue + '%';
      }
    });
  }

  // Atalhos de teclado
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K para busca rápida
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.showQuickSearch();
      }
      
      // Esc para fechar popups
      if (e.key === 'Escape') {
        this.hideLinkPreview();
        this.hideQuickSearch();
      }
      
      // Ctrl/Cmd + R para refresh das métricas
      if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        this.updateMetrics();
        this.showToast('Métricas atualizadas!', 'info');
      }
    });
  }

  // Sistema de busca rápida
  setupSearchFunctionality() {
    // Será implementado se necessário
  }

  showQuickSearch() {
    if (document.querySelector('.quick-search-modal')) return;

    const modal = document.createElement('div');
    modal.className = 'quick-search-modal';
    modal.innerHTML = `
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Buscar projetos, métricas..." autofocus>
        <div class="search-results"></div>
      </div>
    `;

    document.body.appendChild(modal);
    
    const input = modal.querySelector('.search-input');
    input.addEventListener('input', (e) => {
      this.performQuickSearch(e.target.value);
    });
  }

  hideQuickSearch() {
    const modal = document.querySelector('.quick-search-modal');
    if (modal) {
      modal.remove();
    }
  }

  performQuickSearch(query) {
    // Implementar busca nos projetos e métricas
    const results = document.querySelector('.search-results');
    if (!results) return;

    if (query.length < 2) {
      results.innerHTML = '';
      return;
    }

    // Mock de resultados de busca
    const mockResults = [
      { title: 'AERALYN', url: '/projetos/aeralyn/', type: 'Projeto' },
      { title: 'Vault Empresarial', url: '/projetos/vault-empresarial/', type: 'Projeto' },
      { title: 'KPIs Principais', url: '/dashboard-executivo/kpis-principais/', type: 'Dashboard' }
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    results.innerHTML = mockResults.map(item => `
      <div class="search-result-item" data-url="${item.url}">
        <div class="result-title">${item.title}</div>
        <div class="result-type">${item.type}</div>
      </div>
    `).join('');

    // Adicionar listeners para os resultados
    results.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        window.location.href = url;
      });
    });
  }

  // Sistema de refresh de dados
  setupDataRefresh() {
    // Detectar quando a aba volta ao foco
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.updateMetrics();
      }
    });
  }

  // Utilitários
  copyToClipboard(text) {
    navigator.clipboard.writeText(text).catch(() => {
      // Fallback para navegadores mais antigos
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 3000);
  }

  // Cleanup
  destroy() {
    if (this.metricsUpdateInterval) {
      clearInterval(this.metricsUpdateInterval);
    }
    this.clearPopupTimeout();
    this.hideLinkPreview();
  }
}

// Estilos CSS adicionais para funcionalidades JavaScript
const additionalStyles = `
<style>
/* Animações para popups */
@keyframes popupFadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Popup melhorado */
.link-preview-popup {
  border: 1px solid #e1e5e9;
  border-radius: 12px;
  padding: 0;
  max-width: 350px;
  min-width: 280px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  overflow: hidden;
}

.popup-header {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 15px;
  margin: 0;
  border-bottom: none;
}

.popup-title {
  font-weight: 600;
  font-size: 1.1em;
}

.popup-url {
  font-size: 0.8em;
  opacity: 0.8;
  margin-top: 5px;
}

.popup-content {
  padding: 15px;
  background: white;
}

.popup-footer {
  padding: 10px 15px;
  background: #f8f9fa;
  border-top: 1px solid #e1e5e9;
  display: flex;
  gap: 10px;
}

.popup-action {
  padding: 5px 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s ease;
}

.popup-action:hover {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.loading-indicator {
  text-align: center;
  padding: 20px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 10px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.preview-stats {
  margin-bottom: 15px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 5px;
  border-bottom: 1px solid #f0f0f0;
}

.stat-label {
  font-weight: 500;
  color: #666;
}

.stat-value {
  font-weight: 600;
}

.stat-value.success { color: #2ed573; }
.stat-value.ativo { color: #2ed573; }
.stat-value.planejamento { color: #ffa502; }

.preview-description {
  color: #666;
  font-size: 0.9em;
  line-height: 1.4;
}

/* Modal de busca rápida */
.quick-search-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;
  z-index: 2000;
}

.search-container {
  background: white;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

.search-input {
  width: 100%;
  padding: 15px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1.1em;
  outline: none;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  border-color: #667eea;
}

.search-results {
  margin-top: 15px;
  max-height: 300px;
  overflow-y: auto;
}

.search-result-item {
  padding: 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.search-result-item:hover {
  background: #f8f9fa;
}

.result-title {
  font-weight: 600;
  color: #2c3e50;
}

.result-type {
  font-size: 0.9em;
  color: #666;
  margin-top: 2px;
}

/* Toast notifications */
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 12px 20px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  z-index: 3000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.toast.show {
  transform: translateX(0);
}

.toast-success { background: #2ed573; }
.toast-info { background: #3742fa; }
.toast-warning { background: #ffa502; }
.toast-error { background: #ff4757; }
</style>
`;

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Adicionar estilos
  document.head.insertAdjacentHTML('beforeend', additionalStyles);
  
  // Inicializar dashboard
  window.dashboardCentral = new DashboardCentral();
});

// Cleanup quando a página for fechada
window.addEventListener('beforeunload', () => {
  if (window.dashboardCentral) {
    window.dashboardCentral.destroy();
  }
});
