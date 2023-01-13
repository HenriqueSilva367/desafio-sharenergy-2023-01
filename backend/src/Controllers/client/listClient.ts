import { Request, Response } from 'express';
import { Client } from '../../models/Client';

export async function listClient(req: Request, res: Response) {
  try {
    const client = await Client.find();

    res.json(client);
  } catch (error) {
    res.sendStatus(500);
  }
}

