import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
// import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  providers: [ ProductService],
  controllers: [ProductController],
  exports: [ProductService]
})
export class ProductModule {}
