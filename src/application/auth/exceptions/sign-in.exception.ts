import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class SignInException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to signIn', reason, error, data);
  }
}

export { SignInException };
