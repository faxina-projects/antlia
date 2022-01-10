import { ItemDTO } from '@/application/item/dtos';

import { ItemDocument } from '../documents';

class ItemMapper {
  static toDTO = (catchphraseData: ItemDocument): ItemDTO => {
    const { id, owner, name, description, category, price } = catchphraseData;

    return ItemDTO.build({
      id,
      owner: owner as unknown as string,
      name,
      description,
      category,
      price,
    });
  };
}

export { ItemMapper };
