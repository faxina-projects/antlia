import { AccessTokenPayloadDataDTO } from '../dtos';

interface IAccessTokenGenerator {
  generate: (payload: AccessTokenPayloadDataDTO) => string;
}

export { IAccessTokenGenerator };
