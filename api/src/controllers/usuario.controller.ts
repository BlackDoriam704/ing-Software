import { Request, Response } from 'express';
import User from '../model/usuario';

class UsuarioController {
  // Crear un nuevo usuario
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ message: 'Error creando el usuario', error });
    }
  }

  // Obtener todos los usuarios
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: 'Error obteniendo los usuarios', error });
    }
  }

  // Obtener un usuario por ID
  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        return res.status(200).json(user);
      }
      return res.status(404).json({ message: 'Usuario no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error obteniendo el usuario', error });
    }
  }

  // Actualizar un usuario
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedUser = await User.findByPk(req.params.id);
        return res.status(200).json(updatedUser);
      }
      return res.status(404).json({ message: 'Usuario no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error actualizando el usuario', error });
    }
  }

  // Eliminar un usuario
  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ message: 'Usuario no encontrado' });
    } catch (error) {
      return res.status(500).json({ message: 'Error eliminando el usuario', error });
    }
  }
}

export default new UsuarioController();