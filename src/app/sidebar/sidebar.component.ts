import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Alertes',  icon:'pe-7s-attention', class: '' },
    { path: '/table', title: 'Structure de veille',  icon:'pe-7s-glasses', class: '' },
    { path: '/typography', title: 'Filières',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Marchés',  icon:'pe-7s-edit', class: '' },
    { path: '/maps', title: 'Mailing',  icon:'pe-7s-mail', class: '' },
    { path: '/notifications', title: 'Mail Templates',  icon:'pe-7s-mail-open-file', class: '' },
    { path: '/notifications', title: 'Administration',  icon:'pe-7s-config', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
