import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HomeComponent } from './components/home/home.component';
import { FullnamePipe } from './pipe/fullname.pipe';
import {ContactService} from "./service/contact.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContactAddTdfComponent } from './components/contact-add-tdf/contact-add-tdf.component';
import { ContactAddRfComponent } from './components/contact-add-rf/contact-add-rf.component';
import { ContactEditRfComponent } from './components/contact-edit-rf/contact-edit-rf.component';
import { ContactEditTdfComponent } from './components/contact-edit-tdf/contact-edit-tdf.component';
import { AgePipe } from './pipe/age.pipe';
import { ChangeColorComponent } from './components/demo/change-color/change-color.component';
import { EeParentComponent } from './components/demo/ee-parent/ee-parent.component';
import { EeChildComponent } from './components/demo/ee-child/ee-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftMenuComponent,
    ContactListComponent,
    ContactDetailsComponent,
    HomeComponent,
    FullnamePipe,
    ContactAddTdfComponent,
    ContactAddRfComponent,
    ContactEditRfComponent,
    ContactEditTdfComponent,
    AgePipe,
    ChangeColorComponent,
    EeParentComponent,
    EeChildComponent
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
