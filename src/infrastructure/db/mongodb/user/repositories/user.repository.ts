import { CreateUserDTO, UserDTO } from '@/application/user/dtos';
import { IUserRepository } from '@/application/user/interfaces';

import { CreateUserException, FindUserByEmailException } from '../exceptions';
import { UserMapper } from '../mapper';
import { UserModel } from '../models';

class UserRepository implements IUserRepository {
  create = async (userData: CreateUserDTO): Promise<UserDTO> => {
    try {
      const catchphrase = new UserModel(userData);

      const newUser = await catchphrase.save();

      return UserMapper.toDTO(newUser);
    } catch (error: any) {
      throw new CreateUserException(error.message, error, userData);
    }
  };

  findByEmail = async (email: string): Promise<UserDTO | undefined> => {
    try {
      const user = await UserModel.findOne({ email });
      return user ? UserMapper.toDTO(user) : undefined;
    } catch (error: any) {
      throw new FindUserByEmailException(error.message, error, { email });
    }
  };
}

const userRepository = new UserRepository();

export { userRepository };
