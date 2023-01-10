import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path:'Andres_Martinez',component:HomeComponent,pathMatch:'prefix'},
  {path:'Andres_Martinez/Curriculum',component:CurriculumComponent,pathMatch:'prefix'},
  {path:'Andres_Martinez/Proyectos',component:ProyectosComponent,pathMatch:'prefix'},
  {path:'**',component:HomeComponent}
  // {path:'Andres_Martinez',component:HomeComponent,pathMatch:'full'},
  // {path:'Andres_Martinez/Curriculum',component:CurriculumComponent,pathMatch:'prefix'},
  // {path:'Andres_Martinez/Proyectos',component:ProyectosComponent,pathMatch:'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
