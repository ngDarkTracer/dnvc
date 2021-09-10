import { Component, OnInit } from '@angular/core';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  industries: any[] = [
    {letter: 'A', industry: ['Arachides']},
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
    {letter: 'T', industry: []},
    {letter: 'U', industry: []},
    {letter: 'V', industry: []},
    {letter: 'W', industry: []},
    {letter: 'X', industry: []},
    {letter: 'Y', industry: []},
    {letter: 'Z', industry: []}
  ];

  filteredIndustries: any[] = [];

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
    this.filteredIndustries = [];
    this.beginLetter = letter;
    if (letter === 'ALL') {
      this.industries.forEach((element) => {
        element.industry.forEach((industry) => {
          this.filteredIndustries.push(industry);
        });
        this.totalItems += element.industry.length;
      });
    } else {
      this.industries.forEach((element) => {
        if (element.letter === letter) {
          element.industry.forEach((industry) => {
            this.filteredIndustries.push(industry);
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
