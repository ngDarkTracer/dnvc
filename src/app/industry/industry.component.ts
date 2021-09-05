import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor(private router: Router, private scroller: ViewportScroller) { }

  currentIndustriy: string;
  actualDate = new Date().toLocaleDateString();
  content: any[] = ['Resume', 'Introduction', 'Prix', 'Changements', 'Ressources'];

  scrollTo(anchor: any): void {
    document.getElementById(anchor).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    this.currentIndustriy = url[url.length - 1];
  }

}
