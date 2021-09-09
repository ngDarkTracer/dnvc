import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private scroller: ViewportScroller) { }

  currentMarket: string;
  actualDate = new Date().toLocaleDateString();
  content: any[] = ['Prix', 'Procédures douanières', 'Règlementations', 'Débouchés'];

  scrollTo(anchor: any): void {
    document.getElementById(anchor).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  ngOnInit(): void {
    // const url = this.router.url.split('/');
    // this.currentIndustriy = url[url.length - 1];
    const url = this.activatedRoute.snapshot.paramMap.get('zone');
    this.currentMarket = url;
  }

}
