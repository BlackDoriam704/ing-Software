import { RequestHandler } from 'express';
import Pedido from '../model/pedido';

class PedidoController {
  // Crear un nuevo pedido
  static create: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { usuarioId, fechaCreacion, estado } = req.body;
      const pedido = await Pedido.create({ usuarioId, fechaCreacion, estado });
      res.status(201).json(pedido);
    } catch (error) {
      res.status(500).json({ message: 'Error creando el pedido', error });
    }
  };

  // Obtener todos los pedidos
  static getAll: RequestHandler = async (req, res): Promise<void> => {
    try {
      const pedidos = await Pedido.findAll();
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo los pedidos', error });
    }
  };

  // Obtener un pedido por ID
  static getById: RequestHandler = async (req, res): Promise<void> => {
    try {
      const pedido = await Pedido.findByPk(req.params.id);
      if (pedido) {
        res.status(200).json(pedido);
      } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo el pedido', error });
    }
  };

  // Actualizar un pedido
  static update: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { usuarioId, fechaCreacion, estado } = req.body;
      const [updated] = await Pedido.update(
        { usuarioId, fechaCreacion, estado },
        { where: { id: req.params.id } }
      );
      if (updated) {
        const updatedPedido = await Pedido.findByPk(req.params.id);
        res.status(200).json(updatedPedido);
      } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error actualizando el pedido', error });
    }
  };

  // Eliminar un pedido
  static delete: RequestHandler = async (req, res): Promise<void> => {
    try {
      const deleted = await Pedido.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Pedido no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error eliminando el pedido', error });
    }
  };
}

export default PedidoController;