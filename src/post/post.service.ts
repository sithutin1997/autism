import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

const prisma = new PrismaClient();
@Injectable()
export class PostService {

  async create(createPostDto: CreatePostDto): Promise<Post> {
    return await prisma.post.create({
      data : {
        title: createPostDto.title,
        content: createPostDto.content,
        published: createPostDto.published,
        slug: slugify(createPostDto.title)
      }
    });
  }

  async findAll():Promise<Post[]> {
    return await prisma.post.findMany();
  }

  async findOne(id: number) {
    return await prisma.post.findFirst({
      where : {
        id
      }
    });
  }

 async update(id: number, updatePostDto: UpdatePostDto) {
    return await prisma.post.update({
      where : {
        id
      },
      data : {
        title: updatePostDto.title,
        content : updatePostDto.content,
        published : updatePostDto.published
      }
    });
  }

  async remove(id: number) {
    return await prisma.post.deleteMany({
      where : {
        id
      }
    });
  }
}
