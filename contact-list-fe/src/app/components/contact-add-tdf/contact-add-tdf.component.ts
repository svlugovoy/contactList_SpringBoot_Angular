import { Component, OnInit } from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactService} from "../../service/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact-add-tdf',
  templateUrl: './contact-add-tdf.component.html',
  styleUrls: ['./contact-add-tdf.component.css']
})
export class ContactAddTdfComponent implements OnInit {

  contact: Contact;

  constructor(private service: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  addContact() {
    this.service.addNewContact(this.contact)
      .subscribe(contact=>{
        console.log('Added a new contact with id: ' + contact.id);
        this.router.navigate(['/contact-details', contact.id]);
      });
  }

  getTitle() {
    return 'Add a new contact';
  }

}
