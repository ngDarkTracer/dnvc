import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  subsiteOpened = false;

  constructor() { }

  ngOnInit(): void {
    document.body.removeAttribute('style');
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
}
