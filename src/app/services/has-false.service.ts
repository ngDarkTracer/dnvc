import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HasFalseService {

  hasFilieres: any[];
  hasMarches: any[];
  hasTheme: any[];
  serverAdress = 'https://admin.dnvc-cm.org/';

  constructor(private httpClient: HttpClient) { }

  getAlertsWhichHasNoSectors(): void {
    this.httpClient.get<any[]>(this.serverAdress +
      'alertes?_sort=Title:ASC&_locale=en&_where[hasFilieres]=false', { responseType: 'json' }).subscribe(
      (data) => {
        this.hasFilieres = data;
      }
    );
  }

  getAlertsWhichHasNoMarkets(): void {
    this.httpClient.get<any[]>(this.serverAdress +
      'alertes?_sort=Title:ASC&_locale=en&_where[hasMarches]=false', { responseType: 'json' }).subscribe(
      (data) => {
        this.hasMarches = data;
      }
    );
  }

  getAlertsWhichHasNoThemes(): void {
    this.httpClient.get<any[]>(this.serverAdress +
      'alertes?_sort=Title:ASC&_locale=en&_where[hasTheme]=false', { responseType: 'json' }).subscribe(
      (data) => {
        this.hasTheme = data;
      }
    );
  }
}
