import { JwtPayloadDTO } from './jwt-payload.dto';

class AccessTokenPayloadDTO extends JwtPayloadDTO {
  private constructor(iat: number, public readonly email: string) {
    super(iat);
  }

  static build = ({
    iat,
    email,
  }: AccessTokenPayloadDTO): AccessTokenPayloadDTO => {
    return new AccessTokenPayloadDTO(iat, email);
  };
}

export { AccessTokenPayloadDTO };
