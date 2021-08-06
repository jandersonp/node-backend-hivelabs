import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

import { User } from '../model/User';

const usersRoutes = Router();

const users: User[] = [];

usersRoutes.post('/', (request, response) => {
  const { name, lastname, nickname, address, bio } = request.body;

  const user: User = {
    id: uuidV4(),
    name,
    lastname,
    nickname,
    address,
    bio,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(user);

  return response.status(201).send({ name, lastname, nickname, address, bio });
});

export { usersRoutes };
