import { Request, Response, RequestHandler } from 'express';
import Pago from '../model/pago';

class PagoController {
  static crearPago: RequestHandler = async (req, res): Promise<void> => {
    try {
      const nuevoPago = await Pago.create(req.body);
      res.status(201).json(nuevoPago);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };

  // Obtener todos los pagos
  static obtenerPagos: RequestHandler = async (req, res): Promise<void> => {
    try {
      const pagos = await Pago.findAll();
      res.status(200).json(pagos);
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };

  // Obtener un pago por ID
  static obtenerPagoPorId: RequestHandler = async (req, res): Promise<void> => {
    try {
      const pago = await Pago.findByPk(req.params.id);
      if (pago) {
        res.status(200).json(pago);
      } else {
        res.status(404).json({ message: 'Pago no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };

  // Actualizar un pago
  static actualizarPago: RequestHandler = async (req, res): Promise<void> => {
    try {
      const [actualizado] = await Pago.update(req.body, {
        where: { id: req.params.id },
      });
      if (actualizado) {
        const pagoActualizado = await Pago.findByPk(req.params.id);
        res.status(200).json(pagoActualizado);
      } else {
        res.status(404).json({ message: 'Pago no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };

  // Eliminar un pago
  static eliminarPago: RequestHandler = async (req, res): Promise<void> => {
    try {
      const eliminado = await Pago.destroy({
        where: { id: req.params.id },
      });
      if (eliminado) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Pago no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error instanceof Error ? error.message : 'Error desconocido' });
    }
  };
}

export default PagoController;