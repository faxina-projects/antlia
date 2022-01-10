import { instanceToPlain } from 'class-transformer';

import { AccessTokenPayloadDataDTO } from '../dtos';
import { GenerateCreateAccessTokenException } from '../exceptions';
import { IJwt } from '../interfaces';
import { IAccessTokenGenerator } from './access-token-generator.interface';

class AccessTokenGenerator implements IAccessTokenGenerator {
  constructor(private readonly jwt: IJwt) {}

  generate = (payload: AccessTokenPayloadDataDTO): string => {
    try {
      const token = this.jwt.sign(
        instanceToPlain({ data: payload }),
        process.env.JWT_ACCESS_TOKEN_SECRET as string,
        {
          expiresIn:
            Number(process.env.JWT_ACCESS_TOKEN_EXPIRATION_TIME) * 1000,
        },
      );

      return token;
    } catch (error) {
      throw new GenerateCreateAccessTokenException(error);
    }
  };
}

export { AccessTokenGenerator };
