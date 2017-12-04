import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/throw';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import { Response } from '@angular/http';

import {Contact} from '../models/contact';
import {observable} from 'rxjs/symbol/observable';


@Injectable()
export class ContactsService {


  searchUrl = 'http://104.154.189.69/ServicesWeb/';
 // private baseUrl: string = 'http://104.154.189.69/ServicesWeb';

  constructor(private http: Http) {
   // this.http.get('http://104.154.189.69/ServicesWeb/allContacts').subscribe(resp => this.Contacts = resp.json());
    // return this.Contacts;

  }
  // this.http.get('http://104.154.189.69/ServicesWeb/allContacts').subscribe(resp => this.Contacts = resp.json());
  private Contacts: Array<Contact> = [];
/*
  getAllContacts(): Promise<Contact[]>{
    return this.http.get('http://104.154.189.69/ServicesWeb/allContacts').toPromise(resp =>
    {
      this.Contacts = resp.json();
      console.log(this.Contacts);
    });
  }
*/
  /**
   *
   * @returns {Observable<Contact[]>}
   */
  getContacts(): Observable<Contact[]> {
    return this.http.get(this.getUrl('allContacts')).map(this.getDatos);
  }

  private getDatos(data: Response)  {
    const datos = data.json();
    return datos;
  }
/*
  private error(error: any) {
    const msg = (error.message) ? error.message : 'Error desconocido';
    return Observable.throw(msg);
  }
*/
  private getUrl(modelo: String) {
    return this.searchUrl + modelo;
  }
}


