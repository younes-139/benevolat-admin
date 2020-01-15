import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http : HttpClient) { }

  logIn(loginData: any): Observable<any> {
    let result: Observable<any>;
      result = this.http.post('http://localhost:8080/admin/login', loginData);
    return result;
  }
  /*logOut() {
    sessionStorage.removeItem('id_admin');
  }*/
}
