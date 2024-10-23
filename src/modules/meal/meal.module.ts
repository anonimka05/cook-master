import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Meal } from './model';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { RecipeModule } from '../recipes/recipe.module';
import { CategoryModule } from '../categories/category.module';
import { UploadModule } from '../upload';
import { UserModule } from '../user';

@Module({
  imports: [
    SequelizeModule.forFeature([Meal]),
    UploadModule,
    forwardRef(() => UserModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => RecipeModule),
  ],
  providers: [MealService],
  controllers: [MealController],
  exports: [MealService],
})
export class MealModule {}
