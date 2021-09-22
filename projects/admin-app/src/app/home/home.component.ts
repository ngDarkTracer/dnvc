import {Component, OnInit, ViewEncapsulation} from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const routes: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
  { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
  { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
  { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
  { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
  { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
  { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.scss', '../../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HomeComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = routes.filter(menuItem => menuItem);
  }

  isMobileMenu(): boolean {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

}
