import { Component, OnInit } from '@angular/core';
import {IndustriesService} from '../services/industries.service';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  alphabet: any[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  industries: any[];

  filteredIndustries: any[] = [];

  beginLetter = 'ALL';
  numberOfElement;
  totalItems = 0;
  openedList = false;
  ready = false;
  page = 1;

  constructor(private industriesService: IndustriesService) { }

  ngOnInit(): void {
    this.getSectors();
  }

  getSectors(): void {
    const sectors = [];
    this.ready = false;
    this.industriesService.getSectorsFromServer().subscribe((data) => {
      for (const beginLetter of this.alphabet) {
        const sectorsName = data.filter((sect) => sect.Name[0].toUpperCase() === beginLetter);
        sectors.push({letter: beginLetter, industry: sectorsName});
      }
      this.industries = sectors;
      this.ready = true;
      this.filter('ALL');
    });
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
