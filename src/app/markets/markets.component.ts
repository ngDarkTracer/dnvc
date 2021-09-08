import { Component, OnInit } from '@angular/core';
import {mark} from '@angular/compiler-cli/src/ngtsc/perf/src/clock';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  markets: any[] = [
    {letter: 'A', zone: []},
    {letter: 'B', zone: []},
    {letter: 'C', zone: ['CEMAC', 'CEDEAO']},
    {letter: 'D', zone: []},
    {letter: 'E', zone: []},
    {letter: 'F', zone: []},
    {letter: 'G', zone: []},
    {letter: 'H', zone: []},
    {letter: 'I', zone: []},
    {letter: 'J', zone: []},
    {letter: 'K', zone: []},
    {letter: 'L', zone: []},
    {letter: 'M', zone: []},
    {letter: 'N', zone: []},
    {letter: 'O', zone: []},
    {letter: 'P', zone: []},
    {letter: 'Q', zone: []},
    {letter: 'R', zone: []},
    {letter: 'S', zone: []},
    {letter: 'T', zone: ['Test', 'Test2', 'Test3', 'Test4', 'Test5', 'Test6', 'Test7', 'Test8', 'Test9', 'Test10', 'Test11']},
    {letter: 'U', zone: ['UE', 'UMEOA']},
    {letter: 'V', zone: []},
    {letter: 'W', zone: []},
    {letter: 'X', zone: []},
    {letter: 'Y', zone: []},
    {letter: 'Z', zone: ['ZLECAF']}
  ];

  filteredMarkets: any[] = [];

  beginLetter = 'ALL';
  numberOfElement;
  openedList = false;

  constructor() { }

  ngOnInit(): void {
    this.filter('ALL', 'ALL');
  }

  filter(letter: string, zone: any): void {
    this.numberOfElement = 0;
    this.filteredMarkets = [];
    this.beginLetter = letter;
    if (letter === 'ALL') {
      for (const market of this.markets) {
        this.numberOfElement += market.zone.length;
        this.pagination(letter);
      }
    } else {
      this.markets.forEach((element) => {
        if (element.letter === letter) {
          this.numberOfElement = element.zone.length;
          this.pagination(letter);
        }
      });
    }
  }

  pagination(letter: string): void {
    let page: any[] = [];
    this.filteredMarkets = [];
    const lastZone = this.markets[this.markets.length - 1];
    for (const market of this.markets) {
      if (letter === market.letter) {
        for (const zone of market.zone) {
          page.push(zone);
          if (page.length === 5) {
            this.filteredMarkets.push({pageNumber: this.filteredMarkets.length + 1, pageItem: page});
            page = [];
          } else if (page.length < 5 && page[page.length - 1] === market.zone[market.zone.length - 1]) {
            this.filteredMarkets.push({pageNumber: this.filteredMarkets.length + 1, pageItem: page});
            page = [];
            break;
          }
        }
      } else if (letter === 'ALL') {
        for (const zone of market.zone) {
          page.push(zone);
          if (page.length === 5) {
            this.filteredMarkets.push({pageNumber: this.filteredMarkets.length + 1, pageItem: page});
            page = [];
          } else if (page.length < 5 && (lastZone.zone[lastZone.zone.length - 1] === page[page.length - 1]
            || lastZone === market)) {
            this.filteredMarkets.push({pageNumber: this.filteredMarkets.length + 1, pageItem: page});
            page = [];
            break;
          }
        }
      }
    }
    console.log(this.filteredMarkets);
  }

  open(): void {
    this.openedList = !this.openedList;
  }

}
