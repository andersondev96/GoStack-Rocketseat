<h1 align="center">
<img src="https://raw.githubusercontent.com/EliasGcf/gobarber/2e00ac943855be95a08fcebd2bc134f8e0c51ed9/.github/logo.svg" width="200px">
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/-NodeJS-green" />
  <img src="https://img.shields.io/badge/-ReactJS-blue" />
  <img src="https://img.shields.io/badge/-React Native-9cf" /> <br>
	<a href="https://www.linkedin.com/in/anderson-fernandes-8b5a50135/" target="_blank">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-anderson%20fernandes-%23FF9000">
  </a>
  <a href="LICENSE.md" target="_blank">
    <img alt="GitHub" src="https://img.shields.io/github/license/EliasGcf/gobarber?color=%23FF9000">
  </a>
</p>
<img alt="Mockup" src="https://res.cloudinary.com/eliasgcf/image/upload/v1587509596/GoBarber/mockup_ocggit.png">

## Index
- [Projeto](#-projeto)
- [Layout](#-layout)
- [Tecnologias](#rocket-tecnologias)
- [Como executar o projeto](#-como-executar-o-projeto)
- [Como contribuir](#-como-contribuir)
- [Licença](#memo-licença)
- [Autor](#-autor)


## 💻 Projeto

**GoBarber** é um que projeto foi criado na 12ª edição do **GoStack** da **Rocketseat**, cujas principais características são fazer agendamentos para barbearias, que 
facilita a organização dos cabelereiros, para atenderem os seus clientes.

## 🎨 Layout
Você pode visualizar o layout do projeto no formato através deste [link](https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber). Lembrando que você precisará ter uma conta [Figma](https://www.figma.com/).

## :rocket: Tecnologias
O projeto foi desenvolvido utilizando as seguintes tecnologias:
- [TypeScript](https://www.typescriptlang.org)
- [PostgreSQL](https://www.postgresql.org)
- [TypeORM](https://typeorm.io)
- [Docker](https://www.docker.com)
- [Redis](https://redis.io)
- [MongoDB](https://www.mongodb.com)
- [Jest](https://jestjs.io)
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)

## 🚀 Como executar o projeto

Este projeto está dividido em três partes:
1. Backend (pasta backend)
2. Frontend (pasta web)
3. Celular (pasta mobile)

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com), [Docker](https://www.docker.com), [DBeaver](https://dbeaver.io), [Node.js](https://nodejs.org/en/).

Além disso, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### Instalação e configuração do Docker

1. Instale o [docker](https://www.docker.com/get-started) em sua máquina.
2. Crie um contêiner postgres no terminal docker: ``docker run --name postgres -e POSTGRES_PASSWORD = docker -p 5432: 5432 -d postgres``.
3. Inicie o container criado: ``docker start postgres``.

### 🎲 Executando o Back End (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/AndersonUfop/GoStack-GoBarber.git

# Acesse a pasta do projeto no terminal / cmd
$ cd GoStack-GoBarber

# Vá para a pasta do servidor
$ cd server

# Instalar dependências
$ yarn

# Abra o DBeaver e crie uma nova conexão, inserindo os dados:
# HOST: localhost / 192.168.99.100
# DATABASE: Postgres
# USERNAME: Postgres
# PASSWORD: docker

# Instale todas as dependências do banco de dados
$ yarn typeorm:migration: run

# Execute o aplicativo em modo de desenvolvimento
$ yarn dev:server

# O servidor irá iniciar na porta: 3333 - vá para http://localhost:3333

```

#### 🧭 Executando o aplicativo da web (Frontend)

```bash

# Clone este repositório
$ git clone https://github.com/AndersonUfop/GoStack-GoBarber.git

# Acesse a pasta do projeto no terminal / cmd
$ cd GoStack-GoBarber

# Vá para a pasta do aplicativo Front End
$ cd web

# Instale as dependências
$ yarn

# Execute o aplicativo em modo de desenvolvimento
$ yarn start

# O aplicativo será aberto na porta: 3000 - vá para http://localhost:3000

```

#### 📱 Executando o aplicativo (Mobile)

```bash

# Clone este repositório
$ git clone https://github.com/AndersonUfop/GoStack-GoBarber.git

# Acesse a pasta do projeto no terminal / cmd
$ cd GoStack-GoBarber

# Vá para a pasta do aplicativo Front End
$ cd mobile

# Instale as dependências
$ yarn

# Execute o aplicativo em modo de desenvolvimento
$ yarn start
$ yarn android / yarn ios

# Seu dispositivo deve ser configurado no modo de desenvolvedor e conectado pelo cabo USB em sua máquina,
# para que seja reconhecido, uma vez feito isso, basta aguardar o início do aplicativo.

```

## 🤔 Como contribuir

- Fork o repositório;
- Crie um branch com seu recurso: `git checkout -b my-feature`;
- Faça commit de suas mudanças: `git commit -m 'feat: My new feature'`;
- Envie para o seu branch: `git push origin my-feature`.

Após a mesclagem de sua solicitação pull, você pode excluir seu branch.

## :memo: Licença

Este projeto está sob a licença do MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

## 🦸 Autor
<a href="https://www.linkedin.com/in/anderson-fernandes-8b5a50135/">
  <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/49786548/98873391-0df75600-2457-11eb-9b10-210cc591a035.png" width="100px;"> <br />
  <sub><b>Anderson Fernandes 🚀</b></sub></a>

Feito com :purple_heart: por Anderson Fernandes 👋🏽
Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Anderson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-fernandes-8b5a50135/)](https://www.linkedin.com/in/anderson-fernandes-8b5a50135/)
[![Gmail Badge](https://img.shields.io/badge/-andersonfferreira96@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:andersonfferreira96@gmail.com)](mailto:andersonfferreira96@gmail.com)

___

##  Versões do README

[Português 🇧🇷](./README.md)  |  [Inglês 🇺🇸](./README-en.md)
