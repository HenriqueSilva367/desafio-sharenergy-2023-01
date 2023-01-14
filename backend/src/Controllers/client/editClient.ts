import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function editClient(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const {
      name,
      email,
      telephone,
      address,
      cpf,
    } = req.body;

    if (!name || !telephone || !address) {
      return res.status(404).json('É necessário informar todos os dados do cliente');
    }

    const idExiste = await Client.findById( id, 'client');
    if (!idExiste) return res.status(400).send('Cliente não encontrado');


    const client = await Client.findByIdAndUpdate(id, {
      name,
      email,
      telephone,
      address,
      cpf,
    });

    res.status(204).json(client);
  } catch (error) {
    res.sendStatus(500);
  }
}

