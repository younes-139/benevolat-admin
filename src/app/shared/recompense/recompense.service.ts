import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecompenseService {
  public API_RECOMPENSE = 'http://localhost:8080/recompences';

  constructor(private httpClient: HttpClient) { }

  getAllRecompense(): Observable<any> {
    return this.httpClient.get(this.API_RECOMPENSE);
  }

  save(recompense: any): Observable<any> {
    console.log(recompense)
    let result: Observable<any>;
      result = this.httpClient.post('http://localhost:8080/admin/AddRecompence', recompense);
    return result;
  }
}
