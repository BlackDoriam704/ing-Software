import { RequestHandler } from 'express';
import User from '../model/usuario';

class UsuarioController {
  // Crear un nuevo usuario
  static create: RequestHandler = async (req, res): Promise<void> => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error creando el usuario', error });
    }
  };

  // Obtener todos los usuarios
  static getAll: RequestHandler = async (req, res): Promise<void> => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo los usuarios', error });
    }
  };

  // Obtener un usuario por ID
  static getById: RequestHandler = async (req, res): Promise<void> => {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error obteniendo el usuario', error });
    }
  };

  // Actualizar un usuario
  static update: RequestHandler = async (req, res): Promise<void> => {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        res.status(200).json(updatedUser);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error actualizando el usuario', error });
    }
  };

  // Eliminar un usuario
  static delete: RequestHandler = async (req, res): Promise<void> => {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error eliminando el usuario', error });
    }
  };
}

export default UsuarioController;