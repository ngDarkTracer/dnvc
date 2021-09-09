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
  totalItems = 0;

  filteredAlert: any[] = [];
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
        author: 'Ministère de l\'agriculture',
        title: 'Mauvaises recoltes dans le secteur de la banane',
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
  page = 1;

  filter(item: any): void {
    this.filterValue = item.toString();
    this.totalItems = 0;
    this.filteredAlert = [];
    this.page = 1;
    if (item === 'ALL') {
      this.content.forEach((element) => {
        element.content.forEach((alert) => {
          this.filteredAlert.push(alert);
        });
        this.totalItems += element.content.length;
      });
    } else {
      this.content.forEach((element) => {
        if (element.alerte === item) {
          this.totalItems = element.content.length;
        }
      });
    }
  }

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('industry');
    this.currentIndustriy = url;
    this.filter('ALL');
  }

}
