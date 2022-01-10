import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class JwtSignException extends InternalServerErrorException {
  constructor(error?: unknown, data?: unknown) {
    super('Failed to jwt sign', undefined, error, data);
  }
}

export { JwtSignException };
