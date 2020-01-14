import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  public API_ACTIVITE = 'http://localhost:8080/activites';

  constructor(private httpClient: HttpClient) { }

  getAllActivites(): Observable<any> {
    return this.httpClient.get(this.API_ACTIVITE);
  }
}