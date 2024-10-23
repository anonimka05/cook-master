
import { Controller, Post, Body, UploadedFile, UseInterceptors, Get, Param, Put, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos';
import { Category } from './models';
import { UpdateCategoryDto } from './dtos/update-category.dtos';
import { multerConfig } from '@config';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @ApiBearerAuth()
  @Protected(false)
  @Roles([UserRoles.user, UserRoles.admin])
  @Post('add')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  async createCategory(
    @Body() payload: CreateCategoryDto,
    @UploadedFile() video: Express.Multer.File,
  ): Promise<Category> {
    console.log(video);
    const newCategory = {
      ...payload,
      image: video ? video.filename : null,
    };
    return await this.service.createCategory(newCategory);
  }

  @Protected(false)
  @Roles([UserRoles.user, UserRoles.admin])
  @ApiOperation({
    summary: 'Barcha categoriyalarni olish',
  })
  @Get()
  async allCategories(): Promise<Category> {
    return await this.service.getAllCategories();
  }

  @Protected(false)
  @Roles([UserRoles.user, UserRoles.admin])
  @ApiOperation({
    summary: 'Bir dona categoriyani olish',
  })
  @Get(':id')
  singleCategory(@Param('id') id: string) {
    return this.service.categoryById(+id);
  }

  @ApiBearerAuth()
  @Protected(false)
  @Roles([UserRoles.user, UserRoles.admin])
  @ApiOperation({
    summary: 'Categoriyani o`zgartirish',
  })
  @Put(':id')
  updateCategory(
    @Param('id') id: number,
    @Body() updatedPayload: UpdateCategoryDto,
  ) {
    return this.service.updateCategory(id, updatedPayload);
  }

  @ApiBearerAuth()
  @Protected(false)
  @Roles([UserRoles.user, UserRoles.admin])
  @ApiOperation({
    summary: 'Categoriyani o`chirish',
  })
  @Delete(':id')
  deleteCategory(@Param('id') id: number) {
    return this.service.deleteCategory(id);
  }
}
