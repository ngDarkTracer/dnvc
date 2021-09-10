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
    {letter: 'T', zone: []},
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
  totalItems = 0;
  openedList = false;
  page = 1;

  constructor() { }

  ngOnInit(): void {
    this.filter('ALL');
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
          this.totalItems = element.industry.length;
        }
      });
    }
  }

  open(): void {
    this.openedList = !this.openedList;
  }

}
