import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  serverAdress = 'https://admin.dnvc-cm.org/';
  advancedSearchServerAdress = 'https://dnvc-admin.herokuapp.com/';

  constructor(private httpClient: HttpClient) {
  }

  getRessourcesFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'ressources?_sort=titre:ASC', {responseType: 'json'});
  }

  getSingleOrGroupOfRessourcesFromServer(sector?: any, market?: any, theme?: any, debut?: any, fin?: any): Observable<any> {

    const mockDate = new Date('1970-01-01');
    let initialReq = this.advancedSearchServerAdress + 'ressources/adv-search?';

    if (typeof sector !== 'undefined' && sector !== null) {
      sector = sector.replace(/ /g, '%20');
      initialReq += '&_where[filieres.Name]=' + sector;
    }

    if (typeof market !== 'undefined' && market !== null) {
      market = market.replace(/ /g, '%20');
      initialReq += '&_where[marche.Nom]=' + market;
    }

    if (typeof theme !== 'undefined' && theme !== null) {
      theme = theme.replace(/ /g, '%20');
      initialReq += '&_where[themes_de_veille.Nom]=' + theme;
    }

    if (typeof debut !== 'undefined' && debut !== null) {
      initialReq += '&_where[date_gte]=' + debut.toLocaleDateString('en-CA');
    } else {
      initialReq += '&_where[date_gte]=' + mockDate.toLocaleDateString('en-CA');
    }

    if (typeof fin !== 'undefined' && fin !== null) {
      initialReq += '&_where[date_lte]=' + fin.toLocaleDateString('en-CA');
    }

    return this.httpClient.get<any[]>(initialReq, {responseType: 'json'});
  }

  getSectorsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'filieres?_sort=Name:ASC&_locale=en', {responseType: 'json'});
  }

  getMarketsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'marches?_sort=Nom:ASC', {responseType: 'json'});
  }

  getMonitoringthemesFromserver(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'themes-de-veilles?_sort=Nom:ASC&_locale=en', {responseType: 'json'});
  }
}
