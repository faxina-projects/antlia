import { Document, ObjectId } from 'mongoose';

interface ItemDocument extends Document {
  id: string;
  owner: ObjectId;
  name: string;
  description: string;
  category: string;
  price: number;
}

export { ItemDocument };
