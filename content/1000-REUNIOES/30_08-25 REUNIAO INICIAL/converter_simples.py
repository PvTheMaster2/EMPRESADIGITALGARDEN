#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script SIMPLES para converter a Revista MultiSócios Radar de HTML para PDF
Usa wkhtmltopdf (mais leve e rápido)
Autor: AI Assistant
Data: 2025
"""

import os
import sys
import subprocess
import platform

def verificar_wkhtmltopdf():
    """Verifica se wkhtmltopdf está instalado"""
    try:
        result = subprocess.run(['wkhtmltopdf', '--version'], 
                              capture_output=True, text=True)
        if result.returncode == 0:
            print("✅ wkhtmltopdf encontrado!")
            return True
    except FileNotFoundError:
        pass
    
    print("❌ wkhtmltopdf não encontrado!")
    return False

def instalar_wkhtmltopdf():
    """Instruções para instalar wkhtmltopdf"""
    print("\n📦 INSTALAÇÃO DO WKHTMLTOPDF:")
    print("=" * 40)
    
    system = platform.system().lower()
    
    if system == "windows":
        print("🌐 Baixe de: https://wkhtmltopdf.org/downloads.html")
        print("📥 Escolha a versão Windows (64-bit)")
        print("🔧 Execute o instalador e reinicie o terminal")
    elif system == "darwin":  # macOS
        print("🍎 Execute no terminal:")
        print("brew install wkhtmltopdf")
    else:  # Linux
        print("🐧 Execute no terminal:")
        print("sudo apt-get install wkhtmltopdf")
        print("ou")
        print("sudo yum install wkhtmltopdf")
    
    print("\n💡 Após instalar, execute este script novamente!")
    return False

def converter_com_wkhtmltopdf(arquivo_html, arquivo_pdf):
    """Converte HTML para PDF usando wkhtmltopdf"""
    try:
        print(f"📄 Convertendo {arquivo_html} para PDF...")
        
        # Comando wkhtmltopdf com configurações otimizadas
        comando = [
            'wkhtmltopdf',
            '--page-size', 'A4',
            '--margin-top', '0',
            '--margin-right', '0',
            '--margin-bottom', '0',
            '--margin-left', '0',
            '--encoding', 'UTF-8',
            '--no-outline',
            '--enable-local-file-access',
            arquivo_html,
            arquivo_pdf
        ]
        
        # Executa a conversão
        result = subprocess.run(comando, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"✅ PDF gerado com sucesso: {arquivo_pdf}")
            return True
        else:
            print(f"❌ Erro na conversão: {result.stderr}")
            return False
            
    except Exception as e:
        print(f"❌ Erro ao converter: {str(e)}")
        return False

def main():
    """Função principal"""
    print("🚀 CONVERSOR SIMPLES - REVISTA MULTISÓCIOS PARA PDF")
    print("=" * 55)
    
    # Verifica se o arquivo HTML existe
    arquivo_html = "revista_multisocios_radar_edicao1.html"
    if not os.path.exists(arquivo_html):
        print(f"❌ Arquivo {arquivo_html} não encontrado!")
        print("Certifique-se de que o arquivo está na mesma pasta deste script.")
        return
    
    # Verifica wkhtmltopdf
    if not verificar_wkhtmltopdf():
        if not instalar_wkhtmltopdf():
            return
    
    # Nome do arquivo PDF de saída
    arquivo_pdf = "MultiSócios_Radar_Edição1.pdf"
    
    # Converte HTML para PDF
    if converter_com_wkhtmltopdf(arquivo_html, arquivo_pdf):
        print("\n🎉 CONVERSÃO CONCLUÍDA COM SUCESSO!")
        print(f"📄 PDF salvo como: {arquivo_pdf}")
        
        # Abre o PDF automaticamente
        try:
            if platform.system() == "Windows":
                os.startfile(arquivo_pdf)
            elif platform.system() == "Darwin":  # macOS
                subprocess.call(["open", arquivo_pdf])
            else:  # Linux
                subprocess.call(["xdg-open", arquivo_pdf])
            print("📖 PDF aberto automaticamente!")
        except:
            print(f"📁 Abra manualmente o arquivo: {arquivo_pdf}")
    else:
        print("❌ Falha na conversão!")

if __name__ == "__main__":
    main()
