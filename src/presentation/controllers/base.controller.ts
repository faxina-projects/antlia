import {
  IRequest,
  NextFunction,
  Response,
  Router,
  RouterType,
} from '@/infrastructure/app/core';

abstract class BaseController {
  public router: RouterType;

  constructor(protected readonly path: string) {
    this.router = Router();
  }

  protected abstract handle: (
    request: IRequest,
    response: Response,
    next: NextFunction,
  ) => Promise<void>;

  public getPath(): string {
    return this.path;
  }

  protected abstract initializeRoutes: () => void;
}

export { BaseController };
