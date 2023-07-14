import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module'
import { HttpModule} from '@nestjs/axios';
import { ScheduleModule } from './schedule/schedule.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PackageModule } from './package/package.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PostModule, 
    UserModule, 
    AuthModule,
  NewsModule,
  ScheduleModule,
  AppointmentModule,
  PackageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
