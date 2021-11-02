import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketsService {

  serverAdress = 'https://admin.dnvc-cm.org/';
  constructor(private httpClient: HttpClient) { }

  getMarketsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'marches?_sort=Nom:ASC', { responseType: 'json' });
  }

  getMarketFromServer(market: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'marches?_sort=Nom:ASC&_where[0][Nom]=' + market, { responseType: 'json' });
  }

  getSingleMarketFromServer(market: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'alertes?_sort=Title:ASC&_locale=en&_where[Marches.Nom]=' + market + '&_where[Marches.Nom]=Tous les marchés', { responseType: 'json' });
  }

  getSingleOrGroupOfmarketsFromServer(sector?: any, market?: any, theme?: any, debut?: any, fin?: any): Observable<any> {

    let initialReq = this.serverAdress + 'alertes?_sort=Title:ASC&_where[Marches.Nom]=' + market + '&_where[Marches.Nom]=Tous les marchés';

    if (typeof sector !== 'undefined' && sector !== null) {
      initialReq += '&_where[Filieres.Name]=' + sector + '&_where[Filieres.Name]=Toutes les filières';
    }

    if (typeof theme !== 'undefined' && theme !== null) {
      initialReq += '&_where[themes_de_veille.Nom]=' + theme + '&_where[themes_de_veille.Nom]=Tous les thèmes de veille';
    }

    if (typeof debut !== 'undefined' && debut !== null) {
      initialReq += '&_where[DatePublication_gte]=' + debut.toLocaleDateString('en-CA');
    }

    if (typeof fin !== 'undefined' && fin !== null) {
      initialReq += '&_where[DatePublication_lte]=' + fin.toLocaleDateString('en-CA');
    }

    return this.httpClient.get<any[]>(initialReq, {responseType: 'json'});
  }
}
