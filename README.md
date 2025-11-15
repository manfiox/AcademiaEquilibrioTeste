# 🏋️‍♂️ Academia Equilíbrio - Website Oficial

Site profissional e moderno para a **Academia Equilíbrio**, localizada em Votorantim/SP. Uma plataforma completa e responsiva que apresenta a academia, suas modalidades, planos e oferece múltiplas formas de contato e interação.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características Principais](#-características-principais)
- [Páginas e Funcionalidades](#-páginas-e-funcionalidades)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Identidade Visual](#-identidade-visual)
- [Recursos Interativos](#-recursos-interativos)
- [Responsividade](#-responsividade)
- [Instalação e Uso](#-instalação-e-uso)
- [Configuração](#-configuração)
- [SEO e Performance](#-seo-e-performance)
- [Acessibilidade](#-acessibilidade)
- [Checklist de Deploy](#-checklist-de-deploy)
- [Suporte](#-suporte)

---

## 🎯 Sobre o Projeto

A **Academia Equilíbrio** é uma academia completa localizada em Votorantim/SP, oferecendo serviços de **Musculação**, **Fisioterapia**, **Muay Thai** e **Zumba**. Este website foi desenvolvido para ser a porta de entrada digital da academia, proporcionando uma experiência moderna e intuitiva para potenciais alunos.

### Objetivos do Site:
- ✅ Apresentar a academia e seus diferenciais
- ✅ Divulgar modalidades e planos disponíveis
- ✅ Facilitar o contato via WhatsApp
- ✅ Permitir agendamento de aulas experimentais
- ✅ Simplificar o processo de matrícula
- ✅ Responsividade total para todos os dispositivos

---

## ✨ Características Principais

### 🎨 Design Moderno
- Interface limpa e profissional
- Animações suaves e interativas
- Paleta de cores sofisticada (Preto Grafite + Dourado)
- Tipografia moderna e legível
- Layout responsivo e adaptável

### 🚀 Performance
- Carregamento otimizado
- Imagens otimizadas para web
- CSS e JavaScript minificáveis
- Lazy loading de recursos
- Código limpo e organizado

### 📱 Mobile-First
- Design pensado primeiro para mobile
- Menu hamburguer responsivo
- Botões e elementos touch-friendly
- Navegação intuitiva em todas as telas

---

## 📄 Páginas e Funcionalidades

### 1. **Página Inicial (`index.html`)**
A página principal apresenta todas as seções principais:

- **Hero Section**: Banner impactante com chamada para ação
- **Barra Motivacional Animada**: Frases motivacionais em destaque
- **Diferenciais**: Cards destacando os principais diferenciais da academia
- **Modalidades Preview**: Cards visuais das 4 modalidades principais
- **Sobre Resumido**: Breve apresentação da academia com estatísticas
- **Planos em Destaque**: Cards com os principais planos disponíveis
- **Nossa Equipe**: Cards dos profissionais
- **Localização e Contato**: Mapa integrado e informações de contato
- **Formulário de Contato**: Integração direta com WhatsApp

### 2. **Sobre Nós (`sobre.html`)**
Página dedicada à história e valores da academia:

- História completa da academia desde 2015
- Missão, Visão e Valores
- Estatísticas animadas (alunos, modalidades, anos de experiência)
- Diferenciais detalhados
- Infraestrutura e equipamentos
- Galeria de imagens (estrutura)

### 3. **Modalidades (`modalidades.html`)**
Página detalhada sobre cada modalidade:

- **Musculação/Fisioterapia**
  - Descrição completa
  - Benefícios detalhados
  - Horários de funcionamento
  - Imagens ilustrativas

- **Muay Thai**
  - Apresentação da arte marcial
  - Benefícios para saúde e condicionamento
  - Horários específicos (Terça, Quinta e Sábado)

- **Zumba**
  - Aulas dinâmicas e animadas
  - Benefícios cardiovasculares
  - Horários (Segunda, Quarta e Sexta)

- **Fisioterapia**
  - Serviços oferecidos
  - Tratamentos personalizados
  - Agendamento individual

### 4. **Planos (`planos.html`)**
Página dedicada aos planos e preços:

- **Planos Disponíveis:**
  - ✅ Mensal: R$ 110,00
  - ✅ Bimestral: 2x R$ 100,00 ou R$ 180,00 à vista
  - ✅ Trimestral: 3x R$ 90,00 ou R$ 240,00 à vista
  - ✅ Semestral: 6x R$ 80,00 ou R$ 430,00 à vista

- Taxa de matrícula: R$ 50,00 (inclui 1ª avaliação física)
- Cards visuais destacando cada plano
- Comparação de valores
- CTA para matrícula

### 5. **Matrícula (`matricula.html`)**
Página dedicada ao processo de matrícula:

- Formulário completo de matrícula
- Campos: Nome, CPF, Telefone
- Seleção de plano
- Validação em tempo real
- Integração com WhatsApp
- Mensagem formatada automaticamente

### 6. **Aula Experimental (`aula-experimental.html`)**
Página para agendamento de aulas experimentais:

- Formulário simples e objetivo
- Seleção de modalidade desejada
- Dados de contato
- Integração com WhatsApp
- Mensagem pré-formatada

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com:
  - Flexbox e Grid Layout
  - CSS Variables (custom properties)
  - Animações e transições
  - Media queries para responsividade
- **JavaScript (Vanilla)**: Interatividade e funcionalidades dinâmicas

### Frameworks e Bibliotecas
- **Bootstrap 5.3.2**: Sistema de grid e componentes
  - Navbar responsiva
  - Sistema de collapse
  - Utilidades e helpers
- **AOS (Animate On Scroll) 2.3.1**: Animações ao fazer scroll
- **Font Awesome 6.4.0**: Biblioteca de ícones
- **Google Fonts**: Tipografia
  - Poppins (principal)
  - Raleway (secundária)
  - Anton (destaques)

### Integrações
- **Google Maps**: Mapa interativo da localização
- **WhatsApp Business API**: Integração para contato direto
- **CDN**: Recursos externos otimizados

---

## 📂 Estrutura de Arquivos

O projeto segue uma estrutura modular e organizada, facilitando manutenção e escalabilidade:

```
AcademiaEquilibrio/
│
├── 📄 index.html                    # Página principal (Home)
├── 📄 README.md                     # Documentação do projeto
├── 📄 INVENTARIO_IMAGENS.md         # Inventário de imagens
│
├── 📁 pages/                        # Páginas secundárias
│   ├── sobre.html                   # Página Sobre a Academia
│   ├── planos.html                  # Página de Planos e Preços
│   ├── modalidades.html             # Página de Modalidades
│   ├── matricula.html               # Página de Matrícula
│   ├── aula-experimental.html       # Página de Aula Experimental
│   └── blog.html                    # Página de Blog (futuro)
│
└── 📁 assets/                       # Recursos estáticos
    │
    ├── 📁 css/                      # Estilos CSS organizados modularmente
    │   ├── styles.css               # Estilos principais globais
    │   ├── responsive.css           # Media queries e responsividade
    │   ├── variables.css            # Variáveis CSS (cores, fontes, espaçamentos)
    │   ├── sobre.css                # Estilos específicos da página Sobre
    │   ├── modalidades.css          # Estilos específicos da página Modalidades
    │   ├── modalidade-individual.css # Estilos para modalidades individuais
    │   └── planos.css               # Estilos específicos da página Planos
    │
    ├── 📁 js/                       # Scripts JavaScript organizados por funcionalidade
    │   ├── script.js                # Script principal (funções gerais)
    │   ├── modal.js                 # Gerenciamento de modais e pop-ups
    │   └── animations.js            # Animações e efeitos visuais
    │
    └── 📁 images/                   # Imagens organizadas por categoria
        ├── logo.svg                 # Logo da academia
        ├── icone.png                # Ícone/Favicon
        │
        ├── 📁 modalidades/          # Imagens das modalidades
        │   ├── musculacao.png
        │   ├── muaythai.png
        │   ├── zumba.png
        │   └── fisioterapia.png
        │
        ├── 📁 planos/               # Imagens relacionadas aos planos
        │   └── (imagens de planos e preços)
        │
        ├── 📁 estrutura/            # Imagens da estrutura física
        │   ├── about.jpg            # Imagem da seção sobre
        │   ├── cardio.png           # Área de cardio
        │   ├── vestiario.png        # Vestiários
        │   └── equipe.png           # Imagem da equipe
        │
        └── 📁 banners/              # Banners e imagens de destaque
            ├── hero-bg.jpg          # Background do Hero Section
            ├── prof1.jpg            # Foto profissional 1
            ├── prof2.jpg            # Foto profissional 2
            ├── prof3.jpg            # Foto profissional 3
            └── prof4.jpg            # Foto profissional 4
```

### 📋 Organização Modular

#### **CSS (Estilos)**
- **`variables.css`**: Centraliza todas as variáveis CSS (cores, fontes, espaçamentos, breakpoints)
- **`styles.css`**: Estilos globais e componentes reutilizáveis
- **`responsive.css`**: Todas as media queries e adaptações responsivas
- **Arquivos específicos**: Cada página tem seu próprio arquivo CSS quando necessário

#### **JavaScript (Funcionalidades)**
- **`script.js`**: Funções gerais (validação, utilitários, inicialização)
- **`modal.js`**: Gerenciamento de modais, pop-ups e overlays
- **`animations.js`**: Animações, scroll effects e transições

#### **Images (Imagens)**
- **Organização por categoria**: Facilita localização e manutenção
- **Nomenclatura clara**: Nomes descritivos e consistentes
- **Otimização**: Imagens já otimizadas para web

### 🔄 Estrutura Recomendada para Novos Arquivos

Ao adicionar novos arquivos, siga esta organização:

```
✅ CSS específico de página → /assets/css/nome-pagina.css
✅ Função JavaScript específica → Criar arquivo em /assets/js/ ou adicionar no apropriado
✅ Imagens de modalidade → /assets/images/modalidades/
✅ Imagens da estrutura → /assets/images/estrutura/
✅ Banners e hero → /assets/images/banners/
```

### 📦 Dependências Externas

As seguintes bibliotecas são carregadas via CDN (não estão na pasta assets):

- Bootstrap 5.3.2 (CSS + JS)
- AOS - Animate On Scroll (CSS + JS)
- Font Awesome 6.4.0 (CSS)
- Google Fonts (Poppins, Raleway, Anton)

### 🔗 Relação Entre Arquivos

#### **Ordem de Carregamento CSS**
```html
<!-- 1. Variáveis (cores, espaçamentos, breakpoints) -->
<link rel="stylesheet" href="assets/css/variables.css">

<!-- 2. Estilos globais (reset, componentes base) -->
<link rel="stylesheet" href="assets/css/styles.css">

<!-- 3. Responsividade (media queries) -->
<link rel="stylesheet" href="assets/css/responsive.css">

<!-- 4. Estilos específicos da página (se necessário) -->
<link rel="stylesheet" href="assets/css/sobre.css">
```

#### **Ordem de Carregamento JavaScript**
```html
<!-- 1. Script principal (funções utilitárias, inicialização) -->
<script src="assets/js/script.js"></script>

<!-- 2. Gerenciamento de modais -->
<script src="assets/js/modal.js"></script>

<!-- 3. Animações e efeitos -->
<script src="assets/js/animations.js"></script>
```

### 📝 Convenções de Nomenclatura

#### **Arquivos CSS**
- **Variáveis**: `variables.css` (kebab-case)
- **Estilos globais**: `styles.css` ou `style.css` (singular/plural consistente)
- **Responsividade**: `responsive.css`
- **Páginas específicas**: `nome-pagina.css` (ex: `sobre.css`, `planos.css`)

#### **Arquivos JavaScript**
- **Principal**: `script.js` ou `main.js`
- **Por funcionalidade**: `funcionalidade.js` (ex: `modal.js`, `form.js`)
- **Utilitários**: `utils.js` ou `helpers.js`

#### **Arquivos de Imagem**
- **Logo/Ícones**: Nome descritivo (ex: `logo.svg`, `icone.png`)
- **Imagens de conteúdo**: Nome descritivo em minúsculas (ex: `hero-bg.jpg`)
- **Organização**: Por categoria em pastas (`/modalidades/`, `/banners/`, etc.)

### 🎯 Benefícios da Estrutura Modular

1. **Manutenibilidade**: Fácil localização e edição de arquivos específicos
2. **Performance**: Carregamento seletivo de CSS/JS apenas quando necessário
3. **Escalabilidade**: Adicionar novos recursos sem afetar código existente
4. **Colaboração**: Múltiplos desenvolvedores podem trabalhar simultaneamente
5. **Debugging**: Problemas isolados em arquivos específicos são mais fáceis de resolver
6. **Reutilização**: Componentes e estilos podem ser reutilizados entre páginas

### 🔄 Migração para Estrutura Modular

Se o projeto ainda não está organizado nesta estrutura, siga estes passos:

#### **1. Reorganizar CSS**

```bash
# Criar estrutura de pastas
mkdir -p assets/css

# Separar estilos em arquivos modulares:
# - Extrair variáveis CSS → variables.css
# - Extrair media queries → responsive.css
# - Manter estilos globais → styles.css
# - Manter estilos específicos → (sobre.css, planos.css, etc.)
```

#### **2. Reorganizar JavaScript**

```bash
# Criar arquivos modulares:
# - Manter funções gerais → script.js
# - Extrair funções de modal → modal.js
# - Extrair animações → animations.js
```

#### **3. Reorganizar Imagens**

```bash
# Criar pastas por categoria
mkdir -p assets/images/modalidades
mkdir -p assets/images/planos
mkdir -p assets/images/estrutura
mkdir -p assets/images/banners

# Mover imagens para pastas apropriadas
mv assets/images/musculacao.png assets/images/modalidades/
mv assets/images/muaythai.png assets/images/modalidades/
mv assets/images/zumba.png assets/images/modalidades/
mv assets/images/fisioterapia.png assets/images/modalidades/

mv assets/images/about.jpg assets/images/estrutura/
mv assets/images/cardio.png assets/images/estrutura/
mv assets/images/vestiario.png assets/images/estrutura/
mv assets/images/equipe.png assets/images/estrutura/

mv assets/images/hero-bg.jpg assets/images/banners/
mv assets/images/prof*.jpg assets/images/banners/
```

#### **4. Criar Pasta Pages (Opcional)**

```bash
# Criar pasta pages para páginas secundárias
mkdir -p pages

# Mover páginas (exceto index.html)
mv sobre.html pages/
mv planos.html pages/
mv modalidades.html pages/
mv matricula.html pages/
mv aula-experimental.html pages/

# ⚠️ ATENÇÃO: Atualizar todos os links internos após mover arquivos!
```

#### **5. Atualizar Links nos HTML**

Após reorganizar, atualize os caminhos nos arquivos HTML:

```html
<!-- Antes (se imagens estavam na raiz de images/) -->
<img src="assets/images/musculacao.png" alt="Musculação">

<!-- Depois (se imagem está em modalidades/) -->
<img src="assets/images/modalidades/musculacao.png" alt="Musculação">
```

```html
<!-- Antes (se páginas estavam na raiz) -->
<a href="sobre.html">Sobre</a>

<!-- Depois (se páginas estão em pages/) -->
<a href="pages/sobre.html">Sobre</a>
```

---

## 🎨 Identidade Visual

### Paleta de Cores

A paleta foi escolhida para transmitir sofisticação, energia e profissionalismo:

| Cor | Código | Uso Principal |
|-----|--------|---------------|
| **Preto Grafite** | `#1A1A1A` | Fundo principal, textos principais |
| **Dourado Queimado** | `#D89B3A` | Destaques, CTAs, elementos interativos |
| **Branco** | `#FFFFFF` | Textos sobre fundos escuros, contraste |
| **Cinza Claro** | `#E0E0E0` | Textos secundários, bordas |
| **Laranja** | `#F37800` | Acentos secundários, elementos especiais |

### Tipografia

- **Fonte Principal**: Poppins (300, 400, 500, 600, 700, 800)
  - Uso: Títulos e textos principais
  - Estilo: Moderna, geométrica, legível

- **Fonte Secundária**: Raleway (300, 400, 500, 600, 700, 800)
  - Uso: Textos longos, descrições
  - Estilo: Elegante, clara

- **Fonte Destaque**: Anton (400)
  - Uso: Títulos impactantes, slogans
  - Estilo: Condensada, forte

### Variáveis CSS

Todas as cores, espaçamentos, fontes e breakpoints estão centralizadas em `assets/css/variables.css`:

```css
:root {
    /* Cores Principais */
    --preto-grafite: #1A1A1A;
    --dourado: #D89B3A;
    --branco: #FFFFFF;
    --cinza-claro: #E0E0E0;
    --laranja: #F37800;
    
    /* Tipografia */
    --font-primary: 'Poppins', sans-serif;
    --font-secondary: 'Raleway', sans-serif;
    --font-accent: 'Anton', sans-serif;
    
    /* Espaçamentos */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
    
    /* Breakpoints */
    --breakpoint-sm: 480px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1366px;
    --breakpoint-xxl: 1920px;
}
```

**Para alterar as cores ou configurações, edite apenas o arquivo `variables.css`** - as mudanças serão aplicadas em todo o site automaticamente.

---

## 🚀 Recursos Interativos

### 1. **Menu de Navegação**
- Menu fixo no topo que aparece ao fazer scroll
- Menu hamburguer responsivo para mobile
- Scroll suave entre seções
- Indicador visual da seção ativa
- Bloqueio de scroll quando menu mobile está aberto

### 2. **Pop-up de Aula Experimental**
- Aparece automaticamente após 10 segundos na página inicial
- Opção "Não mostrar novamente" (salva preferência no localStorage)
- Pode ser fechado clicando fora ou no X
- Integração direta com formulário de aula experimental

### 3. **Formulários Inteligentes**

#### Formulário de Contato
- Validação em tempo real
- Integração com WhatsApp
- Mensagem pré-formatada
- Feedback visual de sucesso/erro

#### Formulário de Matrícula
- Validação completa de campos
- Máscara automática de CPF (000.000.000-00)
- Máscara automática de telefone ((00) 00000-0000)
- Seleção obrigatória de plano
- Mensagem formatada em caixa para WhatsApp
- Validação antes do envio

#### Formulário de Aula Experimental
- Seleção de modalidade
- Validação de telefone
- Mensagem pré-formatada para WhatsApp

### 4. **Animações**
- **AOS (Animate On Scroll)**: Elementos aparecem ao fazer scroll
  - Fade up/down
  - Zoom in/out
  - Slide left/right
- **Contadores Animados**: Números contam até o valor final
- **Efeitos Hover**: Cards e botões com efeitos interativos
- **Transições Suaves**: Todas as interações têm transições fluidas

### 5. **Botão Flutuante do WhatsApp**
- Botão fixo no canto inferior direito
- Aparece em todas as páginas
- Link direto para WhatsApp com mensagem pré-formatada
- Animação de pulse quando não utilizado

### 6. **Scroll to Top**
- Botão aparece após scroll de 500px
- Scroll suave de volta ao topo
- Posicionamento fixo no canto inferior direito

### 7. **Modais e Pop-ups**
- Modal de Modalidades: Informações detalhadas ao clicar
- Modal de Matrícula: Formulário rápido sem sair da página
- Modal de Aula Experimental: Agendamento rápido
- Bloqueio de scroll do body quando modal está aberto
- Fechamento ao clicar fora ou pressionar ESC

### 8. **Header Inteligente**
- Transparente no topo da página
- Muda para fundo sólido ao fazer scroll
- Mantém logo e menu sempre visíveis

### 9. **Validação de Formulários**
- Validação em tempo real
- Mensagens de erro específicas
- Feedback visual (bordas vermelhas/verdes)
- Prevenção de envio com dados inválidos

### 10. **Máscaras de Entrada**
- CPF: Aplicação automática da máscara (000.000.000-00)
- Telefone: Máscara adaptável (00) 00000-0000 ou (00) 0000-0000
- Limitação de caracteres
- Validação de formato

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **Mobile-First** e é totalmente responsivo em todas as resoluções:

### Breakpoints

| Dispositivo | Largura | Características |
|-------------|---------|-----------------|
| **Mobile Small** | 320px - 479px | Layout em coluna única, menu hamburguer |
| **Mobile** | 480px - 767px | Layout adaptado, cards empilhados |
| **Tablet** | 768px - 1023px | Grid de 2 colunas, menu expandido |
| **Laptop** | 1024px - 1365px | Grid de 3 colunas, layout completo |
| **Desktop** | 1366px - 1919px | Grid de 4 colunas, espaçamentos maiores |
| **Large Desktop** | 1920px+ | Layout máximo, containers amplos |

### Adaptações por Dispositivo

#### Mobile (< 768px)
- Menu hamburguer
- Cards em coluna única
- Imagens otimizadas
- Textos ajustados
- Botões maiores (touch-friendly)
- Formulários em largura total

#### Tablet (768px - 1023px)
- Menu horizontal compacto
- Grid de 2 colunas
- Cards médios
- Navegação otimizada

#### Desktop (1024px+)
- Menu completo horizontal
- Grid de 3-4 colunas
- Layout espaçado
- Todos os recursos visíveis

---

## 🔧 Instalação e Uso

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code recomendado)
- Servidor web local (opcional, mas recomendado)

### Opção 1: Abrir Diretamente

1. **Navegador Local**:
   - Dê duplo clique em `index.html`
   - Ou arraste o arquivo para o navegador
   - ⚠️ **Nota**: Alguns recursos podem não funcionar devido a restrições CORS

### Opção 2: Servidor Local (Recomendado)

#### Usando VS Code Live Server:
1. Instale a extensão "Live Server" no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

#### Usando Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Usando Node.js (http-server):
```bash
# Instalar globalmente
npm install -g http-server

# Executar
http-server -p 8000
```

Acesse: `http://localhost:8000`

---

## ⚙️ Configuração

### 1. Configurar Número do WhatsApp

O site utiliza integração com WhatsApp. Você precisa atualizar o número em dois lugares:

#### No arquivo `assets/js/script.js`:

Procure por `5515999999999` ou `5515996177546` e substitua pelo número correto no formato internacional (sem + e sem espaços).

**Locais para alterar:**
- Linha ~427: Formulário de contato
- Linha ~450: Formulário de aula experimental
- Linha ~510: Formulário de matrícula

**Exemplo:**
```javascript
// Formato: 5515999999999 (país + DDD + número)
window.open(`https://wa.me/5515999999999?text=...`, '_blank');
```

#### No arquivo `index.html` (botão flutuante):

Procure pelo botão flutuante do WhatsApp e atualize o link:
```html
<a href="https://wa.me/5515999999999?text=..." ...>
```

### 2. Configurar Google Maps

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque o endereço: "Av. Carmen Galan Burgos, 71, Votorantim - SP"
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie o código iframe
5. Substitua o iframe na seção de contato (`index.html` ou `sobre.html`)

**Exemplo:**
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### 3. Personalizar Imagens

Substitua as imagens placeholder em `assets/images/` por fotos reais:

**Recomendações:**
- **Formato**: JPG para fotos, PNG para logos/ícones
- **Otimização**: Use ferramentas como TinyPNG ou ImageOptim
- **Dimensões sugeridas**:
  - Hero background: 1920x1080px
  - Cards de modalidades: 800x600px
  - Fotos de profissionais: 600x600px (quadrado)
  - Logo: SVG ou PNG transparente

### 4. Personalizar Conteúdo

#### Textos:
- Edite diretamente nos arquivos HTML
- Mantenha a estrutura semântica
- Preserve as classes CSS

#### Cores:
- Edite as variáveis CSS em `assets/css/variables.css`
- Procure por `:root { ... }`
- Todas as cores estão centralizadas neste arquivo
- Alterações se propagam automaticamente por todo o site

#### Planos e Preços:
- Atualize em `planos.html`
- Verifique também em `index.html` (seção de planos)
- Mantenha a consistência

### 5. Configurar Meta Tags (SEO)

Edite as meta tags em cada arquivo HTML:

```html
<head>
    <meta name="description" content="Sua descrição aqui">
    <meta name="keywords" content="palavra1, palavra2, palavra3">
    <title>Seu Título - Academia Equilíbrio</title>
    
    <!-- Open Graph (Redes Sociais) -->
    <meta property="og:title" content="Academia Equilíbrio">
    <meta property="og:description" content="Descrição para redes sociais">
    <meta property="og:image" content="URL da imagem">
    <meta property="og:url" content="URL do site">
</head>
```

### 6. Configurar Favicon

1. Crie um favicon (16x16, 32x32, 180x180px)
2. Salve em `assets/images/icone.png`
3. Adicione no `<head>` de todos os HTML:

```html
<link rel="icon" type="image/png" href="assets/images/icone.png">
```

---

## 🔍 SEO e Performance

### SEO (Search Engine Optimization)

#### ✅ Implementado:
- Meta tags de descrição em todas as páginas
- Meta tags de keywords
- Títulos únicos e descritivos
- Estrutura semântica HTML5
- Atributos `alt` em todas as imagens
- URLs amigáveis
- Navegação clara e intuitiva

#### 📝 Sugestões Adicionais:
- [ ] Adicionar sitemap.xml
- [ ] Criar robots.txt
- [ ] Configurar Google Analytics
- [ ] Adicionar Schema.org markup (LocalBusiness)
- [ ] Implementar Open Graph tags
- [ ] Adicionar breadcrumbs
- [ ] Criar páginas de conteúdo (blog)

### Performance

#### ✅ Otimizações Implementadas:
- CSS e JS organizados e comentados
- Imagens otimizadas (formato recomendado)
- Lazy loading preparado (comentado, pode ser ativado)
- CDN para bibliotecas externas
- Código limpo e sem redundâncias

#### 📝 Sugestões Adicionais:
- [ ] Minificar CSS e JavaScript para produção
- [ ] Comprimir imagens (TinyPNG, ImageOptim)
- [ ] Ativar lazy loading de imagens
- [ ] Implementar Service Worker (PWA)
- [ ] Configurar cache de navegador
- [ ] Usar WebP para imagens (com fallback)

### Ferramentas de Teste:
- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **GTmetrix**: https://gtmetrix.com/
- **Lighthouse** (Chrome DevTools): F12 → Lighthouse

---

## ♿ Acessibilidade

### Implementações Atuais:

- ✅ Estrutura semântica HTML5
- ✅ Atributos `alt` em imagens
- ✅ Labels em formulários
- ✅ Navegação por teclado
- ✅ Contraste de cores adequado
- ✅ Títulos hierárquicos (h1, h2, h3...)
- ✅ ARIA labels onde necessário

### Melhorias Sugeridas:

- [ ] Adicionar `skip to content` link
- [ ] Implementar navegação por teclado completa
- [ ] Adicionar `aria-label` em ícones decorativos
- [ ] Testar com leitores de tela (NVDA, JAWS)
- [ ] Garantir contraste WCAG AA mínimo
- [ ] Adicionar `focus-visible` para navegação por teclado

---

## ✅ Checklist de Deploy

Antes de publicar o site em produção, verifique:

### 🔧 Configurações Essenciais
- [ ] Número do WhatsApp atualizado em todos os locais
- [ ] Google Maps embed configurado corretamente
- [ ] Todas as imagens substituídas por fotos reais
- [ ] Imagens otimizadas para web
- [ ] Favicon configurado
- [ ] Meta tags personalizadas em todas as páginas

### 📝 Conteúdo
- [ ] Textos revisados e sem erros
- [ ] Planos e preços atualizados
- [ ] Horários de funcionamento corretos
- [ ] Informações de contato verificadas
- [ ] Links de redes sociais funcionando

### 🎨 Visual
- [ ] Cores personalizadas (se necessário)
- [ ] Logo atualizado
- [ ] Fotos da equipe atualizadas
- [ ] Imagens de modalidades corretas

### ⚡ Performance
- [ ] CSS e JS minificados (opcional)
- [ ] Imagens comprimidas
- [ ] Testado em múltiplos navegadores
- [ ] Testado em dispositivos móveis reais

### 🔍 SEO
- [ ] Meta descriptions em todas as páginas
- [ ] Títulos únicos e descritivos
- [ ] Alt text em todas as imagens
- [ ] Sitemap.xml criado (opcional)
- [ ] Robots.txt configurado (opcional)

### 🚀 Deploy
- [ ] Escolher servidor/hosting (ex: Netlify, Vercel, cPanel)
- [ ] Fazer upload de todos os arquivos
- [ ] Configurar domínio personalizado
- [ ] Ativar HTTPS/SSL
- [ ] Testar todos os formulários
- [ ] Testar integração WhatsApp
- [ ] Verificar links internos e externos

### 📱 Testes Finais
- [ ] Testar em Chrome
- [ ] Testar em Firefox
- [ ] Testar em Safari
- [ ] Testar em Edge
- [ ] Testar em dispositivos iOS
- [ ] Testar em dispositivos Android
- [ ] Testar em tablets

---

## 📊 Informações da Academia

### Localização
**Endereço:**
```
Av. Carmen Galan Burgos, 71
Jardim Archila, Votorantim - SP
CEP: 18111-460
```

**Telefone:** (15) 3023-4707

**Horário de Funcionamento:**
- Segunda a Sexta: 06:00 - 22:00
- Sábado: Fechado (aberto em feriados especiais)
- Domingo: Fechado

### Redes Sociais
- **Instagram**: [@academia_equilibrio1](https://www.instagram.com/academia_equilibrio1/)
- **Facebook**: [Academia Equilíbrio](https://www.facebook.com/academiaequilibrioefisioterapiavidaesaude/?locale=pt_BR)

### Planos e Preços

| Plano | Parcelado | À Vista | Desconto |
|-------|-----------|---------|----------|
| **Mensal** | R$ 110,00 | - | - |
| **Bimestral** | 2x R$ 100,00 | R$ 180,00 | 18% |
| **Trimestral** | 3x R$ 90,00 | R$ 240,00 | 27% |
| **Semestral** | 6x R$ 80,00 | R$ 430,00 | 35% |

**Taxa de matrícula:** R$ 50,00 (inclui 1ª avaliação física)

### Modalidades

1. **Musculação**
   - Horário: Segunda a Sexta, 06:00 - 22:00
   - Treinos personalizados
   - Equipamentos modernos

2. **Muay Thai**
   - Horário: Terça e Quinta, 19:00 - 20:30 | Sábado, 09:00 - 10:30
   - Defesa pessoal
   - Condicionamento físico

3. **Zumba**
   - Horário: Segunda, Quarta e Sexta, 18:00 - 19:00
   - Aulas animadas
   - Queima calórica intensa

4. **Fisioterapia**
   - Horário: Segunda a Sexta (agendamento individual)
   - Reabilitação
   - Prevenção de lesões

---

## 🐛 Solução de Problemas

### Problemas Comuns

#### 1. Menu não funciona no mobile
**Solução:** Verifique se o Bootstrap JavaScript está carregado:
```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
```

#### 2. Animações não aparecem
**Solução:** Verifique se o AOS está inicializado:
```javascript
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});
```

#### 3. WhatsApp não abre
**Solução:** 
- Verifique o formato do número (5511999999999 - sem +, sem espaços)
- Certifique-se de que o link está correto: `https://wa.me/5511999999999`

#### 4. Formulários não enviam
**Solução:**
- Abra o Console do navegador (F12) e verifique erros
- Verifique se o JavaScript está carregado
- Verifique se há campos obrigatórios preenchidos

#### 5. Imagens não carregam
**Solução:**
- Verifique os caminhos das imagens
- Certifique-se de que os arquivos existem
- Verifique permissões de arquivo

---

## 📚 Recursos Adicionais

### Bibliotecas e Frameworks
- [Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [AOS - Animate On Scroll](https://michalsnik.github.io/aos/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

### Ferramentas Úteis
- [TinyPNG](https://tinypng.com/) - Compressão de imagens
- [ImageOptim](https://imageoptim.com/) - Otimização de imagens
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [W3C Validator](https://validator.w3.org/) - Validação HTML
- [Can I Use](https://caniuse.com/) - Compatibilidade de recursos

---

## 💡 Funcionalidades Futuras Sugeridas

### Curto Prazo
- [ ] Galeria de fotos da academia
- [ ] Depoimentos de alunos (seção de testimonials)
- [ ] Blog com dicas de treino e saúde
- [ ] Feed do Instagram integrado
- [ ] Sistema de avaliações online

### Médio Prazo
- [ ] Área do aluno (login)
- [ ] Agendamento online de aulas
- [ ] Sistema de check-in
- [ ] App mobile nativo
- [ ] Chat online em tempo real

### Longo Prazo
- [ ] E-commerce para venda de produtos
- [ ] Sistema de treino personalizado online
- [ ] Integração com wearables
- [ ] Programa de fidelidade digital

---

## 📧 Suporte

Para dúvidas, sugestões ou problemas técnicos:

- **Desenvolvedor**: Caio Manfio
- **Localização**: Votorantim/SP

---

## 📄 Licença

© 2025 Academia Equilíbrio - Todos os direitos reservados

Este projeto foi desenvolvido exclusivamente para a Academia Equilíbrio.

---

## 🙏 Agradecimentos

- Academia Equilíbrio pela confiança
- Comunidade de desenvolvedores open source
- Todos os contribuidores das bibliotecas utilizadas

---

**Desenvolvido com 💪 por Caio Manfio**

*Última atualização: Janeiro 2025*
