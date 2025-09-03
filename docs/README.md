---
created: 2025-09-02T21:20
updated: 2025-09-02T21:24
---
# 🌱 Digital Garden Empresarial - Multisocios

## 📁 **NOVA ESTRUTURA ORGANIZADA**

Este projeto foi completamente reorganizado para separar claramente conteúdo empresarial de código técnico.

### **🏢 Estrutura Principal**

```
DIGITAL-GARDEN-EMPRESA-GITHUB/
├── 📁 content/                    # ✅ CONTEÚDO EMPRESARIAL
│   ├── 0-Dashboard-Executivo/     # Dashboards executivos
│   ├── 1-Governanca/              # Compliance e políticas
│   ├── 2-Equipes/                 # Gestão de pessoas
│   ├── 3-Mercado/                 # Análise de mercado
│   ├── 4-Projetos/                # Projetos empresariais
│   ├── 5-Processos/               # Workflows e SOPs
│   ├── 6-Reunioes/                # Atas e reuniões
│   ├── 7-Conhecimento/            # Base de conhecimento
│   ├── 99-RESOURCES/              # Templates e recursos
│   └── 1000-REUNIOES/             # Reuniões históricas
├── 📁 src/                        # ✅ CÓDIGO FONTE TÉCNICO
│   ├── assets/images/             # Imagens do site
│   ├── components/_includes/      # Componentes Eleventy
│   ├── layouts/                   # Templates de layout
│   ├── scripts/                   # JavaScript
│   └── styles/                    # CSS
├── 📁 config/                     # ✅ CONFIGURAÇÕES
│   ├── _data/                     # Dados globais
│   ├── netlify.toml              # Configuração Netlify
│   ├── package.json              # Dependências Node.js
│   └── package-lock.json         # Lock de dependências
├── 📁 build/                      # ✅ ARQUIVOS GERADOS (Git Ignore)
│   ├── dist/                     # Site gerado
│   ├── node_modules/             # Dependências
│   └── _site_index/              # Índices automáticos
├── 📁 docs/                       # ✅ DOCUMENTAÇÃO
│   ├── README.md                 # Este arquivo
│   ├── SETUP.md                  # Guia de instalação
│   └── DEPLOYMENT.md             # Guia de deploy
├── 📄 .eleventy.js               # Configuração Eleventy (raiz)
├── 📄 .gitignore                 # Git ignore atualizado
└── 📄 index.md                   # Página inicial
```

## 🎯 **BENEFÍCIOS DA NOVA ESTRUTURA**

### ✅ **Organização Clara**
- **Conteúdo empresarial** isolado em `content/`
- **Código técnico** organizado em `src/`
- **Configurações** centralizadas em `config/`

### ✅ **Manutenção Simplificada**
- **Edição de conteúdo**: Apenas em `content/`
- **Desenvolvimento**: Apenas em `src/`
- **Deploy**: Apenas `build/dist/` vai para produção

### ✅ **GitHub Desktop Friendly**
- **Estrutura limpa** na raiz
- **Fácil navegação** por tipo de arquivo
- **Commits organizados** por área

### ✅ **Escalabilidade**
- **Fácil adição** de novos tipos de conteúdo
- **Separação clara** de responsabilidades
- **Backup seletivo** por área

## 🚀 **Como Usar**

### **Para Editar Conteúdo**
1. Navegue para `content/`
2. Edite os arquivos `.md` conforme necessário
3. Faça commit apenas das mudanças de conteúdo

### **Para Desenvolvimento**
1. Navegue para `src/`
2. Edite componentes, layouts, scripts ou estilos
3. Teste localmente com `npm run build`

### **Para Configuração**
1. Navegue para `config/`
2. Edite configurações de build ou dependências
3. Teste mudanças antes de fazer commit

## 📊 **Comandos Principais**

```bash
# Instalar dependências
npm install

# Build local
npm run build

# Servidor de desenvolvimento
npm run dev

# Limpeza
npm run clean
```

## 🔗 **Links Importantes**

- **Site Live**: https://digital-garden-empresa.netlify.app/
- **Repositório**: https://github.com/PvTheMaster2/EMPRESADIGITALGARDEN.git
- **Documentação**: `/docs/`

---

**Versão**: 2.1 - Estrutura Reorganizada  
**Última Atualização**: {{ "now" | date }}  
**Status**: ✅ **ESTRUTURA OTIMIZADA**  
**Owner**: Pedro Vitor
