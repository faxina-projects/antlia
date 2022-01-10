import { NotFoundException } from '@/application/shared/http/exceptions';

class ItemNotFoundException extends NotFoundException {
  constructor(reason?: string, data?: unknown) {
    super('Item not found', reason, undefined, data);
  }
}

export { ItemNotFoundException };
