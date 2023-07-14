import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ScheduleService {
 async create(createScheduleDto: CreateScheduleDto) {
    return await prisma.schedule.create({
      data: {
        name: createScheduleDto.name,
        phone: createScheduleDto.phone,
        email: createScheduleDto.email,
        date: new Date(),
        time_slot: new Date(),
        reason_for_assessment: createScheduleDto.reason_for_assessment
      }
    });
  }

  async findAll() {
    return await prisma.schedule.findMany();
  }

  async findOne(id: number) {
    return await prisma.schedule.findUnique({
      where : {
        id
      }
    });
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return await prisma.schedule.update({
      where : {
        id
      },
      data : {
        name: updateScheduleDto.name,
        phone: updateScheduleDto.phone,
        email: updateScheduleDto.email,
        date: updateScheduleDto.date,
        time_slot: updateScheduleDto.time_slot,
        reason_for_assessment: updateScheduleDto.reason_for_assessment
      }
    });
  }

  async remove(id: number) {
    return await prisma.schedule.delete({
      where : {
        id
      }
    });
  }
}
