import { CreateItemDTO, ItemDTO } from '../dtos';

interface IItemCreatorService {
  create: (itemData: CreateItemDTO) => Promise<ItemDTO>;
}

export { IItemCreatorService };
