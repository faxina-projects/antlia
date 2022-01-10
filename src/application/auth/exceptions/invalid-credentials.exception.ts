import { UnauthorizedException } from '@/application/shared/http/exceptions';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor(data?: unknown) {
    super('Invalid credentials', undefined, undefined, data);
  }
}
