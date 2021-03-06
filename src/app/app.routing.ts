import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'page',
        loadChildren: './layout/main/main.module#MainModule',
    },
    {
        path:'**',
        redirectTo:'page/card',
        pathMatch: 'full',
    }
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}