import { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const itemSchema = new Schema(
  {
    owner: {
      type: ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export { itemSchema };
