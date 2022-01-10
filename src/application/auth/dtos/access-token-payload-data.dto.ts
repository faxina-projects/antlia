class AccessTokenPayloadDataDTO {
  private constructor(
    public readonly id: string,
    public readonly email: string,
  ) {}

  static build = ({
    id,
    email,
  }: AccessTokenPayloadDataDTO): AccessTokenPayloadDataDTO => {
    return new AccessTokenPayloadDataDTO(id, email);
  };
}

export { AccessTokenPayloadDataDTO };
