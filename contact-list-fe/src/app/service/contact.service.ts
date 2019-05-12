import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../model/contact";

import 'rxjs/add/operator/map';

// npm install rxjs-compat

const baseUrl = 'http://localhost:8080/api/v1/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get(baseUrl).map(resp => resp as Contact[]);
  }

}
