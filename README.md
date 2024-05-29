# NESTjs Sequelize PostgreSQL API

## Introduction

This project is a basic NESTjs application that manages a PostgreSQL database using Sequelize ORM. It includes two main entities: Users and WalletAddress. The application supports CRUD operations for both entities and provides API documentation using Swagger.

## Prerequisites

- Node.js and npm
- Docker
- NESTjs CLI

## Installation

1. **Install NESTjs CLI**:
   ```npm install -g @nestjs/cli```
   

2. **Clone the Repository**:
   
   ```git clone <repository-url>```
   ```cd nestjs-sequelize```
   

3. **Install Dependencies**:
   ```npm install```
   

## Setting Up PostgreSQL with Docker

1. **Run PostgreSQL Container**:
   ```docker compose up```
   

## Creating Models and Migrations

1. **Create Models with  Migration**:
   ```npx sequelize-cli db:migrate```
   

## Running the Application

1. **Start the Application**:
   ```npm run start```
   

## API Documentation

Swagger documentation is available at:

```http://localhost:3000/api```
