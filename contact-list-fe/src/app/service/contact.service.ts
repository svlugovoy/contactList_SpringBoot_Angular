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

  getContactDetails(id: number): Observable<Contact> {
    return this.http.get(baseUrl + id).map(data => data as Contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(baseUrl + id);
  }

  addNewContact(contact: Contact): Observable<Contact> {
    return this.http.post(baseUrl, contact).map(data => data as Contact);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put(baseUrl + contact.id, contact).map(data => data as Contact);
  }


}
