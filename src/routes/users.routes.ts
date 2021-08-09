import { Router } from 'express';

import { UsersRepository } from '../repositories/UsersRepository';

const usersRoutes = Router();

const usersRepository = new UsersRepository();

usersRoutes.post('/', (request, response) => {
  const { name, lastname, nickname, address, bio } = request.body;

  const userAlreadyExists = usersRepository.findByNickname(nickname);

  if (userAlreadyExists) {
    return response.status(400).json({ error: 'User already exists' });
  }

  usersRepository.create({ name, lastname, nickname, address, bio });

  return response.status(201).send();
});

usersRoutes.get('/', (request, response) => {
  const all = usersRepository.list();

  return response.json(all);
});

export { usersRoutes };
