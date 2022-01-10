import { CreateItemDTO, ItemDTO } from '@/application/item/dtos';
import { IItemRepository } from '@/application/item/interfaces';

import {
  CreateItemException,
  FindItemByIdException,
  FindItemsException,
} from '../exceptions';
import { ItemMapper } from '../mapper';
import { ItemModel } from '../models';

class ItemRepository implements IItemRepository {
  create = async (userData: CreateItemDTO): Promise<ItemDTO> => {
    try {
      const catchphrase = new ItemModel(userData);

      const newUser = await catchphrase.save();

      return ItemMapper.toDTO(newUser);
    } catch (error: any) {
      throw new CreateItemException(error.message, error, userData);
    }
  };

  // update = async (catchphraseData: CatchphraseDTO): Promise<CatchphraseDTO> => {
  //   try {
  //     const { id, ...restData } = catchphraseData;
  //     await CatchPhrase.updateOne({ id }, restData);

  //     return catchphraseData;
  //   } catch (error: any) {
  //     throw new InsertCatchphraseException(
  //       error.message,
  //       error,
  //       catchphraseData,
  //     );
  //   }
  // };

  findById = async (id: string): Promise<ItemDTO | undefined> => {
    try {
      const item = await ItemModel.findById(id);
      return item ? ItemMapper.toDTO(item) : undefined;
    } catch (error: any) {
      throw new FindItemByIdException(error.message, error, { id });
    }
  };

  find = async (): Promise<ItemDTO[]> => {
    try {
      const items = await ItemModel.find();
      return items.map((item) => ItemMapper.toDTO(item));
    } catch (error: any) {
      throw new FindItemsException(error.message, error);
    }
  };

  // delete = async (id: string): Promise<void> => {
  //   try {
  //     await CatchPhrase.remove({ id });
  //   } catch (error: any) {
  //     throw new DeleteCatchphraseException(error.message, error, { id });
  //   }
  // };
}

const itemRepository = new ItemRepository();

export { itemRepository };
