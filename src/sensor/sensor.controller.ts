import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Put,
  Param, 
  Req,
  Res,
  Delete
} from '@nestjs/common';
import { SensorService } from './sensor.service';
import { CreateSensorDto } from './dto/create-sensor.dto';
import { UpdateSensorDto } from './dto/update-sensor.dto';
import { ApiTags } from '@nestjs/swagger'
import { Request } from 'express'

@Controller('api/v1/sensors')
@ApiTags('sensor')

export class SensorController {
  constructor(private readonly sensorService: SensorService) {}

  @Post()
  async create(@Body() createSensorDto: CreateSensorDto) {
    return this.sensorService.create(createSensorDto);
  }

  @Get()
  async findAll(@Req() request: Request) {
    return this.sensorService.findAll(request);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sensorService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSensorDto: UpdateSensorDto) {
    return this.sensorService.update(id, updateSensorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.sensorService.remove(id);
  }
}
