import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-contact-edit-tdf',
  templateUrl: './contact-edit-tdf.component.html',
  styleUrls: ['./contact-edit-tdf.component.css']
})
export class ContactEditTdfComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  goToReactiveEdit(){
    this.activatedRoute.params.subscribe(paramsData => {
      this.router.navigate(['/edit-contact-rf', paramsData['id']]);
    })
  }

}
