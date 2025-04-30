import { Request, Response } from 'express';
import { Pedido } from '../model/pedido';

class PedidoController {
  // Crear un nuevo pedido
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const pedido = await Pedido.create(req.body);
      return res.status(201).json(pedido);
    } catch (error) {
      return res.status(500).json({ message: 'Error creando el pedido', error });
    }
  }

  // Obtener todos los pedidos
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const pedidos = await Pedido.findAll();
      return res.status(200).json(pedidos);
    } catch (error) {
      return res.status(500).json({ message: 'Error obteniendo los pedidos', error });
    }
  }

  // Obtener un pedido por ID
  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (pedido) {
        return res.status(200).json(pedido);
      }
      return res.status(404).json({ message: 'Pedido no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error obteniendo el pedido', error });
    }
  }

  // Actualizar un pedido
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await Pedido.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedPedido = await Pedido.findByPk(req.params.id);
        return res.status(200).json(updatedPedido);
      }
      return res.status(404).json({ message: 'Pedido no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error actualizando el pedido', error });
    }
  }

  // Eliminar un pedido
  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await Pedido.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Pedido no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error eliminando el pedido', error });
    }
  }
}

export default new PedidoController();