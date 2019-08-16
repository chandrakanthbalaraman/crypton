import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from '@app/layout/main/components/card/card.component';

const routes: Routes = [
  {
    path:'',
    component:CardComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardComponent],
  exports:[RouterModule]
})
export class CardModule { }
