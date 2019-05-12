import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactEditComponent } from './components/contact-edit/contact-edit.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HomeComponent } from './components/home/home.component';
import { FullnamePipe } from './pipe/fullname.pipe';
import {ContactService} from "./service/contact.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    ContactListComponent,
    ContactAddComponent,
    ContactEditComponent,
    ContactDetailsComponent,
    HomeComponent,
    FullnamePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
