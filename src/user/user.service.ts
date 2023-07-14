import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaClient } from '@prisma/client';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
@Injectable()
export class UserService {

  async create(createUserDto: CreateUserDto) {
    const saltOrRounds = 10;
    return await prisma.user.create({
      data : {
        username: createUserDto.username,
        name : createUserDto.name,
        email : createUserDto.email,
        password: await bcrypt.hash(createUserDto.password, saltOrRounds)
      }
    });
  }

  async findAll() {
    return await prisma.user.findMany();
  }

 async findOne(username: string): Promise<User> {
    return await prisma.user.findUnique({
      where : {
       username
      } 
    });
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
  try{
    const user =  await prisma.user.update({
        where : {
          id
        },
        data : {
          name: updateUserDto.name,
          password : updateUserDto.password,
          username : updateUserDto.username,
          email: updateUserDto.email
        }
      });
      return user;
      } catch(e) {
        return null
    }
  }

 async remove(id: number) {
    return await prisma.user.delete({
      where : {
        id
      }
    }) ;
  }
}
