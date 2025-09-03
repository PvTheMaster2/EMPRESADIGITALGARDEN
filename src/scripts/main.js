// Main JavaScript for Digital Garden Empresarial

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Mobile menu toggle (if needed)
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #667eea;
    color: white;
    border: none;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 1000;
  `;
  
  document.body.appendChild(backToTopBtn);
  
  // Show/hide back to top button
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.opacity = '1';
    } else {
      backToTopBtn.style.opacity = '0';
    }
  });
  
  // Back to top functionality
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Table of contents generator for markdown pages
  generateTableOfContents();
  
  // Initialize copy code functionality
  initCodeCopy();
  
  // Initialize external link indicators
  initExternalLinks();
});

// Generate table of contents for markdown pages
function generateTableOfContents() {
  const content = document.querySelector('.markdown-content');
  const tocContainer = document.querySelector('.toc');
  
  if (!content || !tocContainer) return;
  
  const headings = content.querySelectorAll('h1, h2, h3, h4, h5, h6');
  if (headings.length === 0) return;
  
  let tocHTML = '<nav class="table-of-contents"><h3>📋 Índice</h3><ul>';
  
  headings.forEach((heading, index) => {
    const id = heading.id || `heading-${index}`;
    heading.id = id;
    
    const level = parseInt(heading.tagName.substring(1));
    const indent = '  '.repeat(level - 1);
    
    tocHTML += `${indent}<li class="toc-level-${level}">
      <a href="#${id}">${heading.textContent}</a>
    </li>`;
  });
  
  tocHTML += '</ul></nav>';
  tocContainer.innerHTML = tocHTML;
}

// Initialize copy code functionality
function initCodeCopy() {
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.innerHTML = '📋 Copiar';
    copyBtn.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      background: #2c3e50;
      color: white;
      border: none;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 12px;
      cursor: pointer;
    `;
    
    const pre = codeBlock.parentElement;
    pre.style.position = 'relative';
    pre.appendChild(copyBtn);
    
    copyBtn.addEventListener('click', async function() {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        copyBtn.innerHTML = '✅ Copiado';
        setTimeout(() => {
          copyBtn.innerHTML = '📋 Copiar';
        }, 2000);
      } catch (err) {
        console.error('Erro ao copiar código:', err);
      }
    });
  });
}

// Initialize external link indicators
function initExternalLinks() {
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  
  externalLinks.forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.classList.add('external-link');
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add external icon
      if (!link.querySelector('.external-icon')) {
        const icon = document.createElement('span');
        icon.className = 'external-icon';
        icon.innerHTML = ' 🔗';
        link.appendChild(icon);
      }
    }
  });
}

// Utility functions
window.utils = {
  // Format date
  formatDate: function(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  },
  
  // Slugify string
  slugify: function(str) {
    return str.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  },
  
  // Truncate text
  truncate: function(str, length = 100) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
  }
};
