<h1 align="center">
    User Management System
</h1>

## Projeto

O UMS é uma aplicação em forma de CRUD para estudo e prática com as tecnologias, Node, Typescript, TypeORM, JWT, Jest e Express. O projeto foi desenvolvido com a linguagem Typescript com a base em Node, e utilizando o padrão MVC para organização e estrutura do projeto. A base de dados foi criada com MySQL em conjuto com o TypeORM, na criação das entidades e seus relacionamentos com as migrations. O projeto está separado em dois módulos:

- Uma api REST contendo todos os recursos de um CRUD (create, read, update, delete).

- E módulo web, que ainda está sendo desenvolvido, utilizando React e Axios para a comunicação da api.

A parte de TDD foi feita utilizando Jest, dividido em dois tipos de testes:

- O teste unitário, para métodos e funcionalidades especificas. Como a validação do campo de email ou registro usuário.
- E o teste integrado, para métodos que dependem de um conjunto de funcionalides para sua execução. Como a validação das credenciais do token JWT nas rotas privadas.

## Tecnologias

- Node
- Express
- Typescript
- MySQL
- TypeORM
- JWT
- Jest

## Instruções

1. Para rodar o projeto é necessário criar uma base de dados utilizando o MySQL e alterar o nome para a sua base criada no arquivo `ormconfig.json` na raiz do projeto. Além de mudar as confgurações de usuário, porta ou host casa sejam diferentes.

2. Após criar a base de dados é necessário rodar o compando abaixo para installar todas as dependências utilizadas no projeto.

### `yarn install`

3. Após instalar as dependências é preciso rodar o comando abaixo para que as tabelas sejam criadas e preenchidas na base de dados.

### `yarn typeorm migration:run`

4. Para inicializar o servidor é preciso utilizar o comando abaixo. A aplicação irá rodar no dominio: [http://localhost:3333](http://localhost:3333) para a realização das requisições http.

### `yarn dev`

5. Para rodar os testes da aplicação é preciso utilizar o comando abaixo, o mesmo irá executar os testes presentes na pasta de `__tests__`. Ao rodar o comando é apresentado no terminal um resumo dos testes e o resultado dos mesmos.

### `yarn test`

#### O arquivo JSON `Insomnia_2020-12-22.json` contém todas as requisições realizadas para teste e validação da api, utilizando o Insomnia.
