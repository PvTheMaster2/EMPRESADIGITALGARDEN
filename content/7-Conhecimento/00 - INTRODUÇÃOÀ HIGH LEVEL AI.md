---
created: 2025-09-03T14:10
updated: 2025-09-03T14:10
---
Guia de Workflow de Desenvolvimento com Múltiplas IAs (High-Level) – Passo a Passo 📚
=====================================================================================

Bem-vindo a este guia passo a passo para iniciantes! Vamos explorar como montar um **workflow de desenvolvimento de software assistido por múltiplas IAs**. A ideia central é integrar diversas ferramentas de Inteligência Artificial – como **OpenAI Codex**, **Anthropic Claude Code**, **Cursor IDE**, **O3 Pro**, **Super Whisper**, **Repo Prompt** e **GitHub** – em um fluxo coeso que aumente sua produtividade e qualidade de código. Pense nas IAs como membros de um time: cada agente tem um papel específico (gerar código, revisar, depurar, etc.), enquanto você atua como o maestro que coordena tudo.

Usando esse workflow, é possível **acelerar a implementação de novas funcionalidades e resolução de bugs complexos**, pois as IAs trabalham em conjunto e até em paralelo. Por exemplo, você poderá delegar a uma IA (Codex) a criação de código em segundo plano, e a outra (Claude) a revisão imediata desse código, criando uma verificação cruzada automática. Ao final, você – como desenvolvedor humano – entra em cena para testar e garantir que tudo se integra bem, atuando como um **“engenheiro sênior”** que valida as soluções.

> **Para quem é este guia:** É voltado a programadores iniciantes no uso de IAs no desenvolvimento (mas que já entendem o básico de programação e Git) e que querem **montar um ambiente de codificação com auxílio de IA** do zero. Vamos progredir do básico ao avançado, explicando cada conceito de forma simples e didática. Você aprenderá desde a instalação das ferramentas até a aplicação prática no desenvolvimento de software, incluindo geração de código, revisão, testes e integração contínua – tudo com ajuda das IAs.

**O que você vai aprender:**

* Configurar e integrar as ferramentas necessárias no seu ambiente.

* Estruturar prompts eficazes para o Codex gerar código conforme suas necessidades.

* Usar o Claude Code como assistente local para revisar e aprimorar código.

* Realizar testes manuais e identificar bugs que escaparam às IAs.

* Aplicar **engenharia de contexto** com Repo Prompt e aproveitar o poder de modelos avançados (como O3 Pro) em tarefas complexas.

* Automatizar tarefas repetitivas (como commits) usando arquivos de protocolo.

* Conhecer armadilhas comuns nesse workflow e como evitá-las.

Vamos começar! 🎯

1. 🎯 Introdução e Visão Geral do Workflow

------------------------------------------

Nesta seção introdutória, vamos entender a **visão geral do workflow multi-IA** e seus benefícios antes de partir para a prática.

**➤ O que é o Workflow High-Level com Múltiplas IAs?**  
É um fluxo de trabalho onde **várias inteligências artificiais atuam em conjunto no desenvolvimento de software**, cada uma focada naquilo em que é mais eficiente. Em vez de depender de um único modelo de IA para tudo, orquestramos diferentes agentes: por exemplo, usamos o **Codex (OpenAI)** como um "desenvolvedor júnior" que escreve código de forma assíncrona, o **Claude Code (Anthropic)** como um "revisor de código" inteligente e interativo, e o **O3 Pro** (modelo avançado de IA, possivelmente um GPT-4 turbinado) como um **especialista para tarefas complexas e análise de alto nível**. Tudo isso acontece dentro de um ambiente unificado que envolve seu **IDE (Cursor)** e o **Git/GitHub** para gerenciar o código.

**➤ Por que usar múltiplas IAs no desenvolvimento?**  
Integrar várias IAs traz diversas vantagens práticas:

* **Produtividade Maximizada:** Você consegue delegar tarefas rotineiras ou de "força bruta" para as IAs e focar em decisões de alto nível. O Codex, por exemplo, pode gerar quatro implementações de uma solução _simultaneamente_, eliminando o bloqueio da página em branco e economizando tempo. Em paralelo, você pode continuar trabalhando em outra coisa enquanto a IA codifica.

* **Revisão e Qualidade Aprimoradas:** Ao usar uma segunda IA para revisar o código gerado pela primeira, cria-se um mecanismo de **verificação cruzada**. Isso ajuda a pegar erros básicos ou descuidos antes mesmo da revisão humana. No fluxo demonstrado em um dos casos, o Codex propõe as mudanças e o Claude Code analisa o Pull Request resultante, apontando possíveis problemas ou melhorias.

* **Orquestração Inteligente:** Cada IA brilha em um contexto. O Codex é ótimo para escrever código em lote e resolver tarefas isoladas; já o Claude Code é excelente em entendimento contextual, refatoração e interação passo a passo; o O3 Pro, por sua vez, consegue raciocinar sobre **múltiplas partes do projeto de uma vez** e propor soluções elegantes para problemas de maior complexidade.

* **Paralelismo e Multitarefa:** O workflow permite que você toque várias frentes ao mesmo tempo. Por exemplo, é possível carregar um conjunto de _issues_ num quadro Kanban e delegar várias ao Codex de uma vez – ele vai trabalhar nelas em paralelo, enquanto você revisa outras partes do sistema.

* **Aprendizado Contínuo ("vibe learning"):** Não se trata apenas de velocidade. Ao interagir com as IAs, você pode **aprender melhores práticas e obter explicações** durante o processo. Perguntar "por que" para a IA ou pedir sugestões de melhoria no código ajuda a aprimorar seu próprio conhecimento e julgamento como desenvolvedor. Em suma, as IAs viram co-pilotos no seu aprendizado diário.

**➤ O papel do desenvolvedor humano:**  
Mesmo com várias IAs no circuito, **você continua sendo indispensável**. Pense em si como um **arquiteto e inspetor de qualidade**. Sua responsabilidade é definir bem as tarefas (com prompts claros), validar se o que as IAs fizeram faz sentido e testar a aplicação em cenários que as IAs podem não ter considerado. No exemplo real que veremos adiante, as IAs implementaram uma nova funcionalidade e revisaram entre si, mas foi o desenvolvedor humano que suspeitou de um efeito colateral e encontrou um bug de regressão que ambas as IAs não viram. Ou seja, a **supervisão humana** garante que o resultado final esteja alinhado aos objetivos e à qualidade esperada.

**➤ Conhecimentos prévios recomendados:**  
Para aproveitar este workflow, é importante já ter familiaridade com:

* **Git/GitHub:** Entender como funcionam branches, commits e **Pull Requests (PR)** é fundamental, pois todo o processo se baseia nisso. As IAs vão criar e revisar PRs, e você precisará saber avaliá-los e integrá-los ao código principal.

* **Terminal/CLI:** Várias ferramentas (como o Claude Code e GitHub CLI) rodam no terminal. Não é nada avançado, mas convém saber executar comandos básicos no shell.

* **Conceitos básicos de programação:** O guia é sobre uso de IAs _no_ desenvolvimento, então assumimos que você conhece noções da linguagem e framework do seu projeto. As IAs ajudam, mas não fazem mágica sem direção – você precisa entender o problema de programação subjacente para orientar bem as máquinas.

Com essa visão geral em mente, vamos arregaçar as mangas e preparar o ambiente!

2. 🔧 Instalação e Configuração das Ferramentas Necessárias

-----------------------------------------------------------

Nesta etapa, listaremos as ferramentas que compõem o nosso stack de desenvolvimento assistido por IAs e mostraremos **como instalar e configurar cada uma**. Antes de começar, garanta que você tem permissões de administrador no seu computador para instalar softwares e nos repositórios GitHub para integrar os apps necessários.

**Resumo das ferramentas que usaremos:**

* **OpenAI Codex (ChatGPT com recursos de Codex):** Agente de IA _assíncrono_ que implementa tarefas de programação em background e entrega resultados como Pull Requests. _Será usado para escrever código automaticamente._

* **Anthropic Claude Code:** Agente de IA _síncrono_ que roda localmente via terminal ou IDE, interagindo em tempo real no formato chat. _Usado para revisar, refatorar e auxiliar na correção de código._

* **Cursor IDE:** Editor de código com IA integrada, baseado em VS Code, que indexa sua base de código e oferece funcionalidades de chat e autocompletar voltadas a programação. _Servirá como nosso ambiente principal de codificação._

* **O3 Pro:** Modelo de IA **de alta capacidade** (provavelmente uma variante avançada do GPT-4 da OpenAI) especializado em raciocínio sobre problemas complexos e análise de múltiplos arquivos de código. _Usado em cenários avançados onde precisamos de um "especialista" para decidir a melhor solução ou refatorar um módulo complexo._

* **Super Whisper:** Ferramenta de **transcrição de voz em texto** em tempo real, com suporte a vocabulário customizado. _Opcional, mas útil para ditar prompts longos em vez de digitá-los, agilizando a interação com as IAs._

* **Repo Prompt:** Ferramenta para **engenharia de contexto**, que permite selecionar arquivos/pastas de um repositório e gerar um prompt estruturado (com tags especiais) contendo esses conteúdos. _Usado para fornecer muito contexto (códigos relevantes) a modelos de IA quando necessário, por exemplo, para o O3 Pro._

* **Git & GitHub CLI:** Git será usado para versionar código e GitHub para hospedar o repo onde o Codex fará PRs. O **GitHub CLI (`gh`)** facilita interagir com PRs via terminal (por ex., fazer checkout de branches, merges, etc.).

A seguir, vamos configurar cada item:

### 2.1 Ambiente de Desenvolvimento (Pré-requisitos Básicos)

* **Terminal e Node.js:** Certifique-se de ter um terminal de linha de comando disponível no seu sistema. Instale também o **Node.js** (versão recente LTS) e o gerenciador de pacotes **npm**, pois o Claude Code é distribuído via npm. Se já programou em JavaScript, possivelmente isso já está pronto.

* **Git e GitHub:** Instale o Git e configure-o (nome de usuário, email, SSH key se necessário). Em seguida, instale a ferramenta **GitHub CLI (`gh`)** a partir de `https://cli.github.com/` e faça login por ela (`gh auth login`). Com isso, você poderá clonar repositórios e manipular Pull Requests facilmente no terminal. ☑ **Verifique:** Rode `gh --version` no terminal para checar se a CLI do GitHub está instalada corretamente.

* **Conta no GitHub:** Tenha uma conta no GitHub e crie ou escolha um repositório onde você tem permissão de _push_. Esse repo será usado pelo Codex para abrir PRs. Dica: se você estiver testando, crie um repositório de teste só para esses experimentos. Certifique-se de ter privilégios de criar branches e Pull Requests lá (se for seu próprio repo, você tem).

### 2.2 OpenAI Codex (via ChatGPT) 🚀

O OpenAI Codex aqui será utilizado através da interface do ChatGPT (serviço da OpenAI), configurado para atuar como nosso agente de codificação autônomo.

* **Conta OpenAI:** Crie uma conta na OpenAI (ou faça upgrade para o ChatGPT Plus/Enterprise se necessário). O Codex foi originalmente um modelo da OpenAI voltado a código; hoje a OpenAI integrou recursos de codificação diretamente no ChatGPT. Em especial, o **ChatGPT (GPT-4) com Plugins ou a versão ChatGPT Teams** permite conectar com GitHub para realizar ações como criar PRs.

* **Acesso ao Codex:** Inscreva-se no ChatGPT Teams (ou verifique se sua conta ChatGPT oferece um _Developer Mode_ com recurso de criar pull requests – este recurso pode exigir um plano empresarial). Conforme o conteúdo fornecido, o autor destaca que é preciso uma _subscrição paga do ChatGPT Teams_ para usar o Codex de forma integrada. ☑ **Verifique:** ao acessar o ChatGPT, veja se há opções de integração com repositórios GitHub ou a menção ao agente "OpenAI Codex".

* **Conecte ao GitHub:** Dentro da interface do ChatGPT ou ferramenta Codex, conecte sua conta GitHub e autorize acesso ao repositório escolhido. Isso permitirá que a IA crie branches, faça commits e abra Pull Requests automaticamente no repo. _Exemplo:_ no ChatGPT Enterprise, há um painel para conectar recursos de desenvolvimento – use-o para linkar o repo do GitHub.

* **Configuração Inicial:** Prepare um repositório com código base do seu projeto aberto no browser do ChatGPT (algumas implementações do Codex carregam a árvore do repo para dar contexto). Caso não haja essa opção, não tem problema: nos prompts informaremos manualmente o contexto. O importante é que o Codex tenha permissão para escrever no repositório.

* **Dica de Uso:** O Codex funciona recebendo uma _Issue_ ou um _Prompt detalhado_ descrevendo a tarefa. Você pode criar uma Issue no GitHub com a descrição da feature/bug e pedir para o Codex resolvê-la, ou simplesmente fornecer a descrição direta no chat. Veremos adiante como estruturar esse prompt. Tenha em mente que o Codex executa a tarefa em background – ou seja, você dispara o comando e ele vai processar por alguns minutos até retornar com um Pull Request pronto.

### 2.3 Claude Code (Anthropic) 🤖

O Claude Code é um agente de IA da **Anthropic** que roda localmente no seu terminal e interage no formato conversa, parecido com um chat. Iremos usá-lo para revisar código, explicar trechos e até aplicar correções automaticamente.

* **Conta Anthropic:** Crie uma conta em `claude.ai` (o site da Anthropic) para obter acesso ao Claude. Algumas funcionalidades locais podem requerer uma API Key, então verifique nas configurações da sua conta se há chave de API disponível.

* **Instalação via npm:** Abra o terminal e instale o pacote do Claude Code globalmente usando npm. Execute:
  `npm install -g @anthropic-ai/claude-code`
  Isso baixará o executável do Claude Code. Se ocorrer algum erro de permissão (EACCES), **não use** `sudo` diretamente, pois isso pode bagunçar as permissões do npm. Em vez disso, ajuste as permissões da pasta do npm no seu sistema ou use uma ferramenta como `nvm` (Node Version Manager) para instalar globalmente sem conflitos.

* **Login no Claude:** Após instalado, faça login via terminal:
  `claude login`
  Ao rodar esse comando, provavelmente abrirá o navegador pedindo suas credenciais Anthropic (ou solicitará a chave de API). Complete o login para autenticar o CLI.

* **Inicialização:** Navegue até a pasta do seu projeto (onde está o repositório Git). No terminal, inicie o CLI do Claude Code executando:
  `cd /caminho/do/seu/projetoclaude`
  Isso deve lançar o assistente conversacional no seu terminal dentro do diretório do projeto. Você verá um prompt do tipo `claude>` indicando que o Claude Code está ativo e ouvindo comandos.

* **Comandos úteis do Claude Code:**
  
  * `/help`: mostra comandos disponíveis.
  
  * `/model`: troca o modelo usado. O padrão pode ser o Claude mais poderoso (como Claude 2 ou Claude 1.3), mas você pode trocar para um modelo mais barato, como o **Sonnet** (modelo menor) para economizar custos durante interações triviais. _Ex:_ `/model sonnet-3.5` muda para o modelo Sonnet 3.5, que é significativamente mais barato e suficiente para tarefas do dia a dia.
  
  * `/exit`: sai do CLI.
  
  * **Interação básica:** Você pode simplesmente conversar com o Claude dando instruções em linguagem natural (em português ou inglês). Ele tem contexto do seu diretório atual, então pode ler arquivos se instruído.

* **Integração com Cursor (opcional):** Se estiver usando o Cursor IDE, você pode executar o `claude` no terminal integrado do Cursor. Assim, terá a janela de código ao lado da janela de chat do Claude, facilitando copiar trechos ou rodar comandos. O Cursor também permite comandos como `/review` diretamente no chat se configurado. Por exemplo, no vídeo de referência o autor utiliza o comando `/review` no Cursor para acionar o Claude Code na revisão de um PR. Dependendo da versão do Cursor, isso pode requerer configuração; de toda forma, rodar o CLI no terminal integrado já atende nosso propósito.

☑ **Verifique:** teste o Claude Code pedindo para realizar uma pequena ação. Por exemplo:  
No prompt do Claude, digite: `/cle` (para limpar contexto) e em seguida:

`/edit README.md - Adicione uma linha "Ferramentas instaladas com sucesso" no final do arquivo.`

Veja se ele edita o arquivo README.md conforme pedido. Se sim, instalação realizada com sucesso!

### 2.4 Cursor IDE 🖥️

O **Cursor** é um IDE moderno, parecido com o VS Code, mas com **funcionalidades de IA integradas** para facilitar a vida do desenvolvedor. Ele possui agentes integrados que podem ajudar a gerar código, explicar partes do códigobase e até detectar possíveis bugs em Pull Requests.

* **Instalação do Cursor:** Visite cursor.sh e baixe o instalador para seu sistema operacional (há versões para Windows, Mac, etc.). Siga o processo de instalação padrão da sua plataforma.

* **Primeira Execução:** Abra o Cursor. A interface lembra o VS Code, então você deve se sentir em casa. Abra a pasta do seu projeto (File > Open Folder e selecione o diretório do repo). O Cursor começará a **indexar o código do seu projeto** automaticamente. Isso significa que ele cria internamente uma espécie de mapa do seu codebase, para poder responder perguntas sobre o código de forma contextual (muito útil!).

* **Login em serviços (se aplicável):** O Cursor pode pedir para entrar com sua conta OpenAI ou Anthropic para usar os agentes de IA embutidos. Forneça as chaves de API se solicitado (nas configurações do Cursor, há seção para chaves de API do OpenAI e Anthropic). Isso vai habilitar o uso dos modelos diretamente no editor.

* **Funcionalidades principais do Cursor:**
  
  * **Chat integrado:** Pressione **Cmd/Ctrl + L** para abrir a janela de chat lateral. Você pode fazer perguntas sobre o código, pedir explicações de funções, etc. Por exemplo: _"Qual a finalidade da função X no arquivo Y?"_. Como a base foi indexada, o Cursor pode trazer respostas bem contextualizadas.
  
  * **Edição de código assistida:** Selecione um trecho de código e pressione **Cmd/Ctrl + K**. Isso abre a caixa de comando inline. Digite uma instrução, por ex.: _"Refatorar este código para ser mais eficiente"_, e o Cursor irá sugerir alterações diretamente no código. Você pode aceitar ou ajustar conforme necessário. ☑ **Verifique:** experimente selecionar uma função qualquer e pedir `Refatorar para melhorar desempenho` e veja a sugestão do Cursor.
  
  * **Autocomplete e Destaque de Erros:** Enquanto codifica, o Cursor usa IA para autocompletar trechos mais complexos e pode sublinhar potenciais problemas. Além disso, se você abrir um Pull Request no GitHub, o Cursor às vezes mostra comentários _inline_ marcados pelo seu "Bug Bot" indicando trechos suspeitos (isso acontece se você tiver configurado integrações, mas é bom saber que existe).
  
  * **Terminal Integrado:** Use **Ctrl + `** (acento grave) para abrir o terminal dentro do Cursor. Aqui você pode rodar comandos do sistema, incluindo o` claude` que instalamos. Ter tudo no mesmo IDE facilita a concentração.

O Cursor é uma ferramenta poderosa para centralizar nosso trabalho, pois concentra editor + chat de IA + terminal em um só lugar. Mas não se preocupe se não quiser usar o Cursor especificamente – o workflow pode ser adaptado em VS Code ou outro IDE, usando o terminal e talvez plugins do VS Code para ChatGPT/Claude se preferir. No entanto, seguiremos explicando com o Cursor por ser otimizado para IA.

### 2.5 Repo Prompt 🗂️

O **Repo Prompt** é como um “gerenciador de contexto” para modelos de linguagem. Ele te permite selecionar partes do seu código (arquivos ou pastas) e gerar um prompt contendo esses códigos formatados de maneira estruturada, geralmente anotados com marcações (tags XML) para delimitar cada arquivo. Isso é extremamente útil quando você precisa mostrar muito código para uma IA (especialmente se ela tiver limite de contexto) e garantir que nada importante fique de fora.

* **Instalação/Disponibilidade:** O Repo Prompt pode ser uma aplicação web ou app desktop. Acesse repoprompt.com e veja as opções. Provavelmente você precisará comprar ou fazer um registro (conforme mencionado no conteúdo). Baixe/instale a ferramenta conforme indicado.

* **Uso Básico:** Abra o Repo Prompt e **carregue a pasta do seu projeto** (há um botão "Open Folder" na interface). Ele exibirá a árvore de arquivos do projeto.

* **Selecionando Contexto:** Navegue pela árvore e marque os arquivos ou até diretórios inteiros que são relevantes para a tarefa em questão. Por exemplo, se você quer dar contexto de como um certo componente funciona, selecione seu arquivo fonte e talvez arquivos relacionados (CSS, testes, etc.). Você pode adicionar quantos arquivos precisar – só lembre que isso aumenta o tamanho do prompt, então selecione de forma inteligente.

* **Escrevendo a Instrução:** Há uma caixa de texto onde você escreve **o pedido ou pergunta** que quer fazer à IA, considerando que ela terá aqueles arquivos todos disponíveis. Exemplo: _"Ajude-me a entender a estrutura dos agentes de IA neste projeto. Incluí os arquivos que implementam o Codex, Claude e O3 Pro."_.

* **Gerando o Prompt:** Clique em "Copy Prompt" ou equivalente. O Repo Prompt então gera um texto montando todos os conteúdos dos arquivos selecionados, geralmente com marcações do tipo `<file name="x.py"> ... código ... </file>`. Esse texto agora está na sua área de transferência.

* **Usando o Prompt Gerado:** Vá até a interface da IA que será usada (por ex, o chat do Claude no terminal, ou o O3 Pro se tiver uma interface específica) e **cole** o prompt. A IA receberá tanto sua pergunta quanto os trechos de código selecionados dentro de um único prompt. ☑ **Verifique:** como teste, selecione 1 ou 2 arquivos pequenos do projeto, copie o prompt e cole em uma janela do Claude (pode ser até via claude.ai web) e veja se ele menciona os conteúdos dos arquivos corretamente.

* **Engenharia de Contexto:** Esse processo é o que chamamos de _context engineering_ – fornecer o máximo de contexto relevante para melhorar a qualidade da resposta da IA. Líderes da indústria destacam que às vezes **dar o contexto certo é mais importante do que formular perguntas elaboradas**, pois a IA precisa dos dados corretos para raciocinar. O Repo Prompt te ajuda exatamente nisso: ele elimina o trabalho braçal de copiar e colar múltiplos arquivos manualmente e garante que a formatação fique clara para a IA.

### 2.6 Super Whisper 🎤 (Opcional)

Escrever prompts longos pode ser cansativo. O **Super Whisper** é uma ferramenta que transcreve a sua voz para texto rapidamente, o que permite _ditar_ os prompts para as IAs em vez de digitá-los. Ele usa o modelo Whisper da OpenAI, com melhorias, e permite até adicionar termos técnicos para maior precisão.

* **Instalação:** Baixe o aplicativo em superwhisper.com para o seu sistema operacional e instale-o.

* **Configuração da Tecla de Atalho:** Abra o Super Whisper e vá em configurações (geralmente um ícone de engrenagem ⚙️). Defina um _hotkey_ global, ou seja, uma combinação de teclas que, quando pressionada, ativa o modo de transcrição. Por exemplo, defina **Alt + Tab** ou **Ctrl + Shift + H** – escolha algo que não conflite com outras funções do sistema.

* **Vocabulário Personalizado:** Adicione termos específicos no campo "Vocabulary". Aqui você coloca palavras que costuma usar e que não são comuns no dicionário padrão, por exemplo nomes do seu projeto, jargões técnicos ou em inglês. Isso ajuda a transcrição a entender esses termos. Ex: adicione "Codex", "Claude", "Repo Prompt", nome de funções do seu código etc. Dessa forma, quando você falar esses termos, a transcrição virá correta.

* **Uso no dia a dia:** Quando quiser ditar algo, clique no campo de texto de destino (por exemplo, o campo de prompt do ChatGPT ou do Claude, ou mesmo um editor de texto qualquer), aperte o atalho definido e comece a falar claramente. Ao terminar, solte a tecla ou clique para parar a gravação. O texto transcrito deve aparecer na tela onde você deixou o cursor.

* **Teste Rápido:** Abra uma janela qualquer (um bloco de notas) e pressione o atalho. Diga: _"Criar função de login usando OTP."_ e veja se o texto aparece escrito corretamente. Ajuste o vocabulário ou microfone se necessário. ☑ **Verifique:** se as frases aparecem corretamente na tela após você falar, o Super Whisper está funcionando.

Usar a voz pode tornar o processo de criação de prompts mais natural e rápido – você vai perceber que é quase como _explicar a tarefa para um colega_, só que nesse caso o "colega" é a IA que vai codar. O autor do conteúdo original menciona que ditar o prompt para o Codex tornou o fluxo mais ágil e “fluido”, evitando perder tempo com digitação e permitindo que ele descrevesse a tarefa em alto nível de detalhe sem cansar.

### 2.7 O3 Pro (Modelo de IA Avançado) 💡

O **O3 Pro** é mencionado como uma ferramenta/IA de capacidade superior, usada para casos bem específicos. É provável que seja um codinome para uma versão poderosa de um modelo OpenAI (talvez GPT-4 com contexto extendido). Ainda não há um "software" O3 Pro para instalar diretamente, pois pode ser um serviço acessado via API ou integrado ao Cursor. Então, como nos beneficiar dele?

* **Acesso ao Modelo:** Para usar algo semelhante ao O3 Pro, você precisará de **acesso a um modelo de última geração**. As opções podem incluir:
  
  * GPT-4 da OpenAI com janela de contexto expandida (ex: GPT-4 de 32k tokens, se disponível na API).
  
  * Outros modelos de alta performance que você possa ter via API ou ferramenta (por exemplo, o próprio ChatGPT via interface web com plugins de código pode ser utilizado, ou serviços como OpenRouter que dão acesso a modelos premium).

* **Integração via Cursor:** O Cursor IDE talvez suporte “plugins” ou agentes personalizados. O autor do vídeo parece usar o O3 Pro acoplado ao seu fluxo – possivelmente como parte do Cursor ou de um script externo. Se o Cursor permitir escolher qual modelo usar para certas tarefas, você selecionaria o GPT-4 (se suas credenciais OpenAI estiverem configuradas) para desempenhar o papel do O3 Pro.

* **Sem integração direta:** Caso não tenha acesso direto a nada além do ChatGPT normal, não se preocupe. Você pode _simular_ o uso do O3 Pro recorrendo ao próprio ChatGPT (versão web) ou outra ferramenta quando precisar. Por exemplo, para uma análise pesada envolvendo múltiplos arquivos, você pode: gerar um prompt com Repo Prompt e colar no ChatGPT (usando GPT-4) manualmente. Não será tão automático quanto no vídeo, mas alcança um efeito similar.

**Importante:** O O3 Pro tende a ser usado apenas quando necessário, pois consome mais tempo (no vídeo, leva ~10 minutos para processar uma tarefa complexa) e possivelmente mais tokens (custo). Portanto, encare-o como um **"especialista" que você chama quando as outras IAs não deram conta totalmente** ou quando a tarefa é grande e crítica. Nos próximos tópicos, daremos exemplos de quando acioná-lo.

* * *

Com todas as ferramentas instaladas e configuradas, você já deve ter o seguinte cenário:

* Um repositório Git configurado no GitHub.

* O Cursor IDE aberto com seu projeto, terminal integrado pronto.

* Claude Code instalado e logado, pronto para rodar no terminal.

* Conta do ChatGPT/Codex pronta para receber prompts e criar PRs.

* (Opcional) Super Whisper rodando em background para ditar texto.

* (Opcional) Repo Prompt instalado para montar contextos complexos.

* (Opcional) Acesso a modelo avançado (O3 Pro) para uso eventual.

Nosso ambiente está pronto! A seguir, vamos ver como **colocar tudo isso em ação** no desenvolvimento diário.

3. 🛠️ Montando o Ambiente de Trabalho (Cursor + Codex + Claude + GitHub)

-------------------------------------------------------------------------

Agora que as ferramentas estão instaladas, vamos organizar o **ambiente de trabalho** para que elas atuem em conjunto de forma harmônica. O objetivo é que você possa alternar rapidamente entre escrever código (ou pedir para o Codex escrever), revisar com o Claude, e gerenciar versões com Git/GitHub.

**➤ Estrutura básica do ambiente:**

1. **IDE (Cursor) Aberto com Projeto:** Você deve estar com o Cursor rodando, projeto aberto, e idealmente já sincronizado com seu repositório Git (se ainda não clonou localmente, use `git clone <url>` ou `gh repo clone <repo>` para ter o código no seu computador e abra essa pasta no Cursor).

2. **Terminal Preparado:** No Cursor, abra o terminal integrado e garanta que está na pasta do projeto. Aqui manteremos o Claude Code executando e usaremos também para comandos Git. Se preferir, pode usar um terminal externo também.

3. **Claude Code Rodando:** Inicie o Claude Code no terminal (`claude`). Ele ficará “escutando” seus comandos. Podemos até abrir duas instâncias se quisermos (por exemplo, uma para revisar um PR enquanto outra para brainstorming – mas isso é avançado e opcional). Por ora, uma instância basta.

4. **GitHub CLI Logado:** Certifique-se de estar logado (`gh auth status`). Assim que o Codex criar um Pull Request, usaremos o CLI para baixá-lo.

5. **ChatGPT/Codex Aberto no Navegador:** Mantenha uma aba do navegador logada no ChatGPT (ou interface do Codex). É por ali que você enviará as tarefas para o Codex executar. Você pode criar um **Kanban de tarefas** (quadro de issues) e ir passando para o Codex aos poucos, se tiver várias features; ou pode ir uma por uma. O autor do vídeo, por exemplo, carrega várias tarefas de um board Kanban de uma só vez para o Codex resolver em paralelo, mas como iniciante talvez vá preferir uma de cada vez inicialmente.

**➤ Fluxo de trabalho resumido no ambiente:**

* Você **descreve a tarefa** (feature ou bugfix) em detalhes e envia para o **Codex** via ChatGPT.

* O Codex trabalha por alguns minutos e cria um **Pull Request (PR)** no repositório GitHub com as mudanças propostas.

* Você recebe uma notificação ou um link do PR no próprio chat do Codex ao término. A interface da OpenAI deve mostrar algo como "PR criado: #numero".

* Agora, no seu ambiente local, você **baixa/aplica o PR** criado. Use o GitHub CLI no terminal:
  `gh pr checkout <numero_do_PR>`
  Isso vai criar uma nova _branch_ local com as modificações da IA. ☑ **Verifique:** após o checkout, os arquivos modificados pelo Codex devem aparecer no seu editor (Cursor) marcados como alterados. Você agora tem o código gerado pronto para inspecionar.

* **Revisão com Claude:** Com o Claude Code rodando, peça a ele para revisar o PR. Se você estiver usando uma instância do Claude que tem comando específico, pode ser `/review` seguido do número do PR, ou simplesmente cole o diff. Uma maneira universal: copie a descrição da tarefa original (o prompt que você deu ao Codex) e diga ao Claude algo como: _"Revise as mudanças feitas no PR à luz do pedido original: [cole aqui o pedido original]. Verifique se o código atende aos requisitos e se está bem escrito."_. O Claude então vai analisar todos os diffs do commit, possivelmente rodar linters, e te dar um relatório.

* **Feedback e Correções:** Se o Claude apontar problemas ou sugestões, você pode pedi-lo para corrigir. Por exemplo: _"Por favor, corrija os problemas apontados e melhore o que for necessário."_ Ele pode então entrar no modo de edição e ajustar o código. Lembre-se de garantir que ele entendeu bem o contexto – use o comando `/edit <file>` ou abra os arquivos relevantes para ele se precisar. O Claude Code consegue modificar arquivos localmente conforme instruído.

* **Testes Manuais:** Enquanto isso, ou após a revisão do Claude, você deve rodar o projeto e testar a nova funcionalidade manualmente (vamos detalhar essa parte na seção 6). Isso é feito localmente, na branch do PR.

* **Identificando Bugs:** Se você encontra bugs nos testes (como um caso de uso que quebrou), volte ao Claude e relate o bug claramente (incluindo mensagens de erro ou comportamento inesperado) para que ele tente corrigir. Ex.: "Descobri que quando faço X, acontece Y, mas o esperado era Z".

* **Iteração:** Repita a interação com o Claude quantas vezes precisar até ficar satisfeito. O Claude é bem útil para ir refinando o código, ajustando detalhes ou explicando por que algo deu errado.

* **Commit e Push Automatizado:** Quando tudo estiver OK, é hora de enviar as correções de volta ao GitHub. Você pode pedir ao Claude para **fazer commit e push** das alterações corrigidas (ele solicitará confirmação se for a primeira vez executando git push). Diga algo como: _"Tudo certo. Faça commit das mudanças com a mensagem 'Fix bugs and finalize feature' e dê push."_ – ele irá executar os comandos necessários. Alternativamente, use nosso arquivo `protocol.md` de automação (ver seção 8) para isso.

* **Merge do PR:** Com o PR aprovado (por você e pelo "review" do Claude), vá ao GitHub e faça o merge para a branch principal (geralmente via interface web, clicando em **Merge**). Assim, a contribuição do Codex (ajustada pelo Claude e por você) é integrada ao projeto. Lembre de excluir a branch remota se não for mais necessária.

Esse ciclo pode se repetir para cada tarefa. Note que muitas etapas ocorrem em paralelo ou de forma assíncrona, o que é um dos poderes desse workflow: enquanto o Codex codifica uma tarefa, você pode estar testando outra ou revisando uma terceira com o Claude.

**➤ Dicas de organização no ambiente:**

* Mantenha as janelas arrumadas: talvez dividir a tela com o navegador (Codex) de um lado e o Cursor (Claude/edição de código) do outro ajude a acompanhar tudo.

* Nomeie bem suas branches e PRs: O Codex geralmente cria nomes automaticamente, mas você pode especificar títulos para as PRs no prompt inicial. Isso ajuda a gerenciar caso haja várias PRs abertas ao mesmo tempo.

* Use rótulos ou comentários no GitHub para marcar quais PRs foram gerados por IA e quais revisados. Ex.: adicionar um label "codex" no PR para saber a origem.

* Aproveite o **GitHub Actions** se quiser automatizar a revisão: existe, por exemplo, uma Claude GitHub Action que revisa PRs automaticamente assim que abertos. Configurá-la é um passo avançado, mas saiba que é possível (necessita acesso Anthropic API e instalar a ação no repo).

Ao final desta seção, seu ambiente está funcional: você tem a **IA júnior (Codex)** escrevendo código no GitHub, a **IA sênior (Claude)** revisando e ajudando localmente, tudo supervisionado por você no Cursor. A seguir, veremos como dar as instruções certas para que esse time de IAs trabalhe de forma eficaz, começando por **como escrever bons prompts para o Codex**.

4. 📝 Como Estruturar Tarefas e Prompts para o Codex

----------------------------------------------------

Escrever um bom prompt (instrução) para o Codex é **fundamental**, pois determina a qualidade do código que ele vai gerar. Nesta seção, aprenderemos a **definir tarefas de forma clara e detalhada**, dando contexto suficiente para a IA entender o que precisa ser feito sem ambiguidade.

**➤ Entenda o papel do Codex:** O Codex atua como um desenvolvedor executando uma tarefa atribuída. Ele não faz perguntas de volta (é assíncrono), então **tudo o que ele precisa saber deve estar no prompt inicial**. Pense que você está escrevendo uma especificação completa da tarefa para alguém implementar.

**➤ Dicas para um prompt eficaz:**

* **Descreva o Problema/Feature em Alto Nível:** Comece contextualizando o que é a tarefa. Que funcionalidade nova deve ser adicionada ou que bug deve ser corrigido? Mencione em termos gerais primeiro. _Ex:_ “Adicionar uma nova opção de 'stop loss' por porcentagem na estratégia de trading _Breakout_”.

* **Explique o Estado Atual e a Motivação:** Detalhe como o sistema funciona hoje e o porquê da mudança. _Ex:_ "Atualmente, o stop loss na estratégia Breakout só aceita tipo 'retração de Fibonacci'. Queremos permitir também um tipo 'porcentagem' para dar mais flexibilidade ao usuário."

* **Requisitos Específicos:** Enumere exatamente o que precisa ser implementado/modificado. Seja explícito:
  
  * Novas opções, parâmetros ou classes a criar.
  
  * Comportamentos esperados (regras de negócio).
  
  * Quais partes do sistema envolvem essa mudança (frontend, backend, banco de dados?).
  
  * _Ex:_ "Crie um seletor (dropdown) no front-end com as opções 'Porcentagem' e 'Retração de Fibonacci' para o tipo de Stop. No back-end, adapte a lógica para calcular o stop: se for porcentagem, usar a porcentagem do preço atual; se for Fibo, usar a retração de Fibonacci como é hoje."

* **Referências de Implementação:** Este é um passo **muito importante**. A IA codificante se beneficia de exemplos no código existente:
  
  * Aponte um lugar do projeto que faz algo parecido. _Ex:_ "Use como referência o seletor de _target/alvo_ já implementado na estratégia Breakout (que tem opções múltiplas)."
  
  * Aponte outro lugar onde a funcionalidade desejada existe. _Ex:_ "Outra estratégia, chamada '123 de compra', já tem stop por porcentagem; veja como ela faz."
  
  * Isso dá pistas valiosas para o Codex, reduzindo risco de ele inventar algo do zero fora do padrão do projeto. **Cite nomes de arquivos, classes ou funções** se souber, pois o Codex pode buscar por esses identificadores no repo.

* **Detalhes de Implementação e Restrições:** Inclua qualquer detalhe extra:
  
  * _UI/UX:_ "Certifique-se de que o novo input de porcentagem aparece somente quando 'Porcentagem' for selecionado."
  
  * _Validações:_ "A porcentagem deve ser um número entre 0 e 100."
  
  * _Performance:_ "Não recalcular X se não necessário."
  
  * _Não quebre funcionalidade existente:_ se houver alguma preocupação especial, mencione. No exemplo, poderia dizer: "Cuidado para não afetar outras estratégias que usam o componente de stop atual."

* **Formato de Entrega:** Especifique que esperamos um Pull Request com as mudanças. O Codex normalmente já faz isso, mas não custa reforçar: "No final, abra um Pull Request com suas alterações."

* **Tamanho/Tempo:** Se for uma tarefa grande, você pode dizer "Implemente em no máximo X arquivos" ou "Pode levar até 15 min para rodar". Mas em geral, não precisa especificar tempo – é só para você saber que geralmente leva 10-15 min como vimos.

💡 _Exemplo de Prompt bem estruturado (baseado no caso real):_  
_"Tarefa: Adicionar opção de 'Stop em Porcentagem' na estratégia **Breakout** da plataforma QuantBrasil. Atualmente, o stop loss dessa estratégia só permite 'retração de Fibonacci'. Queremos que o usuário possa escolher entre **Porcentagem** ou **Retração de Fibonacci** para o stop loss, similar ao que já acontece com o **alvo** (target) dessa estratégia._

_Requisitos:_

* _Front-end:_ adicionar um seletor de tipo de stop (dropdown) na UI da estratégia Breakout, com as opções 'Porcentagem' e 'Retração de Fibonacci'. Se 'Porcentagem' for selecionado, mostrar um campo para o usuário especificar a % (similar ao campo de alvo por porcentagem).

* _Back-end:_ no cálculo do backtest da Breakout, implementar a lógica para calcular o stop dependendo do tipo selecionado. Se for porcentagem, calcular valor do stop = preço de entrada * (1 - porcentagem/100). Se for Fibonacci, manter comportamento atual (já implementado).

* _Referências:_ O componente de **target** da Breakout já possui lógica parecida de múltiplas opções (veja código onde o alvo pode ser porcentagem ou fibo). Além disso, a estratégia **123deCompra** possui stop por porcentagem implementado – pode usar como base.

* _Aplicar mudanças tanto no código Python (back) quanto no código da interface web (provavelmente arquivo React/JS da página de estratégia)._

_Ao finalizar, crie um Pull Request com as alterações."_

Esse prompt cobre contexto, objetivo, detalhes específicos e referências do código existente – um pacote completo para o Codex trabalhar. No conteúdo original, o autor literalmente ditou algo bem próximo a isso usando o Super Whisper.

**➤ Enviando o prompt para o Codex:**  
No ChatGPT (ou ferramenta do Codex), envie a mensagem e confirme a execução. Se for via ChatGPT, possivelmente você terá um bot conversando – ele pode responder algo como "Entendi, começando a trabalhar...". A tarefa então entra em processamento assíncrono.

**➤ Acompanhando o progresso:**  
Algumas interfaces mostram um status ("Running task..."). Se demorar muito (>15 min) sem resposta, pode ter ocorrido algum erro. Às vezes o Codex ficava travado em "setting up environment" no passado. Caso pareça travado, você pode cancelar e reenviar o prompt. No relato original, reenviar resolveu um bug de interface e o PR saiu em seguida.

**➤ Recebendo o resultado:**  
Quando o Codex terminar, ele provavelmente dará um link para o Pull Request criado. Ex.: "Pull Request #42 opened: Add percentage stop option". Clique no link ou vá no seu repo no GitHub para ver o PR. Lá você encontrará todos os commits e diffs de código que a IA gerou.

**➤ Analisando rapidamente o PR:**  
Antes mesmo de passar para a revisão do Claude, vale você dar uma olhada inicial no PR:

* Confira se todos os pontos do prompt foram abordados (o PR deve mostrar adições no front e back, etc.).

* Veja se os testes (se houver CI) passaram.

* Note qualquer coisa obviamente errada (por ex., nenhum commit alterando o front-end significaria que faltou algo).

Essa inspeção rápida já te dá base para orientar a revisão do Claude em seguida. E caso você note que _faltou algo importante no PR_, pode inclusive já planejar mencionar isso ao Claude para corrigir, ou decidir fechar esse PR e refazer com prompt ajustado (mas vamos supor que está razoável e seguimos).

**➤ Pedindo múltiplas implementações:**  
Uma funcionalidade avançada do Codex (via ChatGPT) é poder gerar **várias soluções em paralelo**. O autor do vídeo frequentemente roda 4 versões de cada tarefa. Se a sua interface permitir (por exemplo, ChatGPT Enterprise tem opção de rodar N soluções), aproveite: peça 2-4 abordagens. Isso aumenta a chance de ter pelo menos uma solução boa ou combinações de partes boas de cada uma. O Codex então criaria vários branches/PRs ou talvez um único PR com múltiplos commits alternativos – depende da implementação. Se vierem PRs separados, você pode comparar e escolher o melhor junto com o Claude na revisão.

Para iniciantes, começar com uma implementação já é suficiente. Mas é bom saber que essa técnica existe e elimina a dependência em uma única tentativa da IA (que pode dar azar de errar algo).

**➤ Erro comum:** Prompt pouco detalhado. Se você disser só "Adicionar stop loss por porcentagem na estratégia X", há grande chance do Codex não saber onde mexer e gerar um código incompleto ou incorreto (por exemplo, não perceber que tem front-end envolvido). Sempre **forneça contexto e referências**. Um prompt fraco leva a saídas ruins.

Recapitulando, **um bom prompt é como uma mini especificação técnica**: contexto + requisitos + referências + resultado esperado. Dedicando tempo nessa etapa, você facilita todo o resto do fluxo, pois o Codex devolverá algo mais próximo do desejado, reduzindo retrabalho.

No próximo passo, assumiremos que já temos um Pull Request gerado pelo Codex e partiremos para o processo de **revisão e correção com o Claude**.

5. 🔍 Como Revisar e Corrigir Código com o Claude

-------------------------------------------------

Após o Codex ter gerado um Pull Request com novas alterações de código, entra em cena o **Claude Code** para fazermos a revisão inicial e eventuais correções. Pense no Claude como um **par programador experiente** ou um code reviewer que vai checar a qualidade do PR antes de você aprová-lo. Aqui vamos ver como conduzir essa revisão passo a passo.

**➤ Situação de partida:** Você tem um PR aberto no GitHub (por ex., PR #42). No seu ambiente local, já fez o checkout dessa branch do PR usando o `gh pr checkout` conforme descrito, então seu diretório de trabalho está com os arquivos modificados pela IA. O Claude Code está rodando no terminal, no mesmo diretório.

### 5.1 Revisão Inicial do Pull Request

* **Inicie a Revisão:** Chame o Claude no terminal e explique o que você quer. Por exemplo, você pode dizer: _"Claude, revise o Pull Request atual comparando com a solicitação original. A tarefa pedida foi: [cole aqui o prompt que você deu ao Codex]. Veja se o PR cumpre esses requisitos e se o código parece correto e bem escrito."_.
  
  * _Dica:_ Colar o prompt original é ótimo para alinhar contexto. O Claude então sabe exatamente o que era esperado e consegue validar se tudo foi atendido.
  
  * Algumas distribuições do Claude Code (no Cursor, por ex.) têm atalho `/review` que automaticamente lê o diff do último commit. Se disponível, você poderia usar: `/review` ou `/review PR42`. Caso contrário, faça manualmente como descrito.

* **O que o Claude faz:** Ele vai ler todas as mudanças realizadas no PR: adições, remoções, modificações nos arquivos. Provavelmente vai analisar a sintaxe, semântica e até rodar _linter_ ou _compilar mentalmente_ o código. Em nossos conteúdos de referência, o Claude Code chegou a executar ferramentas de análise estática durante a revisão.

* **Recebendo o Feedback:** Em poucos instantes, o Claude deve lhe dar um relatório. Podem ser pontos positivos (ex: "O código segue o que foi solicitado, implementou o seletor corretamente") e potenciais problemas (ex: "Notei que na estratégia X, o componente de Fibonacci pode não estar sendo exibido..."). No vídeo referência, na primeira revisão o Claude **não identificou nenhum erro e aprovou o PR** inicialmente – mas isso foi antes de descobrirmos o bug oculto. Outras vezes, ele pode pegar coisas evidentes.

* **Analise o Relatório:** Leia com atenção o que o Claude retornou. Aqui entram algumas possibilidades:
  
  * **Caso 1: Tudo ok segundo o Claude.** Ainda assim, não presuma perfeição. A IA revisor pode deixar passar algo (como deixou no caso real). Use essa resposta como um indicador, mas mantenha senso crítico.
  
  * **Caso 2: Claude encontrou problemas.** Ele pode apontar desde variáveis não usadas, trechos confusos, até erros lógicos. Isso já poupa bastante trabalho. Se os problemas forem pequenos (ex: nomes de função incoerentes, formatação), podemos pedir para ele mesmo corrigir. Se for algo maior (ex: "falta tratar caso X"), também podemos iterar.

* **Faça Perguntas de Refinamento:** Não hesite em perguntar detalhes ao Claude. Por exemplo: "Você tem certeza que a lógica de stop por porcentagem não afeta outras partes? Poderia simular um cenário?" ou "Esse código segue as convenções do projeto?". O Claude consegue simular execuções mentalmente ou revisar padrões.

### 5.2 Iterando Correções com o Claude

* **Solicitando Correções:** Se o Claude indicou algum erro ou melhoria necessária, peça a ele para corrigir. Uma forma direta é: _"Por favor, corrija os pontos mencionados."_ Ele então irá entrar em modo edição, alterando os arquivos pertinentes. Por exemplo, se esqueceu de atualizar um teste unitário, ele pode editar o arquivo de teste; se notou uma variável global desnecessária, pode removê-la.
  
  * Você pode ver as edições sendo feitas ao vivo no terminal. O Claude costuma mostrar o diff ou pelo menos informar "Modificado arquivo X, removendo variável Y".

* **Verificação:** Após ele corrigir, você pode pedir: _"Revisão novamente, por favor, para confirmar que todos os pontos foram resolvidos."_ Assim, ele refaz a leitura e te dá um "👍 Agora está tudo de acordo".

* **Relatando um Bug (quando você encontra):** Se, em vez do Claude apontar, **você** encontrar um bug nos testes manuais (como abordaremos adiante), explique a situação claramente para o Claude. Exemplo do caso real: _"Encontrei um problema: o input de retração de Fibonacci sumiu em outra estratégia chamada Gap Trap quando usei o código desse PR. Parece que sua lógica escondeu o input para estratégias que não têm seletor de stop. Precisamos corrigir isso."_  
  Ao dar esse contexto, o Claude entende que há um bug de regressão e vai pensar em como ajustar.

* **Brainstorm com o Claude:** Em cenários de bug complexo, você pode usar o Claude para debater soluções. Pergunte _"Qual seria uma forma de corrigir isso mantendo as duas funcionalidades?"_ Muitas vezes ele oferecerá a solução direto (como no exemplo, ele propôs mostrar o input de Fibonacci apenas se a estratégia não tiver seletor ou se tiver e a opção Fibo estiver selecionada).

* **Implementando a Correção:** Diga ao Claude para aplicar a solução: _"Por favor, implemente essa correção no código."_ Ele então vai editar os arquivos necessários. No bug de regressão, provavelmente editaria o componente UI do stop para adicionar a condicional adequada.

* **Teste após Correção:** Terminada a edição, **teste novamente** (manual ou rode os testes automatizados, se houver) para ver se o bug foi de fato resolvido e se nada mais quebrou. No exemplo, verificar que o input Fibonacci voltou na Gap Trap e que na Breakout o seletor novo continua ok.

### 5.3 Finalização da Revisão

* **Conferência Final:** Agora tanto o Codex quanto o Claude contribuíram. Dê mais uma passada geral no diff do PR, talvez abrindo no GitHub ou usando `git diff` localmente, só para certificar-se de que você entende as mudanças e elas atendem à tarefa. Lembre-se: a decisão de aprovação é sua. Se algo não lhe agradar (talvez o estilo do código, ou você saiba uma forma melhor), pode pedir refatorações ao Claude também. Ex: "Poderia melhorar o nome dessas funções para ficar mais claro?" – ele consegue renomear em cascata, etc.

* **Commit & Push via Claude:** Supondo que o Claude implementou correções e testamos tudo local, precisamos mandar essas alterações para o GitHub, atualizando o PR. Você pode fazer isso manualmente (git add, git commit, git push) ou simplesmente pedir ao Claude para fazê-lo. Se optou por configurar o **`protocol.md` de commits (ver seção 8)**, basta dizer: _"Execute o protocolo de commit"_. Sem isso, pode dizer: _"Commita e faz push das mudanças, mensagem: 'Correção de bug de visibilidade do input Fibonacci'"_.  
  Atenção: a primeira vez que o Claude tentar fazer _push_ para GitHub, ele pode pedir sua confirmação e salvar as credenciais (token do GH CLI) no `settings.local.json` dele. Autorize se for o caso. Depois, ele executará: `git add .`, `git commit -m "mensagem"`, `git push`. Você verá essas saídas no terminal.

* **PR atualizado:** No GitHub, o PR agora incluirá seus novos commits de correção. Ótimo! Se estava rodando CI, rode novamente para garantir tudo verde.

* **Aprovação do PR:** Neste ponto, o Claude já serviu como revisor automatizado, mas é recomendável você também aprovar formalmente no GitHub (caso use o sistema de review do GitHub). Adicione um comentário "Revisado e testado, tudo ok." e aprove o PR.

* **Merge:** Faça o **merge** do Pull Request para integrar as mudanças na branch principal (geralmente `main` ou `dev`). Isso pode ser via GitHub web ou usando `gh pr merge`. Parabéns, a feature/bugfix passou por todo o ciclo!

Se tiver mais PRs pendentes (por ex, se rodou 4 versões ou múltiplas tarefas), você pode repetir o processo para cada um, até esgotar a fila de tarefas delegadas.

**➤ Outras utilidades do Claude Code durante o desenvolvimento:**

* **Exploração de Código:** Você pode perguntar ao Claude: "Explique o que essa função faz..." ou "Liste todos os lugares onde a variável X é usada." Ele tem contexto local e pode realizar essas buscas, servindo como uma busca inteligente no código.

* **Refatoração Local:** Se você mesmo escrever um código e quiser melhorar, peça ao Claude sugestões ou use comandos do Cursor para refatorar. O Claude Code entende sua base e pode propor refatorações seguras.

* **Executar Testes/Comandos:** O Claude pode rodar comandos shell também (lembrando que ele pedirá confirmação se for a primeira vez para segurança). Então você pode dizer: "/run pytest" para rodar testes, ou "/run npm start" para iniciar o servidor, e ele fará isso, mostrando a saída. Isso ajuda a integrar ações no seu workflow conversacional.

* **Dois modos (Avançado):** Como citado, alguns desenvolvedores usam **duas instâncias do Claude Code simultaneamente**: uma para _planejamento/discussão_ (onde não executa nada automaticamente, apenas conversa) e outra em modo _execução automática_ (usando um comando `/auto-accept` para ele não pedir confirmação em cada ação). Essa divisão permite, por exemplo, debater o design de uma solução em um lado, e no outro lado ir implementando rapidamente. Para iniciantes, não é necessário, mas fica a dica se evoluir no uso.

Ao finalizar a revisão e correção com o Claude, você deve ter um código de qualidade significativamente melhor do que apenas com a primeira saída do Codex. Porém, ainda há um passo _crucial_ que mencionamos: **testar manualmente e garantir que nada foi quebrado**. É sobre isso que falaremos a seguir.

6. 🐞 Dicas para Testes Manuais e Detecção de Bugs

--------------------------------------------------

Mesmo com duas IAs trabalhando no código, **testes manuais continuam indispensáveis**. Afinal, as IAs operam com informações limitadas e podem não ter a compreensão completa do contexto ou do negócio para pegar certos problemas. Nesta seção, vamos abordar boas práticas de teste após as IAs gerarem e revisarem o código, e como identificar bugs – especialmente os famosos _bugs de regressão_ (quando algo que funcionava antes quebra após uma mudança).

**➤ Por que testar manualmente?**

* As IAs podem verificar lógica e sintaxe, mas **não têm como experimentar a aplicação como um usuário real** ou ter certeza de como diferentes componentes interagem em tempo real.

* Elas também podem _não conhecer totalmente as intenções do sistema além do que você informou_. Um bug pode surgir em área que não estava no radar do prompt nem da revisão (ex: um efeito colateral em outro módulo).

* Portanto, cabe a você, desenvolvedor humano, fazer o papel de **QA (Quality Assurance)** final, validando em um ambiente real que tudo está se comportando.

**➤ Quando testar:**

* **Após a geração inicial do Codex, antes de aprovar o PR:** Isso ajuda a pegar problemas grandes cedo. Contudo, você pode optar por primeiro rodar a revisão do Claude e só depois testar – já que o Claude pode corrigir algumas coisas.

* **Certamente após o Claude aplicar correções:** Sempre que mudanças são feitas (seja por IA ou por você), execute novamente o sistema para ver se o bug foi realmente resolvido e se não surgiram outros.

* **Antes do merge final:** Faça um _pente-fino_ final. Se possível, teste em um ambiente local idêntico ao de produção para ver se tudo está ok, especialmente se for algo crítico.

### 6.1 Testando a Nova Funcionalidade

Vamos supor o cenário: adicionamos a opção de stop por porcentagem na estratégia Breakout. Como testar?

* **Levantar a Aplicação:** Inicie seu servidor/backend e frontend localmente. Isso pode ser via scripts (ex: `npm start` para front, `flask run` ou similar para back) ou via docker, depende do projeto. O importante é ter um ambiente rodando com as alterações aplicadas (lembre-se de estar na branch do PR).

* **Fluxo Principal:** Navegue até a parte da aplicação relacionada à mudança. No exemplo, acessaríamos a página da estratégia _Breakout_ na interface.

* **Verificar presença da mudança:** Veja se o novo elemento aparece. Deve existir agora um seletor "Tipo de Stop" com as opções novas. Se não aparece nada, é sinal de problema (talvez front não implementado corretamente).

* **Testar funcionalidade em si:**
  
  * Selecione "Porcentagem" como tipo de stop. Insira um valor (ex: 5%).
  
  * Rode a ação que usa esse parâmetro (no contexto de finanças, talvez executar um _backtest_ da estratégia).
  
  * Observe o resultado: o stop loss foi aplicado conforme porcentagem? Os cálculos fazem sentido (ex: perda máxima de 5%)?
  
  * Depois, selecione "Retração de Fibonacci" e rode novamente, para garantir que o comportamento antigo ainda funciona.

* **Testar limites e casos de erro:** Tente valores estranhos: porcentagem zero, porcentagem 100, valores negativos ou acima de 100, etc., se fizer sentido. O sistema lida bem? (pode ser que esse tipo de validação não foi pedida ao Codex, mas você como humano pode verificar se seria necessário).

* **Usabilidade e Integração:** O novo seletor está bem posicionado? Label correta, nenhuma sobreposição de layout? Parece trivial, mas IAs às vezes colocam textos em inglês ou fora do padrão – aproveite para notar isso.

Tudo funcionando na Breakout? Ótimo, a nova feature parece ok. Mas não pare aí.

### 6.2 Teste de Regressão – Não quebrei nada em outro lugar?

**Regressão** é quando, ao adicionar ou modificar uma funcionalidade, algo que _já existia e funcionava_ passa a falhar. No caso ilustrativo, o desenvolvedor suspeitou que a mudança poderia afetar outras estratégias de trading que usam componentes de stop similares. Essa intuição é algo que o humano traz, pois conhece o domínio do sistema.

Para identificar possíveis regressões:

* **Pense em componentes compartilhados:** Se modificamos um componente ou lógica que é usada em outros lugares, esses lugares são candidatos a terem sido afetados. Ex.: alteramos o componente `FibonacciRetracementInput` para acomodar o novo seletor – será que outras estratégias que usam `FibonacciRetracementInput` sem ter seletor agora quebraram? (Spoiler: sim, aconteceu).

* **Liste cenários correlatos:** No exemplo, quais estratégias ou telas também usam stops? Havia menção a uma tal "Gap Trap". Então teste a estratégia Gap Trap:
  
  * Na versão antes das nossas mudanças (por exemplo, em produção ou na branch principal sem o PR), veja como era: provavelmente ela mostrava um input de Fibonacci normalmente.
  
  * Agora, com nosso código novo rodando local, acesse Gap Trap.
  
  * ☑ **Verifique:** O input de Fibonacci **desapareceu?** Foi o que ocorreu no caso real. Se sumiu algo que antes aparecia, bingo, encontramos uma regressão.

* **Teste funcionalidades gerais:** Além dos pontos diretamente ligados, é bom rodar pelo menos um _smoke test_ no app: navegar em páginas principais, executar uma funcionalidade central, só para ver se nada dá erro no console ou terminal. Às vezes, uma mudança quebra algo distante (um exemplo: removendo uma função utilitária que outras partes chamavam).

* **Logs de erro:** Fique de olho no terminal e no console do navegador. Erros de JavaScript ou Python exceptions pipocando indicam problemas.

* **Testes automatizados:** Se o projeto tiver suite de testes, rode-os (`npm test`, `pytest`, etc.). Eles podem pegar regressões lógicas. No mundo ideal, o CI no PR já rodaria isso, mas não custa executar localmente também.

No caso prático, o teste de regressão revelou um bug: **o input de Fibonacci sumiu nas estratégias que não foram adaptadas para o seletor**. Isso aconteceu porque o Codex, ao implementar o novo seletor, provavelmente alterou o componente base para que, se não houver seletor, não renderize o input. Gap Trap não tinha o seletor, então ficou sem input algum.

### 6.3 O que fazer ao encontrar um bug?

Encontrou um bug? Não entre em pânico – o workflow com IA lida bem com isso:

* **Documente o bug:** Anote exatamente o sintoma e em que condições acontece. No nosso ex: "Ao abrir estratégia Gap Trap (que não deveria ter o seletor de tipo de stop), o campo de configuração de stop não aparece mais."

* **Tente entender a causa:** Dê uma olhada no código modificado relacionado. Você pode abrir o componente e rapidamente ver: "Ah, o Codex adicionou uma condição `if (temSeletorStop) então... else não mostra nada`." Claramente isso quebra os casos sem seletor.

* **Use o Claude para corrigir:** Como já vimos na seção anterior, explique para o Claude o bug e a provável causa. Muitas vezes você já pode sugerir a solução ou perguntar se ele tem alguma. No nosso exemplo, a solução era condicionar a exibição: se estratégia não tem seletor, mostrar input sempre; se tem seletor, mostrar só quando tipo "Fibo" for escolhido.

* **Valide a correção:** Depois do Claude corrigir o código, rode novamente os testes manuais: volte na Gap Trap e Breakout e confirme que agora:
  
  * Gap Trap mostra seu input de Fibonacci (regressão corrigida).
  
  * Breakout continua mostrando o seletor e input quando devido.
  
  * Nenhum novo erro surgiu (testar mais uma ou duas estratégias similares não custa).

### 6.4 Dicas gerais de teste no workflow IA

* **Conheça seu domínio:** Quanto mais você conhecer as partes do sistema e possíveis impactos, melhor vai direcionar seus testes. A IA não sabe, por exemplo, que a Gap Trap existia se você não mencionou. Sua experiência no software complementa a inteligência artificial.

* **Teste incremental:** Para tarefas muito grandes, talvez seja interessante integrar e testar em partes. Por exemplo, se Codex devolvesse uma mudança gigantesca, você poderia quebrar em dois PRs para testar passo a passo. Mas isso é um refinamento de processo.

* **Tempo de teste é tempo ganho:** Pode parecer que testar manualmente tira a vantagem de velocidade das IAs. Mas lembre-se, elas tiraram de você o fardo de escrever e a maior parte de pensar na implementação. Sobra mais tempo e energia para você se dedicar a pensar em cenários de teste e melhorias. _Testing ainda é essencial_, mesmo que as IAs evoluam.

* **Automatize sempre que possível:** Com o tempo, tente adicionar testes automatizados para as funcionalidades, pois na próxima rodada a IA codando algo pode rodar os testes e ver de cara se quebrou algo (isso se integrarmos bem com CI). O autor do vídeo não foca muito em testes automatizados, mas numa aplicação real de time, integrar isso no pipeline IA->PR->CI é poderoso.

Concluindo: use as IAs para agilizar codar e revisar, mas **confie nos seus testes para validar a entrega**. Esse equilíbrio garante alta velocidade _e_ alta qualidade.

Após passar pela codificação (Codex), revisão/correção (Claude) e testes (você), provavelmente teremos funcionalidades sólidas. Vamos agora explorar uma faceta mais avançada do workflow: o uso do **O3 Pro e da engenharia de contexto com Repo Prompt** para tarefas complexas.

7. 🚀 Como Usar O3 Pro e Engenharia de Contexto com Repo Prompt

---------------------------------------------------------------

Conforme você ganha confiança com o workflow, aparecerão situações mais **complexas**: talvez um bug muito difícil, ou uma refatoração grande envolvendo múltiplos módulos, ou comparar várias soluções de IA para escolher a melhor. Nesses casos, entra o **O3 Pro** aliado ao **Repo Prompt** e técnicas de engenharia de contexto.

**➤ Quando acionar o O3 Pro?**

* Quando nem o Codex nem o Claude isoladamente parecem dar conta de resolver satisfatoriamente um problema complexo.

* Ao lidar com mudanças que envolvem **muitos arquivos ou partes interdependentes** do sistema (ex: uma refatoração arquitetural).

* Para obter uma **segunda opinião de alto nível** sobre soluções propostas pelas IAs mais simples. Ex: você rodou 4 versões no Codex para uma feature difícil e quer que um "especialista" analise qual versão é melhor ou junte o melhor de cada.

O O3 Pro, como dito, provavelmente é um modelo GPT-4 super-turbinado com grande janela de contexto. Ele pode ingerir uma quantidade enorme de informação (vários arquivos inteiros) e ainda assim produzir código ou análises coerentes.

### 7.1 Preparando o Terreno: Repo Prompt Avançado

Para extrair o melhor do O3 Pro, você vai **alimentá-lo com tudo de relevante**. Aqui o Repo Prompt é indispensável.

* **Selecione os arquivos cruciais:** Suponha que temos uma _Feature Complexa_ para implementar, como no vídeo do autor: tornar um campo de projeto clicável em uma lista de tarefas (isso envolvia backend, frontend, etc.). Quais arquivos do projeto participam disso? Modelos, componentes de UI, endpoints... Abra o Repo Prompt e marque todos os arquivos envolvidos. Se for uma refatoração de um módulo, selecione todos os arquivos daquele módulo.

* **Inclua contexto de tentativas anteriores (se houver):** Um caso interessante é quando você já tem _múltiplas versões de solução_ (por exemplo, várias branches feitas pelo Codex) e quer que o O3 Pro escolha a melhor. No vídeo, o autor **tirou screenshots das 4 implementações do Codex** e alimentou isso também. Você pode fazer algo semelhante: se tiver 2 ou mais variantes de código, pode inseri-las no prompt (talvez como `<alternative1>` `<alternative2>`). Ou, se for texto, copie os diffs ou códigos relevantes de cada versão dentro de seções separadas.

* **Escreva instruções claras:** Explique ao O3 Pro o que você quer que ele faça com esse monte de contexto:
  
  * _Ex 1:_ "Aqui estão 4 implementações sugeridas para a funcionalidade X (marcadas como Versão A, B, C, D). Por favor, analise cada uma, compare os méritos e problemas, e proponha uma implementação final otimizada combinando as melhores ideias."
  
  * _Ex 2:_ "Quero refatorar o módulo Y para melhorar desempenho. Aqui estão os arquivos atuais do módulo. Identifique problemas e reescreva o código de forma mais eficiente mantendo a mesma funcionalidade."
  
  * _Ex 3:_ "Temos um bug muito complexo que envolve várias partes: [descrição]. Aqui estão os arquivos possivelmente envolvidos. Analise e tente encontrar a causa e corrigir."

* **Formato do Prompt:** O Repo Prompt vai estruturar tudo bonitinho em blocos de `<file name="..."> ... </file>` para cada arquivo selecionado. Isso ajuda o O3 Pro a navegar. Se incluiu comparações de versões, talvez insira você manualmente separadores e títulos no prompt.

* **Verifique tamanho:** Modelos como GPT-4 suportam muitos tokens, mas têm limite. Tente não exceder muito (dificilmente o Repo Prompt deixaria, talvez ele avise se for demais).

### 7.2 Executando o O3 Pro

* **Enviar o Prompt:** No ambiente do O3 Pro (pode ser via Cursor se tiver integração, ou copiando e colando no ChatGPT GPT-4), envie o prompt montado. Tenha paciência: modelos grandes demoram alguns minutos.

* **Processamento e Resultado:** O O3 Pro vai digerir todo o material e produzir uma saída. No exemplo do vídeo, após ~10 minutos ele escolheu a melhor implementação entre as 4 e retornou um código final consolidado. Em uma refatoração, ele pode retornar vários trechos de código reescritos. Em uma análise de bug complexo, ele pode devolver um relatório explicando a causa e dando patch de código.

* **Examinar e Aplicar Resultado:** Trate a resposta do O3 Pro como você trataria a do Codex, mas sabendo que ela considerou muito mais contexto:
  
  * Se for código, você pode colocar esse código em um branch novo ou substituir na branch atual.
  
  * É comum que você precise _copiar e colar_ as mudanças manualmente, pois o O3 Pro não necessariamente abre um PR automaticamente. (A não ser que você integre via API e automatize isso, mas não é trivial).
  
  * O O3 Pro às vezes explica as razões de cada mudança, o que é ótimo para aprendizado e para confiança no que foi feito.

* **Revisão final com Claude:** Mesmo depois do O3 Pro, é sábio passar o resultado pelo Claude Code para double-check final. O Claude pode pegar alguma coisinha ou simplesmente confirmar que está tudo ok, dado que agora a mudança veio possivelmente volumosa. No vídeo, após o O3 Pro dar a implementação final, o autor cria o PR e roda o Claude Code de novo para revisar.

* **Testes:** Teste manualmente de novo, claro! Principalmente se foi uma mudança ampla.

**➤ Exemplo prático de uso do O3 Pro (refatoração):**  
Imagine que você tem um arquivo enorme `analytics.py` com funções confusas, e quer refatorar. Com Repo Prompt, você insere todo o conteúdo de `analytics.py` e pede: "Refatore este código para melhorar legibilidade e eficiência, sem alterar comportamento. Explique suas mudanças." O O3 Pro pode então devolver o código reorganizado em funções menores, removendo duplicações, etc., junto com explicações. Isso seria difícil de conseguir com modelos menores devido ao tamanho do arquivo, mas o O3 Pro consegue. Depois, é só substituir o arquivo antigo pelo novo e testar.

**➤ Contexto é tudo:** Essa seção ilustra o conceito de **Engenharia de Contexto** que mencionamos. O Repo Prompt permite alimentar as IAs com _muitos dados do projeto_ de forma estruturada. Líderes da indústria argumentam que muitas vezes o que faz uma IA dar a melhor resposta não é "prompt bonito", e sim ter **acesso às partes relevantes do problema**. Ao dominar o uso de ferramentas como Repo Prompt, você está equipando as IAs com conhecimento quase tão completo quanto o seu sobre o sistema, o que leva a soluções mais acertadas.

**➤ Custo e parcimônia:** Uma nota: usar modelos como O3 Pro/GPT-4 para engolir centenas de linhas de código pode ser caro em termos de tokens (e $$ se estiver pagando por API). Então, use-os quando necessário, mas não para trivialidades. Para pequenas coisas, Codex e Claude dão conta. Para aquele _hard bug_ ou grande redesign, aí sim vale a pena chamar o "big AI".

Resumindo, o O3 Pro é seu **trunfo para os desafios difíceis** – apoiado pela capacidade de fornecer **contexto extenso via Repo Prompt**. Com isso, cobrimos até cenários avançados. Resta agora falar de algumas práticas de automação extra que facilitam o dia a dia, como o uso de arquivos de protocolo para não repetir comandos.

8. 🤖 Automatização de Fluxos com Arquivos de Protocolo (ex: `protocol.md`)

---------------------------------------------------------------------------

Além de escrever e revisar código, podemos usar as IAs para **automatizar tarefas repetitivas do fluxo de desenvolvimento**. Uma técnica poderosa demonstrada pelo autor foi o uso de um arquivo de **protocolo** (geralmente chamado `protocol.md`) para padronizar sequências de comandos. Vamos entender como isso funciona e como você pode aplicá-lo.

**➤ O que é um arquivo de protocolo?**  
É basicamente um arquivo de texto (Markdown) que contém uma série de instruções/comandos que representam um mini-workflow. Por exemplo, um protocolo de commit poderia listar: _git add_, _git commit_, _git push_. A ideia é que, em vez de você ou a IA ter que lembrar e digitar esses comandos toda vez, você mantém tudo documentado e simplesmente pede: "siga o protocolo X".

No contexto do Claude Code:

* Você pode criar um arquivo `protocol.md` dentro do repositório (ou vários, um para cada rotina).

* Dentro dele, colocar passo a passo o que deve ser feito, possivelmente até com explicações.

**Exemplo: `protocol.md` para Commit & Push**:

`# Protocolo de Commit e Push  1. Adicionar todos os arquivos modificados ao staging:`

git add -A

`2. Fazer commit das alterações com uma mensagem descritiva:`

git commit -m "Mensagem do commit"

`3. Enviar o commit para o repositório remoto (push):`

git push

_(No arquivo real, não precisa enumerar como lista MD se não quiser; pode ser apenas linhas de comandos. O importante é estar claro.)_

* Você pode incluir placeholders ou notas, tipo "Mensagem do commit: descreva brevemente a mudança".

**➤ Usando o protocolo com o Claude Code:**

* No chat/CLI do Claude, você pode simplesmente dizer: _"Por favor, abra o arquivo `protocol.md` e siga os passos para realizar o commit com a mensagem 'implementa feature X'."_

* O Claude então vai ler o arquivo, reconhecer os comandos e executá-los um a um. Esse "script" pré-escrito garante que nada seja esquecido. Ele deve:
  
  1. Executar `git add -A` (adiciona todos os arquivos).
  
  2. Executar `git commit -m "implementa feature X"` (ou similar; se você não passou a mensagem, talvez ele pergunte ou use uma default).
  
  3. Executar `git push`.

* Em poucos segundos, pronto: seu código está commitado e no GitHub.

**➤ Vantagens:**

* **Consistência:** Sempre os mesmos passos, mesma ordem. Reduz risco de esquecer um comando ou fazer numa branch errada.

* **Economia de tempo:** Você não precisa digitar manualmente nem lembrar os comandos; com uma frase você dispara todo o processo.

* **Compartilhável:** Esse arquivo pode ser versionado no repo. Sua equipe inteira pode usar. E se quiser mudar o processo (ex: adicionar um `npm run lint` antes do commit), basta atualizar o protocolo, e todos os futuros usos seguirão o novo procedimento.

* **Reutilizável:** Pode haver vários protocolos: um para commit, outro para fazer deploy, outro para resetar banco de dados, etc. Tudo que seja sequência padronizada você pode transformar num protocolo.

No vídeo, aos 06:10, o autor mostra exatamente o caso de usar o `protocol.md` para commit e push, economizando tempo na rotina de commits. E nos _insights avançados_, ele destaca que isso cria sub-workflows reutilizáveis invocados simplesmente pedindo pra IA seguir o arquivo – com consistência e menos erros manuais.

**➤ Criando seu protocolo:**

* Identifique uma tarefa repetitiva. Commit/push é uma, deploy é outra (poderia incluir construir o projeto, rodar testes, então fazer push, etc.).

* Crie um arquivo .md (pode ser no raiz do projeto ou numa pasta `.protocols/` se preferir organizar).

* Escreva as etapas claramente. Se alguma ação requer confirmação (ex: "tem certeza de que quer dar push?"), você pode colocar isso no protocolo ou apenas saber que o Claude vai te perguntar de qualquer jeito na primeira vez.

* Teste com cuidado a primeira vez para ver se o Claude entende bem o arquivo. Ele tende a executar literalmente os comandos listados, então garanta que está tudo correto e na ordem certa.

☑ **Exercício sugerido:** Uma recomendação do autor é exatamente _criar seu próprio `protocol.md` no projeto e tentar fazer o Claude executá-lo_. Isso sedimenta o aprendizado. Por exemplo, faça um protocolo para rodar os testes e depois abrir o relatório de cobertura. Ou um para limpar caches e reiniciar o servidor.

**➤ Segurança ao automatizar:**  
Tenha cuidado com comandos perigosos. No arquivo de protocolo, evite colocar algo destrutivo (como `git reset --hard` ou `rm -rf node_modules`). Se precisar de um protocolo que inclua isso, tenha certeza absoluta e talvez comente no arquivo para o usuário (você) confirmar antes de mandar o Claude executar. Lembre-se que o Claude Code tem um mecanismo de segurança: você pode proibir certos comandos criando um `claude.json` de configuração. Então mesmo que sem querer listasse algo como `git push --force`, se você o banir no config, o Claude não fará.

**➤ Outras automações possíveis:**

* **Integração com n8n ou outros**: Fora do escopo do código em si, mas o autor do vídeo menciona usar ferramentas de automação (como n8n) para orquestrar tarefas com IAs e outros serviços. Por exemplo, monitorar agenda e mandar tarefas para IA. Isso mostra que pensar em automação pode ir muito além. Entretanto, para nosso guia focado em dev, `protocol.md` + Claude já traz bastante automação no fluxo CI/CD dev.

* **GitHub Actions com IA:** Citando de novo, há a Claude GitHub Action que revisa PRs automaticamente quando abertos, e o Cursor tem o "Bug Bot" nos PRs. Isso significa que, se configurar, nem precisa pedir manualmente review – quando o Codex abrir o PR, o Action roda o Claude e posta comentários no PR. Legal, né? Só que precisa de configuração de API, etc., e talvez pagamento. É bom saber que existe para futuros aprimoramentos do seu workflow.

Com protocolos automatizados, você delega não só o código em si, mas também a **esteira de operações** para as IAs, mantendo você focado no que importa (definir o que fazer e verificar o resultado). Realmente a ideia é tornar a programação quase _gerencial_: você diz o quê e as IAs fazem o como. Claro que simplifico – na prática, você ainda intervém bastante – mas comparado ao método tradicional, é um ganho enorme.

Na próxima seção, vamos compilar um **Checklist de erros comuns e suas soluções**. Isso serve como referência rápida caso você ou um colega se depare com problemas ao adotar esse workflow.

9. 🚑 Checklist de Erros Comuns e Soluções

------------------------------------------

Ao trabalhar com múltiplas IAs e ferramentas novas, é normal topar com alguns problemas recorrentes. Nesta seção compilamos uma lista de **sintomas/erros comuns** que você pode enfrentar e as **prováveis soluções** para cada um. Use isto como um guia de depuração rápida caso algo saia do esperado.

* **Sintoma:** _O componente ou funcionalidade de UI some em partes do app após implementar uma mudança._  
  **Causa Provável:** Bug de **regressão** – uma alteração feita para uma feature específica não levou em conta outros lugares onde aquele componente/código é usado, quebrando a funcionalidade nesses locais.  
  **Solução:** Ajustar o código para ser **retrocompatível**. Muitas vezes, adicionar condicionais ou tratamento separado para o caso antigo e o novo. Por exemplo, no bug do input Fibonacci que sumiu, a correção foi condicionar a exibição do input: mostrar se a estratégia _não_ tiver seletor (caso antigo) ou se tiver seletor e a opção "Fibonacci" estiver escolhida (caso novo). Em suma, cobrir ambos os cenários no código.

* **Sintoma:** _O Codex ou Claude gera um código nada a ver com o projeto, ou parece "perdido" na resposta._  
  **Causa Provável:** Prompt com **pouco contexto** ou muito genérico. A IA não recebeu informações suficientes sobre a estrutura do código ou sobre o que exatamente fazer, então "chutou" uma solução padrão que pode não se aplicar.  
  **Solução:** **Enriqueça o prompt.** Dê mais detalhes específicos: mencione nomes de arquivos, estruturas existentes, exemplos concretos do que quer. Use ferramentas como o Repo Prompt para incluir trechos relevantes do código como referência. Lembre-se: contextualizar bem a IA evita viagens fora do escopo.

* **Sintoma:** _O Codex fica travado no status "Setting up environment" ou demora demais sem dar resposta._  
  **Causa Provável:** Pode ser um bug na interface do Codex/ChatGPT ou instabilidade do serviço. Em alguns casos relatados, a tarefa estava rodando mas a UI não atualizou o status.  
  **Solução:** **Reenviar a tarefa ou esperar um pouco.** Se após ~15 min nada acontecer, cancele e submeta novamente o prompt. No vídeo, o autor refez a requisição e então o resultado apareceu normalmente. Também verifique sua conexão internet e se não estourou limites de uso. Como contingência, poderia tentar dividir a tarefa em partes menores.

* **Sintoma:** _O código gerado funciona, mas foge do padrão/arquitetura do projeto (ex: criou um arquivo novo em vez de reutilizar um existente)._  
  **Causa Provável:** Falta de **supervisão de engenharia**. A IA otimizou para resolver o problema imediato sem considerar as convenções ou design geral do projeto. Isso acontece se o prompt não enfatizou o estilo desejado e se o revisor (Claude) também não foi instruído a avaliar arquitetura.  
  **Solução:** Envolva o **olhar humano de arquiteto**. Se notar algo estranho, peça ao Claude para refatorar seguindo os padrões do projeto. Ou ajuste você mesmo e explique no prompt que certas abordagens não são aceitáveis. Com o tempo, alimente a IA com documentos de estilo do projeto se houver (pode até inserir trechos dessas diretrizes via Repo Prompt). E, claro, **vá refinando as IAs** – por exemplo, diga ao Codex explicitamente "não criar arquivos novos sem necessidade, use os existentes". A IA aprende se você for dando feedback.

* **Sintoma:** _Erro de permissão (EACCES) ao instalar o Claude Code com npm, especialmente no macOS/Linux._  
  **Causa Provável:** Tentar instalar o pacote global com um usuário sem perms ou com pasta npm protegida; usar `sudo` pode causar arquivos com dono root, complicando depois.  
  **Solução:** Não usar `sudo npm install -g` direto. Em vez disso, corrija as permissões da sua pasta do npm (geralmente `~/npm` ou use `npm config get prefix` para achar o path). Uma solução prática é instalar/usar o **Node Version Manager (nvm)**, que deixa instalações globais no seu home sem precisar de sudo. Assim, `npm install -g @anthropic-ai/claude-code` vai rodar suave. Documentações do Claude também recomendam isso.

* **Sintoma:** _O Claude Code executou um comando potencialmente perigoso sem você querer (ex: `git reset --hard`)._  
  **Causa Provável:** Falha de controle ou um comando mal interpretado. O modelo pode ter interpretado algo no prompt como instrução para rodar um comando destrutivo. Por padrão, ele pede confirmação para coisas no primeiro uso, mas se estava em modo auto ou já confirmado, pode acontecer.  
  **Solução:** Use o arquivo de configuração do Claude Code para **restringir comandos perigosos**. Crie um `claude.json` na raiz do projeto com algo como:
  `{   "blocked_commands": ["git reset --hard", "git push --force", "rm -rf"] }`
  (O formato exato veja na documentação do Claude Code). Isso impede esses comandos de serem executados mesmo que solicitados. Além disso, mantenha atenção ao que pede – evite solicitar algo que o Claude possa traduzir para um comando arriscado.

* **Sintoma:** _Custos de API subiram drasticamente inesperadamente._  
  **Causa Provável:** Uso inadvertido de modelos muito caros para tarefas triviais ou muitas chamadas desnecessárias. Por exemplo, usar o modelo mais potente (Claude Opus ou GPT-4) para toda e qualquer interação, ou esquecer uma instância do Claude rodando em modo que consome tokens sem necessidade.  
  **Solução:** **Monitore o uso de tokens/horas** nas plataformas (OpenAI e Anthropic têm dashboards). Ajuste sua estratégia:
  
  * Use modelos menores para interações simples (como já sugerido, troque para `sonnet-3.5` no Claude Code quando estiver só conversando ou fazendo pequenos edits).
  
  * Reserve o GPT-4/O3 Pro para as big tasks.
  
  * Talvez defina cotas: ex, no ChatGPT Plus você tem limite de msgs GPT-4 por 3h – planeje usar sabiamente.
  
  * Se sua empresa pagar por API, converse sobre limites mensais e alerte se for estourar. No vídeo, o autor justifica o alto custo com grande ganho de produtividade, mas cada caso é um.

* **Sintoma:** _A IA não encontra o arquivo ou função que você claramente sabe que existe._  
  **Causa Provável:** Prompt muito vago, ou nome referenciado incorretamente. Às vezes a IA busca por um termo no index e não acha se você escreveu diferente. Ex: você disse "arquivo config", mas o nome é "configuration.py".  
  **Solução:** Seja **preciso nos nomes** quando souber. E use ferramentas: se for muita coisa, gere um contexto com Repo Prompt incluindo aquele arquivo, assim não tem erro – a IA _vai ver o arquivo_. Outra ideia: você pode usar o próprio Claude Code para listar arquivos (ex: perguntar "Liste arquivos relacionados a X") e aí pegar o nome exato para usar no prompt.

Esse checklist não cobre absolutamente tudo, mas dá uma boa base para solucionar as dores mais comuns ao começar com esse workflow. A chave é: quando algo der errado, **pare e analise friamente** se foi falha de comunicação com a IA, alguma configuração faltante ou bug conhecido das ferramentas. A comunidade em torno dessas IAs está crescendo, então muitos problemas já têm solução documentada em fóruns ou GitHub – uma busca rápida pode ajudar também.

Com isso, estamos chegando ao fim do nosso guia. Para fechar, vamos fornecer algumas **recomendações finais e próximos passos** para você continuar evoluindo no uso dessas ferramentas.

10. 🚀 Recomendações Finais e Próximos Passos

---------------------------------------------

Parabéns por chegar até aqui! Você já aprendeu a configurar ferramentas, delegar tarefas a IAs, revisar código, testar e até usar técnicas avançadas. Nesta última seção, vamos recapitular pontos-chave, dar conselhos finais e sugerir como você pode **aprofundar ainda mais** seus conhecimentos e habilidades nesse novo paradigma de desenvolvimento assistido por IA.

**➤ Continue praticando o workflow em projetos menores:**  
Antes de aplicar direto em um projeto enorme de produção, pratique em um repositório de teste ou em um projeto pessoal. Experimente implementar uma feature simples com Codex + Claude. Depois tente um bug mais cabeludo usando Repo Prompt + O3 Pro (ou GPT-4). Quanto mais você exercitar, mais entenderá os pontos fortes e fracos de cada agente. Uma sugestão do vídeo foi justamente **replicar esse setup** em um projeto de teste – instalar Cursor, configurar Claude, obter acesso ao Codex – e simular o fluxo de PR com ambos IAs.

**➤ Desenvolva a habilidade de "prompting":**  
Escrever prompts é uma arte. Mesmo com contexto, _como_ você pede algo faz diferença. Vá coletando exemplos de prompts que funcionaram bem e reutilize formatos. Por exemplo, você pode criar um pequeno repositório seu de _prompt templates_ – um para gerar feature, um para refatorar, um para gerar testes, etc. Com o tempo, esses modelos aceleram seu trabalho. Lembre-se da lição: contexto rico + instrução clara = melhores resultados.

**➤ Use as IAs também para aprender:**  
Além de mandar codar, use as sessões com IA para tirar dúvidas e entender o que elas estão fazendo. Por exemplo, quando o Claude ou Codex te derem uma solução, pergunte "Você pode explicar por que escolheu essa abordagem?". Muitas vezes virá uma explicação detalhada. Isso é o conceito de _"vibe learning"_ mencionado pelo autor – aproveitar as IAs não só para fazer, mas para **ensinar**. Com isso, você melhora como desenvolvedor e fica menos dependente no longo prazo.

**➤ Mantenha-se atualizado nas ferramentas:**  
Esse campo está evoluindo muito rápido. Novas versões de modelos, novos recursos no Cursor, etc., são lançados com frequência. Uma prática sugerida é começar o dia atualizando as ferramentas CLI – por exemplo, rodar `claude update` para pegar a versão mais recente do Claude Code. Confira também se há updates do Cursor IDE. Modelos de IA novos (Claude 2, GPT-4.5, etc.) podem trazer melhorias significativas; fique de olho nos anúncios da OpenAI e Anthropic. Participar de fóruns ou comunidades (como a comunidade "The New Society" que o autor menciona) pode te manter por dentro das novidades e boas práticas.

**➤ Explore leituras e docs oficiais:**  
Aprofunde seu conhecimento consultando as documentações oficiais:

* Documentação do **Claude Code** – para entender todos os comandos, configuração de segurança etc..

* Docs do **Cursor IDE** – lá você encontra dicas de uso avançado, integração com diferentes modelos, etc..

* Blog/Documentação da **OpenAI (Codex)** – para ver exemplos de uso, limitações, e futuros modelos.

* Conceitos de **Engenharia de Contexto** – busque artigos sobre context length, strategies for providing context. Isso vai te dar sacadas de como preparar ainda melhor prompts para grandes modelos.

* Exemplos de **fluxos CI/CD com IA** – há conteúdo emergindo sobre integrar IAs no pipeline DevOps (por ex, usar uma IA para gerar changelogs, ou revisar código a cada push).

**➤ Amplie para outras áreas aos poucos:**  
Hoje focamos em geração e revisão de código. Mas as mesmas ferramentas podem auxiliar em documentação (resumir trechos de código, gerar docstrings), em gerenciamento de projetos (priorizar tasks via IA), e até em design de software (discutir arquitetura no chat). Sinta-se livre para experimentar o uso dessas IAs nesses aspectos também. A idéia do "Vibe Coding" é abraçar IAs em tudo que puder ajudar na produtividade e criatividade do dev.

**➤ Cautela e ética:**  
Ao adotar IAs, tenha em mente considerações éticas e de segurança:

* Proteja código proprietário/sensível – evite expor segredos (API keys, dados pessoais) nos prompts, principalmente em modelos hospedados na nuvem. Utilize opções on-premise (LLM local via Ollama, etc.) se lidar com código muito confidencial.

* Revise sempre o que será enviado a um modelo. Ferramentas como AnythingLLM permitem rodar local para mais privacidade.

* Esteja atento a vieses dos modelos. O Claude, por exemplo, é mais restritivo com certos assuntos. Isso raramente impacta programação, mas é bom saber. Use o modelo adequado para o contexto (como sugerido: GPT-4.5 ou Grok para assuntos "delicados" caso precisasse).

**➤ Próximos passos sugeridos (mão na massa):**

1. **Montar seu projeto IA:** escolha um projeto open-source simples no GitHub e tente contribuir com ele usando Codex e Claude. Ex: pegar um bug report e resolver via workflow IA.

2. **Criar um `protocol.md`:** como desafio, implemente um protocolo para **deploy** do seu projeto (por exemplo, compilar algo, rodar migrações e desplugar). Depois veja se o Claude executa direitinho. Isso força você a entender bem os passos e verificar se a IA consegue segui-los.

3. **Refatoração com IA:** pegue um código legado seu que você acha ruim e peça ao Codex ou O3 Pro para refatorar explicando cada mudança. Compare com a versão original e veja se melhorou.

4. **Tente uma integração contínua:** se se sentir confiante, configure a **Claude GitHub Action** no seu repo para ver o Claude comentando nos PRs automaticamente. Ou use o **Cursor Bug Bot** deliberadamente: abra um PR de propósito e veja o que ele marca.

No final das contas, lembre que esse **workflow não substitui você, ele potencia você**. As IAs fazem muita coisa, mas você dirige a direção. Muitos desenvolvedores estão conseguindo entregar funcionalidades em uma fração do tempo tradicional graças a esse tipo de setup, mas os melhores resultados vêm de quem sabe combinar a criatividade humana com a força bruta das máquinas.

Esperamos que este guia lhe dê uma base sólida para iniciar nessa jornada. Com prática e curiosidade, você logo estará adaptando e até melhorando esse workflow para adequar às suas necessidades.

Boa sorte, bons códigos e aproveite seu novo time de "desenvolvedores virtuais"! 🚀👩‍💻👨‍💻

* * *

**Referências (fontes citadas):**

Este tutorial foi elaborado com base em conteúdos do autor do vídeo "TIME DEV com IAs: Codex & Claude" e "Ultimate Vibe Coding Setup: o3 pro, Cursor, Codex, Claude Code", bem como no artigo "_I spend $2,000/mo on AI tools, here are the best ones_", que detalham a integração de diversas ferramentas de IA no desenvolvimento de software. Para mais detalhes, consulte as documentações oficiais do Claude Code, Cursor IDE, OpenAI Codex e materiais sobre engenharia de contexto mencionados ao longo do texto.
