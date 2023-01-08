import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'Andres_Martinez',component:HomeComponent,pathMatch:'full'},
  {path:'Andres_Martinez/Curriculum',component:CurriculumComponent,pathMatch:'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
