import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { UserController } from './user.controller';

@Module({
  imports: [HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 5000,
      maxRedirects: 5,
    }),
  })],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
