@echo off
chcp 65001 >nul
title GERAR PDF AGORA - Revista MultiSócios

echo.
echo ========================================
echo   GERADOR DE PDF AUTOMÁTICO
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

echo 🚀 INICIANDO GERAÇÃO AUTOMÁTICA DE PDF...
echo.

echo 📋 O script vai:
echo 1. Verificar se o Chrome está instalado
echo 2. Instalar dependências necessárias
echo 3. Gerar o PDF automaticamente
echo 4. Abrir o PDF quando estiver pronto
echo.

echo 💡 Este processo pode levar alguns minutos...
echo.

echo Pressione qualquer tecla para começar...
pause >nul

echo.
echo 🚀 Executando gerador de PDF...
python gerar_pdf_agora.py

echo.
echo Pressione qualquer tecla para sair...
pause >nul
