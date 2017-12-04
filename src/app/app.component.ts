///<reference path="services/contacts.service.ts"/>
import {Component} from '@angular/core';
import {Contact} from './models/contact';
import {Http} from '@angular/http';
import {ContactsService} from './services/contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app';
  contacts: Array<Contact> = [];
  contactsList: Contact[];

  constructor(private http: Http, private contactService: ContactsService) {
    // this.http.get('http://104.154.189.69/ServicesWeb/allContacts').subscribe(resp => this.Contacts = resp.json());
  }


  model: any = {};

  addContact(): void {
    alert('prueba de accion');
  }

  deleteContact(): void {

  }

  editContact(): void {

  }

  /**
   *
   */
  getContactsController() {
    // return this.http.get('http://104.154.189.69/ServicesWeb/allContacts').subscribe(resp => this.Contacts = resp.json());
   this.contactService.getContacts().subscribe(data =>  {
     this.contacts = data;
     console.log(this.contacts);
   });

  }
}
