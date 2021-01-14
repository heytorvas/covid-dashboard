import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrazilComponent } from './dashboard/brazil/brazil.component';
import { StatesComponent } from './dashboard/states/states.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard/brasil', component: BrazilComponent},
  {path: 'dashboard/estados', component: StatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
