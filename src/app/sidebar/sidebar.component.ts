import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'Dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: 'Alertes', title: 'Alertes',  icon: 'pe-7s-attention', class: '' },
  { path: 'Structures', title: 'Structure de veille',  icon: 'pe-7s-glasses', class: '' },
  { path: 'Marchés', title: 'Marchés',  icon: 'pe-7s-edit', class: '' },
  { path: 'Filières', title: 'Filières',  icon: 'pe-7s-news-paper', class: '' },
  { path: 'mailing', title: 'Mailing',  icon: 'pe-7s-mail', class: '' },
  { path: 'Mailing Template', title: 'Mailing Template',  icon: 'pe-7s-mail-open-file', class: '' },
  { path: 'Administration', title: 'Administration',  icon: 'pe-7s-config', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu(): boolean {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
