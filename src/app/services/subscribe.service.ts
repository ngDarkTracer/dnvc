import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  serverAdress = 'https://admin.dnvc-cm.org/';

  constructor(private httpClient: HttpClient) {
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

  getContactsFromserver(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'contacts?_sort=Nom:ASC', { responseType: 'json' });
  }

  getSingleContactFromServer(code: any): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'contacts?_sort=Nom:ASC&_where[0][activation_code]=' + code, { responseType: 'json' });
  }

  getSingleContactFromServerByHisId(id: any): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'contacts?_sort=Nom:ASC&_where[0][id]=' + id, { responseType: 'json' });
  }

  getSingleContactFromServerByHisEmailAddress(email: any): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'contacts?_sort=Nom:ASC&_where[0][Email]=' + email, { responseType: 'json' });
  }
}
