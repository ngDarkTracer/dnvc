import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  serverAdress = 'http://admin.dnvc-cm.org/';
  constructor(private httpClient: HttpClient) { }

  getSingleNoteFromServer(sector: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'notes-de-veilles?_sort=Title:ASC&_locale=en&_where[0][Filieres.Name]=' + sector, { responseType: 'json' });
  }
}
