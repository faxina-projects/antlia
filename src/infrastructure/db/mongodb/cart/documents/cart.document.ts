import { Document, ObjectId } from 'mongoose';

interface CartDocument extends Document {
  id: string;
  owner: ObjectId;
  items: ObjectId[];
  name: string;
  quantity: string;
  bill: string;
}

export { CartDocument };
