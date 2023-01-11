import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path:'Andres_Martinez',loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule),pathMatch:'prefix'},
  {path:'Curriculum',loadChildren: () => import('../app/modules/curriculum/curriculum.module').then(m => m.CurriculumModule),pathMatch:'prefix'},
  {path:'Proyectos',loadChildren: () => import('../app/modules/proyectos/proyectos.module').then(m => m.ProyectosModule),pathMatch:'prefix'},
  {path:'**', redirectTo: 'Andres_Martinez'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
