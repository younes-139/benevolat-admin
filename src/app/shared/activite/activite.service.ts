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
  getAllInProgressActivites(): Observable<any> {
    return this.httpClient.get(this.API_ACTIVITE+'/inProgress');
  }
  validerActivite(id,data,score): Observable<any> {
    let result: Observable<any>;
      result = this.httpClient.put('http://localhost:8080/ActionOnActivite?id='+id+'&status=accepted&score='+score,data);
    return result;
  }
  refuserActivite(id,data){
    let result: Observable<any>;
      result = this.httpClient.put('http://localhost:8080/ActionOnActivite?id='+id+'&status=refused&score=' ,data);
    return result;
  }
}
//