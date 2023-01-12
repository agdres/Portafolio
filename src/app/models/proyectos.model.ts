export interface Informacion{
    nombre : string;
    empresa : string;
    logo : string;
    login : string;
    descripcion : string;
    detalles : DetllaProyectos;
}

export interface DetllaProyectos{
    descripcion : string;
    funciones : string[];
    lenguajes_Front : string | null;
    lenguajes_Back : string | null;
}

// export interface Proyectos{
//     logo : string;
//     empresa : string;
//     detalles : Informacion[];
// }