import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustriesService {

  constructor(private httpClient: HttpClient) { }

  getSectorsFromServer(): Observable<any> {
    return this.httpClient.get<any[]>('https://8e5d5300-8a6d-43f2-ba82-a967fba656f1.mock.pstmn.io/filiere', { responseType: 'json' });
  }
}
