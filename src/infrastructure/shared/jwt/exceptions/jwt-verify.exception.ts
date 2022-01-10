import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class JwtVerifyException extends InternalServerErrorException {
  constructor(error?: unknown, data?: unknown) {
    super('Failed to verify jwt', undefined, error, data);
  }
}

export { JwtVerifyException };
