import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  alphabet: any[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  industries: any[] = ['Filière 1', 'Filière 2', 'Filière 3', 'Filière 4', 'Filière 5', 'Filière 6', 'Filière 7', 'Filière 8', 'Filière 9', 'Filière 10'];

  constructor() { }

  ngOnInit(): void {
  }

}
