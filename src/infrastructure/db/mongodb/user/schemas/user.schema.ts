import { Schema } from 'mongoose';

import { InvalidEmailException } from '@/infrastructure/shared/validators/exceptions';
import { stringValidator } from '@/infrastructure/shared/validators/helpers';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate(value: string) {
        if (!stringValidator.isEmail(value)) {
          throw new InvalidEmailException({ value });
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 7,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export { userSchema };
