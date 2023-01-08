import { Component, OnInit } from '@angular/core';
import { Curriculum, Experiencia } from 'src/app/models/curriculum.model';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  public ListCurriculum: Experiencia[] = [
    {
      logo: 'assets/images/Logos/Syscom1.jpg',
      empresa: 'SISTEMAS COMERCIALES SYSCOM S.A',
      detalles:
        [
          {
            tiempo: 'Oct 2022 - Actual',
            cargo: 'Programador - Analista',
            descripcion:
              `Actualmente me encuento laborando como programador full-stack, realizando diversos desarrollos segun requerimientos de la empresa
          estos varian desde nuevos dearrollos, implementaciones, apoyo en arrelos a proyectos antiguos y en implementacion de nuevos modulos a otros proyectos.`
          },
          {
            tiempo: 'Abr 2022 - Sep 2022 (6 Meses)',
            cargo: 'Aprendiz - Programador',
            descripcion:
              `A cargo de la reestructuración de un sistema de facturación electrónica cumpliendo con los estándares de la DIAN,
          apoyo a mantenimiento de aplicaciones, cumpliendo funcionalidades como analista, definición de base de datos, programador front-end y back-end.`
          }
        ]
    },
    {
      logo: 'assets/images/Logos/Syscom1.jpg',
      empresa: 'SISTEMAS COMERCIALES SYSCOM S.A',
      detalles:
        [
          {
            tiempo: 'Oct 2022 - Actual',
            cargo: 'Programador - Analista',
            descripcion:
              `Actualmente me encuento laborando como programador full-stack, realizando diversos desarrollos segun requerimientos de la empresa
          estos varian desde nuevos dearrollos, implementaciones, apoyo en arrelos a proyectos antiguos y en implementacion de nuevos modulos a otros proyectos.`
          },
          {
            tiempo: 'Abr 2022 - Sep 2022 (6 Meses)',
            cargo: 'Aprendiz - Programador',
            descripcion:
              `A cargo de la reestructuración de un sistema de facturación electrónica cumpliendo con los estándares de la DIAN,
          apoyo a mantenimiento de aplicaciones, cumpliendo funcionalidades como analista, definición de base de datos, programador front-end y back-end.`
          }
        ]
    }
    ,
    {
      logo: 'assets/images/Logos/Syscom1.jpg',
      empresa: 'SISTEMAS COMERCIALES SYSCOM S.A',
      detalles:
        [
          {
            tiempo: 'Oct 2022 - Actual',
            cargo: 'Programador - Analista',
            descripcion:
              `Actualmente me encuento laborando como programador full-stack, realizando diversos desarrollos segun requerimientos de la empresa
          estos varian desde nuevos dearrollos, implementaciones, apoyo en arrelos a proyectos antiguos y en implementacion de nuevos modulos a otros proyectos.`
          },
          {
            tiempo: 'Abr 2022 - Sep 2022 (6 Meses)',
            cargo: 'Aprendiz - Programador',
            descripcion:
              `A cargo de la reestructuración de un sistema de facturación electrónica cumpliendo con los estándares de la DIAN,
          apoyo a mantenimiento de aplicaciones, cumpliendo funcionalidades como analista, definición de base de datos, programador front-end y back-end.`
          }
        ]
    }
  ];

  ngOnInit(): void {

    var FechaInicial = "10/01/2022";
    var Fantiguedad = new Date(FechaInicial);
    var Meses =  this.CalcularMeses(Fantiguedad, new Date)
    var Text = ` (${Meses} Meses)`;
    this.ListCurriculum[0].detalles[0].tiempo += Text;
  }

  CalcularMeses(antiguedad : any, actual : any) { return actual.getMonth() - (antiguedad.getMonth()-1) + (12 * (actual.getFullYear() - antiguedad.getFullYear())) }

}
