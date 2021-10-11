import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  serverAdress = 'https://dnvc-admin.herokuapp.com/';
  constructor(private httpClient: HttpClient) { }

  getSectorsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'filieres?_sort=Name:ASC', { responseType: 'json' });
  }

  getSingleSectorFromServer(sector: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'alertes?_sort=Title:ASC&_locale=en&_where[0][Filieres.Name]=' + sector, { responseType: 'json' });
  }
}
