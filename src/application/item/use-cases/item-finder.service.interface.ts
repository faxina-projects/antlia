import { ItemDTO } from '../dtos';

interface IItemFinderService {
  findById: (id: string) => Promise<ItemDTO>;

  find: () => Promise<ItemDTO[]>;
}

export { IItemFinderService };
