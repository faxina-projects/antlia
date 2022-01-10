//

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

  // update = async (catchphraseData: CatchphraseDTO): Promise<CatchphraseDTO> => {
  //   try {
  //     const { id, ...restData } = catchphraseData;
  //     await CatchPhrase.updateOne({ id }, restData);

  //     return catchphraseData;
  //   } catch (error: any) {
  //     throw new InsertCatchphraseException(
  //       error.message,
  //       error,
  //       catchphraseData,
  //     );
  //   }
  // };

  // findById = async (id: string): Promise<CatchphraseDTO | undefined> => {
  //   try {
  //     const catchphrase = await CatchPhrase.findById(id);
  //     return catchphrase ? CatchphraseMapper.toDTO(catchphrase) : undefined;
  //   } catch (error: any) {
  //     throw new FindCatchphraseByIdException(error.message, error, { id });
  //   }
  // };

  // find = async (): Promise<CatchphraseDTO[]> => {
  //   try {
  //     const catchphrases = await CatchPhrase.find();
  //     return catchphrases.map((catchphrase) =>
  //       CatchphraseMapper.toDTO(catchphrase),
  //     );
  //   } catch (error: any) {
  //     throw new FindCatchphrasesException(error.message, error);
  //   }
  // };

  // delete = async (id: string): Promise<void> => {
  //   try {
  //     await CatchPhrase.remove({ id });
  //   } catch (error: any) {
  //     throw new DeleteCatchphraseException(error.message, error, { id });
  //   }
  // };
}

const userRepository = new UserRepository();

export { userRepository };
