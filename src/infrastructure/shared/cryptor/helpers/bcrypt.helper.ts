import { compare, genSalt, hash } from 'bcrypt';

import { ICryptor } from '@/application/auth/interfaces';

import {
  CompareHashException,
  HashGenerationException,
  SaltGenerationException,
} from '../exceptions';

class BCryptHelper implements ICryptor {
  compare = async (str: string, strHashed: string): Promise<boolean> => {
    try {
      const isSame = await compare(str, strHashed);
      return isSame;
    } catch (error) {
      throw new CompareHashException(error);
    }
  };

  genSalt = async (): Promise<string> => {
    try {
      const salt = await genSalt();
      return salt;
    } catch (error) {
      throw new SaltGenerationException(error);
    }
  };

  hash = async (str: string, salt: string): Promise<string> => {
    try {
      const strHashed = await hash(str, salt);
      return strHashed;
    } catch (error) {
      throw new HashGenerationException(error);
    }
  };
}

const bcryptHelper = new BCryptHelper();

export { bcryptHelper };
