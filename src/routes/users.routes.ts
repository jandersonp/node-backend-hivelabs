import { Router } from 'express';

import { UsersRepository } from '../repositories/UsersRepository';
import { CreateUserService } from '../services/CreateUserService';

const usersRoutes = Router();

const usersRepository = new UsersRepository();

usersRoutes.post('/', (request, response) => {
  const { name, lastname, nickname, address, bio } = request.body;

  const createUserService = new CreateUserService(usersRepository);

  createUserService.execute({ name, lastname, nickname, address, bio });

  return response.status(201).send();
});

usersRoutes.get('/', (request, response) => {
  const all = usersRepository.list();

  return response.json(all);
});

export { usersRoutes };
