# API-NestJS com Autenticação

Este é um projeto de API construído com [NestJS](https://nestjs.com/) que fornece funcionalidades básicas de autenticação de usuários, como cadastro (`signup`) e login (`signin`).

## ✨ Funcionalidades

- **Cadastro de Usuário**: Permite que novos usuários se cadastrem fornecendo um e-mail e senha.
- **Login de Usuário**: Autentica usuários existentes com base em seu e-mail e senha.
- **Hashing de Senha**: Utiliza `argon2` para armazenar as senhas de forma segura no banco de dados.
- **ORM Prisma**: Integração com o Prisma para uma interação simplificada e segura com o banco de dados.

## 🚀 Tecnologias Utilizadas

- NestJS: Um framework Node.js progressivo para construir aplicações eficientes e escaláveis do lado do servidor.
- Prisma: ORM de próxima geração para Node.js e TypeScript.
- TypeScript: Superset de JavaScript que adiciona tipagem estática.
- Argon2: Biblioteca para hashing de senhas.

## 📦 Instalação

1.  Clone o repositório:
    ```bash
    git clone <url-do-seu-repositorio>
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd API-NestJS
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```

4.  Configure suas variáveis de ambiente. Renomeie o arquivo `.env.example` para `.env` e adicione a URL de conexão do seu banco de dados:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
    ```

5.  Execute as migrações do Prisma para criar as tabelas no banco de dados:
    ```bash
    npx prisma migrate dev
    ```

## 🏃 Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`. [2]

## Endpoints da API

### Autenticação

#### `POST /auth/signup`

Registra um novo usuário.

**Corpo da Requisição:**
```json
{
  "email": "teste@email.com",
  "password": "senha_super_segura"
}
```

---

#### `POST /auth/signin`

Autentica um usuário existente.

**Corpo da Requisição:**
```json
{
  "email": "teste@email.com",
  "password": "senha_super_segura"
}
```

---

## 📄 Autor do Projeto

Junior Nelson Dias Delgado

