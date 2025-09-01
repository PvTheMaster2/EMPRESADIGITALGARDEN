---
created: 2025-09-01T02:09
updated: 2025-09-01T02:15
---
# 🚀 Guia de Deploy - Digital Garden Empresarial no Netlify

## 📋 Pré-requisitos

- Conta no [GitHub](https://github.com)
- Conta no [Netlify](https://netlify.com)
- Node.js 18+ instalado localmente
- Git instalado

## 🔧 Configuração Local

### 1. Instalar Dependências

```bash
cd DIGITAL-GARDEN-EMPRESA
npm install
```

### 2. Testar Localmente

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build
```

### 3. Verificar Estrutura

Certifique-se de que a estrutura está correta:

```
DIGITAL-GARDEN-EMPRESA/
├── src/site/
│   ├── _data/           # Dados dinâmicos
│   ├── _includes/       # Templates
│   ├── styles/          # CSS
│   ├── scripts/         # JavaScript
│   └── index.njk        # Página inicial
├── package.json
├── .eleventy.js
└── netlify.toml
```

## 🌐 Deploy no Netlify

### Método 1: Deploy via GitHub (Recomendado)

#### 1. Preparar Repositório

```bash
# Inicializar Git (se não existir)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit - Digital Garden Empresarial"

# Criar repositório no GitHub e conectar
git remote add origin https://github.com/seu-usuario/digital-garden-empresa.git
git branch -M main
git push -u origin main
```

#### 2. Conectar ao Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Escolha "GitHub"
4. Selecione seu repositório `digital-garden-empresa`
5. Configure as opções de build:

```
Build command: npm run build
Publish directory: dist
```

#### 3. Configurações Avançadas

No painel do Netlify, vá em **Site settings > Build & deploy**:

**Environment variables:**
```
NODE_VERSION=18
NPM_FLAGS=--legacy-peer-deps
```

**Build settings:**
```
Base directory: (deixe vazio)
Build command: npm run build
Publish directory: dist
```

### Método 2: Deploy Manual

#### 1. Build Local

```bash
npm run build
```

#### 2. Fazer Upload

1. Acesse [netlify.com](https://netlify.com)
2. Arraste a pasta `dist` para a área de deploy
3. Aguarde o upload e deploy

## ⚙️ Configurações do Netlify

### 1. Domínio Personalizado

1. Vá em **Site settings > Domain management**
2. Clique em "Add custom domain"
3. Configure seu domínio

### 2. HTTPS

- Automático no Netlify
- Certificados SSL gratuitos

### 3. Headers de Segurança

O arquivo `netlify.toml` já inclui headers de segurança:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### 4. Cache e Performance

```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/styles/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🔄 Deploy Automático

### 1. Webhooks

O Netlify detecta automaticamente mudanças no GitHub e faz redeploy.

### 2. Branch Deploy

Para testar antes de fazer deploy na produção:

1. Crie uma branch `staging`
2. Configure deploy automático para essa branch
3. Teste as mudanças
4. Merge para `main` quando estiver pronto

### 3. Preview Deploy

- Cada Pull Request gera um preview automático
- URL única para cada PR
- Teste antes de fazer merge

## 🐛 Troubleshooting

### Erro: Build Failed

**Possíveis causas:**
- Node.js versão incompatível
- Dependências faltando
- Erro de sintaxe no código

**Solução:**
```bash
# Verificar versão do Node
node --version

# Limpar cache
npm cache clean --force

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro: 404 Not Found

**Possíveis causas:**
- Pasta `dist` não foi gerada
- Configuração incorreta do publish directory

**Solução:**
```bash
# Verificar se o build foi gerado
ls -la dist/

# Verificar logs do build
npm run build
```

### Erro: Assets não carregam

**Possíveis causas:**
- Caminhos incorretos nos assets
- Problemas de cache

**Solução:**
1. Verificar caminhos no CSS/JS
2. Limpar cache do navegador
3. Verificar configuração de passthrough no `.eleventy.js`

## 📊 Monitoramento

### 1. Analytics

Configure Google Analytics no arquivo `src/site/_data/meta.js`:

```javascript
analytics: {
  googleAnalytics: 'G-XXXXXXXXXX', // Seu ID do GA4
  googleTagManager: 'GTM-XXXXXXX'  // Seu ID do GTM
}
```

### 2. Performance

- Use o Lighthouse no Chrome DevTools
- Monitore métricas no Netlify Analytics
- Configure alertas de downtime

### 3. Logs

- Acesse logs em **Site settings > Functions > Function logs**
- Configure notificações de erro

## 🔧 Manutenção

### 1. Atualizações

```bash
# Atualizar dependências
npm update

# Verificar vulnerabilidades
npm audit

# Corrigir vulnerabilidades
npm audit fix
```

### 2. Backup

- Use Git para versionamento
- Configure backup automático no GitHub
- Mantenha cópias locais importantes

### 3. Monitoramento

- Configure alertas de uptime
- Monitore performance regularmente
- Verifique logs de erro

## 🎯 Próximos Passos

1. **Configurar domínio personalizado**
2. **Implementar analytics**
3. **Configurar backup automático**
4. **Implementar CI/CD avançado**
5. **Configurar monitoramento**

## 📞 Suporte

- [Documentação do Netlify](https://docs.netlify.com)
- [Documentação do Eleventy](https://www.11ty.dev/docs)
- [GitHub Issues](https://github.com/seu-usuario/digital-garden-empresa/issues)

---

**🎉 Parabéns! Seu Digital Garden Empresarial está no ar!**

Acesse: `https://seu-site.netlify.app`
