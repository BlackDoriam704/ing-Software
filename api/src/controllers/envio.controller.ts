import { Request, Response,RequestHandler } from 'express';
import Envio from '../model/envio';

class EnvioController {
 // Crear un nuevo envío
 static create: RequestHandler = async (req, res): Promise<void> => {
  try {
    const envio = await Envio.create(req.body);
    res.status(201).json(envio);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el envío', error });
  }
};

// Obtener todos los envíos
static getAll: RequestHandler = async (req, res): Promise<void> => {
  try {
    const envios = await Envio.findAll();
    res.status(200).json(envios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los envíos', error });
  }
};

// Obtener un envío por ID
static getById: RequestHandler = async (req, res): Promise<void> => {
  try {
    const envio = await Envio.findByPk(req.params.id);
    if (!envio) {
      res.status(404).json({ message: 'Envío no encontrado' });
      return;
    }
    res.status(200).json(envio);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el envío', error });
  }
};

// Actualizar un envío por ID
static update: RequestHandler = async (req, res): Promise<void> => {
  try {
    const [updated] = await Envio.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updated) {
      res.status(404).json({ message: 'Envío no encontrado' });
      return;
    }
    const updatedEnvio = await Envio.findByPk(req.params.id);
    res.status(200).json(updatedEnvio);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el envío', error });
  }
};

// Eliminar un envío por ID
static delete: RequestHandler = async (req, res): Promise<void> => {
  try {
    const deleted = await Envio.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      res.status(404).json({ message: 'Envío no encontrado' });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el envío', error });
  }
};
}

export default EnvioController;