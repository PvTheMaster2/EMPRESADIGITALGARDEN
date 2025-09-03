#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script ESPECÍFICO para Windows - Revista MultiSócios para PDF
Usa pdfkit + wkhtmltopdf (mais compatível com Windows)
Autor: AI Assistant
Data: 2025
"""

import os
import sys
import subprocess
import platform
import webbrowser

def verificar_python():
    """Verifica se Python está instalado"""
    try:
        version = sys.version_info
        print(f"✅ Python {version.major}.{version.minor}.{version.micro} encontrado!")
        return True
    except:
        print("❌ Python não encontrado!")
        return False

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

def baixar_wkhtmltopdf():
    """Fornece instruções para baixar wkhtmltopdf"""
    print("\n📦 DOWNLOAD DO WKHTMLTOPDF:")
    print("=" * 40)
    print("🌐 Acesse: https://wkhtmltopdf.org/downloads.html")
    print("📥 Baixe: Windows Installer (64-bit)")
    print("🔧 Execute o instalador como administrador")
    print("🔄 Reinicie o terminal após instalação")
    print("\n💡 Após instalar, execute este script novamente!")
    
    # Abre o navegador automaticamente
    try:
        webbrowser.open("https://wkhtmltopdf.org/downloads.html")
        print("🌐 Navegador aberto automaticamente!")
    except:
        print("📁 Abra manualmente: https://wkhtmltopdf.org/downloads.html")

def converter_com_pdfkit(arquivo_html, arquivo_pdf):
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
            'image-quality': 100
        }
        
        # Gera o PDF
        pdfkit.from_file(arquivo_html, arquivo_pdf, options=options)
        
        print(f"✅ PDF gerado com sucesso: {arquivo_pdf}")
        return True
        
    except Exception as e:
        print(f"❌ Erro ao converter: {str(e)}")
        return False

def converter_manual():
    """Abre o arquivo no navegador para conversão manual"""
    print("\n🌐 ABRINDO NO NAVEGADOR PARA CONVERSÃO MANUAL...")
    print("=" * 60)
    
    arquivo_html = "revista_multisocios_radar_edicao1.html"
    
    if os.path.exists(arquivo_html):
        try:
            webbrowser.open(f"file://{os.path.abspath(arquivo_html)}")
            print("✅ Arquivo aberto no navegador!")
            print("\n📋 INSTRUÇÕES PARA CONVERSÃO:")
            print("1. Pressione Ctrl+P quando a página carregar")
            print("2. Escolha 'Salvar como PDF'")
            print("3. Configure margens para 0")
            print("4. Clique em 'Salvar'")
            print("5. Escolha local e nome do arquivo")
            print("\n💡 O PDF será salvo com qualidade profissional!")
        except Exception as e:
            print(f"❌ Erro ao abrir no navegador: {str(e)}")
            print(f"📁 Abra manualmente: {arquivo_html}")
    else:
        print(f"❌ Arquivo {arquivo_html} não encontrado!")

def main():
    """Função principal"""
    print("🚀 CONVERSOR WINDOWS - REVISTA MULTISÓCIOS PARA PDF")
    print("=" * 60)
    
    # Verifica Python
    if not verificar_python():
        print("\n💡 Instale Python de: https://python.org")
        return
    
    # Verifica se o arquivo HTML existe
    arquivo_html = "revista_multisocios_radar_edicao1.html"
    if not os.path.exists(arquivo_html):
        print(f"❌ Arquivo {arquivo_html} não encontrado!")
        print("Certifique-se de que o arquivo está na mesma pasta deste script.")
        return
    
    print("✅ Arquivo HTML encontrado!")
    print("\nEscolha o método de conversão:")
    print("1. Conversão automática com pdfkit (Recomendado)")
    print("2. Conversão manual via navegador")
    print("3. Sair")
    
    while True:
        try:
            escolha = input("\nDigite sua escolha (1-3): ").strip()
            
            if escolha == "1":
                print("\n🚀 Tentando conversão automática...")
                
                # Verifica pdfkit
                if not verificar_pdfkit():
                    if not instalar_pdfkit():
                        print("❌ Não foi possível instalar pdfkit")
                        break
                
                # Tenta converter
                arquivo_pdf = "MultiSócios_Radar_Edição1.pdf"
                if converter_com_pdfkit(arquivo_html, arquivo_pdf):
                    print("\n🎉 CONVERSÃO AUTOMÁTICA CONCLUÍDA!")
                    print(f"📄 PDF salvo como: {arquivo_pdf}")
                    
                    # Abre o PDF automaticamente
                    try:
                        os.startfile(arquivo_pdf)
                        print("📖 PDF aberto automaticamente!")
                    except:
                        print(f"📁 Abra manualmente: {arquivo_pdf}")
                else:
                    print("\n❌ Conversão automática falhou!")
                    print("💡 Tente o método manual (opção 2)")
                break
                
            elif escolha == "2":
                converter_manual()
                break
                
            elif escolha == "3":
                print("👋 Até logo!")
                break
                
            else:
                print("❌ Escolha inválida! Digite 1, 2 ou 3.")
                
        except KeyboardInterrupt:
            print("\n\n👋 Operação cancelada pelo usuário!")
            break
        except Exception as e:
            print(f"\n❌ Erro inesperado: {str(e)}")
            break

if __name__ == "__main__":
    main()
