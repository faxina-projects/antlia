import { BadRequestException } from '@/application/shared/http/exceptions';

export class VerifyAccessTokenException extends BadRequestException {
  constructor(error?: unknown, data?: unknown) {
    super('Failed to verify access token', undefined, error, data);
  }
}
