import { Document } from 'mongoose';

interface UserDocument extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  tokens: string[];
}

export { UserDocument };
