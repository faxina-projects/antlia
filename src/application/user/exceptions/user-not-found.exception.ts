import { NotFoundException } from '@/application/shared/http/exceptions';

class UserNotFoundException extends NotFoundException {
  constructor(reason?: string, data?: unknown) {
    super('User not found', reason, undefined, data);
  }
}

export { UserNotFoundException };
