import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class InvalidEmailException extends InternalServerErrorException {
  constructor(data?: unknown) {
    super('Invalid email', undefined, undefined, data);
  }
}

export { InvalidEmailException };
