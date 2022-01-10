import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class GenerateCreateAccessTokenException extends InternalServerErrorException {
  constructor(error?: unknown, data?: unknown) {
    super('Failed to generate access token', undefined, error, data);
  }
}

export { GenerateCreateAccessTokenException };
