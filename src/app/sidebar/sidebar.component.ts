import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

export const items: any[] = [
  { path: 'dashboard', title: 'Dashboard',  icon: 'pe-7s-graph'},
  { path: 'alerts', title: 'Alertes',  icon: 'pe-7s-attention'},
  { path: 'structures', title: 'Structure de veille',  icon: 'pe-7s-glasses'},
  { path: 'markets', title: 'Marchés',  icon: 'pe-7s-edit'},
  { path: 'sector', title: 'Filières',  icon: 'pe-7s-news-paper'},
  { path: 'mailing', title: 'Mailing',  icon: 'pe-7s-mail'},
  { path: 'mail-templates', title: 'Mailing Template',  icon: 'pe-7s-mail-open-file'},
  { path: 'administration', title: 'Administration',  icon: 'pe-7s-config'}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] = items;

  isSmallScreen = false;
  RouteName: any;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }


}
