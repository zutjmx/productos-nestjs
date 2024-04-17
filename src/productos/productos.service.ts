import { Injectable } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {

  private productos: Producto[] = [];

  create(createProductoDto: CreateProductoDto) {
    const {nombre, descripcion, precio} = createProductoDto;
    
    const nuevoProducto = new Producto(
      UuidV4(),
      nombre,
      descripcion,
      precio
    );

    this.productos.push(nuevoProducto)
    
    return nuevoProducto;
  }

  findAll() {
    //return `This action returns all productos`;
    return this.productos;
  }

  findOne(id: number) {
    return `This action returns a #${id} producto`;
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return `This action updates a #${id} producto`;
  }

  remove(id: number) {
    return `This action removes a #${id} producto`;
  }
}
