// import { User } from '@prisma/client'
import { IsOptional } from 'class-validator';

export class CreatePostDto {

  title?: string;

  content?: string;

  published?: boolean;

  // @IsOptional()
  // author: User;
}
