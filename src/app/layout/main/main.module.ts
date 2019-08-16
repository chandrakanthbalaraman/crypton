import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from '@app/layout/main/main.component';
const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'card',
        loadChildren:'./components/card/card.module#CardModule'
      },
      {
        path:'',
        redirectTo:'card'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'page/card',
    pathMatch: 'full',
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainComponent],
  exports:[RouterModule]
})
export class MainModule { }
