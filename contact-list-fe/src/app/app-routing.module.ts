import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ContactListComponent} from "./components/contact-list/contact-list.component";
import {ContactDetailsComponent} from "./components/contact-details/contact-details.component";
import {ContactAddTdfComponent} from "./components/contact-add-tdf/contact-add-tdf.component";
import {ContactEditTdfComponent} from "./components/contact-edit-tdf/contact-edit-tdf.component";
import {ContactEditRfComponent} from "./components/contact-edit-rf/contact-edit-rf.component";
import {ContactAddRfComponent} from "./components/contact-add-rf/contact-add-rf.component";

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
  },
  {
    path: 'add-contact-tdf',
    component: ContactAddTdfComponent
  },
  {
    path: 'edit-contact-tdf/:id',
    component: ContactEditTdfComponent
  },
  {
    path: 'add-contact-rf',
    component: ContactAddRfComponent
  },
  {
    path: 'edit-contact-rf/:id',
    component: ContactEditRfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
