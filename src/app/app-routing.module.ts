import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrazilComponent } from './dashboard/brazil/brazil.component';
import { StatesComponent } from './uf/states/states.component';
import { HomeComponent } from './home/home.component';
import { UfComponent } from './uf/uf.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contato', component: ContactComponent},
  {path: 'dashboard/brasil', component: BrazilComponent},
  {path: 'dashboard/estados', component: UfComponent},
  {path: 'dashboard/estados/:id', component: StatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
