import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private scroller: ViewportScroller,
              private breakPointObserver: BreakpointObserver) { }

  currentNote: string;
  filterValue = 'ALL';
  actualDate = new Date().toLocaleDateString();
  totalItems = 0;
  page = 1;
  openedMenu = false;
  isSmallScreen = false;

  filteredNotes: any[] = [];
  content: any[] = [
    {
      note: 'Prix',
      content: [{
        color: 'red',
        date: new Date().toLocaleDateString(),
        author: 'Ministère du commerce',
        title: 'Hausse des prix de la banane',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
        markets: ['CEMAC', 'ZLECAF']
      },
        {
          color: 'red',
          date: new Date().toLocaleDateString(),
          author: 'Ministère de l\'agriculture',
          title: 'Mauvaises recoltes dans le secteur de la banane',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
          markets: ['CEMAC', 'ZLECAF']
        }]
    },
    {
      note: 'Procédures douanières',
      content: [{
        color: 'green',
        date: new Date().toLocaleDateString(),
        author: 'Ministère de l\'agriculture',
        title: 'Baisse des taxes sur l\'importation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
        markets: ['CEMAC', 'UE']
      }]
    },
    {
      note: 'Règlementations',
      content: [{
        color: 'red',
        date: new Date().toLocaleDateString(),
        author: 'Ministère du commerce',
        title: 'Nouvelles règles concernant l\'importation de la banane',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
        markets: ['CEMAC', 'ZLECAF']
      }]
    },
    {
      note: 'Débouchés',
      content: [{
        color: 'green',
        date: new Date().toLocaleDateString(),
        author: 'Ministère du commerce',
        title: 'Le marché de la banane de plus en plus rentable',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
        markets: ['CEMAC', 'CEDEAO']
      }]
    }
  ];


  filter(item: any, elt?: any): void {
    document.querySelectorAll('.active-item').forEach((i) => {
      i.classList.remove('active-item');
    });
    this.filterValue = item.toString();
    this.totalItems = 0;
    this.filteredNotes = [];
    this.page = 1;
    if (item === 'ALL') {
      this.content.forEach((element) => {
        element.content.forEach((alert) => {
          this.filteredNotes.push(alert);
        });
        this.totalItems += element.content.length;
      });
    } else {
      this.content.forEach((element) => {
        if (element.note === item) {
          element.content.forEach((note) => {
            this.filteredNotes.push(note);
          });
          this.totalItems = element.content.length;
        }
      });
    }
    elt.classList.add('active-item');
  }

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('note');
    this.currentNote = url;
    this.filter('ALL');

    this.breakPointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

  open(): void {
    this.openedMenu = !this.openedMenu;
  }

}
