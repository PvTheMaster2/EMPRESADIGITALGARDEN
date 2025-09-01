const fs = require('fs');
const path = require('path');

// Configurações de diretórios
const BASE_PATH = 'src/site/_includes/components';
const STYLE_PATH = 'src/site/styles';
const NAMESPACES = ['dashboard', 'governanca', 'equipes', 'mercado', 'projetos', 'processos'];
const SLOTS = ['head', 'header', 'beforeContent', 'afterContent', 'footer'];
const FILE_TREE_NAMESPACE = 'filetree';
const FILE_TREE_SLOTS = ['beforeTitle', 'afterTitle'];
const SIDEBAR_NAMESPACE = 'sidebar';
const SIDEBAR_SLOTS = ['top', 'bottom'];
const STYLES_NAMESPACE = 'styles';

// Função para gerar caminhos de componentes
const generateComponentPaths = async (namespace, slots) => {
  const data = {};
  for (let index = 0; index < slots.length; index++) {
    const slot = slots[index];
    try {
      const componentPath = path.join(BASE_PATH, namespace, slot);
      if (fs.existsSync(componentPath)) {
        const files = fs.readdirSync(componentPath)
          .filter(file => file.endsWith('.njk'))
          .map(file => `components/${namespace}/${slot}/${file}`);
        data[slot] = files.sort();
      } else {
        data[slot] = [];
      }
    } catch (error) {
      console.log(`Erro ao processar ${namespace}/${slot}:`, error.message);
      data[slot] = [];
    }
  }
  return data;
};

// Função para gerar caminhos de estilos
const generateStylesPaths = async () => {
  try {
    if (fs.existsSync(STYLE_PATH)) {
      const files = fs.readdirSync(STYLE_PATH)
        .filter(file => file.endsWith('.css'))
        .map(file => `/styles/${file}`);
      return files.sort();
    }
    return [];
  } catch (error) {
    console.log('Erro ao processar estilos:', error.message);
    return [];
  }
};

// Função para carregar dados de projetos dinamicamente
const loadProjectsData = () => {
  try {
    const projectsPath = path.join(__dirname, '..', '..', '..', '4-Projetos');
    const projects = {};
    
    if (fs.existsSync(projectsPath)) {
      const categories = ['Ativos', 'Em-Desenvolvimento', 'Pilotos', 'Concluidos'];
      
      categories.forEach(category => {
        const categoryPath = path.join(projectsPath, category);
        if (fs.existsSync(categoryPath)) {
          const files = fs.readdirSync(categoryPath)
            .filter(file => file.endsWith('.md'))
            .map(file => {
              const filePath = path.join(categoryPath, file);
              const content = fs.readFileSync(filePath, 'utf8');
              const frontMatter = content.match(/^---\n([\s\S]*?)\n---/);
              
              if (frontMatter) {
                const metadata = {};
                frontMatter[1].split('\n').forEach(line => {
                  const [key, ...valueParts] = line.split(':');
                  if (key && valueParts.length > 0) {
                    metadata[key.trim()] = valueParts.join(':').trim();
                  }
                });
                
                return {
                  id: file.replace('.md', ''),
                  title: metadata.title || file.replace('.md', ''),
                  description: metadata.description || '',
                  status: category.toLowerCase().replace('-', '_'),
                  category: category,
                  date: metadata.date || new Date().toISOString(),
                  tags: metadata.tags ? metadata.tags.split(',').map(tag => tag.trim()) : [],
                  url: `/4-Projetos/${category}/${file.replace('.md', '')}/`
                };
              }
              
              return {
                id: file.replace('.md', ''),
                title: file.replace('.md', ''),
                description: '',
                status: category.toLowerCase().replace('-', '_'),
                category: category,
                date: new Date().toISOString(),
                tags: [],
                url: `/4-Projetos/${category}/${file.replace('.md', '')}/`
              };
            });
          
          projects[category.toLowerCase().replace('-', '_')] = files;
        }
      });
    }
    
    return projects;
  } catch (error) {
    console.log('Erro ao carregar dados de projetos:', error.message);
    return {};
  }
};

// Função para carregar dados de equipes dinamicamente
const loadTeamsData = () => {
  try {
    const teamsPath = path.join(__dirname, '..', '..', '..', '2-Equipes');
    const teams = {};
    
    if (fs.existsSync(teamsPath)) {
      const teamDirs = fs.readdirSync(teamsPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      teamDirs.forEach(teamDir => {
        const teamPath = path.join(teamsPath, teamDir);
        const files = fs.readdirSync(teamPath)
          .filter(file => file.endsWith('.md'))
          .map(file => {
            const filePath = path.join(teamPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const frontMatter = content.match(/^---\n([\s\S]*?)\n---/);
            
            if (frontMatter) {
              const metadata = {};
              frontMatter[1].split('\n').forEach(line => {
                const [key, ...valueParts] = line.split(':');
                if (key && valueParts.length > 0) {
                  metadata[key.trim()] = valueParts.join(':').trim();
                }
              });
              
              return {
                id: file.replace('.md', ''),
                title: metadata.title || file.replace('.md', ''),
                description: metadata.description || '',
                team: teamDir,
                role: metadata.role || '',
                date: metadata.date || new Date().toISOString(),
                url: `/2-Equipes/${teamDir}/${file.replace('.md', '')}/`
              };
            }
            
            return {
              id: file.replace('.md', ''),
              title: file.replace('.md', ''),
              description: '',
              team: teamDir,
              role: '',
              date: new Date().toISOString(),
              url: `/2-Equipes/${teamDir}/${file.replace('.md', '')}/`
            };
          });
        
        teams[teamDir.toLowerCase()] = files;
      });
    }
    
    return teams;
  } catch (error) {
    console.log('Erro ao carregar dados de equipes:', error.message);
    return {};
  }
};

// Função para gerar estatísticas dinâmicas
const generateStats = () => {
  try {
    const basePath = path.join(__dirname, '..', '..', '..');
    const stats = {
      totalFiles: 0,
      totalDirectories: 0,
      areas: {},
      lastUpdated: new Date().toISOString()
    };
    
    // Contar arquivos por área
    NAMESPACES.forEach(namespace => {
      const areaPath = path.join(basePath, namespace === 'dashboard' ? '0-Dashboard-Executivo' : 
                                namespace === 'governanca' ? '1-Governanca' :
                                namespace === 'equipes' ? '2-Equipes' :
                                namespace === 'mercado' ? '3-Mercado' :
                                namespace === 'projetos' ? '4-Projetos' :
                                namespace === 'processos' ? '5-Processos' : namespace);
      
      if (fs.existsSync(areaPath)) {
        const countFiles = (dir) => {
          let count = 0;
          const items = fs.readdirSync(dir, { withFileTypes: true });
          
          items.forEach(item => {
            if (item.isDirectory()) {
              count += countFiles(path.join(dir, item.name));
            } else if (item.name.endsWith('.md')) {
              count++;
            }
          });
          
          return count;
        };
        
        stats.areas[namespace] = countFiles(areaPath);
        stats.totalFiles += stats.areas[namespace];
      }
    });
    
    return stats;
  } catch (error) {
    console.log('Erro ao gerar estatísticas:', error.message);
    return {
      totalFiles: 0,
      totalDirectories: 0,
      areas: {},
      lastUpdated: new Date().toISOString()
    };
  }
};

// Exportar dados dinâmicos
module.exports = async () => {
  const data = {};
  
  // Gerar dados de componentes
  for (let index = 0; index < NAMESPACES.length; index++) {
    const ns = NAMESPACES[index];
    data[ns] = await generateComponentPaths(ns, SLOTS);
  }
  
  // Gerar dados de filetree e sidebar
  data[FILE_TREE_NAMESPACE] = await generateComponentPaths(
    FILE_TREE_NAMESPACE,
    FILE_TREE_SLOTS
  );
  data[SIDEBAR_NAMESPACE] = await generateComponentPaths(
    SIDEBAR_NAMESPACE,
    SIDEBAR_SLOTS
  );
  
  // Gerar dados de estilos
  data[STYLES_NAMESPACE] = await generateStylesPaths();
  
  // Carregar dados de projetos e equipes
  data.projects = loadProjectsData();
  data.teams = loadTeamsData();
  
  // Gerar estatísticas
  data.stats = generateStats();
  
  return data;
};
