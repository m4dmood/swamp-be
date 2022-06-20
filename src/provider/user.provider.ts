import { DataSource } from 'typeorm';
import { User } from '../entity/user.entity';
import { env } from 'env';

export const userProvider = [
	{
		provide: env.USER_REPOSITORY,
		useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
		inject: [env.DATA_SOURCE]
	}
];