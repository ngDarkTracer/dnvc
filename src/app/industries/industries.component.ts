import { Component, OnInit } from '@angular/core';
import {IndustriesService} from '../services/industries.service';
import {BreakpointObserver} from '@angular/cdk/layout';

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
  isSmallScreen = false;
  ready = false;
  page = 1;

  constructor(private industriesService: IndustriesService,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.getSectors();
    this.breakpointObserver.observe(['(max-width: 900px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

  getSectors(): void {
    const sectors = [];
    this.ready = false;
    this.industriesService.getSectorsFromServer().subscribe((data) => {
      for (const beginLetter of this.alphabet) {
        const sectorsName = data.filter((sect) => sect.Name[0].toUpperCase() === beginLetter);
        sectorsName.forEach((sect) => {
          if (sect.Name === 'Toutes les filières') {
            sectorsName.pop(sect);
          }
        });
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
    this.openedList = false;
  }

  open(): void {
    this.openedList = !this.openedList;
  }
}
