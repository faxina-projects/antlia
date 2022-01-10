import { CreateItemDTO, ItemDTO } from '../dtos';

interface IItemRepository {
  create: (userData: CreateItemDTO) => Promise<ItemDTO>;

  findById: (id: string) => Promise<ItemDTO | undefined>;

  find: () => Promise<ItemDTO[]>;
}

export { IItemRepository };
