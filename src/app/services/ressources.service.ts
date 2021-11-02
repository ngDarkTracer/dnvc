import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  serverAdress = 'https://admin.dnvc-cm.org/';
  sectorReq: string;
  marketReq: string;
  themeReq: string;
  debutReq: string;
  finReq: string;

  constructor(private httpClient: HttpClient) {
  }

  getRessourcesFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'ressources?_sort=titre:ASC', {responseType: 'json'});
  }

  getSingleOrGroupOfRessourcesFromServer(sector?: any, market?: any, theme?: any, debut?: any, fin?: any): Observable<any> {

    let initialReq = this.serverAdress + 'ressources?_sort=titre:ASC';

    if (typeof sector !== 'undefined' && sector !== null) {
      initialReq += '&_where[filieres.Name]=' + sector + '&_where[filieres.Name]=Toutes les filières';
    }

    if (typeof market !== 'undefined' && market !== null) {
      initialReq += '&_where[marche.Nom]=' + market + '&_where[marche.Nom]=Tous les marchés';
    }

    if (typeof theme !== 'undefined' && theme !== null) {
      initialReq += '&_where[themes_de_veille.Nom]=' + theme + '&_where[themes_de_veille.Nom]=Tous les thèmes de veille';
    }

    if (typeof debut !== 'undefined' && debut !== null) {
      initialReq += '&_where[date_gte]=' + debut.toLocaleDateString('en-CA');
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
