import { Request, Response, RequestHandler } from 'express';
import Categoria from '../model/categoria';

class CategoriaController {
  static create: RequestHandler = async (req, res): Promise<void> => {
    try {
      const categoria = await Categoria.create(req.body);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la categoría', error });
    }
  };

  // Obtener todas las categorías
  static getAll: RequestHandler = async (req, res): Promise<void> => {
    try {
      const categorias = await Categoria.findAll();
      res.status(200).json(categorias);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las categorías', error });
    }
  };

  // Obtener una categoría por ID
  static getById: RequestHandler = async (req, res): Promise<void> => {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (categoria) {
        res.status(200).json(categoria);
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la categoría', error });
    }
  };

  // Actualizar una categoría por ID
  static update: RequestHandler = async (req, res): Promise<void> => {
    try {
      const [updated] = await Categoria.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedCategoria = await Categoria.findByPk(req.params.id);
        res.status(200).json(updatedCategoria);
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la categoría', error });
    }
  };

  // Eliminar una categoría por ID
  static delete: RequestHandler = async (req, res): Promise<void> => {
    try {
      const deleted = await Categoria.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la categoría', error });
    }
  };
}

export default CategoriaController;