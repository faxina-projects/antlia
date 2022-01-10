import mongoose, { Mongoose } from 'mongoose';

import { mongoDbConfig } from './configs/mongodb.config';
import { MongoDBConnectionException } from './exceptions';
// mongodb://localhost:27017/test
class MongoDBManager {
  private connection!: Mongoose;
  private url: string;
  private dbName: string;

  constructor(dbName: string) {
    this.dbName = dbName;
    this.url = `mongodb://${mongoDbConfig.host}:${mongoDbConfig.port}`;
  }

  connect = async (): Promise<Mongoose> => {
    try {
      const connection = await mongoose.connect(this.url, {
        user: mongoDbConfig.username,
        pass: mongoDbConfig.password,
        dbName: this.dbName,
      });
      return connection;
    } catch (error: any) {
      console.error(error);
      throw new MongoDBConnectionException(error.message, error, {
        url: this.url,
      });
    }
  };
}

export { MongoDBManager };
