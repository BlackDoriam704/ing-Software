import { Request, Response } from 'express';
import Categoria from '../model/categoria';

class CategoriaController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const categoria = await Categoria.create(req.body);
      return res.status(201).json(categoria);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating category', error });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const categorias = await Categoria.findAll();
      return res.status(200).json(categorias);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching categories', error });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const categoria = await Categoria.findByPk(req.params.id);
      if (categoria) {
        return res.status(200).json(categoria);
      }
      return res.status(404).json({ message: 'Category not found' });
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching category', error });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await Categoria.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedCategoria = await Categoria.findByPk(req.params.id);
        return res.status(200).json(updatedCategoria);
      }
      return res.status(404).json({ message: 'Category not found' });
    } catch (error) {
      return res.status(500).json({ message: 'Error updating category', error });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await Categoria.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Category not found' });
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting category', error });
    }
  }
}

export default new CategoriaController();