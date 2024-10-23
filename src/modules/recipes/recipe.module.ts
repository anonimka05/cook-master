import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe } from './models';
import { MealModule } from '../meal/meal.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Recipe]),
    forwardRef(() => MealModule),  
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
