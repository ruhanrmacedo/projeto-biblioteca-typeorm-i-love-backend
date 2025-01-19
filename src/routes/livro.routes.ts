import { Request, Response, Router } from "express";
import { AppDataSource } from "../database/data-source";
import Livro from "../entities/Livro";

const livroRoutes = Router();

const livroRepository = AppDataSource.getRepository(Livro);

livroRoutes.post("/", async (req, res) => {
  const body = req.body;

  const livro = new Livro();
  livro.title = body.title;
  livro.description = body.description;
  livro.publication_date = body.publication_date;
  livro.isbn = body.isbn;
  livro.page_count = body.page_count;
  livro.language = body.language;
  livro.created_at = new Date();
  livro.updated_at = new Date();

  const savedLivro = await livroRepository.save(livro);

  res.status(201).json({
    message: "Livro criado com sucesso",
    livro: savedLivro,
  });
});

livroRoutes.get("/", async (_req, res) => {
  const livros = await livroRepository.find();
  return res.status(200).json(livros);
});

livroRoutes.get("/:id", async (req, res) => {
  const { id } = req.params;
  const livro = await livroRepository.findOne({ where: { id: Number(id) } });

  if (!livro) {
    return res.status(404).json({ message: "Livro não encontrado" });
  }

  return res.status(200).json(livro);
});

livroRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, publication_date, page_count, language, isbn } =
    req.body;

  const livro = await livroRepository.findOne({ where: { id: Number(id) } });

  if (!livro) {
    return res.status(404).json({ message: "Livro não encontrado" });
  }

  livro.title = title ?? livro.title;
  livro.description = description ?? livro.description;
  livro.publication_date = publication_date ?? livro.publication_date;
  livro.page_count = Number(page_count) ?? livro.page_count;
  livro.language = language ?? livro.language;
  livro.isbn = isbn ?? livro.isbn;

  const updatedLivro = await livroRepository.save(livro);
  res.status(200).json({
    message: "Livro atualizado com sucesso",
    livro: updatedLivro,
  });
});

livroRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const livro = await livroRepository.findOne({ where: { id: Number(id) } });

  if (!livro) {
    return res.status(404).json({ message: "Livro não encontrado" });
  }

  await livroRepository.remove(livro);
  res.status(200).json({ message: "Livro excluído com sucesso" });
});

export default livroRoutes;
