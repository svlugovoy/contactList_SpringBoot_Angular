import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] =[];

  constructor(private service: ContactService) { }

  ngOnInit() {
    this.service.getAllContacts()
      .subscribe(data => this.contacts = data);
  }

}
