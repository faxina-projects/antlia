import { ILogger } from '../interfaces';

class LoggerService implements ILogger {
  info = (data: unknown): void => {
    console.log(data);
  };
}

export { LoggerService };
