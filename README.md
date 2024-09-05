# Filmes Estúdios Ghibli

## Introdução

Este projeto foi criado para explorar alguns dos filmes mais icônicos do Estúdio Ghibli, proporcionando uma interface amigável e interativa para os usuários. Utilizando **HTML**, **CSS**, e **JavaScript**, a página permite que os usuários pesquisem e visualizem informações sobre filmes como *A Viagem de Chihiro*, *Meu Vizinho Totoro*, entre outros. 

## Objetivo

O objetivo é criar uma interface que permita a visualização dinâmica de informações detalhadas sobre filmes do Estúdio Ghibli. Utilizamos JavaScript para manipular dados e exibir resultados de forma intuitiva e organizada.

## Estrutura do Projeto

O projeto contém os seguintes arquivos principais:

- **`index.html`**: Estrutura da página.
- **`style.css`**: Estilo da interface.
- **`app.js`**: Lógica de busca e exibição dos resultados.
- **`dados.js`**: Contém os dados dos filmes em formato de array.

### Estrutura HTML

A página está organizada em:

- **Cabeçalho**: Com o título "Filmes Estúdios Ghibli".
- **Área de Pesquisa**: Com um campo de texto para busca e um botão para pesquisar.
- **Resultados**: Uma seção vazia onde os resultados da pesquisa serão exibidos.
- **Rodapé**: Exibe informações de contato e direitos reservados.

### Estilização CSS

O arquivo `style.css` utiliza flexbox para um layout centralizado e responsivo. Além disso, a interface conta com:

- **Corpo**: Com uma imagem de fundo e alinhamento centralizado.
- **Botões e Inputs**: Bordas arredondadas e cores temáticas.
- **Cartões de Resultados**: Cada resultado aparece em forma de "carta", com animação ao passar o mouse.

### JavaScript

#### `dados.js`

Este arquivo contém um array com os detalhes dos filmes, incluindo:

- **Título** 
- **Descrição**
- **Diretor**
- **Ano de Lançamento**
- **Gênero**
- **Duração**
- **Sinopse Completa**
- **Imagem do Poster**
- **Nota IMDb**

#### `app.js`

A função `pesquisar()` realiza a busca nos filmes do array e exibe os resultados dinamicamente na página. Para cada filme, é gerado um bloco HTML contendo o título, uma breve descrição e um link de ação.

## Funcionalidade

1. O usuário insere o nome de um filme na barra de pesquisa.
2. Ao clicar em "Pesquisar", a função `pesquisar()` percorre os filmes e exibe os resultados na página.
3. Cada resultado é exibido em um cartão estilizado, com animação de **hover**.

## Estilização Detalhada

- **Responsividade**: O layout se adapta a diferentes tamanhos de tela, com *breakpoints* para dispositivos menores.
- **Cartões**: Os resultados são exibidos em cartões com animação de elevação ao passar o mouse, criando uma experiência interativa.

## Possíveis Melhorias

- Implementar filtro de busca que exiba apenas os filmes correspondentes à pesquisa.
- Substituir os links placeholder por URLs reais de mais informações sobre os filmes.
- Incluir imagens dos pôsteres diretamente nos resultados.
- Adicionar animação de carregamento durante a pesquisa.

## Conclusão

Este projeto oferece uma base sólida para explorar os filmes do Estúdio Ghibli de maneira dinâmica e visualmente atraente. Com melhorias na pesquisa e dados, ele pode proporcionar uma experiência ainda mais completa e rica para os usuários.
