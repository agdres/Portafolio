import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from 'src/app/components/proyectos/proyectos.component';
import { MaterialModule } from 'src/app/core/material.core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProyectosModalComponent } from 'src/app/messages/proyectos-modal/proyectos-modal.component';


@NgModule({
  declarations: [ProyectosComponent,ProyectosModalComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MaterialModule,
  ]
})
export class ProyectosModule { }
