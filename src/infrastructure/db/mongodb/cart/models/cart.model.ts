import { model } from 'mongoose';

import { CartDocument } from '../documents';
import { cartSchema } from '../schemas';

const CartModel = model<CartDocument>('Cart', cartSchema);

export { CartModel };
