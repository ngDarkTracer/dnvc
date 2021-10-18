import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  serverAdress = 'https://admin.dnvc-cm.org/';
  constructor(private httpClient: HttpClient) { }

  getRessourcesFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'ressources?_sort=titre:ASC', { responseType: 'json' });
  }

  getSectorsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'filieres?_sort=Name:ASC&_locale=en', { responseType: 'json' });
  }

  getMarketsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'marches?_sort=Nom:ASC', { responseType: 'json' });
  }

  getMonitoringthemesFromserver(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'themes-de-veilles?_sort=Nom:ASC&_locale=en', { responseType: 'json' });
  }
}
