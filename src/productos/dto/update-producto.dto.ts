import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
    
    @IsString()
    @IsUUID()
    @IsOptional()
    id?: string;

}
