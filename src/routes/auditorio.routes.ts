import { Router } from 'express';
import Auditorio from '../entities/Auditorio';
import { AppDataSource } from '../database/data-source';

const auditorioRoutes = Router();

/* Implemente aqui os métodos que irão atender as requisições HTTP. */
auditorioRoutes.get('/', async (req, res) => {
    try {
        const auditorioRepository = AppDataSource.getRepository(Auditorio);
        const listaAuditorios = await auditorioRepository.find({});
        res.status(200).json(listaAuditorios);
      } catch (erro) {
        res
          .status(500)
          .json({ message: `${erro} - falha na requisição de buscar Auditório` });
      }
})

auditorioRoutes.get('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const auditorioRepository = AppDataSource.getRepository(Auditorio);
      const auditorio = await auditorioRepository.findOne({ where: { id: Number(id) } });
  
      if (!auditorio) {
        return res.status(404).json({ message: "Auditório não encontrado" });
      }
  
      res.status(200).json(auditorio);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar auditório", error });
    }
  });
  

  auditorioRoutes.post('/', async (req, res) => {
    const body = req.body;
    const auditorio = new Auditorio();
    auditorio.name = body.name;
    auditorio.capacity = body.capacity;
    auditorio.location = body.location;
    auditorio.has_projector = true;
    auditorio.has_projector = true;
    auditorio.createdAt = new Date();
    auditorio.updatedAt = new Date();
  
    try {
      const auditorioRepository = AppDataSource.getRepository(Auditorio);
      const novoAuditorio = await auditorioRepository.save(auditorio);
      res.status(201).json({ message: "Auditório criado com sucesso", auditorio: novoAuditorio});
    } catch (error) {
      res.status(500).json({ message: 'Erro ao salvar auditório', error });
    }
  });
  

  auditorioRoutes.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, capacity, location} = req.body;
  
    try {
      const auditorioRepository = AppDataSource.getRepository(Auditorio);
      const auditorio = await auditorioRepository.findOne({ where: { id: Number(id) } });
  
      if (!auditorio) {
        return res.status(404).json({ message: "Auditório não encontrado" });
      }
  
      auditorio.name = name ?? auditorio.name;
      auditorio.capacity = capacity ?? auditorio.capacity;
      auditorio.location = location ?? auditorio.location;      
  
      const auditorioAtualizado = await auditorioRepository.save(auditorio);
      res.status(200).json({ message: "Auditório atualizado com sucesso", auditorio: auditorioAtualizado });
    } catch (error) {
      console.error("Erro ao atualizar auditório:", error);
      res.status(500).json({ message: "Erro ao atualizar auditório", error: error });
    }
  });
    

  auditorioRoutes.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const auditorioRepository = AppDataSource.getRepository(Auditorio);
      const auditorio = await auditorioRepository.findOne({ where: { id: Number(id) } });
  
      if (!auditorio) {
        return res.status(404).json({ message: "Auditório não encontrado" });
      }
  
      await auditorioRepository.remove(auditorio);
      res.status(200).json({ message: "Auditórior excluído com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao excluir auditório", error });
    }
  });

export default auditorioRoutes;