@echo off
chcp 65001 >nul
title Conversor Revista MultiSócios para PDF

echo.
echo ========================================
echo   CONVERSOR REVISTA MULTISÓCIOS PDF
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

echo Escolha o método de conversão:
echo.
echo 1. Script Python com WeasyPrint (Recomendado)
echo 2. Script Python com wkhtmltopdf (Mais leve)
echo 3. Conversão manual via navegador
echo.

set /p escolha="Digite sua escolha (1-3): "

if "%escolha%"=="1" (
    echo.
    echo 🚀 Executando conversor WeasyPrint...
    python converter_pdf.py
) else if "%escolha%"=="2" (
    echo.
    echo 🚀 Executando conversor wkhtmltopdf...
    python converter_simples.py
) else if "%escolha%"=="3" (
    echo.
    echo 🌐 Abrindo no navegador para conversão manual...
    echo.
    echo INSTRUÇÕES:
    echo 1. Pressione Ctrl+P quando a página abrir
    echo 2. Escolha "Salvar como PDF"
    echo 3. Configure margens para 0
    echo 4. Clique em Salvar
    echo.
    start revista_multisocios_radar_edicao1.html
) else (
    echo ❌ Escolha inválida!
)

echo.
echo Pressione qualquer tecla para sair...
pause >nul
