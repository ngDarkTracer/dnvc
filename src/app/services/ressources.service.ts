import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  serverAdress = 'http://localhost:1337/';
  constructor(private httpClient: HttpClient) { }

  getRessourcesFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'ressources?_sort=titre:ASC', { responseType: 'json' });
  }

  getSingleOrGroupOfRessourcesFromServer(sector: any, market: any, theme: any, debut: any, fin: any): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'ressources?_sort=titre:ASC&_where[0][filieres.Name]=' + sector + '&_where[1][marche.Nom]=' + market + '&_where[2][theme.Nom]=' + theme + '&_where[3][date_debut_gte]=' + debut + '&_where[4][date_fin_lte]=' + fin, { responseType: 'json' });
  }

  getSectorsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'filieres?_sort=Name:ASC', { responseType: 'json' });
  }

  getMarketsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'marches?_sort=Nom:ASC', { responseType: 'json' });
  }

  getMonitoringthemesFromserver(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'themes-de-veilles?_sort=Nom:ASC', { responseType: 'json' });
  }
}
