import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { HttpModule } from '@nestjs/axios';
import { NewsController } from './news.controller';

@Module({
  imports: [HttpModule.registerAsync({
    useFactory: () => ({
      timeout: 5000,
      maxRedirects: 5,
    }),
  })],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
