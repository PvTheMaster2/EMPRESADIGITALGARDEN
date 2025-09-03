#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CONVERSOR FINAL - HTML para PDF
Usa weasyprint (mais compatível com Windows)
Autor: AI Assistant
Data: 2025
"""

import os
import sys
import subprocess

def instalar_weasyprint():
    """Instala weasyprint via pip"""
    try:
        print("🔧 Instalando weasyprint...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "weasyprint"])
        print("✅ weasyprint instalado com sucesso!")
        return True
    except subprocess.CalledProcessError:
        print("❌ Erro ao instalar weasyprint")
        return False

def verificar_weasyprint():
    """Verifica se weasyprint está instalado"""
    try:
        import weasyprint
        print("✅ weasyprint encontrado!")
        return True
    except ImportError:
        print("❌ weasyprint não encontrado!")
        return False

def converter_com_weasyprint(arquivo_html, arquivo_pdf):
    """Converte HTML para PDF usando weasyprint"""
    try:
        from weasyprint import HTML, CSS
        
        print(f"📄 Convertendo {arquivo_html} para PDF...")
        
        # Carrega o arquivo HTML
        html = HTML(filename=arquivo_html)
        
        # CSS para otimizar o PDF
        css = CSS(string='''
            @page {
                size: A4;
                margin: 0;
            }
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background: white;
            }
            .page {
                width: 210mm;
                min-height: 297mm;
                padding: 20mm;
                box-sizing: border-box;
                page-break-after: always;
                background: white;
            }
            .page:last-child {
                page-break-after: avoid;
            }
            .page-header {
                width: 100%;
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 3px solid #2563eb;
            }
            .page-title {
                font-size: 2.5rem;
                font-weight: 800;
                color: #1e40af;
                margin-bottom: 10px;
            }
            .page-subtitle {
                font-size: 1.5rem;
                font-weight: 600;
                color: #3b82f6;
                margin-bottom: 15px;
            }
            .page-number {
                font-size: 1rem;
                color: #6b7280;
                font-weight: 500;
            }
            .cover-bg {
                background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
                color: white;
            }
            .section-bg {
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            }
            .project-card {
                background: white;
                border-radius: 12px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                border-left: 4px solid #2563eb;
            }
            .value-box {
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
            }
            .timeline-item {
                position: relative;
                padding-left: 2rem;
            }
            .timeline-item::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0.5rem;
                width: 12px;
                height: 12px;
                background: #2563eb;
                border-radius: 50%;
            }
            .timeline-item::after {
                content: '';
                position: absolute;
                left: 5px;
                top: 1.5rem;
                width: 2px;
                height: calc(100% - 1rem);
                background: #e5e7eb;
            }
            .timeline-item:last-child::after {
                display: none;
            }
            .tech-icon {
                width: 48px;
                height: 48px;
                background: linear-gradient(135deg, #2563eb, #4f46e5);
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 24px;
            }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
            }
            .stat-card {
                background: white;
                border-radius: 8px;
                padding: 1rem;
                text-align: center;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1);
            }
            .quote-box {
                background: linear-gradient(135deg, #fef3c7, #fde68a);
                border-left: 4px solid #f59e0b;
                border-radius: 8px;
                padding: 1.5rem;
                font-style: italic;
            }
            .team-photo {
                width: 100%;
                height: 200px;
                object-fit: cover;
                border-radius: 12px;
                box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1);
            }
            .logo-placeholder {
                width: 80px;
                height: 80px;
                background: linear-gradient(135deg, #2563eb, #4f46e5);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 32px;
                font-weight: bold;
            }
            .content-container {
                max-width: 160mm;
                width: 100%;
            }
            .pdf-break {
                break-before: page;
                page-break-before: always;
            }
            /* Estilos para impressão */
            @media print {
                .page {
                    page-break-after: always;
                    page-break-inside: avoid;
                }
                .page:last-child {
                    page-break-after: avoid;
                }
                .page-header {
                    page-break-after: avoid;
                    page-break-inside: avoid;
                }
            }
        ''')
        
        # Gera o PDF
        html.write_pdf(arquivo_pdf, stylesheets=[css])
        
        print(f"✅ PDF gerado com sucesso: {arquivo_pdf}")
        return True
        
    except Exception as e:
        print(f"❌ Erro ao converter: {str(e)}")
        return False

def main():
    """Função principal"""
    print("🚀 CONVERSOR FINAL - HTML → PDF")
    print("=" * 40)
    
    # Verifica se o arquivo HTML existe
    arquivo_html = "revista_multisocios_radar_edicao1.html"
    if not os.path.exists(arquivo_html):
        print(f"❌ Arquivo {arquivo_html} não encontrado!")
        return
    
    print("✅ Arquivo HTML encontrado!")
    
    # Verifica weasyprint
    if not verificar_weasyprint():
        print("📦 Instalando weasyprint...")
        if not instalar_weasyprint():
            print("❌ Não foi possível instalar weasyprint")
            return
    
    # Nome do arquivo PDF de saída
    arquivo_pdf = "MultiSócios_Radar_Edição1.pdf"
    
    # Converte HTML para PDF
    if converter_com_weasyprint(arquivo_html, arquivo_pdf):
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
