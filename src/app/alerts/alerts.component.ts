import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  Alerts: any[] = [
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
  constructor() { }

  ngOnInit(): void {
  }

}
