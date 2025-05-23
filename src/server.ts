import "reflect-metadata";
import express, { Request, Response } from "express";
import cors from "cors";

import { AppDataSource } from "./database/data-source";


import livroRoutes from "./routes/livro.routes";
import auditorioRoutes from "./routes/auditorio.routes";
import autorRoutes from "./routes/autor.routes";
import leitorRoutes from "./routes/leitor.routes";

import "reflect-metadata"

const app = express();

app.use(cors());

app.use(express.json());

app.use("/livros", livroRoutes);
app.use("/auditorios", auditorioRoutes);
app.use("/autores", autorRoutes);
app.use("/leitores", leitorRoutes);

AppDataSource.initialize()
  .then(async () => {
    console.log("Sua conexão com banco de dados está ok");
    app.listen(9000, () => {
      console.log("Servidor rodando na porta 9000");
    });
  })
  .catch(() => console.log("Erro ao conectar com o banco de dados"));

  app.listen(5432, () => {
    console.log("Servidor rodando na porta 5432");
  });
