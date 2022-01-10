import { HttpBaseException } from '@/application/shared/http/exceptions';

import { UserDTO } from '../dtos';
import { FindUserByEmailException, UserNotFoundException } from '../exceptions';
import { IUserRepository } from '../interfaces';
import { IUserFinderService } from './user-finder.service.interface';

class UserFinderService implements IUserFinderService {
  constructor(private readonly userRepository: IUserRepository) {}

  findByUsername = async (username: string): Promise<UserDTO> => {
    try {
      const user = await this.userRepository.findByEmail(username);

      if (!user) {
        throw new UserNotFoundException(
          `user with email '${username}' not found`,
          { username },
        );
      }

      return user;
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }
      throw new FindUserByEmailException(error.message, error, { username });
    }
  };
}

export { UserFinderService };
