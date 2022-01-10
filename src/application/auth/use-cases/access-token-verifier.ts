import { AccessTokenPayloadDataDTO } from '../dtos';
import { GenerateCreateAccessTokenException } from '../exceptions';
import { IJwt } from '../interfaces';
import { IAccessTokenVerifier } from './access-token-verifier.interface';

class AccessTokenVerifier implements IAccessTokenVerifier {
  constructor(private readonly jwt: IJwt) {}

  verify = (token: string): AccessTokenPayloadDataDTO => {
    try {
      const payload = this.jwt.verify<AccessTokenPayloadDataDTO>(
        token,
        process.env.JWT_ACCESS_TOKEN_SECRET as string,
      );

      return payload;
    } catch (error) {
      throw new GenerateCreateAccessTokenException(error, { token });
    }
  };
}

export { AccessTokenVerifier };
