@echo off
chcp 65001 >nul
title Conversor Rápido - Revista MultiSócios PDF

echo.
echo ========================================
echo   CONVERSOR RÁPIDO - REVISTA PDF
echo ========================================
echo.

echo Verificando arquivos...
if not exist "revista_multisocios_radar_edicao1.html" (
    echo ❌ ERRO: Arquivo revista_multisocios_radar_edicao1.html não encontrado!
    echo.
    echo Certifique-se de que o arquivo está na mesma pasta deste script.
    pause
    exit /b 1
)

echo ✅ Arquivo HTML encontrado!
echo.

echo 🚀 ABRINDO NO NAVEGADOR PARA CONVERSÃO...
echo.

echo 📋 INSTRUÇÕES RÁPIDAS:
echo 1. Aguarde a página carregar no navegador
echo 2. Pressione Ctrl+P
echo 3. Escolha "Salvar como PDF"
echo 4. Configure margens para 0
echo 5. Clique em "Salvar"
echo 6. Escolha local e nome do arquivo
echo.

echo 💡 O PDF será salvo com qualidade profissional!
echo.

echo Pressione qualquer tecla para abrir no navegador...
pause >nul

echo 🌐 Abrindo revista no navegador...
start revista_multisocios_radar_edicao1.html

echo.
echo ✅ Revista aberta no navegador!
echo.
echo 📖 Agora siga as instruções acima para gerar o PDF.
echo.
echo Pressione qualquer tecla para sair...
pause >nul
