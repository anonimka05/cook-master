"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const model_1 = require("./model");
const meal_service_1 = require("./meal.service");
const meal_controller_1 = require("./meal.controller");
const recipe_module_1 = require("../recipes/recipe.module");
const category_module_1 = require("../categories/category.module");
const upload_1 = require("../upload");
const user_1 = require("../user");
let MealModule = class MealModule {
};
exports.MealModule = MealModule;
exports.MealModule = MealModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([model_1.Meal]),
            upload_1.UploadModule,
            (0, common_1.forwardRef)(() => user_1.UserModule),
            (0, common_1.forwardRef)(() => category_module_1.CategoryModule),
            (0, common_1.forwardRef)(() => recipe_module_1.RecipeModule),
        ],
        providers: [meal_service_1.MealService],
        controllers: [meal_controller_1.MealController],
        exports: [meal_service_1.MealService],
    })
], MealModule);
//# sourceMappingURL=meal.module.js.map