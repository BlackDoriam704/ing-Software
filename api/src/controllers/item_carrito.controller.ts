import { Request, Response } from 'express';
import ItemCarrito from '../model/item_carrito';

class ItemCarritoController {
  public async agregarItem(req: Request, res: Response): Promise<Response> {
    try {
      const nuevoItem = await ItemCarrito.create(req.body);
      return res.status(201).json(nuevoItem);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async obtenerItems(req: Request, res: Response): Promise<Response> {
    try {
      const items = await ItemCarrito.findAll();
      return res.status(200).json(items);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  public async eliminarItem(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const item = await ItemCarrito.destroy({ where: { id } });
      if (item) {
        return res.status(204).send();
      }
      return res.status(404).json({ error: 'Item no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new ItemCarritoController();