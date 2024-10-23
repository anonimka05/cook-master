import { Model } from 'sequelize-typescript';
export declare class Product extends Model<Product> {
    id: number;
    name: string;
    image: string;
}
