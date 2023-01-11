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
      ruta: '',
      nombre: 'AutoFactura50',
      empresa: 'SYSCOM S.A.',
      descripcion: 
      `Sistema para realizar la facturación eléctronica ante la DIAN,
      cumpliendo con los estandares correspondientes.`
      ,
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/AutoFactura/AutoFactura.ico',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/AutoFactura/Login.png',
      //logo: 'assets/images/Proyectos/AutoFactura/AutoFactura.ico',
      //login: 'assets/images/Proyectos/AutoFactura/Login.png',
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
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/NoIcon.png',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/EventosDIAN/Principal.png',
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
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Texaco/Texaco.ico',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Texaco/Login.png',
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
      logo: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Santamaria/Logo.png',
      login: 'https://portafolio-andres-m.web.app/assets/images/Proyectos/Santamaria/Login.png',
    }

  ]

ngOnInit(): void {
  setInterval(()=>{
  this.Carousel()
  },6000);
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


ModalProyectos(){
  this.dialog.open(ProyectosModalComponent,{panelClass: ['animate__animated','animate__slideInLeft']});
}

}
