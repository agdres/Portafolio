import { Component, OnInit } from '@angular/core';
import { Curriculum, Experiencia } from 'src/app/models/curriculum.model';
import { Educacion } from 'src/app/models/educacion.model';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  public ListCurriculum: Experiencia[] = [
    {
      logo: 'https://portafolio-andres-m.web.app/assets/images/Logos/Syscom1.jpg',
      //logo: 'assets/images/Logos/Syscom1.jpg',
      empresa: 'SISTEMAS COMERCIALES SYSCOM S.A.',
      detalles:
        [
          {
            tiempo: 'Oct 2022 - Actual',
            cargo: 'Programador - Analista',
            descripcion:
              `Actualmente me encuentro laborando como programador full-stack, realizando diversos desarrollos web o de escritorio según requerimientos de la empresa
          estos varían desde nuevos desarrollos, apoyo en corrección de errores a proyectos antiguos y en implementación de nuevos módulos a otros proyectos.`
          },
          {
            tiempo: 'Abr 2022 - Sept 2022 (6 Meses)',
            cargo: 'Aprendiz - Programador',
            descripcion:
              `A cargo de la reestructuración de un sistema de facturación electrónica cumpliendo con los estándares de la DIAN,
          apoyo a mantenimiento de aplicaciones, cumpliendo funcionalidades como analista, definición de base de datos, programador front-end y back-end.`
          }
        ]
    }
  ];

  public ListEducacion: Educacion[] = [
    {
      logo: 'https://portafolio-andres-m.web.app/assets/images/Logos/SENA.jpg',
      //logo: 'assets/images/Logos/SENA.jpg',
      institucion: 'Servicio Nacional de Aprendizaje (SENA)',
      detalles:
        [
          {
            tiempo: 'Oct 2020 - Sept 2022',
            titulo: 'Tecnólogo en análisis y desarrollo de sistemas de información.'
          },
          {
            tiempo: 'Ene 2018 - Nov 2019',
            titulo: 'Técnico en contabilización de operaciones comerciales y financieras.'
          }
        ]
    },
    {
      //logo: 'assets/images/Logos/Bachiller.png',
      logo: 'https://portafolio-andres-m.web.app/assets/images/Logos/Bachiller.png',
      institucion: 'COLMERCEDES',
      detalles:
        [
          {
            tiempo: 'Nov 2019',
            titulo: 'Bachillerato académico.'
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
