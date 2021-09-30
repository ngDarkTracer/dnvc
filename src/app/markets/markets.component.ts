import { Component, OnInit } from '@angular/core';
import {mark} from '@angular/compiler-cli/src/ngtsc/perf/src/clock';
import {MarketsService} from '../services/markets.service';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  alphabet: any[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  markets: any[];

  filteredMarkets: any[] = [];

  beginLetter = 'ALL';
  numberOfElement;
  totalItems = 0;
  openedList = false;
  ready = false;
  page = 1;

  constructor(private marketsService: MarketsService) { }

  ngOnInit(): void {
    this.getMarkets();
  }

  getMarkets(): void {
    const markets = [];
    this.ready = false;
    this.marketsService.getMarketsFromServer().subscribe((data) => {
      for (const beginLetter of this.alphabet) {
        const marketsName = data.filter((market) => market.Nom[0] === beginLetter);
        markets.push({letter: beginLetter, zone: marketsName});
      }
      this.markets = markets;
      this.ready = true;
      this.filter('ALL');
    });
  }

  filter(letter: any): void {
    this.numberOfElement = 0;
    this.totalItems = 0;
    this.page = 1;
    this.filteredMarkets = [];
    this.beginLetter = letter;
    if (letter === 'ALL') {
      this.markets.forEach((element) => {
        element.zone.forEach((zone) => {
          this.filteredMarkets.push(zone);
        });
        this.totalItems += element.zone.length;
      });
    } else {
      this.markets.forEach((element) => {
        if (element.letter === letter) {
          element.zone.forEach((zone) => {
            this.filteredMarkets.push(zone);
          });
          this.totalItems = element.zone.length;
        }
      });
    }
  }

  open(): void {
    this.openedList = !this.openedList;
  }

}
