import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: 'alerts', title: 'Alertes',  icon: 'pe-7s-attention', class: '' },
    { path: 'Structures', title: 'Structure de veille',  icon: 'pe-7s-glasses', class: '' },
    { path: 'markets', title: 'Marchés',  icon: 'pe-7s-edit', class: '' },
    { path: 'industries', title: 'Filières',  icon: 'pe-7s-news-paper', class: '' },
    { path: 'mailing', title: 'Mailing',  icon: 'pe-7s-mail', class: '' },
    { path: 'mailing-template', title: 'Mailing Template',  icon: 'pe-7s-mail-open-file', class: '' },
    { path: 'administration', title: 'Administration',  icon: 'pe-7s-config', class: '' }
  ];

  constructor() { }

  ngOnInit(): void {

  }
  isMobileMenu(): boolean {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
