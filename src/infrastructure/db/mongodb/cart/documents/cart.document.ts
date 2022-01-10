import { Document, ObjectId } from 'mongoose';

interface CartDocument extends Document {
  id: string;
  owner: ObjectId;
  name: string;
  description: string;
  category: string;
  price: number;
}

export { CartDocument };
