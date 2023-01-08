export interface Curriculum{
    tiempo : string;
    cargo: string;
    descripcion : string;
}

export interface Experiencia{
    logo : string;
    empresa : string;
    detalles : Curriculum[];
}