import { HttpMessages, HttpStatus } from '../configs';
import { HttpBaseException } from './http-base.exception';

class UnauthorizedException extends HttpBaseException {
  constructor(
    message: string = HttpMessages.UNAUTHORIZED,
    reason?: string,
    error?: unknown,
    data?: unknown,
  ) {
    super(message, reason, HttpStatus.UNAUTHORIZED, error, data);
  }
}

export { UnauthorizedException };
