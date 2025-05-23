# Projeto Biblioteca - TypeORM

Sistema de gerenciamento de biblioteca desenvolvido com **TypeScript, Node.js, TypeORM e PostgreSQL**. Este projeto foi desenvolvido em grupo durante o curso **DEVinHouse Clamed V3**.

## Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL
- Dotenv
- Postman (para testes de API)

## Como rodar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/DEVinHouse-Clamed-V3/projeto-biblioteca-typeorm-i-love-backend.git
cd projeto-biblioteca-typeorm-i-love-backend
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o `.env` baseado no `.env.example`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
DB_DATABASE=biblioteca
```

4. Execute as migrations:

```bash
npm run typeorm migration:run
```

5. Inicie o servidor:

```bash
npm run dev
```

## 👥 Integrantes do grupo

| Nome                  | GitHub                                         | Responsável por                     |
|-----------------------|-----------------------------------------------|-------------------------------------|
| Skipper               | [@p-skipper](https://github.com/p-skipper)    | Funcionalidades específicas, CRUD autor                 |
| Andressa Medeiros     | [@andressasmedeiros](https://github.com/andressasmedeiros)| Funcionalidades específicas, CRUD auditório         |
| Ruhan Roberto Macedo  | [@ruhanrmacedo](https://github.com/ruhanrmacedo) | Middleware de erro, CRUD leitor |
| Carla Cristina        | [@CarlaCristina-s](https://github.com/CarlaCristina-s)   | Funcionalidades específicas, CRUD livro        |

---

> Projeto feito durante o curso DEVinHouse - CLAMED
