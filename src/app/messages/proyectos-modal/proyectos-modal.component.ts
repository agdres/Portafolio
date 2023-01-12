import { Component, Input } from '@angular/core';
import { Informacion } from 'src/app/models/proyectos.model';

@Component({
  selector: 'app-proyectos-modal',
  templateUrl: './proyectos-modal.component.html',
  styleUrls: ['./proyectos-modal.component.scss']
})
export class ProyectosModalComponent {
  @Input() Info !: Informacion;
}
