import { CreateUserDTO, UserDTO } from '../dtos';

interface IUserRepository {
  create: (userData: CreateUserDTO) => Promise<UserDTO>;

  findByEmail: (email: string) => Promise<UserDTO | undefined>;
}

export { IUserRepository };
