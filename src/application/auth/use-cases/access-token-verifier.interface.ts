import { AccessTokenPayloadDataDTO } from '../dtos';

interface IAccessTokenVerifier {
  verify: (token: string) => AccessTokenPayloadDataDTO;
}

export { IAccessTokenVerifier };
