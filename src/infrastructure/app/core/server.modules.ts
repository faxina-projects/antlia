import ServerApp from 'express';

const Router = ServerApp.Router;

export {
  Application,
  json as bodyParser,
  json,
  NextFunction,
  Response,
  Router as RouterType,
  urlencoded,
} from 'express';

export { Router, ServerApp };
