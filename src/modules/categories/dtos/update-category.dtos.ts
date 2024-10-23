import {IsOptional, IsString} from 'class-validator'
import { CreateCategoryRequest } from "../interfaces/category.interface";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto implements Omit<CreateCategoryRequest, 'image'> {
  @ApiProperty({
    type: String,
    example: 'Category name',
    required: true,
  })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({
    type: String,
    format: 'binary',
    required: false,
  })
  image: any;
}