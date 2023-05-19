# api-geek-ecommerce

This repository is the final project for the Gama Academy Web Development course of a backend server that manages a REST API for an e-commerce platform.


## Current goals

Even with the job done, I still feel there's room for a lot of improvement. Now the main goals are:
- Refactoring to easen the testing process, mainly separating the business logic from the HTTP controllers
- Study how to implement a testing anvironment for current project version
- Use testing implementation to further refine this codebase

## Tech Stack

- Node.js
- Express
- Typescript
- Sequelize ORM
- Swagger
- Relational Database:
  - mysql
  - postgres
  - sqlite
  - mariadb
  - mssql
  - db2
  - snowflake
  - oracle

## Frontend Repository

### [geek-script-front](https://github.com/GabrielGameDev/geek-script-front)

## Installation

1. Create your own `.env` file according to `example.env`
2. Dowload packages `npm i`
3. Build `npm run build`
4. Test server `npm run dev`

### Recreating the database

1. Delete `dist` folder
2. `npm run build`
3. `npm run dbrebuild`

### Starter admin account

- email **admin@admin.com**
- pass **admin123**

## API Documentation

### Deployed Server

The API documentation is temporarily available online for demonstration purposes:

[GeekScript Backend Production API Docs](https://geekscript-backend-production.up.railway.app/api-docs/)

### From SwaggerHub

[SwaggerHub GeekScript API Docs](https://app.swaggerhub.com/apis-docs/tiagospeckart/geek_script/1.2.1)

### Running locally

1. Run server with `npm run dev`
2. Acess URL `{host}:{port}/api-docs` 

For ease of use, we recommend the [Swagger Viewer VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer). To start the extension:

1. Open the `swagger.json` file located at `src/api-docs`.
2. Choose one of the following options:
- Press `F1` -> Run Preview Swagger
- Press `Shift + Alt + P`
- Right click file in explorer panel and click "Preview Swagger"

