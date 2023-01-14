import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function deleteClient(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const idExiste = await Client.findById( id, 'client');
    if (!idExiste) return res.status(400).send('Cliente não encontrado');

    const excluir = await Client.findByIdAndDelete(id);

    res.status(204).json(excluir);
  } catch (error) {
    res.sendStatus(500);
  }
}

