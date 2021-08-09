import { UsersRepository } from '../repositories/UsersRepository';

interface IRequest {
  name: string;
  lastname: string;
  nickname: string;
  address: string;
  bio: string;
}

class CreateUserService {
  constructor(private usersRepository: UsersRepository) {
    console.log();
  }

  execute({ name, lastname, nickname, address, bio }: IRequest): void {
    const userAlreadyExists = this.usersRepository.findByNickname(nickname);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    this.usersRepository.create({ name, lastname, nickname, address, bio });
  }
}

export { CreateUserService };
