import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorModule } from './sensor/sensor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:69lBvnXemgBkjJGf@ac-5euiwoc-shard-00-00.5xghtnl.mongodb.net:27017,ac-5euiwoc-shard-00-01.5xghtnl.mongodb.net:27017,ac-5euiwoc-shard-00-02.5xghtnl.mongodb.net:27017/pruebas?authSource=admin&ssl=true&retryWrites=true&w=majority'),
    //MongooseModule.forRoot('SERVIDOR MONGODB ATLAS'),
    SensorModule,
    
  ],
})
export class AppModule {}
