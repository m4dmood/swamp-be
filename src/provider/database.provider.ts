import { DataSource } from 'typeorm';
import { env } from 'env';

export const databaseProviders = [
  {
    provide: env.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3309,
        username: 'root',
        password: 'teamtech12',
        database: 'swamp',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];