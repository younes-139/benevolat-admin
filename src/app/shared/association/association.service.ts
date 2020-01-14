import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  public API_ASSOCIATION = 'http://localhost:8080/assosiations';
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
    })
  };

  constructor(private httpClient: HttpClient) {}

  getAllAssociation(): Observable<any> {
    return this.httpClient.get(this.API_ASSOCIATION);
  }
  getImageAssociation(id: String): Observable<any> {
    return this.httpClient.get("http://localhost:8080/photoAssociation/"+id);
  }
  save(assosiation: FormData): Observable<any> {
    let result: Observable<any>;
      result = this.httpClient.post('http://localhost:8080/admin/AddAssociation', assosiation);
    return result;
  }
}