import { Router } from 'express';

import { createClient } from './Controllers/client/createClient';
import { listClient } from './Controllers/client/listClient';
import { signIn } from './Controllers/user/signIn';

export const router = Router();

router.get('/client', listClient);

router.post('/client', createClient);

router.post('/signin', signIn);
