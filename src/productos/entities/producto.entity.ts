interface UpdateWithOptions {
    nombre?:string; 
    descripcion?:string; 
    precio?:number;
}

export class Producto {

    // public id : string;
    // public nombre : string;
    // public descripcion? : string;
    // public precio : number;

    constructor(
        public id : string,
        public nombre : string,
        public descripcion : string,
        public precio : number
    ) {}

    // Método para actualizar
    updateWith(
        {nombre, descripcion, precio} : UpdateWithOptions
    ) {
        this.nombre = nombre ?? this.nombre;
        this.descripcion = descripcion ?? this.descripcion;
        this.precio = precio ?? this.precio;
    }
    
}
