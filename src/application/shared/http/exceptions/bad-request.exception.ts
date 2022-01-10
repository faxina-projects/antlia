import { HttpMessages, HttpStatus } from '../configs';
import { HttpBaseException } from './http-base.exception';

export class BadRequestException extends HttpBaseException {
  constructor(
    message: string = HttpMessages.BAD_REQUEST,
    reason?: string,
    error?: any,
    data?: any,
  ) {
    super(message, reason, HttpStatus.BAD_REQUEST, error, data);
  }
}
