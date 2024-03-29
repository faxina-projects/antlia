import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class FindUserByEmailException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to find user', reason, error, data);
  }
}

export { FindUserByEmailException };
