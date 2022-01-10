import { model } from 'mongoose';

import { ItemDocument } from '../documents';
import { itemSchema } from '../schemas';

const ItemModel = model<ItemDocument>('Item', itemSchema);

export { ItemModel };
