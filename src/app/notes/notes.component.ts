import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  notes: any[] = [
    {letter: 'A', notes: ['Arachides']},
    {letter: 'B', notes: ['Banane', 'Banane-plantain']},
    {letter: 'C', notes: ['Cacao', 'Cafe']},
    {letter: 'D', notes: []},
    {letter: 'E', notes: []},
    {letter: 'F', notes: []},
    {letter: 'G', notes: []},
    {letter: 'H', notes: []},
    {letter: 'I', notes: []},
    {letter: 'J', notes: []},
    {letter: 'K', notes: []},
    {letter: 'L', notes: []},
    {letter: 'M', notes: []},
    {letter: 'N', notes: []},
    {letter: 'O', notes: []},
    {letter: 'P', notes: []},
    {letter: 'Q', notes: []},
    {letter: 'R', notes: []},
    {letter: 'S', notes: []},
    {letter: 'T', notes: []},
    {letter: 'U', notes: []},
    {letter: 'V', notes: []},
    {letter: 'W', notes: []},
    {letter: 'X', notes: []},
    {letter: 'Y', notes: []},
    {letter: 'Z', notes: []}
  ];

  filteredNotes: any[] = [];

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
    this.filteredNotes = [];
    this.beginLetter = letter;
    if (letter === 'ALL') {
      this.notes.forEach((element) => {
        element.notes.forEach((notes) => {
          this.filteredNotes.push(notes);
        });
        this.totalItems += element.notes.length;
      });
    } else {
      this.notes.forEach((element) => {
        if (element.letter === letter) {
          element.notes.forEach((notes) => {
            this.filteredNotes.push(notes);
          });
          this.totalItems = element.notes.length;
        }
      });
    }
  }

  open(): void {
    this.openedList = !this.openedList;
  }

}
