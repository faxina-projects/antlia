class SignInDataDTO {
  private constructor(public readonly accessToken: string) {}

  static build = ({ accessToken }: SignInDataDTO): SignInDataDTO => {
    return new SignInDataDTO(accessToken);
  };
}

export { SignInDataDTO };
