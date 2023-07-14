import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

const httpService = new HttpService();
@Injectable()
export class NewsService {

  async getAllNews() {
    const {data} = await firstValueFrom(
      httpService.get('https://newsapi.org/v2/everything?q=autism&language=en&searchIn=title&apiKey=13d38e5b8a7342019d4fb51073faacba').pipe(
        catchError((error) => {
          console.log(error)
          throw 'An error happened!';
        }),
      ),
    );

    return data;
  }
}
