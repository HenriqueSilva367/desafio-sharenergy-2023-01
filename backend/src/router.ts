import { Router } from 'express';

import { createClient } from './Controllers/client/createClient';
import { listClient } from './Controllers/client/listClient';
import { signIn } from './Controllers/user/signIn';
import { editClient } from './Controllers/client/editClient';
import { deleteClient } from './Controllers/client/deleteClient';
export const router = Router();

router.get('/client', listClient);

router.post('/client', createClient);
router.patch('/client/:id', editClient);
router.delete('/client/:id', deleteClient);

router.post('/signin', signIn);
