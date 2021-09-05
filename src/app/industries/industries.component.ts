import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  alphabet: any[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  industries: any[] = ['Arachides', 'Banane', 'Banane-plantain', 'Cacao', 'Cafe', 'Pisciculture'];

  beginLetter = 'ALL';
  numberOfElement;

  constructor() { }

  filter(letter: string): void {
    this.numberOfElement = 0;
    this.beginLetter = letter;
    if (letter === 'ALL') {
      this.numberOfElement = this.industries.length;
    } else {
      this.industries.forEach((element) => {
        if (element.startsWith(letter)) {
          this.numberOfElement += 1;
        }
      });
    }
  }

  ngOnInit(): void {
    this.filter(this.beginLetter);
  }
}
