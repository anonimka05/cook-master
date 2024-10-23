import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dtos/create-recipe.dtos';
import { Recipe } from './models';
import { UpdateRecipeDto } from './dtos/update-recipe.dtos';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Protected, Roles } from '@decorators';
import { UserRoles } from '../user';

@ApiTags('Recipes')
@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Retsep malumotlarini kiritish' })
  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    return this.recipeService.create(createRecipeDto);
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Barcha retseplarni olish' })
  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Bir dona retsep malumotlarini olish' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe> {
    return this.recipeService.findOne(+id);
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Retsep malumotlarini o`zgartirish' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ): Promise<Recipe> {
    return this.recipeService.update(+id, updateRecipeDto);
  }

  @ApiBearerAuth()
  @Protected(true)
  @Roles([UserRoles.admin, UserRoles.user])
  @ApiOperation({ summary: 'Retsep malumotoalrini o`chirish' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.recipeService.remove(+id);
  }
}
