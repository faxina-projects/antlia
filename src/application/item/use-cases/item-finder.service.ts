import { HttpBaseException } from '@/application/shared/http/exceptions';

import { ItemDTO } from '../dtos';
import {
  FindItemByIdException,
  FindItemsException,
  ItemNotFoundException,
} from '../exceptions';
import { IItemRepository } from '../interfaces';
import { IItemFinderService } from './item-finder.service.interface';

class ItemFinderService implements IItemFinderService {
  constructor(private readonly userRepository: IItemRepository) {}

  findById = async (id: string): Promise<ItemDTO> => {
    try {
      const user = await this.userRepository.findById(id);

      if (!user) {
        throw new ItemNotFoundException(`user with id '${id}' not found`, {
          id,
        });
      }

      return user;
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }
      throw new FindItemByIdException(error.message, error, { id });
    }
  };

  find = async (): Promise<ItemDTO[]> => {
    try {
      const items = await this.userRepository.find();

      return items;
    } catch (error: any) {
      if (HttpBaseException.isSafeError(error)) {
        throw error;
      }
      throw new FindItemsException(error.message, error);
    }
  };
}

export { ItemFinderService };
