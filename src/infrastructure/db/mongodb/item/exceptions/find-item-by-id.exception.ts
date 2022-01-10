import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class FindItemByIdException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to find item', reason, error, data);
  }
}

export { FindItemByIdException };
