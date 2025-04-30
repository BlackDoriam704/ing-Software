import { Request, Response } from 'express';
import Carrito from '../model/carrito';

class CarritoController {
  // Crear un nuevo carrito
  public async crearCarrito(req: Request, res: Response): Promise<Response> {
    try {
      const carrito = await Carrito.create(req.body);
      return res.status(201).json(carrito);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener todos los carritos
  public async obtenerCarritos(req: Request, res: Response): Promise<Response> {
    try {
      const carritos = await Carrito.findAll();
      return res.status(200).json(carritos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Obtener un carrito por ID
  public async obtenerCarritoPorId(req: Request, res: Response): Promise<Response> {
    try {
      const carrito = await Carrito.findByPk(req.params.id);
      if (carrito) {
        return res.status(200).json(carrito);
      }
      return res.status(404).json({ message: 'Carrito no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Actualizar un carrito
  public async actualizarCarrito(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await Carrito.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedCarrito = await Carrito.findByPk(req.params.id);
        return res.status(200).json(updatedCarrito);
      }
      return res.status(404).json({ message: 'Carrito no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  // Eliminar un carrito
  public async eliminarCarrito(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await Carrito.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Carrito no encontrado' });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default new CarritoController();