import { Request, Response } from 'express';
import Opinion from '../model/opinion';

class OpinionController {
  // Crear una nueva opinión
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const opinion = await Opinion.create(req.body);
      return res.status(201).json(opinion);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear la opinión', error });
    }
  }

  // Obtener todas las opiniones
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const opiniones = await Opinion.findAll();
      return res.status(200).json(opiniones);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener las opiniones', error });
    }
  }

  // Obtener una opinión por ID
  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const opinion = await Opinion.findByPk(req.params.id);
      if (opinion) {
        return res.status(200).json(opinion);
      }
      return res.status(404).json({ message: 'Opinión no encontrada' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener la opinión', error });
    }
  }

  // Actualizar una opinión
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await Opinion.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedOpinion = await Opinion.findByPk(req.params.id);
        return res.status(200).json(updatedOpinion);
      }
      return res.status(404).json({ message: 'Opinión no encontrada' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar la opinión', error });
    }
  }

  // Eliminar una opinión
  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await Opinion.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Opinión no encontrada' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar la opinión', error });
    }
  }
}

export default new OpinionController();