import { HttpSuccessResponseDTO } from '@/application/shared/http/dtos';
import { IRequest, NextFunction, Response } from '@/infrastructure/app/core';

import { BaseController } from './base.controller';

class HealthCheckController extends BaseController {
  constructor() {
    super('/');

    this.initializeRoutes();
  }

  protected handle = async (
    _request: IRequest,
    response: Response<unknown, Record<string, unknown>>,
    _next: NextFunction,
  ): Promise<void> => {
    const responseData = new HttpSuccessResponseDTO();

    response.status(responseData.httpStatus).send(responseData);
  };

  initializeRoutes = (): void => {
    this.router.get(`${this.path}`, this.handle);
  };
}

const healthCheckController = new HealthCheckController();

export { healthCheckController };
