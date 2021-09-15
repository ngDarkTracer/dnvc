import {Component, HostListener, OnInit} from '@angular/core';
import {log} from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  subsiteOpened = false;
  display = false;
  lastScrollValue = 0;

  constructor() { }

  ngOnInit(): void {
    document.body.removeAttribute('style');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    if (window.pageYOffset > this.lastScrollValue) {
      this.display = true;
      this.lastScrollValue = window.pageYOffset;
    } else {
      this.display = false;
      this.lastScrollValue = window.pageYOffset;
    }
  }

  close(): void {
    if (this.subsiteOpened) {
      this.subsiteOpened = false;
      document.body.removeAttribute('style');
    }
  }

  open(): void {
    if (this.subsiteOpened) {
      this.subsiteOpened = !this.subsiteOpened;
      document.body.removeAttribute('style');
    } else {
      this.subsiteOpened = !this.subsiteOpened;
      document.body.style.position = 'fixed';
      document.body.style.top = '-9px';
    }
  }

  openAdminApp(): void {
    window.open('//dnvc.herokuapp.com/admin/', '_blank');
  }
}
