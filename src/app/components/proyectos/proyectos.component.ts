import { Component,OnInit,ViewChild } from '@angular/core';
import { Informacion } from 'src/app/models/proyectos.model';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {


  public ListProyectos : Informacion[] = 
  [
    {
      ruta: '',
      nombre: 'AutoFactura50',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema para realizar la facturación eléctronica ante la DIAN,
      cumpliendo con los estandares correspondientes.`
      ,
      logo: 'assets/images/Proyectos/AutoFactura/AutoFactura.ico',
      login: 'assets/images/Proyectos/AutoFactura/Login.png',
    }
    ,
    {
      ruta: '',
      nombre: 'EventosDIAN',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema para realizar los eventos de las facturas electrónicas ante la DIAN,
      para convertirlas en titulo valor.`
      ,
      logo: 'assets/images/Proyectos/NoIcon.png',
      login: 'assets/images/Proyectos/EventosDIAN/Principal.png',
    }
    ,
    {
      ruta: '',
      nombre: 'Texaco',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema permite que clientes de Texaco puedan registrarse a la plataforma de AutoFactura50
      para realizarles su facturación electrónica.`
      ,
      logo: 'assets/images/Proyectos/Texaco/Texaco.ico',
      login: 'assets/images/Proyectos/Texaco/Login.png',
    }
    ,
    {
      ruta: '',
      nombre: 'Santamaria',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema que cumple la funcionalidad de un CRM para controlar la logística interna de la empresa, entre otros factores
      de la misma.`
      ,
      logo: 'assets/images/Proyectos/Santamaria/Logo.png',
      login: 'assets/images/Proyectos/Santamaria/Login.png',
    }

  ]

ngOnInit(): void {
  this.Carousel()
  
}

Carousel(){
  var width  = window.innerWidth;
  console.log(width);
  setInterval(()=>{
    if (width <= 767) {
      var Opciones = document.querySelectorAll('.conocimientos_cont_list');
      Opciones.forEach(x =>{
        x.classList.toggle('list_activo');
        x.classList.toggle('list_inactivo');
      });
    }
  },6000);
  
}


}
