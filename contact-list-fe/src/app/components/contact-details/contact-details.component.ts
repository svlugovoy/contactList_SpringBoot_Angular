import {Component, OnInit} from '@angular/core';
import {Contact} from "../../model/contact";
import {ContactService} from "../../service/contact.service";
import {ActivatedRoute, Router} from "@angular/router";

// npm i sweetalert
// angular.json -> scripts -> "node_modules/sweetalert/dist/sweetalert.min.js"

const swal = window['swal'];

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private service: ContactService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsData => {
      this.service.getContactDetails(paramsData['id'])
        .subscribe(data => this.contact = data);
    })
  }

  testSwal() {
    swal('Hello');
    swal('Contact App', 'Hello Friend', 'warning');
    swal({
      title: 'Contact App',
      icon: 'info',
      text: 'You are in the contact-details page'
    })
  }

  deleteContact() {
    swal({
      title: 'You want to delete this contact',
      text: 'Please confirm',
      icon: 'warning',
      buttons: [
        {
          text: 'Yes, I am sure',
          visible: true,
          value: true
        },
        {
          text: 'Cancel',
          visible: true,
          value: false
        }
      ]
    })
      .then(result => {
        if (result === true) {
          this.service.deleteContact(this.contact.id)
            .subscribe(() => {
              this.router.navigate(['/contact-list']);
            });
        }
      })


  }

}
