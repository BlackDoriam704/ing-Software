import { Request, Response, RequestHandler} from 'express';
import DetallePedido from '../model/detalle_pedido';

class DetallePedidoController {
  static create: RequestHandler = async (req, res): Promise<void> => {
    try {
      const detallePedido = await DetallePedido.create(req.body);
      res.status(201).json(detallePedido);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el detalle del pedido', error });
    }
  };

  // Obtener todos los detalles de pedido
  static getAll: RequestHandler = async (req, res): Promise<void> => {
    try {
      const detallesPedido = await DetallePedido.findAll();
      res.status(200).json(detallesPedido);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los detalles del pedido', error });
    }
  };

  // Obtener un detalle de pedido por ID
  static getById: RequestHandler = async (req, res): Promise<void> => {
    const { id } = req.params;
    try {
      const detallePedido = await DetallePedido.findByPk(id);
      if (!detallePedido) {
        res.status(404).json({ message: 'Detalle del pedido no encontrado' });
        return;
      }
      res.status(200).json(detallePedido);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el detalle del pedido', error });
    }
  };

  // Actualizar un detalle de pedido por ID
  static update: RequestHandler = async (req, res): Promise<void> => {
    const { id } = req.params;
    try {
      const [updated] = await DetallePedido.update(req.body, {
        where: { id },
      });
      if (!updated) {
        res.status(404).json({ message: 'Detalle del pedido no encontrado' });
        return;
      }
      const updatedDetallePedido = await DetallePedido.findByPk(id);
      res.status(200).json(updatedDetallePedido);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el detalle del pedido', error });
    }
  };

  // Eliminar un detalle de pedido por ID
  static delete: RequestHandler = async (req, res): Promise<void> => {
    const { id } = req.params;
    try {
      const deleted = await DetallePedido.destroy({
        where: { id },
      });
      if (!deleted) {
        res.status(404).json({ message: 'Detalle del pedido no encontrado' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el detalle del pedido', error });
    }
  };
}

export default DetallePedidoController;