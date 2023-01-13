import { model, Schema } from 'mongoose';

export const Client = model('Client', new Schema({
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    required: true,
  },
  telephone: {
    type: 'Number',
    required: true,
  },
  address: {
    type: 'string',
    required: true,
  },
  cpf: {
    type: 'Number',
    required: true,
  }
}));
