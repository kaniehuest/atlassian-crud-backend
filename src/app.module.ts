import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorModule } from './sensor/sensor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://carlosojeda:n9egvuanyGAJq3QH@sensors-crud.vjmqsgf.mongodb.net/?retryWrites=true&w=majority'),
    //MongooseModule.forRoot('SERVIDOR MONGODB ATLAS'),
    SensorModule,
    
  ],
})
export class AppModule {}
