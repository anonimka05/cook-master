import {IsString} from 'class-validator'
import { CreateCategoryRequest } from "../interfaces/category.interface";
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto implements Omit<CreateCategoryRequest, 'image'> {
  @ApiProperty({
    type: String,
    example: 'Category name',
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    example: 'Description',
    required: true,
  })
  @IsString()
  description: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: false,
  })
  image: any;
}