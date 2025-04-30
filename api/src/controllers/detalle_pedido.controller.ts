import { Request, Response } from 'express';
import DetallePedido from '../model/detalle_pedido';

class DetallePedidoController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const detallePedido = await DetallePedido.create(req.body);
      return res.status(201).json(detallePedido);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating detalle pedido', error });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const detallesPedido = await DetallePedido.findAll();
      return res.status(200).json(detallesPedido);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching detalles pedido', error });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const detallePedido = await DetallePedido.findByPk(id);
      if (!detallePedido) {
        return res.status(404).json({ message: 'Detalle pedido not found' });
      }
      return res.status(200).json(detallePedido);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching detalle pedido', error });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const [updated] = await DetallePedido.update(req.body, {
        where: { id },
      });
      if (!updated) {
        return res.status(404).json({ message: 'Detalle pedido not found' });
      }
      const updatedDetallePedido = await DetallePedido.findByPk(id);
      return res.status(200).json(updatedDetallePedido);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating detalle pedido', error });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const deleted = await DetallePedido.destroy({
        where: { id },
      });
      if (!deleted) {
        return res.status(404).json({ message: 'Detalle pedido not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting detalle pedido', error });
    }
  }
}

export default DetallePedidoController;