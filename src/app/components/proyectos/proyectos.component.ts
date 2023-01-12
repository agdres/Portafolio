import { Component,OnInit,ViewChild } from '@angular/core';
import { Informacion } from 'src/app/models/proyectos.model';
import {MatAccordion} from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { ProyectosModalComponent } from 'src/app/messages/proyectos-modal/proyectos-modal.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor(private dialog : MatDialog){

  }

  public ListProyectos : Informacion[] = 
  [
    {
      nombre: 'AutoFactura50',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema para realizar la facturación eléctronica ante la DIAN,
      cumpliendo con los estandares correspondientes.`
      ,
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/AutoFactura/AutoFactura.ico',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/AutoFactura/Login.png',
      detalles:{
        descripcion:
        `Como aprendiz en etapa productiva, mi funcionalidad se enfocó en reestructurar un sistema de facturación electrónica para terceros que cumpliera con los estándares de facturación establecidos por la DIAN y controlara su información.

        También realice funciones de apoyo en proyectos de escritorio y corrección de errores.`,
        funciones: [
          'Desarrollador Full-Stack, encargado de todo el proyecto.',
          'Analista.',
          'Definición de estructura de base de datos.',
          'Tester.'
        ],
        lenguajes_Front: 'Angular (Html, Css y TypeScript), Bootstrap 5 y Angular material.',
        lenguajes_Back: '.Net Core 5, API REST, Servicios  Soap, Entity Framework (LINQ y LAMBDA), JWT, SQL Server y MVC.'
      }
    }
    ,
    {
      nombre: 'Texaco',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema permite que clientes de Texaco puedan registrarse a la plataforma de AutoFactura50
      para realizarles su facturación electrónica.`
      ,
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Texaco/Texaco.ico',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Texaco/Login.png',
      detalles:{
        descripcion:
        `Sistema de facturación y registro de clientes para el proveedor a la plataforma de facturación electrónica.`,
        funciones: [
          'Desarrollador Full-Stack, encargado de todo el proyecto.',
          'Analista.',
          'Definición de estructura de base de datos.',
          'Tester.'
        ],
        lenguajes_Front: 'Angular (Html, Css y TypeScript), Bootstrap 5 y Angular material.',        
        lenguajes_Back: '.Net Core 5, API REST, Entity Framework (LINQ y LAMBDA), JWT, SQL Server, MVC.'
      }
    }
    ,
    {
      nombre: 'Santamaria',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema que cumple la funcionalidad de un CRM para controlar la logística interna de la empresa, entre otros factores
      de la misma.`
      ,
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Santamaria/Logo.png',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Santamaria/Login.png',
      detalles:{
        descripcion:
        `CRM Santamaria.`,
        funciones: [
          'Desarrollador Full-Stack, encargado de agregar nuevos modulos.',
          'Analista.',
          'Definición de estructura de base de datos.',
          'Tester.'
        ],
        lenguajes_Front: 'Html, Css, JavaScript y Bootstrap 5.',
        lenguajes_Back: 'PHP, SQL Server y MVC.'
      }
    }
    ,
    {
      nombre: 'EventosDIAN',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema para realizar los eventos de las facturas electrónicas ante la DIAN,
      para convertirlas en titulo valor.`
      ,
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/NoIcon.png',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/EventosDIAN/Principal.png',
      detalles:{
        descripcion:
        `Sistema de facturación y registro de clientes para el proveedor a la plataforma de facturación electrónica.`,
        funciones: [
          'Desarrollador Full-Stack, encargado de todo el proyecto.',
          'Analista.',
          'Definición de estructura de base de datos.',
          'Tester.'
        ],
        lenguajes_Front: 'Angular (Html, Css y Typescript), Bootstrap 5 y Angular material.',
        lenguajes_Back: '.Net Core 5, API REST, Entity Framework (LINQ y LAMBDA), JWT, SQL Server y MVC.'
      }
    }

  ]

ngOnInit(): void {
  this.ListProyectos.reverse();
  setInterval(()=>{
  this.Carousel()
  },8000);
}

Carousel(){
  var width  = window.innerWidth;
  if (width <= 767) {
    var Opciones = document.querySelectorAll('.conocimientos__cont--list');
    Opciones.forEach(x =>{
      x.classList.toggle('list_activo');
      x.classList.toggle('list_inactivo');
    });
  }
  
  
}


ModalProyectos(data : Informacion){
   ProyectosModalComponent.prototype.Info = data;
  this.dialog.open(ProyectosModalComponent);
}

}
