class CreateUserDTO {
  private constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly tokens: string[],
  ) {}

  static build = ({
    name,
    email,
    password,
    tokens,
  }: CreateUserDTO): CreateUserDTO => {
    return new CreateUserDTO(name, email, password, tokens);
  };
}

export { CreateUserDTO };
