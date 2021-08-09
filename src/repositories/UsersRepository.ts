import { User } from '../model/User';

/** DTO - Data Transfer Object */
interface ICreateUserDTO {
  name: string;
  lastname: string;
  nickname: string;
  address: string;
  bio: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  create({ name, lastname, nickname, address, bio }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      lastname,
      nickname,
      address,
      bio,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findByNickname(nickname: string): User {
    const user = this.users.find((user) => user.nickname === nickname);

    return user;
  }
}

export { UsersRepository };
