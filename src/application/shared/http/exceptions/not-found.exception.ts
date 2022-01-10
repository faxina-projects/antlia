import { HttpMessages, HttpStatus } from '../configs';
import { HttpBaseException } from './http-base.exception';

class NotFoundException extends HttpBaseException {
  constructor(
    message: string = HttpMessages.NOT_FOUND,
    reason?: string,
    error?: any,
    data?: any,
  ) {
    super(message, reason, HttpStatus.NOT_FOUND, error, data);
  }
}

export { NotFoundException };
