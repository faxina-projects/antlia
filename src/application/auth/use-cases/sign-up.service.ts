import { HttpBaseException } from '@/application/shared/http/exceptions';
import { CreateUserDTO } from '@/application/user/dtos';
import { IUserCreatorService } from '@/application/user/use-cases';

import { AccessTokenPayloadDataDTO, SignUpDTO } from '../dtos';
import { SignUpException } from '../exceptions';
import { ICryptor } from '../interfaces';
import { IAccessTokenGenerator } from './access-token-generator.interface';
import { ISignUpService } from './sign-up.service.interface';

class SignUpService implements ISignUpService {
  constructor(
    private readonly cryptor: ICryptor,
    private readonly userCreatorService: IUserCreatorService,
    private readonly accessTokenGenerator: IAccessTokenGenerator,
  ) {}

  signUp = async (signUpData: SignUpDTO): Promise<string> => {
    try {
      const { password } = signUpData;
      const salt = await this.cryptor.genSalt();
      const hashedPassword = await this.cryptor.hash(password, salt);

      const userData = CreateUserDTO.build({
        ...signUpData,
        password: hashedPassword,
        tokens: [],
      });
      const newUser = await this.userCreatorService.create(userData);
      const { id, email } = newUser;

      const accessTokenPayloadData = AccessTokenPayloadDataDTO.build({
        id,
        email,
      });
      const token = this.accessTokenGenerator.generate(accessTokenPayloadData);
      return token;
    } catch (error: any) {
      let message = error.message;

      if (HttpBaseException.isSafeError(error)) {
        message = `${error.message}:${error.reason}`;
      }

      throw new SignUpException(message, error, { signUpData });
    }
  };
}

export { SignUpService };
