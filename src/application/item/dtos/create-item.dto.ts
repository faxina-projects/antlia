class CreateItemDTO {
  private constructor(
    public readonly owner: string,
    public readonly name: string,
    public readonly description: string,
    public readonly category: string,
    public readonly price: number,
  ) {}
}

export { CreateItemDTO };
