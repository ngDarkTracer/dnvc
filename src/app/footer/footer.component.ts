import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    const elts = document.getElementsByClassName('fade-in-section');
    for (const elt in elts) {
      if (window.scrollY >= (elts[elt].getBoundingClientRect().top + 10)) {
        elts[elt].classList.add('is-visible');
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
