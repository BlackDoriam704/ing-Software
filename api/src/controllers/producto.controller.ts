import { Request, Response } from 'express';
import Producto from '../model/producto';

class ProductoController {
  // Crear un nuevo producto
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const producto = await Producto.create(req.body);
      return res.status(201).json(producto);
    } catch (error) {
      return res.status(500).json({ message: 'Error al crear el producto', error });
    }
  }

  // Obtener todos los productos
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const productos = await Producto.findAll();
      return res.status(200).json(productos);
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener los productos', error });
    }
  }

  // Obtener un producto por ID
  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (producto) {
        return res.status(200).json(producto);
      }
      return res.status(404).json({ message: 'Producto no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al obtener el producto', error });
    }
  }

  // Actualizar un producto
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await Producto.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedProducto = await Producto.findByPk(req.params.id);
        return res.status(200).json(updatedProducto);
      }
      return res.status(404).json({ message: 'Producto no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
  }

  // Eliminar un producto
  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await Producto.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Producto no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
  }
}

export default new ProductoController();