import {Component, ElementRef, OnInit} from '@angular/core';
import {ROUTES} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  location: Location;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(location: Location, private element: ElementRef) {
    this.location = location;
    this.sidebarVisible = false;
  }

  ngOnInit(): void {
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
    // const toggleButton = this.toggleButton;
    // const body = document.getElementsByTagName('body')[0];
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }

  // getTitle(): any {
  //   let title = this.location.prepareExternalUrl(this.location.path());
  //   if (title.charAt(0) === '#'){
  //     title = title.slice( 1 );
  //   }
  //
  //   for (let item = 0; item < this.listTitles.length; item++){
  //     if (this.listTitles[item].path === title){
  //       return this.listTitles[item].title;
  //     }
  //   }
  //   return 'Dashboard';
  // }
}
