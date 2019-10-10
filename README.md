# Wörklife node+express+sequelize+graphql+apollo api

## Installation

### Set up dev database
Assuming you have Postgres installed on your machine.

```bash
$ createdb [dev db name]
```

```bash
$ sequelize db:migrate
```

```bash
$ sequelize db:seed:all
```
### Set up project

yarn:

```bash
$ yarn install
```

npm:

```bash
$ npm install
```

Create .env file with the following variables:

```
PORT=5000
HOST=localhost
CLIENT_URL=http://localhost:3000
ACCESS_TOKEN_AUTH_SECRET=[your secret 1]
REFRESH_TOKEN_AUTH_SECRET=[your secret 2]
```

Edit config/config.json so that the db fields correspond to your own postgres db setup.

## Run app

yarn:

```bash
$ yarn dev
```

npm:

```bash
$ npm dev
```
