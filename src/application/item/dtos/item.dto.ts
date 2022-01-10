class ItemDTO {
  private constructor(
    public readonly id: string,
    public readonly owner: string,
    public readonly name: string,
    public readonly description: string,
    public readonly category: string,
    public readonly price: number,
  ) {}

  static build = ({
    id,
    owner,
    name,
    description,
    category,
    price,
  }: ItemDTO): ItemDTO => {
    return new ItemDTO(id, owner, name, description, category, price);
  };
}

export { ItemDTO };
