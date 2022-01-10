import { model } from 'mongoose';

import { UserDocument } from '../documents';
import { userSchema } from '../schemas';

const UserModel = model<UserDocument>('User', userSchema);

export { UserModel };
