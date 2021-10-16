import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  serverAdress = 'http://admin.dnvc-cm.org/';
  constructor(private httpClient: HttpClient) { }

  getMarketsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'marches?_sort=Nom:ASC', { responseType: 'json' });
  }

  getSingleMarketFromServer(market: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'alertes?_sort=Title:ASC&_locale=en&_where[0][Marches.Nom]=' + market, { responseType: 'json' });
  }
}
