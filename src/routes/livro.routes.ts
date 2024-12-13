import { Request, Response, Router } from 'express';
import { AppDataSource } from '../database/data-source';
import Livro from '../entities/Livro';

const livroRoutes = Router();

/* Implemente aqui os métodos que irão atender as requisições HTTP para a entidade Autor. */

const userRepository = AppDataSource.getRepository(Livro);

livroRoutes.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const livros = await userRepository.find();
    return res.status(200).json(livros);
});

export default livroRoutes;