import { HttpBaseException } from '@/application/shared/http/exceptions';
import { IUserFinderService } from '@/application/user/use-cases';

import {
  AccessTokenPayloadDataDTO,
  SignInCredentialsDTO,
  SignInDataDTO,
} from '../dtos';
import { InvalidCredentialsException, SignInException } from '../exceptions';
import { ICryptor } from '../interfaces';
import { IAccessTokenGenerator } from './access-token-generator.interface';
import { ISignInService } from './sign-in.service.interface';

class SignInService implements ISignInService {
  constructor(
    private readonly userFinderService: IUserFinderService,
    private readonly cyptor: ICryptor,
    private readonly accessTokenGenerator: IAccessTokenGenerator,
  ) {}

  signIn = async (signInData: SignInCredentialsDTO): Promise<SignInDataDTO> => {
    try {
      const { username, password } = signInData;

      const user = await this.userFinderService.findByUsername(username);

      const { id, password: storedPassword } = user;

      const isValidPassword = await this.cyptor.compare(
        password,
        storedPassword,
      );

      if (!isValidPassword) {
        throw new InvalidCredentialsException();
      }
      const payload = AccessTokenPayloadDataDTO.build({ id, email: username });

      const accessToken = this.accessTokenGenerator.generate(payload);
      return SignInDataDTO.build({ accessToken });
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }

      throw new SignInException(error.message, error, { signInData });
    }
  };
}

export { SignInService };
