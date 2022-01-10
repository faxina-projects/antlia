import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class CreateUserException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to create user', reason, error, data);
  }
}

export { CreateUserException };
