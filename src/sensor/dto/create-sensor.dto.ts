import { ApiProperty } from '@nestjs/swagger'
import { Types } from 'mongoose';

export class CreateSensorDto {
    @ApiProperty({
        example: "Sensor de agua"
    })
    name: string

    @ApiProperty({
        example: "2023-12-30"
    })
    creation_date: Date

    @ApiProperty({
        example: "true"
    })
    active: boolean

    @ApiProperty({
        example: "321321312"
    })
    serial: string

    @ApiProperty({
        example: "Marca 321"
    })
    brand: string

    @ApiProperty({
        example: "Modelo 2023XYZ"
    })
    model: string
}
