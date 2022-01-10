import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class SaltGenerationException extends InternalServerErrorException {
  constructor(error?: unknown) {
    super('Failed to generate salt', undefined, error);
  }
}

export { SaltGenerationException };
