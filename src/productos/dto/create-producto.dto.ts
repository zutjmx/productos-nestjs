import { Type } from "class-transformer";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class CreateProductoDto {
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    @Type( () => Number )
    precio: number;
}
