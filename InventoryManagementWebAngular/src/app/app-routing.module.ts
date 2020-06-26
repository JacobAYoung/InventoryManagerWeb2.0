import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductpagemainComponent } from './Components/productpagemain/productpagemain.component';


const routes: Routes = [
  { path: 'first-component', component: ProductpagemainComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
