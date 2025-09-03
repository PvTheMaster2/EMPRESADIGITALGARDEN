#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script que REALMENTE gera o PDF da revista MultiSócios
Usa Selenium + Chrome para conversão automática
Autor: AI Assistant
Data: 2025
"""

import os
import sys
import subprocess
import time
import webbrowser

def verificar_chrome():
    """Verifica se o Chrome está instalado"""
    chrome_paths = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        os.path.expanduser(r"~\AppData\Local\Google\Chrome\Application\chrome.exe")
    ]
    
    for path in chrome_paths:
        if os.path.exists(path):
            print("✅ Chrome encontrado!")
            return True
    
    print("❌ Chrome não encontrado!")
    return False

def instalar_selenium():
    """Instala selenium via pip"""
    try:
        print("🔧 Instalando selenium...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "selenium"])
        print("✅ Selenium instalado com sucesso!")
        return True
    except subprocess.CalledProcessError:
        print("❌ Erro ao instalar selenium")
        return False

def verificar_selenium():
    """Verifica se selenium está instalado"""
    try:
        import selenium
        print("✅ Selenium encontrado!")
        return True
    except ImportError:
        print("❌ Selenium não encontrado!")
        return False

def gerar_pdf_selenium(arquivo_html, arquivo_pdf):
    """Gera PDF usando Selenium + Chrome"""
    try:
        from selenium import webdriver
        from selenium.webdriver.chrome.options import Options
        from selenium.webdriver.common.by import By
        from selenium.webdriver.support.ui import WebDriverWait
        from selenium.webdriver.support import expected_conditions as EC
        
        print(f"📄 Gerando PDF de {arquivo_html}...")
        
        # Configurações do Chrome
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Executa sem interface gráfica
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--print-to-pdf=" + os.path.abspath(arquivo_pdf))
        chrome_options.add_argument("--print-to-pdf-no-header")
        
        # Inicia o Chrome
        driver = webdriver.Chrome(options=chrome_options)
        
        # Abre o arquivo HTML
        file_url = f"file:///{os.path.abspath(arquivo_html)}"
        driver.get(file_url)
        
        # Aguarda a página carregar
        time.sleep(3)
        
        # Executa o comando de impressão
        driver.execute_script("window.print();")
        
        # Aguarda um pouco para o PDF ser gerado
        time.sleep(5)
        
        # Fecha o Chrome
        driver.quit()
        
        # Verifica se o PDF foi criado
        if os.path.exists(arquivo_pdf):
            print(f"✅ PDF gerado com sucesso: {arquivo_pdf}")
            return True
        else:
            print("❌ PDF não foi gerado")
            return False
            
    except Exception as e:
        print(f"❌ Erro ao gerar PDF: {str(e)}")
        return False

def gerar_pdf_chrome_manual(arquivo_html, arquivo_pdf):
    """Gera PDF usando Chrome via linha de comando"""
    try:
        print(f"📄 Gerando PDF usando Chrome...")
        
        # Encontra o Chrome
        chrome_paths = [
            r"C:\Program Files\Google\Chrome\Application\chrome.exe",
            r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
            os.path.expanduser(r"~\AppData\Local\Google\Chrome\Application\chrome.exe")
        ]
        
        chrome_path = None
        for path in chrome_paths:
            if os.path.exists(path):
                chrome_path = path
                break
        
        if not chrome_path:
            print("❌ Chrome não encontrado!")
            return False
        
        # Comando para gerar PDF
        comando = [
            chrome_path,
            "--headless",
            "--disable-gpu",
            "--print-to-pdf=" + os.path.abspath(arquivo_pdf),
            "--print-to-pdf-no-header",
            arquivo_html
        ]
        
        # Executa o comando
        result = subprocess.run(comando, capture_output=True, text=True)
        
        if result.returncode == 0 and os.path.exists(arquivo_pdf):
            print(f"✅ PDF gerado com sucesso: {arquivo_pdf}")
            return True
        else:
            print(f"❌ Erro na geração: {result.stderr}")
            return False
            
    except Exception as e:
        print(f"❌ Erro ao gerar PDF: {str(e)}")
        return False

def main():
    """Função principal"""
    print("🚀 GERADOR DE PDF - REVISTA MULTISÓCIOS")
    print("=" * 50)
    
    # Verifica se o arquivo HTML existe
    arquivo_html = "revista_multisocios_radar_edicao1.html"
    if not os.path.exists(arquivo_html):
        print(f"❌ Arquivo {arquivo_html} não encontrado!")
        print("Certifique-se de que o arquivo está na mesma pasta deste script.")
        return
    
    print("✅ Arquivo HTML encontrado!")
    
    # Verifica Chrome
    if not verificar_chrome():
        print("\n💡 Instale o Google Chrome primeiro!")
        print("🌐 Baixe de: https://www.google.com/chrome/")
        return
    
    # Nome do arquivo PDF de saída
    arquivo_pdf = "MultiSócios_Radar_Edição1.pdf"
    
    print("\nEscolha o método de geração:")
    print("1. Selenium + Chrome (Recomendado)")
    print("2. Chrome direto (Mais rápido)")
    print("3. Sair")
    
    while True:
        try:
            escolha = input("\nDigite sua escolha (1-3): ").strip()
            
            if escolha == "1":
                print("\n🚀 Tentando com Selenium...")
                
                # Verifica selenium
                if not verificar_selenium():
                    if not instalar_selenium():
                        print("❌ Não foi possível instalar selenium")
                        break
                
                # Tenta gerar PDF
                if gerar_pdf_selenium(arquivo_html, arquivo_pdf):
                    print("\n🎉 PDF GERADO COM SUCESSO!")
                    print(f"📄 Arquivo: {arquivo_pdf}")
                    
                    # Abre o PDF automaticamente
                    try:
                        os.startfile(arquivo_pdf)
                        print("📖 PDF aberto automaticamente!")
                    except:
                        print(f"📁 Abra manualmente: {arquivo_pdf}")
                else:
                    print("\n❌ Falha na geração com Selenium!")
                    print("💡 Tentando método alternativo...")
                    
                    if gerar_pdf_chrome_manual(arquivo_html, arquivo_pdf):
                        print("\n🎉 PDF GERADO COM MÉTODO ALTERNATIVO!")
                        print(f"📄 Arquivo: {arquivo_pdf}")
                        
                        try:
                            os.startfile(arquivo_pdf)
                            print("📖 PDF aberto automaticamente!")
                        except:
                            print(f"📁 Abra manualmente: {arquivo_pdf}")
                    else:
                        print("❌ Ambos os métodos falharam!")
                break
                
            elif escolha == "2":
                print("\n🚀 Tentando com Chrome direto...")
                
                if gerar_pdf_chrome_manual(arquivo_html, arquivo_pdf):
                    print("\n🎉 PDF GERADO COM SUCESSO!")
                    print(f"📄 Arquivo: {arquivo_pdf}")
                    
                    try:
                        os.startfile(arquivo_pdf)
                        print("📖 PDF aberto automaticamente!")
                    except:
                        print(f"📁 Abra manualmente: {arquivo_pdf}")
                else:
                    print("\n❌ Falha na geração!")
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
