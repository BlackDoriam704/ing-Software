import { Request, RequestHandler, Response } from 'express';
import Carrito from '../model/carrito';

class CarritoController {
  static crearCarrito: RequestHandler = async (req, res): Promise<void> => {
    try {
      const carrito = await Carrito.create(req.body);
      res.status(201).json(carrito);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el carrito', error });
    }
  };

  // Obtener todos los carritos
  static obtenerCarritos: RequestHandler = async (req, res): Promise<void> => {
    try {
      const carritos = await Carrito.findAll();
      res.status(200).json(carritos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los carritos', error });
    }
  };

  // Obtener un carrito por ID
  static obtenerCarritoPorId: RequestHandler = async (req, res): Promise<void> => {
    try {
      const carrito = await Carrito.findByPk(req.params.id);
      if (!carrito) {
        res.status(404).json({ message: 'Carrito no encontrado' });
        return;
      }
      res.status(200).json(carrito);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el carrito', error });
    }
  };

  // Actualizar un carrito por ID
  static actualizarCarrito: RequestHandler = async (req, res): Promise<void> => {
    try {
      const carrito = await Carrito.findByPk(req.params.id);
      if (!carrito) {
        res.status(404).json({ message: 'Carrito no encontrado' });
        return;
      }
      await carrito.update(req.body);
      res.status(200).json(carrito);
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el carrito', error });
    }
  };

  // Eliminar un carrito por ID
  static eliminarCarrito: RequestHandler = async (req, res): Promise<void> => {
    try {
      const carrito = await Carrito.findByPk(req.params.id);
      if (!carrito) {
        res.status(404).json({ message: 'Carrito no encontrado' });
        return;
      }
      await carrito.destroy();
      res.status(200).json({ message: 'Carrito eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el carrito', error });
    }
  };
}

export default CarritoController;