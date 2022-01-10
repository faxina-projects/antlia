import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class CreateItemException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to create item', reason, error, data);
  }
}

export { CreateItemException };
