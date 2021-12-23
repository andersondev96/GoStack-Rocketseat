<h1 align="center">
  <img alt="GoFinances" title="#goFinances" src="logo.svg" width="300px">
</h1>

<p align="center">
  <img alt="Github Language count" src="https://img.shields.io/github/languages/count/AndersonUfop/goFinances-GoStack?color=%235636D3">
  <img alt="GitHub language" src="https://img.shields.io/github/languages/top/AndersonUfop/goFinances-GoStack?color=%235636D3">
  <img alt="Repo Size" src="https://img.shields.io/github/repo-size/AndersonUfop/goFinances-goStack?color=%235636D3">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/AndersonUfop/goFinances-goStack?color=blue">
  <img alt="License" src="https://img.shields.io/apm/l/vim-mode?color=blue">
</p>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<img alt="Layout" src="layout.gif">


## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)

## 💻 Sobre o projeto

GoFinances é um projeto criado para armazenar todas as suas transações financeiras, exibindo todas as entradas, despesas e saldo.

Para registrar todos os dados, o sistema oferece uma opção de importação de CSV.

## 🔖 Layout

Você pode visualizar o layout deste projeto através deste [link](https://www.figma.com/file/EgOhyj1Inz14dhWGVhRlhr/GoFinances?node-id=1%3A863)

Para acessar este link, você deve ter uma conta [Figma](https://www.figma.com/)


## 💻 Iniciando

### Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- Uma instância do [PostgreSQL](https://www.postgresql.org/)
- [DBeaver](https://dbeaver.io/)

**Obs.:** Eu recomendo usar docker

**Clone o projeto e acesse a pasta gofinances-GoStack**

```bash
$ git clone https://github.com/AndersonUfop/goFinances-GoStack.git && cd gofinances-GoStack
```

**Siga os passos abaixo**

### Backend

```bash
# Começando pela pasta raiz do projeto, vá para a pasta backend
$ cd Backend

# Instale as dependências
$ yarn

# Crie a instância do postgreSQL usando docker
$ docker run --name gofinances-postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# Crie uma nova conexão com Postgres no DBeaver

# Crie um banco de dados com o nome gofinances-postgres

# Certifique-se de que as chaves em 'ormconfig.json' para conectar com seu banco de dados,
# estejam configuradas corretamente.

# Assim que os serviços estiverem em execução, execute as migrations
$ yarn typeorm migration:run

# Para terminar, execute sua api
$ yarn dev:server

# Muito bem, o projeto foi iniciado!
```

### Web

_Obs.: Antes de continuar, certifique-se de ter a API em execução.

```bash

# Começando pela pasta raiz do projeto, vá para a pasta Web
$ cd Web

# Instale as dependências
$ yarn

# Certifique-se de que o arquivo 'src/services/api.ts' tenha o IP para sua API

# Inicie o frontend
$ yarn start

```


## 🤔 Como contribuir

- Fork este repositório;
- Crie um branch com seu recurso: `git checkout -b my-feature`;
- Faça commit de suas mudanças: `git commit -m 'feat: My new feature'`;
- Envie para o seu branch: `git push origin my-feature`.

Após a mesclagem de sua solicitação pull, você pode excluir seu branch.

## :memo: Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENÇA](LICENSE) para obter detalhes.


Feito com 💜 por Anderson Fernandes 👋 [See my linkedin](https://www.linkedin.com/in/anderson-fernandes-8b5a50135/)

---

##  Versões do README

[Português 🇧🇷](./README.md)  |  [Inglês 🇺🇸](./README-en.md)
