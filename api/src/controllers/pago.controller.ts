import { Request, Response } from 'express';
import Pago from '../model/pago';

class PagoController {
  // Crear un nuevo pago
  public async crearPago(req: Request, res: Response): Promise<Response> {
    try {
      const nuevoPago = await Pago.create(req.body);
      return res.status(201).json(nuevoPago);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener todos los pagos
  public async obtenerPagos(req: Request, res: Response): Promise<Response> {
    try {
      const pagos = await Pago.findAll();
      return res.status(200).json(pagos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener un pago por ID
  public async obtenerPagoPorId(req: Request, res: Response): Promise<Response> {
    try {
      const pago = await Pago.findByPk(req.params.id);
      if (pago) {
        return res.status(200).json(pago);
      }
      return res.status(404).json({ message: 'Pago no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Actualizar un pago
  public async actualizarPago(req: Request, res: Response): Promise<Response> {
    try {
      const [actualizado] = await Pago.update(req.body, {
        where: { id: req.params.id },
      });
      if (actualizado) {
        const pagoActualizado = await Pago.findByPk(req.params.id);
        return res.status(200).json(pagoActualizado);
      }
      return res.status(404).json({ message: 'Pago no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Eliminar un pago
  public async eliminarPago(req: Request, res: Response): Promise<Response> {
    try {
      const eliminado = await Pago.destroy({
        where: { id: req.params.id },
      });
      if (eliminado) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Pago no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new PagoController();