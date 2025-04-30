import { Request, Response,RequestHandler } from 'express';
import ItemCarrito from '../model/item_carrito';

class ItemCarritoController {
  static agregarItem: RequestHandler = async (req, res): Promise<void> => {
    try {
      const nuevoItem = await ItemCarrito.create(req.body);
      res.status(201).json(nuevoItem);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };

  // Obtener todos los items del carrito
  static obtenerItems: RequestHandler = async (req, res): Promise<void> => {
    try {
      const items = await ItemCarrito.findAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };

  // Eliminar un item del carrito por ID
  static eliminarItem: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { id } = req.params;
      const item = await ItemCarrito.destroy({ where: { id } });
      if (item) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Item no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };
}

export default ItemCarritoController;