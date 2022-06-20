import { Module } from '@nestjs/common';
import { DatabaseModule } from '../modules/database.module';
import { userProvider } from '../provider/user.provider';
import { UserService } from '../service/user.service';

@Module({
	imports: [DatabaseModule],
	providers: [
		...userProvider,
		UserService
	]
})
export class UserModule {}