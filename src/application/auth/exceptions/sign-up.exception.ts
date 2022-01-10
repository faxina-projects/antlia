import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class SignUpException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to signUp', reason, error, data);
  }
}

export { SignUpException };
