import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { faker } from '@faker-js/faker';

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
    return this.productos;
    //return this.simulaVariosProductos();
  }

  findOne(id: string): Producto {
    const producto = this.productos.find(p => p.id === id);
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no existe`)
    }
    return producto;
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    const {id:_, nombre, descripcion, precio} = updateProductoDto;

    const producto = this.findOne(id);

    producto.updateWith({nombre, descripcion, precio});

    return producto;
  }

  remove(id: string): Producto {
    const producto = this.findOne(id);
    
    /* let borrar = -1;

    this.productos.forEach((item, index) => {
      if(item.id == id) {
          borrar = index;
      }
    });

    if(borrar >= 0) {
      this.productos.splice(borrar, 1);
    } */

    this.productos = this.productos.filter(p => p.id != id);

    return producto;
  }

  simulaVariosProductos(): Producto[] {
    const productos: Producto[] = [];
    for (let index = 0; index < 10; index++) {
      const producto = new Producto(
        faker.string.uuid(),
        faker.commerce.product(),
        faker.commerce.productDescription(),
        +faker.commerce.price()
      );
      productos.push(producto);
    }
    return productos;
  }

}
