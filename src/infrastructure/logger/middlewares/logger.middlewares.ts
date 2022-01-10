import { NextFunction, Response } from 'express';

import { IRequest } from '../../app/core';
import { IMiddleware } from '../../app/middlewares';

class LoggerMiddleware implements IMiddleware {
  handle = (
    _exception: Error,
    request: IRequest,
    _response: Response<unknown, Record<string, unknown>>,
    next: NextFunction,
  ): void => {
    console.log(`${request.method} ${request.path}`);
    next();
  };
}

export { LoggerMiddleware };
