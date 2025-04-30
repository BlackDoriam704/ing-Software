import { RequestHandler } from 'express';
import Producto from '../model/producto';

class ProductoController {
  // Crear un nuevo producto
  static create: RequestHandler = async (req, res): Promise<void> => {
    try {
      const producto = await Producto.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el producto', error });
    }
  };

  // Obtener todos los productos
  static getAll: RequestHandler = async (req, res): Promise<void> => {
    try {
      const productos = await Producto.findAll();
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los productos', error });
    }
  };

  // Obtener un producto por ID
  static getById: RequestHandler = async (req, res): Promise<void> => {
    try {
      const producto = await Producto.findByPk(req.params.id);
      if (producto) {
        res.status(200).json(producto);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el producto', error });
    }
  };

  // Actualizar un producto
  static update: RequestHandler = async (req, res): Promise<void> => {
    try {
      const [updated] = await Producto.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedProducto = await Producto.findByPk(req.params.id);
        res.status(200).json(updatedProducto);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
  };

  // Eliminar un producto
  static delete: RequestHandler = async (req, res): Promise<void> => {
    try {
      const deleted = await Producto.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
  };
}

export default ProductoController;