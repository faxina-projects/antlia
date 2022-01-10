import { HttpStatus } from '../configs';
import { HttpErrorResponseDTO } from '../dtos';
import { BaseException } from './base.exception';

class HttpBaseException extends BaseException {
  private response: HttpErrorResponseDTO;

  constructor(
    message: string,
    reason?: string,
    httpStatus: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    error?: any,
    data?: any,
  ) {
    super(httpStatus, message, reason, error, data);
    this.response = this.createResponse(error);
  }

  private createResponse = (error?: any) => {
    // if (
    //   isObject(error) &&
    //   !Array.isArray(error) &&
    //   error instanceof ValidationErrorDTO
    // ) {
    //   return new HttpErrorResponseDTO(this.message, this.reason, this.httpStatus, [
    //     error,
    //   ]);
    // } else if (Array.isArray(error) && error[0] instanceof ValidationErrorDTO) {
    //   return new HttpErrorResponseDTO(
    //     this.message,
    //     this.reason,
    //     this.httpStatus,
    //     error,
    //   );
    // }

    return new HttpErrorResponseDTO(this.message, this.reason, this.httpStatus);
  };

  public getResponse = () => {
    return this.response;
  };

  static isSafeError = (error: any) => {
    return error instanceof HttpBaseException;
  };
}
export { HttpBaseException };
