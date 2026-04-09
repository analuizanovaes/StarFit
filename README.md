# 🚀 STARFIT

*"Treine como uma estrela. Transforme sua energia em força gravitacional."*

## 🌌 Sobre o Projeto

Este repositório contém a versão **2.0 (Galaxy Edition)** da landing page da **Starfit**. O projeto evoluiu de uma página estática para uma aplicação web interativa, focada na experiência do usuário (UX), animações fluidas e validação de dados em tempo real.

A interface adapta-se dinamicamente entre **Light Mode** (Energético/Amarelo) e **Dark Mode** (Imersivo/Espacial), oferecendo uma experiência visual única em cada tema.

## ✨ Novas Funcionalidades & Diferenciais

### 🎨 UI/UX e Design
- **Dual Theme Engine**: 
  - *Light Mode*: Header amarelo vibrante com contrastes em roxo/azul.
  - *Dark Mode*: Fundo espacial com partículas de estrelas geradas via JavaScript e nebulosa SVG atrás dos títulos.
- **Animações Avançadas**:
  - **Hero 3D Tilt**: Efeito de perspectiva 3D na imagem principal ao mover o mouse.
  - **Levitação**: Halteres flutuantes na seção "Descobrir".
  - **Scroll Reveal**: Elementos surgem suavemente na tela conforme a rolagem.
  - **Interactive Hover**: Efeitos de zoom e brilho nos cards de planos.

### 🔐 Autenticação e Formulários Inteligentes
- **Modal Split-Screen**: Design moderno dividido (Imagem lateral + Formulário).
- **Lógica de Login/Cadastro**: O mesmo modal alterna dinamicamente entre campos de Login (simplificado) e Cadastro (completo) via DOM Manipulation.
- **Validações de Segurança (Client-side)**:
  - **Senha Forte**: Regex que exige 8 caracteres, maiúscula, número e símbolo.
  - **Idade Real**: Algoritmo que impede datas futuras ou idades superiores a 120 anos.
  - **Máscara de Input**: Formatação automática de telefone `(XX) XXXXX-XXXX` enquanto o usuário digita.
- **Feedback Visual**: Uso da biblioteca **SweetAlert2** para alertas de sucesso ou erro elegantes e animados.
- **Show/Hide Password**: Funcionalidade de "olhinho" interativo para revelar a senha.

### 📱 Responsividade
- Menu de navegação adaptável.
- Modais e grids que se ajustam perfeitamente a dispositivos móveis.
- Otimização de imagens e layouts flexíveis.

## 🛠️ Tecnologias Utilizadas

- **Estrutura**: HTML5 Semântico.
- **Estilo**: CSS3 (Variáveis CSS, Flexbox, Grid, Keyframes, Media Queries).
- **Lógica**: JavaScript (ES6+) Puro.
- **Bibliotecas**:
  - [Lucide Icons](https://lucide.dev/) (Ícones vetoriais leves).
  - [ScrollReveal](https://scrollrevealjs.org/) (Animações de entrada).
  - [SweetAlert2](https://sweetalert2.github.io/) (Pop-ups e modais de alerta).
- **Fontes**: Google Fonts (Oswald & Inter).

## 📂 Estrutura de Arquivos Necessária

Para o correto funcionamento das trocas de tema e modais, a pasta `imagens` deve conter:

| Arquivo | Descrição |
|---------|-----------|
| `hero-light.png` | Casal fitness (Modo Claro) |
| `hero-dark.png` | Homem treinando (Modo Escuro) |
| `dumbbells.png` | Halteres flutuantes |
| `woman-ia.png` | Mulher conceito IA |
| `modal-premium.png` | Rapaz no espelho (Modal Premium) |
| `modal-normal.png` | Pesos/Equipamentos (Modal Normal) |
| `modal-login.jpg` | Mulher treinando costas (Login) |

## 👥 Créditos e Equipe de Desenvolvimento

Projeto original idealizado pelo time abaixo, com **refatoração e implementação "Galaxy v2.0"** focada em Front-end dinâmico.

| Dev / Designer | Função | GitHub |
|----------------|--------|--------|
| **Ana Luiza** | **Front-end** | **[@analuizanovaes](https://github.com/analuizanovaes)** |
| Vitor Sousa | Banco de Dados | [@vitorguinomio](https://github.com/vitorguinomio) |
| Rayane Sousa | UI/UX Design | [@raysousa-dev](https://github.com/raysousa-prog) |
| Calebe Ferreira | Back-end | [@SpellmanKing](https://github.com/SpellmanKing) |

## 🚀 Como Executar

1. Clone este repositório:
```bash
git clone [https://github.com/analuizanovaes/StarFit.git](https://github.com/analuizanovaes/StarFit.git)
