import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-contact-edit-rf',
  templateUrl: './contact-edit-rf.component.html',
  styleUrls: ['./contact-edit-rf.component.css']
})
export class ContactEditRfComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private service: ContactService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.service.getContactDetails(params['id'])
        .subscribe(contact => {
          this.contactForm.setValue({...contact});
        })
    });

    this.contactForm = new FormGroup({
      id: new FormControl(),
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl(),
      gender: new FormControl(),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/\d{10,13}/)]),
      city: new FormControl(),
      state: new FormControl(),
      country: new FormControl(),
      image: new FormControl('/assets/images/profile.png'),
      dob: new FormControl()
    });
  }

  saveChanges() {
    this.service.updateContact(this.contactForm.value)
      .subscribe(contact => {
        this.router.navigate(['/contact-details', contact.id]);
      })
  }

}
