#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script SIMPLES para converter HTML em PDF
Converte diretamente sem complicações
Autor: AI Assistant
Data: 2025
"""

import os
import sys
import subprocess

def instalar_pdfkit():
    """Instala pdfkit via pip"""
    try:
        print("🔧 Instalando pdfkit...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pdfkit"])
        print("✅ pdfkit instalado com sucesso!")
        return True
    except subprocess.CalledProcessError:
        print("❌ Erro ao instalar pdfkit")
        return False

def verificar_pdfkit():
    """Verifica se pdfkit está instalado"""
    try:
        import pdfkit
        print("✅ pdfkit encontrado!")
        return True
    except ImportError:
        print("❌ pdfkit não encontrado!")
        return False

def converter_html_para_pdf(arquivo_html, arquivo_pdf):
    """Converte HTML para PDF usando pdfkit"""
    try:
        import pdfkit
        
        print(f"📄 Convertendo {arquivo_html} para PDF...")
        
        # Configurações do PDF
        options = {
            'page-size': 'A4',
            'margin-top': '0mm',
            'margin-right': '0mm',
            'margin-bottom': '0mm',
            'margin-left': '0mm',
            'encoding': 'UTF-8',
            'no-outline': None,
            'enable-local-file-access': None,
            'print-media-type': None,
            'dpi': 300,
            'image-quality': 100,
            'javascript-delay': '1000',
            'no-stop-slow-scripts': None
        }
        
        # Gera o PDF
        pdfkit.from_file(arquivo_html, arquivo_pdf, options=options)
        
        print(f"✅ PDF gerado com sucesso: {arquivo_pdf}")
        return True
        
    except Exception as e:
        print(f"❌ Erro ao converter: {str(e)}")
        return False

def main():
    """Função principal"""
    print("🚀 CONVERSOR HTML → PDF SIMPLES")
    print("=" * 40)
    
    # Verifica se o arquivo HTML existe
    arquivo_html = "revista_multisocios_radar_edicao1.html"
    if not os.path.exists(arquivo_html):
        print(f"❌ Arquivo {arquivo_html} não encontrado!")
        return
    
    print("✅ Arquivo HTML encontrado!")
    
    # Verifica pdfkit
    if not verificar_pdfkit():
        print("📦 Instalando pdfkit...")
        if not instalar_pdfkit():
            print("❌ Não foi possível instalar pdfkit")
            return
    
    # Nome do arquivo PDF de saída
    arquivo_pdf = "MultiSócios_Radar_Edição1.pdf"
    
    # Converte HTML para PDF
    if converter_html_para_pdf(arquivo_html, arquivo_pdf):
        print("\n🎉 CONVERSÃO CONCLUÍDA!")
        print(f"📄 PDF salvo como: {arquivo_pdf}")
        
        # Abre o PDF automaticamente
        try:
            os.startfile(arquivo_pdf)
            print("📖 PDF aberto automaticamente!")
        except:
            print(f"📁 Abra manualmente: {arquivo_pdf}")
    else:
        print("❌ Falha na conversão!")

if __name__ == "__main__":
    main()
