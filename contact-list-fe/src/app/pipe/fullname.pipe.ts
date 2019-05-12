import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from "../model/contact";

// {{ contact | fullname }}
// --> Mr. First Last

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(contact: Contact): string {
    if(!contact) {
      return '';
    }
    let title = contact.gender==='MALE' ? 'Mr. ' : 'Ms. ';

    return title + contact.firstname + ' ' + contact.lastname;
  }

}
