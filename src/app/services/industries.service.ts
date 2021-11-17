import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, merge, Observable} from 'rxjs';
import {map, mergeAll} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  serverAdress = 'https://admin.dnvc-cm.org/';
  advancedSearchServerAdress = 'https://dnvc-admin.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  getSectorsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'filieres/reduced', { responseType: 'json' });
  }

  getSectorFromServer(sector: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'filieres?_locale=en&_where[0][Name]=' + sector, { responseType: 'json' });
  }

  getSingleSectorFromServer(sector: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress +
      'alertes?_sort=Title:ASC&_locale=en&_where[Filieres.Name]=' + sector, { responseType: 'json' });
  }

  getSingleOrGroupOfSectorsFromServer(sector: any, market?: any, theme?: any, debut?: any, fin?: any): Observable<any> {

    sector = sector.replace(/ /g, '%20');
    let initialReq = this.advancedSearchServerAdress + 'alertes/adv-search?_where[Filieres.Name]=' + sector;

    if (typeof market !== 'undefined' && market !== null) {
      market = market.replace(/ /g, '%20');
      initialReq += '&_where[Marches.Nom]=' + market;
    }

    if (typeof theme !== 'undefined' && theme !== null) {
      theme = theme.replace(/ /g, '%20');
      initialReq += '&_where[themes_de_veille.Nom]=' + theme;
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
