import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  serverAdress = 'https://14639f6e-6b9e-4361-8143-54d2a61557d9.mock.pstmn.io/';
  constructor(private httpClient: HttpClient) { }

  getNotesFromServer(): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'notes', { responseType: 'json' });
  }

  getSingleNoteFromServer(sector: string): Observable<any> {
    return this.httpClient.get<any[]>(this.serverAdress + 'notes&filieres=' + sector, { responseType: 'json' });
  }
}
