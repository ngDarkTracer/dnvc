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
    return this.httpClient.get<any[]>(this.serverAdress + 'notes-de-veilles?_sort=Title:ASC&_locale=en&_where[Filieres.Name]=' + sector + '&_where[Filieres.Name]=Toutes les filières', { responseType: 'json' });
  }

  getSingleOrGroupOfNotesFromServer(sector: any, market?: any, theme?: any, debut?: any, fin?: any): Observable<any> {
    let initialReq = this.serverAdress + 'notes-de-veilles?_sort=Title:ASC&_where[Filieres.Name]=' + sector + '&_where[Filieres.Name]=Toutes les filières';

    if (typeof market !== 'undefined' && market !== null) {
      initialReq += '&_where[Marches.Nom]=' + market + '&_where[Marches.Nom]=Tous les marchés';
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
