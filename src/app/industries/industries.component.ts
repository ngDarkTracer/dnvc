import { Component, OnInit } from '@angular/core';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  industries: any[] = [
    {letter: 'A', industry: ['Arachides', 'Arachides2', 'Arachides3', 'Arachides4', 'Arachides5', 'Arachides6', 'Arachides7']},
    {letter: 'B', industry: ['Banane', 'Banane-plantain']},
    {letter: 'C', industry: ['Cacao', 'Cafe']},
    {letter: 'D', industry: []},
    {letter: 'E', industry: []},
    {letter: 'F', industry: []},
    {letter: 'G', industry: []},
    {letter: 'H', industry: []},
    {letter: 'I', industry: []},
    {letter: 'J', industry: []},
    {letter: 'K', industry: []},
    {letter: 'L', industry: []},
    {letter: 'M', industry: []},
    {letter: 'N', industry: []},
    {letter: 'O', industry: []},
    {letter: 'P', industry: []},
    {letter: 'Q', industry: []},
    {letter: 'R', industry: []},
    {letter: 'S', industry: []},
    {letter: 'T', industry: ['Test1', 'Test2']},
    {letter: 'U', industry: []},
    {letter: 'V', industry: []},
    {letter: 'W', industry: []},
    {letter: 'X', industry: []},
    {letter: 'Y', industry: []},
    {letter: 'Z', industry: []}
  ];

  filteredIndustries: any[] = [];
  numberOfPage;

  beginLetter = 'ALL';
  numberOfElement;
  openedList = false;

  constructor() { }

  ngOnInit(): void {
    this.filter('ALL', 'ALL');
  }

  filter(letter: string, industry: any): void {
    this.numberOfElement = 0;
    this.filteredIndustries = [];
    this.beginLetter = letter;
    if (letter === 'ALL') {
      for (const indust of this.industries) {
        this.numberOfElement += indust.industry.length;
        this.pagination(letter);
      }
    } else {
      this.industries.forEach((element) => {
        if (element.letter === letter) {
          this.numberOfElement = element.industry.length;
          this.pagination(letter);
        }
      });
    }
  }

  pagination(letter: string): void {
    this.numberOfPage = 0;
    let page: any[] = [];
    this.filteredIndustries = [];
    const lastIndustry = this.industries[this.industries.length - 1];
    for (const industry of this.industries) {
      if (letter === industry.letter) {
        for (const i of industry.industry) {
          page.push(i);
          if (page.length === 5) {
            this.filteredIndustries.push({pageNumber: this.filteredIndustries.length + 1, pageItem: page});
            this.numberOfPage++;
            page = [];
          } else if (page.length < 5 && page[page.length - 1] === industry.industry[industry.industry.length - 1]) {
            this.filteredIndustries.push({pageNumber: this.filteredIndustries.length + 1, pageItem: page});
            this.numberOfPage++;
            page = [];
            break;
          }
        }
      } else if (letter === 'ALL') {
        for (const i of industry.industry) {
          page.push(i);
          if (page.length === 5) {
            this.filteredIndustries.push({pageNumber: this.filteredIndustries.length + 1, pageItem: page});
            this.numberOfPage++;
            page = [];
          } else if (page.length < 5 && lastIndustry === industry) {
            console.log('Yes');
            this.filteredIndustries.push({pageNumber: this.filteredIndustries.length + 1, pageItem: page});
            this.numberOfPage++;
            page = [];
            break;
          }
        }
      }
    }
  }

  open(): void {
    this.openedList = !this.openedList;
  }
}
