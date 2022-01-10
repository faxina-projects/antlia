import { CreateUserDTO, UserDTO } from '../dtos';
import { CreateUserException } from '../exceptions';
import { IUserRepository } from '../interfaces';
import { IUserCreatorService } from './user-creator.service.interface';

class UserCreatorService implements IUserCreatorService {
  constructor(private readonly userRepository: IUserRepository) {}

  create = async (userData: CreateUserDTO): Promise<UserDTO> => {
    try {
      const newUser = await this.userRepository.create(userData);
      return newUser;
    } catch (error: any) {
      throw new CreateUserException(error.message, error, { userData });
    }
  };
}

export { UserCreatorService };
