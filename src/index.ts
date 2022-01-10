import '@/infrastructure/config/env.config';

import { App } from '@/infrastructure/app';
import { appConfig } from '@/infrastructure/config';

import { MongoDBManager } from './infrastructure/db/mongodb';

(async (): Promise<void> => {
  try {
    const app = new App(appConfig.port);

    const mongoDbManager = new MongoDBManager('catchphrase');
    await mongoDbManager.connect();

    await app.listen();
  } catch (error: any) {
    console.error(`Error occured: ${error.message}`);
  }
})();

// process.on('uncaughtException', (error: NodeJS.UncaughtExceptionListener) => {
//   console.log(error);
// });

// process.on(
//   'unhandledRejection',
//   (reason: NodeJS.UnhandledRejectionListener) => {
//     console.log(reason);
//   },
// );
