import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private scroller: ViewportScroller) { }

  currentIndustriy: string;
  filterValue = 'ALL';
  actualDate = new Date().toLocaleDateString();

  content: any[] = [
    {
      alerte: 'Prix',
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
        author: 'Ministère du commerce',
        title: 'Hausse des prix de la banane',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos doloribus eligendi minus molestias quia sint tempore? A, quisquam sapiente?',
        markets: ['CEMAC', 'ZLECAF']
        }]
      },
    {
      alerte: 'Procédures douanières',
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
      alerte: 'Règlementations',
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
      alerte: 'Débouchés',
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

  // scrollTo(anchor: any): void {
  //   document.getElementById(anchor).scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest'
  //   });
  // }

  filter(item: any): void {
    this.filterValue = item.toString();
  }

  ngOnInit(): void {
    // const url = this.router.url.split('/');
    // this.currentIndustriy = url[url.length - 1];
    const url = this.activatedRoute.snapshot.paramMap.get('industry');
    this.currentIndustriy = url;
  }

}
