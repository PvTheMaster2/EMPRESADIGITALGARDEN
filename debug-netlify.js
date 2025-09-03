#!/usr/bin/env node

// Script de debug para Netlify
console.log('🔍 DEBUG NETLIFY - Iniciando...');

const fs = require('fs');
const path = require('path');

// Verificar se o diretório build/dist existe
const buildDir = path.join(__dirname, 'build', 'dist');
console.log('📁 Verificando diretório build/dist:', buildDir);

if (fs.existsSync(buildDir)) {
    console.log('✅ Diretório build/dist existe');
    
    // Listar arquivos no diretório
    const files = fs.readdirSync(buildDir);
    console.log('📄 Arquivos encontrados:', files.length);
    
    // Verificar se index.html existe
    const indexPath = path.join(buildDir, 'index.html');
    if (fs.existsSync(indexPath)) {
        console.log('✅ index.html existe');
        const stats = fs.statSync(indexPath);
        console.log('📊 Tamanho do index.html:', stats.size, 'bytes');
    } else {
        console.log('❌ index.html NÃO existe');
    }
    
    // Verificar se _redirects existe
    const redirectsPath = path.join(buildDir, '_redirects');
    if (fs.existsSync(redirectsPath)) {
        console.log('✅ _redirects existe');
        const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
        console.log('📄 Conteúdo do _redirects:');
        console.log(redirectsContent);
    } else {
        console.log('❌ _redirects NÃO existe');
    }
    
} else {
    console.log('❌ Diretório build/dist NÃO existe');
}

// Verificar netlify.toml
const netlifyTomlPath = path.join(__dirname, 'netlify.toml');
if (fs.existsSync(netlifyTomlPath)) {
    console.log('✅ netlify.toml existe');
    const tomlContent = fs.readFileSync(netlifyTomlPath, 'utf8');
    console.log('📄 Conteúdo do netlify.toml:');
    console.log(tomlContent);
} else {
    console.log('❌ netlify.toml NÃO existe');
}

console.log('🔍 DEBUG NETLIFY - Concluído!');
