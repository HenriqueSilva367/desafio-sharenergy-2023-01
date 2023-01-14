import { Request, Response } from 'express';

export async function signIn(req: Request, res: Response) {
  try {
    const {
      username,
      password,
    } = req.body;

    if(username !== 'desafiosharenergy' || password !== 'sh@r3n3rgy'){
      return res.status(400).json('Usuário ou Senha não conferem');
    }

    return res.status(200).json('Login Success');
  } catch (error) {
    res.sendStatus(500);
  }
}

