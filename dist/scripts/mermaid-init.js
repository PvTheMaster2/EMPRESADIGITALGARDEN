// Inicialização do Mermaid.js para diagramas
import mermaid from 'mermaid';

// Configuração do Mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#7c3aed',
    primaryTextColor: '#dcddde',
    primaryBorderColor: '#8b5cf6',
    lineColor: '#6b7280',
    sectionBkColor: '#2d2d2d',
    altSectionBkColor: '#1e1e1e',
    gridColor: '#404040',
    secondaryColor: '#10b981',
    tertiaryColor: '#f59e0b'
  },
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true,
    curve: 'basis'
  },
  gantt: {
    useMaxWidth: true,
    leftPadding: 75,
    gridLineStartPadding: 35
  },
  pie: {
    useMaxWidth: true
  }
});

// Auto-renderizar diagramas quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  // Encontrar todos os elementos de código com linguagem mermaid
  const mermaidElements = document.querySelectorAll('code.language-mermaid, pre.mermaid, .mermaid');
  
  mermaidElements.forEach((element, index) => {
    // Criar um ID único para cada diagrama
    const diagramId = `mermaid-diagram-${index}`;
    element.id = diagramId;
    
    // Se for um elemento code dentro de pre, mover o conteúdo para o pre
    if (element.tagName === 'CODE' && element.parentElement.tagName === 'PRE') {
      const pre = element.parentElement;
      pre.innerHTML = element.innerHTML;
      pre.className = 'mermaid';
      pre.id = diagramId;
      element.remove();
    } else {
      element.classList.add('mermaid');
    }
  });
  
  // Renderizar todos os diagramas
  mermaid.init(undefined, '.mermaid');
  
  console.log('🎨 Mermaid diagrams initialized');
});

// Função global para renderizar novos diagramas dinamicamente
window.renderMermaidDiagram = function(element) {
  mermaid.init(undefined, element);
};

// Exportar para uso em outros scripts
export { mermaid };
