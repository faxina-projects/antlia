class UserDTO {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    public readonly password: string,
    public readonly tokens: string[],
  ) {}

  static build = ({ id, name, email, password, tokens }: UserDTO): UserDTO => {
    return new UserDTO(id, name, email, password, tokens);
  };
}

export { UserDTO };
