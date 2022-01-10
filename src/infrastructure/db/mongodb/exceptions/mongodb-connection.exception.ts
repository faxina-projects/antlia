import { InternalServerErrorException } from '@/application/shared/http/exceptions';

class MongoDBConnectionException extends InternalServerErrorException {
  constructor(reason?: string, error?: unknown, data?: unknown) {
    super('Failed to connect to MongoDB', reason, error, data);
  }
}

export { MongoDBConnectionException };
