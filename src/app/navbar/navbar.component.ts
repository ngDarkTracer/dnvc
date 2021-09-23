import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {items} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routeName;
  private toggleButton: any;
  private sidebarVisible: boolean;
  private AllRoute: any[] = items;

  constructor(private element: ElementRef, private router: Router) {
    this.sidebarVisible = false;
  }

  ngOnInit(): void{
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
  }

  sidebarOpen(): void {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    setTimeout(() => {
      toggleButton.classList.add('toggled');
    }, 500);
    body.classList.add('nav-open');

    this.sidebarVisible = true;
  }
  sidebarClose(): void {
    const body = document.getElementsByTagName('body')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    body.classList.remove('nav-open');
  }
  sidebarToggle(): void {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  getTitle(): any{
    const routeName = this.router.url.split('/');
    const currentRoute = this.AllRoute.find((route) => {
      return route.path === routeName[2];
    });
    return currentRoute.title;
  }
}
