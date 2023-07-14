// import { User } from '@prisma/client'
import { IsOptional } from 'class-validator';

export class SignInDto {

  username: string

  password: string
}
