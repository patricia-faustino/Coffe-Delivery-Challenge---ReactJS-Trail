# Ignite Coffe Delivery

## Tecnologias Utilizadas
- React
- TypeScript
- Vite
- Styled Components
- React Router
- Context API


## Instalação
- Clone o repositório:
  ```sh
  git clone https://github.com/patricia-faustino/coffe-delivery.git

- Navegue até o diretório do projeto:
  ```sh
  cd coffe-delivery

- Instale as dependências:
    ```sh
    npm install

- Inicie o servidor de desenvolvimento:
    ```sh
    npm run dev

## Estrutura do Projeto

    ignite-coffe-delivery/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── contexts/
    │   ├── pages/
    │   ├── styles/
    │   ├── App.tsx
    │   ├── main.tsx
    │   ├── Router.tsx
    │   └── vite-env.d.ts
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── README.md


## Funcionalidades

- Listagem de Produtos
A aplicação lista os produtos (cafés) disponíveis para compra. Cada produto possui um nome, descrição, preço e uma imagem.

- Adicionar Itens ao Carrinho
O usuário pode adicionar uma quantidade específica de itens ao carrinho. A quantidade pode ser ajustada antes de adicionar ao carrinho.

- Aumentar ou Remover Itens do Carrinho
O usuário pode aumentar ou diminuir a quantidade de itens no carrinho diretamente na listagem do carrinho.

- Formulário de Endereço
O usuário deve preencher um formulário com seu endereço para finalizar a compra. O formulário inclui campos como rua, número, cidade, estado, etc.

- Exibir Total de Itens no Header
O total de itens no carrinho é exibido no Header da aplicação, permitindo que o usuário veja quantos itens estão no carrinho a qualquer momento.

- Exibir Valor Total do Carrinho
O valor total do carrinho é calculado somando os preços dos itens multiplicados pela quantidade de cada item. Esse valor é exibido na página de checkout.


## Conceitos Utilizados:
conceitos como:

- Estados
- ContextAPI
- LocalStorage
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

Feito com ♥ por Patricia Faustino durante o Ignite da Rocketseat.