import { HttpStatus } from '../configs';

export class HttpResponseDTO {
  constructor(
    public readonly httpStatus: HttpStatus,
    public readonly message?: string,
  ) {}
}
