import { Component,OnInit } from '@angular/core';
import { Proyectos } from 'src/app/models/proyectos.model';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  public ListProyectos : Proyectos[] = 
  [
    {
      logo: 'assets/images/Logos/Syscom1.jpg',
      empresa: 'SISTEMAS COMERCIALES SYSCOM S.A.',
      detalles: [
        {
          ruta: '',
          nombre: 'AutoFactura50',
          descripcion: 
          `Sistema para realizar la facturación eléctronica ante la DIAN,
          cumpliendo con los estandares correspondientes.`
          ,
          logo: 'assets/images/Proyectos/AutoFactura/AutoFactura.ico',
          login: 'assets/images/Proyectos/AutoFactura/Login.png',
        },
      ]
    }
  ]

ngOnInit(): void {
  
}

}
