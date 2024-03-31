import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { InjectModel } from '@nestjs/mongoose'
import { Sensor, SensorDocument } from './schemas/sensor.schema'
import { Model } from 'mongoose'
import { Request } from 'express'

@Injectable()
export class SensorService {
  constructor(
    @InjectModel(Sensor.name) private readonly sensorModel: Model<SensorDocument>,
  ){}

  async create(createSensorDto: CreateSensorDto): Promise<Sensor> {
    return this.sensorModel.create(createSensorDto)
  }

  async findAll(request: Request): Promise<Sensor[]> {
    return this.sensorModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec()
  }

  async findOne(id: string): Promise<Sensor> {
    return this.sensorModel.findOne({ _id: id }).exec()
  }

  async update(id: string, updateSensorDto: UpdateSensorDto): Promise<Sensor> {
    return this.sensorModel.findOneAndUpdate({ _id: id }, updateSensorDto, { new: true})
  }

  async remove(id: string) {
    return this.sensorModel.findByIdAndRemove({ _id: id }).exec()
  }
}
