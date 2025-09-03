#!/usr/bin/env node

/**
 * Script para converter funcionalidades dinâmicas (Dataview) em dados estáticos
 * Gera tabelas/listas HTML a partir do frontmatter dos arquivos .md
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');

// Configurações
const CONTENT_DIR = './content';
const INCLUDES_DIR = './src/components/_includes/partials';

// Garantir que o diretório de partials existe
if (!fs.existsSync(INCLUDES_DIR)) {
  fs.mkdirSync(INCLUDES_DIR, { recursive: true });
}

/**
 * Extrai frontmatter de um arquivo Markdown
 */
function extractFrontMatter(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/^---\s*([\s\S]*?)\s*---/);
  
  if (match && match[1]) {
    try {
      const frontMatter = yaml.load(match[1]);
      return {
        ...frontMatter,
        _filePath: filePath,
        _fileName: path.basename(filePath, '.md'),
        _section: path.dirname(filePath).replace(CONTENT_DIR + '/', '').split('/')[0]
      };
    } catch (e) {
      console.error(`Erro ao parsear frontmatter em ${filePath}:`, e);
      return {};
    }
  }
  return {};
}

/**
 * Coleta todos os dados dos projetos
 */
function collectProjectData() {
  const projectFiles = glob.sync(`${CONTENT_DIR}/4-Projetos/**/*.md`);
  const projects = [];

  projectFiles.forEach(file => {
    if (file.includes('README') || file.includes('TEMPLATE')) return;
    
    const data = extractFrontMatter(file);
    if (data.type === 'project' || data.type === 'pilot') {
      projects.push(data);
    }
  });

  return projects.sort((a, b) => {
    // Ordenar por prioridade e budget
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const aPriority = priorityOrder[a.priority] || 0;
    const bPriority = priorityOrder[b.priority] || 0;
    
    if (aPriority !== bPriority) return bPriority - aPriority;
    return (b.budget || 0) - (a.budget || 0);
  });
}

/**
 * Coleta dados das reuniões
 */
function collectMeetingData() {
  const meetingFiles = glob.sync(`${CONTENT_DIR}/6-Reunioes/**/*.md`);
  const meetings = [];

  meetingFiles.forEach(file => {
    if (file.includes('README')) return;
    
    const data = extractFrontMatter(file);
    if (data.created || data.date) {
      meetings.push(data);
    }
  });

  return meetings.sort((a, b) => {
    const aDate = new Date(a.created || a.date);
    const bDate = new Date(b.created || b.date);
    return bDate - aDate;
  });
}

/**
 * Coleta dados da equipe
 */
function collectTeamData() {
  const teamFiles = glob.sync(`${CONTENT_DIR}/2-Equipes/*.md`);
  const team = [];

  teamFiles.forEach(file => {
    if (file.includes('README')) return;
    
    const data = extractFrontMatter(file);
    if (data.type === 'person' && data.status === 'active') {
      team.push(data);
    }
  });

  return team.sort((a, b) => {
    // Ordenar por departamento e depois por nome
    if (a.department !== b.department) {
      return a.department.localeCompare(b.department);
    }
    return a.name.localeCompare(b.name);
  });
}

/**
 * Gera tabela HTML de projetos por status
 */
function generateProjectsByStatusTable(projects) {
  const statusGroups = {};
  
  projects.forEach(project => {
    const status = project.status || 'unknown';
    if (!statusGroups[status]) statusGroups[status] = [];
    statusGroups[status].push(project);
  });

  let html = `<div class="projects-by-status">
<table class="data-table">
<thead>
  <tr>
    <th>Status</th>
    <th>Projeto</th>
    <th>Owner</th>
    <th>Budget</th>
    <th>Esforço</th>
    <th>ROI</th>
  </tr>
</thead>
<tbody>`;

  Object.entries(statusGroups).forEach(([status, projectList]) => {
    projectList.forEach((project, index) => {
      const statusIcon = {
        'idea': '💡',
        'planning': '📋', 
        'development': '🚧',
        'testing': '🧪',
        'active': '🚀',
        'completed': '✅'
      }[status] || '❓';

      const roi = project.budget ? Math.round(project.budget * 3.47) : 0;
      
      html += `
  <tr>
    <td>${statusIcon} ${status}</td>
    <td><a href="/projetos/${project._fileName.toLowerCase().replace(/^prj-/, '').replace(/[-_]/g, '-')}/">${project.title || project._fileName}</a></td>
    <td>${project.owner || 'N/A'}</td>
    <td>R$ ${project.budget || 0}</td>
    <td>${project.effort_weeks || 0}w</td>
    <td>R$ ${roi}</td>
  </tr>`;
    });
  });

  html += `
</tbody>
</table>
</div>`;

  return html;
}

/**
 * Gera métricas consolidadas
 */
function generateMetricsSummary(projects) {
  const totalBudget = projects.reduce((sum, p) => sum + (p.budget || 0), 0);
  const totalROI = Math.round(totalBudget * 3.47);
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const avgEffort = projects.reduce((sum, p) => sum + (p.effort_weeks || 0), 0) / projects.length;

  return `<div class="metrics-summary">
<div class="metric-card">
  <h3>💰 Budget Total</h3>
  <p class="metric-value">R$ ${totalBudget.toLocaleString()}</p>
</div>
<div class="metric-card">
  <h3>📈 ROI Projetado</h3>
  <p class="metric-value">R$ ${totalROI.toLocaleString()}</p>
</div>
<div class="metric-card">
  <h3>🚀 Projetos Ativos</h3>
  <p class="metric-value">${activeProjects}</p>
</div>
<div class="metric-card">
  <h3>⏱️ Esforço Médio</h3>
  <p class="metric-value">${Math.round(avgEffort)}w</p>
</div>
</div>`;
}

/**
 * Gera lista de reuniões recentes
 */
function generateRecentMeetings(meetings) {
  const recent = meetings.slice(0, 5);
  
  let html = `<div class="recent-meetings">
<h3>📅 Reuniões Recentes</h3>
<ul class="meeting-list">`;

  recent.forEach(meeting => {
    const date = new Date(meeting.created || meeting.date).toLocaleDateString('pt-BR');
    const url = `/reunioes/${meeting._fileName.toLowerCase().replace(/\s+/g, '-')}/`;
    
    html += `
  <li class="meeting-item">
    <a href="${url}">${meeting.title || meeting._fileName}</a>
    <span class="meeting-date">${date}</span>
  </li>`;
  });

  html += `
</ul>
</div>`;

  return html;
}

/**
 * Gera tabela HTML da equipe
 */
function generateTeamTable(team) {
  let html = `<div class="team-overview">
<table class="data-table">
<thead>
  <tr>
    <th>Nome</th>
    <th>Cargo</th>
    <th>Departamento</th>
    <th>Disponível</th>
    <th>Alocado</th>
    <th>Utilização</th>
  </tr>
</thead>
<tbody>`;

  team.forEach(person => {
    const utilization = person.availability_weekly ? 
      Math.round((person.allocated_hours / person.availability_weekly) * 100) : 0;
    const freeHours = (person.availability_weekly || 0) - (person.allocated_hours || 0);
    
    html += `
  <tr>
    <td><strong>${person.name}</strong></td>
    <td>${person.role}</td>
    <td>${person.department}</td>
    <td>${person.availability_weekly || 0}h/sem</td>
    <td>${person.allocated_hours || 0}h</td>
    <td>${utilization}%</td>
  </tr>`;
  });

  html += `
</tbody>
</table>
</div>`;

  return html;
}

/**
 * Gera métricas da equipe
 */
function generateTeamMetrics(team) {
  const totalCapacity = team.reduce((sum, p) => sum + (p.availability_weekly || 0), 0);
  const totalAllocated = team.reduce((sum, p) => sum + (p.allocated_hours || 0), 0);
  const avgUtilization = totalCapacity > 0 ? Math.round((totalAllocated / totalCapacity) * 100) : 0;
  const totalPeople = team.length;

  return `<div class="team-metrics">
<div class="metric-card">
  <h3>👥 Total de Pessoas</h3>
  <p class="metric-value">${totalPeople}</p>
</div>
<div class="metric-card">
  <h3>⏰ Capacidade Total</h3>
  <p class="metric-value">${totalCapacity}h/sem</p>
</div>
<div class="metric-card">
  <h3>📊 Utilização Média</h3>
  <p class="metric-value">${avgUtilization}%</p>
</div>
<div class="metric-card">
  <h3>🆓 Horas Livres</h3>
  <p class="metric-value">${totalCapacity - totalAllocated}h</p>
</div>
</div>`;
}

/**
 * Função principal
 */
function generateStaticData() {
  console.log('🔄 Gerando dados estáticos...');

  try {
    // Coletar dados
    const projects = collectProjectData();
    const meetings = collectMeetingData();
    const team = collectTeamData();

    console.log(`📊 Encontrados ${projects.length} projetos, ${meetings.length} reuniões e ${team.length} pessoas`);

    // Gerar partials
    const projectsTable = generateProjectsByStatusTable(projects);
    const metricsSummary = generateMetricsSummary(projects);
    const recentMeetings = generateRecentMeetings(meetings);
    const teamTable = generateTeamTable(team);
    const teamMetrics = generateTeamMetrics(team);

    // Salvar arquivos
    fs.writeFileSync(path.join(INCLUDES_DIR, 'projects-table.njk'), projectsTable);
    fs.writeFileSync(path.join(INCLUDES_DIR, 'metrics-summary.njk'), metricsSummary);
    fs.writeFileSync(path.join(INCLUDES_DIR, 'recent-meetings.njk'), recentMeetings);
    fs.writeFileSync(path.join(INCLUDES_DIR, 'team-table.njk'), teamTable);
    fs.writeFileSync(path.join(INCLUDES_DIR, 'team-metrics.njk'), teamMetrics);

    // Calcular métricas
    const totalBudget = projects.reduce((sum, p) => sum + (p.budget || 0), 0);
    const totalCapacity = team.reduce((sum, p) => sum + (p.availability_weekly || 0), 0);
    const totalAllocated = team.reduce((sum, p) => sum + (p.allocated_hours || 0), 0);
    
    // Gerar dados JSON para uso em JavaScript
    const dataForJS = {
      projects: projects.map(p => ({
        title: p.title,
        status: p.status,
        budget: p.budget,
        owner: p.owner,
        url: `/projetos/${p._fileName.toLowerCase().replace(/^prj-/, '').replace(/[-_]/g, '-')}/`
      })),
      team: team.map(p => ({
        name: p.name,
        role: p.role,
        department: p.department,
        availability_weekly: p.availability_weekly,
        allocated_hours: p.allocated_hours,
        utilization: p.availability_weekly ? Math.round((p.allocated_hours / p.availability_weekly) * 100) : 0
      })),
      metrics: {
        totalBudget,
        totalROI: Math.round(totalBudget * 3.47),
        activeProjects: projects.filter(p => p.status === 'active').length,
        totalProjects: projects.length,
        totalCapacity,
        totalAllocated,
        avgUtilization: totalCapacity > 0 ? Math.round((totalAllocated / totalCapacity) * 100) : 0,
        totalPeople: team.length
      },
      lastUpdated: new Date().toISOString()
    };

    fs.writeFileSync(path.join(INCLUDES_DIR, 'dashboard-data.json'), JSON.stringify(dataForJS, null, 2));

    // Gerar arquivo de métricas para Nunjucks
    const metricsContent = `{# Dados dinâmicos para dashboards - gerados automaticamente pelo script generate-static-data.js #}

{% set dashboardData = ${JSON.stringify(dataForJS, null, 2)} %}

{% set metrics = dashboardData.metrics %}
{% set team = dashboardData.team %}
{% set projects = dashboardData.projects %}`;

    fs.writeFileSync(path.join(INCLUDES_DIR, 'dashboard-metrics.njk'), metricsContent);

    console.log('✅ Dados estáticos gerados com sucesso!');
    console.log(`📁 Arquivos salvos em: ${INCLUDES_DIR}`);

  } catch (error) {
    console.error('❌ Erro ao gerar dados estáticos:', error);
    process.exit(1);
  }
}

// Executar se chamado diretamente
if (require.main === module) {
  generateStaticData();
}

module.exports = { generateStaticData };
