---
created: 2025-09-02T22:25
updated: 2025-09-02T22:25
---
# 🔍 INSTRUÇÕES PARA DEBUG NO NETLIFY

## **Problema Identificado:**
O site funciona perfeitamente localmente, mas retorna 404 no Netlify.

## **Verificações Necessárias no Painel do Netlify:**

### 1. **Publish Directory**
- Acesse: Site settings → Build & deploy → Build settings
- Verifique se o **Publish directory** está configurado como: `build/dist`
- Se não estiver, altere para `build/dist` e salve

### 2. **Build Command**
- Verifique se o **Build command** está como: `npm install && npm run build`
- Se não estiver, altere e salve

### 3. **Deploy Manual**
- Vá para: Deploys
- Clique em "Trigger deploy" → "Deploy site"
- Aguarde o deploy completar

### 4. **Verificar Logs de Deploy**
- Durante o deploy, clique em "View deploy log"
- Procure por erros ou avisos
- Verifique se o comando `npm run build` executou com sucesso

### 5. **Testar URLs**
Após o deploy, teste estas URLs:
- `https://empresadigitalgarden.netlify.app/` (deve mostrar a página principal)
- `https://empresadigitalgarden.netlify.app/test-simple.html` (deve mostrar página de teste)
- `https://empresadigitalgarden.netlify.app/debug-test.html` (deve mostrar página de debug)

### 6. **Limpar Cache (se necessário)**
- Se ainda não funcionar, vá para: Site settings → Build & deploy → Post processing
- Clique em "Clear cache and retry deploy"

## **Arquivos de Teste Criados:**
- `test-simple.html` - Página de teste básica
- `debug-test.html` - Página de debug completa
- `_redirects` - Arquivo de redirects para URLs limpas

## **Se Ainda Não Funcionar:**
1. Verifique se o repositório está conectado corretamente
2. Verifique se o branch correto está sendo usado
3. Tente fazer um commit vazio para forçar novo deploy:
   ```bash
   git commit --allow-empty -m "Force deploy"
   git push
   ```

## **Configuração Correta Esperada:**
```
Base directory: (vazio)
Build command: npm install && npm run build
Publish directory: build/dist
```

## **Status Atual:**
✅ Build local funcionando
✅ Arquivos gerados corretamente
✅ Configuração netlify.toml correta
❌ Deploy no Netlify com problema

**Próximo passo:** Verificar configurações no painel do Netlify conforme instruções acima.
