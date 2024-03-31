import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type SensorDocument = Sensor & Document


@Schema()
export class Sensor {
    @Prop()
    name: string

    @Prop()
    creation_date: Date

    @Prop()
    active: boolean

    @Prop()
    serial: string
    
    @Prop()
    brand: string

    @Prop()
    model: string
}

export const SensorSchema = SchemaFactory.createForClass(Sensor)


