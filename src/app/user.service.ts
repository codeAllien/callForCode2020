import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  symptoms: Array<any>;
  positiveContact: boolean;
  domesticAnimals: boolean;
  fullAdress: string;

  data: any;

  constructor(public http: HttpClient) {
    this.data = null;
  }

  createUsers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //add app token for request auth security
    //
    const user = this.addUserDataJSONObj();
    console.log("Log before sendind: " + JSON.stringify(this.data.toString()));

    this.http.post('http://localhost:8080/api/users', JSON.stringify(user), {headers: headers})
    .subscribe((res) => {
      this.data = res;
    }, (error) => {
      console.log(error);
    });
  }
/*
getData() {
  this.http.get('http://localhost:8080/api/users').subscribe((res) => {
    console.log(res + " Res");
  }, (error) => {
    console.log(error);
  });
}
*/
  public addUserDataJSONObj() {
    this.data = {
      symptoms: this.symptoms,
      positiveContact: this.positiveContact,
      domesticAnimals: this.domesticAnimals,
      fullAddress: this.fullAdress
    };
  }

  public addSymptoms(userProperty) {
    this.symptoms = userProperty;
  }
  public addPositiveContact(userProperty) {
    this.positiveContact = userProperty;
  }
  public addDomesticAnimals(userProperty) {
    this.domesticAnimals = userProperty;
  }
  public addFullAddress(userProperty) {
    this.fullAdress = userProperty;
  }
}
