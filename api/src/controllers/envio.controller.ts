import { Request, Response } from 'express';
import Envio from '../model/envio';

class EnvioController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const envio = await Envio.create(req.body);
      return res.status(201).json(envio);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating envio', error });
    }
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const envios = await Envio.findAll();
      return res.status(200).json(envios);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching envios', error });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const envio = await Envio.findByPk(req.params.id);
      if (!envio) {
        return res.status(404).json({ message: 'Envio not found' });
      }
      return res.status(200).json(envio);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching envio', error });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const [updated] = await Envio.update(req.body, {
        where: { id: req.params.id },
      });
      if (!updated) {
        return res.status(404).json({ message: 'Envio not found' });
      }
      const updatedEnvio = await Envio.findByPk(req.params.id);
      return res.status(200).json(updatedEnvio);
    } catch (error) {
      return res.status(500).json({ message: 'Error updating envio', error });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const deleted = await Envio.destroy({
        where: { id: req.params.id },
      });
      if (!deleted) {
        return res.status(404).json({ message: 'Envio not found' });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting envio', error });
    }
  }
}

export default new EnvioController();