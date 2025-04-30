import { Request, Response, RequestHandler } from 'express';
import Opinion from '../model/opinion';

class OpinionController {
  static create: RequestHandler = async (req, res): Promise<void> => {
    try {
      const opinion = await Opinion.create(req.body);
      res.status(201).json(opinion);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la opinión', error });
    }
  };

  // Obtener todas las opiniones
  static getAll: RequestHandler = async (req, res): Promise<void> => {
    try {
      const opiniones = await Opinion.findAll();
      res.status(200).json(opiniones);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las opiniones', error });
    }
  };

  // Obtener una opinión por ID
  static getById: RequestHandler = async (req, res): Promise<void> => {
    try {
      const opinion = await Opinion.findByPk(req.params.id);
      if (opinion) {
        res.status(200).json(opinion);
      } else {
        res.status(404).json({ message: 'Opinión no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la opinión', error });
    }
  };

  // Actualizar una opinión
  static update: RequestHandler = async (req, res): Promise<void> => {
    try {
      const [updated] = await Opinion.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedOpinion = await Opinion.findByPk(req.params.id);
        res.status(200).json(updatedOpinion);
      } else {
        res.status(404).json({ message: 'Opinión no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la opinión', error });
    }
  };

  // Eliminar una opinión
  static delete: RequestHandler = async (req, res): Promise<void> => {
    try {
      const deleted = await Opinion.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Opinión no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la opinión', error });
    }
  };
}

export default new OpinionController();