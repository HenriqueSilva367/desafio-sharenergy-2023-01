import { Request, Response } from 'express';

import { Client } from '../../models/Client';

export async function createClient(req: Request, res: Response) {
  try {
    const {
      name,
      email,
      telephone,
      address,
      cpf,
    } = req.body;

    if (!name || !email || !telephone || !address || !cpf) {
      return res.status(404).json('É necessário informar todos os dados do cliente');
    }

    const emailExiste = await Client.findOne({ email });
    if (emailExiste) return res.status(400).send('Já existe um cliente com este EMAIL');

    const cpfExiste = await Client.findOne({ cpf });
    if (cpfExiste) return res.status(400).send('Já existe este um cliente com este CPF');

    const client = await Client.create({
      name,
      email,
      telephone,
      address,
      cpf,
    });

    res.status(201).json(client);
  } catch (error) {
    res.sendStatus(500);
  }
}

