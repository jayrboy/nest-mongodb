import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private readonly products = [
    { id: 1, name: 'Product 1', description: 'Description 1' },
    { id: 2, name: 'Product 2', description: 'Description 2' },
  ];

  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto);
    return this.products;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id == id) ?? new CreateProductDto();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index !== -1) {
      return this.products.splice(index, 1);
    }

    return new CreateProductDto();
  }
}
