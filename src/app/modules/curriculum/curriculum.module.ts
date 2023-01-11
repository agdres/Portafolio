import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from 'src/app/components/curriculum/curriculum.component';
import { MaterialModule } from 'src/app/core/material.core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule
  ]
})
export class CurriculumModule { }
