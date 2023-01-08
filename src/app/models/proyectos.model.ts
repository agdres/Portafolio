export interface Informacion{
    ruta : string;
    nombre : string;
    logo : string;
    login : string;
    descripcion : string;
}

export interface Proyectos{
    logo : string;
    empresa : string;
    detalles : Informacion[];
}