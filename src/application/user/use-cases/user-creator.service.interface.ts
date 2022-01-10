import { CreateUserDTO, UserDTO } from '../dtos';

interface IUserCreatorService {
  create: (userData: CreateUserDTO) => Promise<UserDTO>;
}

export { IUserCreatorService };
