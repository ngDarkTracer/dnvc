import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfosService{

  constructor(private httpClient: HttpClient) { }

  getInfosFromServer(): Observable<any> {
    return this.httpClient.get<any>('https://admin.dnvc-cm.org/infos');
  }
}
