import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class CompareHashException extends InternalServerErrorException {
  constructor(error?: unknown) {
    super('Failed to compare hash', undefined, error);
  }
}

export { CompareHashException };
