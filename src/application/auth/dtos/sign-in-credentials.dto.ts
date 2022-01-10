class SignInCredentialsDTO {
  private constructor(
    public readonly username: string,
    public readonly password: string,
  ) {}
}

export { SignInCredentialsDTO };
