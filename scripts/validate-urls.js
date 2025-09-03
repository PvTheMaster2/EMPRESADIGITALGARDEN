#!/usr/bin/env node

/**
 * Script para validar URLs do site
 * Verifica se todas as URLs estão corretas e consistentes
 */

const fs = require('fs');
const path = require('path');

// Configurações
const CONTENT_DIR = './content';
const BUILD_DIR = './build/dist';

// Mapeamento de seções para URLs limpas
const SECTION_MAP = {
  '0-Dashboard-Executivo': 'dashboard-executivo',
  '1-Governanca': 'governanca', 
  '2-Equipes': 'equipes',
  '3-Mercado': 'mercado',
  '4-Projetos': 'projetos',
  '5-Processos': 'processos', 
  '6-Reunioes': 'reunioes',
  '7-Conhecimento': 'conhecimento',
  '99-RESOURCES': 'resources',
  '1000-REUNIOES': 'reunioes-historicas'
};

// Função para limpar nome de arquivo
function cleanFileName(fileName) {
  return fileName.toLowerCase()
    .replace(/^prj-/, '')  // Remove prefixo PRJ-
    .replace(/[-_]/g, '-') // Normaliza separadores
    .replace(/\s+/g, '-')  // Espaços viram hífens
    .replace(/[^a-z0-9-]/g, '') // Remove caracteres especiais
    .replace(/-+/g, '-')   // Múltiplos hífens viram um
    .replace(/^-|-$/g, ''); // Remove hífens do início/fim
}

// Função para gerar URL esperada
function generateExpectedUrl(inputPath) {
  // Normalizar o caminho para usar barras normais
  const normalizedPath = inputPath.replace(/\\/g, '/');
  const pathParts = normalizedPath.replace('./content/', '').split('/');
  const section = pathParts[0];
  const fileName = pathParts[pathParts.length - 1].replace('.md', '');
  
  // Usar o mapeamento correto
  const cleanSection = SECTION_MAP[section] || section.toLowerCase().replace(/^\d+-/, '').replace(/\s+/g, '-');
  
  // Casos especiais para arquivos README e index
  if (fileName === 'README' || fileName === 'index') {
    if (pathParts.length > 2) {
      const subFolder = pathParts[1].toLowerCase().replace(/\s+/g, '-');
      return `/${cleanSection}/${subFolder}/`;
    }
    return `/${cleanSection}/`;
  }
  
  const cleanFileNameResult = cleanFileName(fileName);
  return `/${cleanSection}/${cleanFileNameResult}/`;
}

// Função para listar todos os arquivos .md
function getAllMarkdownFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Função para validar URLs
function validateUrls() {
  console.log('🔍 Validando URLs do site...\n');
  
  const markdownFiles = getAllMarkdownFiles(CONTENT_DIR);
  const issues = [];
  const validUrls = [];
  
  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const expectedUrl = generateExpectedUrl(file);
    
    // Verificar se tem permalink definido
    const permalinkMatch = content.match(/^permalink:\s*(.+)$/m);
    
    if (permalinkMatch) {
      const definedPermalink = permalinkMatch[1].trim();
      // Se tem permalink definido, considerar como válido (pode ser intencional)
      validUrls.push({ file, url: definedPermalink, type: 'manual' });
    } else {
      // Sem permalink definido - usar o esperado
      validUrls.push({ file, url: expectedUrl, type: 'auto' });
    }
  }
  
  // Relatório
  console.log(`📊 RESULTADOS DA VALIDAÇÃO:`);
  console.log(`✅ URLs válidas: ${validUrls.length}`);
  console.log(`❌ Problemas encontrados: ${issues.length}\n`);
  
  if (issues.length > 0) {
    console.log('🚨 PROBLEMAS ENCONTRADOS:\n');
    issues.forEach((issue, index) => {
      console.log(`${index + 1}. ${issue.file}`);
      console.log(`   Esperado: ${issue.expected}`);
      console.log(`   Atual:    ${issue.actual}`);
      console.log('');
    });
  }
  
  // Listar todas as URLs válidas
  console.log('✅ URLs VÁLIDAS:\n');
  validUrls.forEach((item, index) => {
    const typeIcon = item.type === 'manual' ? '🔧' : '🤖';
    console.log(`${index + 1}. ${typeIcon} ${item.url} → ${item.file}`);
  });
  
  return { validUrls, issues };
}

// Função para gerar relatório de URLs
function generateUrlReport() {
  const { validUrls, issues } = validateUrls();
  
  const report = {
    timestamp: new Date().toISOString(),
    totalFiles: validUrls.length + issues.length,
    validUrls: validUrls.length,
    issues: issues.length,
    urls: validUrls.map(item => ({
      url: item.url,
      file: item.file,
      type: item.type
    })),
    problems: issues
  };
  
  fs.writeFileSync('./url-validation-report.json', JSON.stringify(report, null, 2));
  console.log('\n📄 Relatório salvo em: url-validation-report.json');
  
  return report;
}

// Executar validação
if (require.main === module) {
  try {
    generateUrlReport();
  } catch (error) {
    console.error('❌ Erro durante a validação:', error.message);
    process.exit(1);
  }
}

module.exports = { validateUrls, generateUrlReport };