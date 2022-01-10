import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class FindItemsException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to find items', reason, error, data);
  }
}

export { FindItemsException };
