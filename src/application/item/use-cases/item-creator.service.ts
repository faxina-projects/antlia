import { CreateItemDTO, ItemDTO } from '../dtos';
import { CreateItemException } from '../exceptions';
import { IItemRepository } from '../interfaces';
import { IItemCreatorService } from './item-creator.service.interface';

class ItemCreatorService implements IItemCreatorService {
  constructor(private readonly userRepository: IItemRepository) {}

  create = async (userData: CreateItemDTO): Promise<ItemDTO> => {
    try {
      const newItem = await this.userRepository.create(userData);
      return newItem;
    } catch (error: any) {
      throw new CreateItemException(error.message, error, { userData });
    }
  };
}

export { ItemCreatorService };
