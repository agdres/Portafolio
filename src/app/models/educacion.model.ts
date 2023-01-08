export interface Institucion{
    tiempo : string;
    titulo: string;
}

export interface Educacion{
    logo : string;
    institucion : string;
    detalles : Institucion[];
}