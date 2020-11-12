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
- [Project](#-project)
- [Layout](#-layout)
- [Technologies](#rocket-technologies)
- [How to execute the project](#-how-to-execute-the-project)
- [How to contribute](#-how-to-contribute)
- [License](#memo-license)
- [Author](#-author)


## 💻 Project

**GoBarber** is a project that was created in the 12th Edition of **GoStack** by **Rocketseat**, whose main features are to make appointments for barbershops, which will facilitate the organization
the hours that hairdressers serve their customers.

## 🎨 Layout
You can view the project layout in the format through this [link](https://www.figma.com/file/BXCihtXXh9p37lGsENV614/GoBarber). Remembering that you will need to have a [Figma](https://www.figma.com/) account.

## :rocket: Technologies
The project was developed using the following technologies:
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

## 🚀 How to execute the project

This project is divided into three parts:
1. Backend (backend folder)
2. Frontend (web folder)
3. Mobile (mobile folder)

Before you begin, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Docker]('https://www.docker.com'), [DBeaver](https://dbeaver.io), [Node.js](https://nodejs.org/en/).

In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/)

####  Docker installation and configuration

1. Install the [docker](https://www.docker.com/get-started) on your machine.
2. Create a postgres container in the docker terminal: ``docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres``.
3. Start the created container: ``docker start postgres``.

### 🎲 Running the Back End (server)

```bash

# Clone this repository
$ git clone https://github.com/AndersonUfop/GoStack-GoBarber.git

# Access the project folder in the / cmd terminal
$ cd GoStack-GoBarber

# Go to folder server
$ cd server

# Install dependences
$ yarn

# Open DBeaver and create a new connection, inserting the data:
# HOST: localhost / 192.168.99.100
# DATABASE: Postgres
# USERNAME: Postgres
# PASSWORD: docker

# Install all database dependencies
$ yarn typeorm:migration:run

# Run the application in development mode
$ yarn dev:server

# The server will start at port: 3333 - go to http://localhost:3333


```

#### 🧭 Running the web application (Frontend)

```bash

# Clone this repository
$ git clone https://github.com/AndersonUfop/GoStack-GoBarber.git

# Access the project folder in the / cmd terminal
$ cd GoStack-GoBarber

# Go to the Front End application folder
$ cd web

# Install the dependencies
$ yarn

# Run the application in development mode
$ yarn start

# The application will open on the port: 3000 - go to http://localhost:3000

```

#### 📱 Running the application (Mobile)

``` bash

# Clone this repository
$ git clone https://github.com/AndersonUfop/GoStack-GoBarber.git

# Access the project folder in the / cmd terminal
$ cd GoStack-GoBarber

# Go to the Front End application folder
$ cd mobile

# Install the dependencies
$ yarn

# Run the application in development mode
$ yarn start
$ yarn android / yarn ios

# Your device must be configured in developer mode and connected by the USB cable on your machine, 
# so that it is recognized, once this is done, just wait for the application to start.

```

## 🤔 How to contribute

- Fork the repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

After the merge of your pull request is done, you can delete your branch.

## :memo: License

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for more details.

---

## 🦸 Author
<a href="https://www.linkedin.com/in/anderson-fernandes-8b5a50135/">
  <img style="border-radius: 50%;" src="https://user-images.githubusercontent.com/49786548/98873391-0df75600-2457-11eb-9b10-210cc591a035.png" width="100px;"> <br />
  <sub><b>Anderson Fernandes 🚀</b></sub></a>

Made with :purple_heart: by Anderson Fernandes 👋🏽
Contact!

[![Linkedin Badge](https://img.shields.io/badge/-Anderson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-fernandes-8b5a50135/)](https://www.linkedin.com/in/anderson-fernandes-8b5a50135/)
[![Gmail Badge](https://img.shields.io/badge/-andersonfferreira96@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:andersonfferreira96@gmail.com)](mailto:andersonfferreira96@gmail.com)

___

##  README versions

[Portuguese 🇧🇷](./README.md)  |  [English 🇺🇸](./README-en.md)
