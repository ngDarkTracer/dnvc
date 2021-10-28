import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  serverAdress = 'https://admin.dnvc-cm.org/';
  constructor(private httpClient: HttpClient) { }

  getSingleNoteFromServer(sector: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'notes-de-veilles?_sort=Title:ASC&_locale=en&_where[0][Filieres.Name]=' + sector, { responseType: 'json' });
  }

  getSingleOrGroupOfNotesFromServer(sector: any, market?: any, theme?: any, debut?: any, fin?: any): Observable<any> {
    let initialReq = this.serverAdress + 'notes-de-veilles?_sort=Title:ASC&_where[0][Filieres.Name]=' + sector;

    if (typeof market !== 'undefined' && market !== null) {
      initialReq += '&_where[0][Marches.Nom]=' + market;
    }

    if (typeof theme !== 'undefined' && theme !== null) {
      initialReq += '&_where[1][themes_de_veille.Nom]=' + theme;
    }

    if (typeof debut !== 'undefined' && debut !== null) {
      initialReq += '&_where[2][DatePublication_gte]=' + debut.toLocaleDateString('en-CA');
    }

    if (typeof fin !== 'undefined' && fin !== null) {
      initialReq += '&_where[3][DatePublication_lte]=' + fin.toLocaleDateString('en-CA');
    }

    return this.httpClient.get<any[]>(initialReq, {responseType: 'json'});
  }
}
