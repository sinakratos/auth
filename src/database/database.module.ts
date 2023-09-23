import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from 'src/config/database.config';
import { Db, MongoClient } from 'mongodb';
import { DatabaseController } from './database.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig]
    }),
  ],
  providers: [{
    provide: 'DATABASE_CONNECTION',
    useFactory: async (configService: ConfigService) => {
      const uri = configService.get<string>('database.uri');
      const client = new MongoClient(uri);
      await client.connect();
      return client.db();
    },
    inject: [ConfigService]
  }],
  exports: ['DATABASE_CONNECTION'],
  controllers: [DatabaseController]

})
export class DatabaseModule { }
