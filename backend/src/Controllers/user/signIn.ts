import { Request, Response } from 'express';

export async function signIn(req: Request, res: Response) {
  try {
    const {
      username,
      password,
    } = req.body;

    const token = 'pk8fEetCw9~p4!$@y@i8mKao$fXtKz6z2^z~DS';

    if(username !== 'desafiosharenergy' || password !== 'sh@r3n3rgy'){
      return res.status(400).json('Usuário ou Senha não conferem');
    }

    return res.status(201).json({
      user: username,
      token,
    });
  } catch (error) {
    res.sendStatus(500);
  }
}

