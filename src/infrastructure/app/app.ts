import helmet from 'helmet';

import {
  healthCheckController,
  signInController,
  signUpController,
} from '@/presentation/controllers';

import { LoggerMiddleware } from '../logger/middlewares';
import { Application, json, ServerApp, urlencoded } from './core';

class App {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = ServerApp();
    this.port = port;
    this.initMiddlewares();
    this.initRoutes();
  }

  private initMiddlewares = (): void => {
    const loggerMiddleware = new LoggerMiddleware();

    this.app.use(helmet());
    this.app.use(loggerMiddleware.handle);
    this.app.use(urlencoded({ extended: true }));

    this.app.use(json());
  };

  public listen = async (): Promise<void> => {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  };

  private initRoutes = (): void => {
    this.app.use('/', healthCheckController.router);
    this.app.use('/', signUpController.router);
    this.app.use('/', signInController.router);
  };
}

export { App };
