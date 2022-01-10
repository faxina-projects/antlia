import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class HashGenerationException extends InternalServerErrorException {
  constructor(error?: unknown) {
    super('Failed to generate hash', undefined, error);
  }
}

export { HashGenerationException };
