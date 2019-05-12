import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {ContactDetailsComponent} from "./components/contact-details/contact-details.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'contact-details/:id',
    component: ContactDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
