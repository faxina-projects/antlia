import { IRequest, NextFunction, Response } from '../core';

interface IMiddleware {
  handle: (
    exception: Error,
    request: IRequest,
    response: Response,
    _next: NextFunction,
  ) => void;
}

export { IMiddleware };
