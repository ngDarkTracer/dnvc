import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  activeRoute: string;

  ngOnInit(): void {
    this.router.events.subscribe((result) => {
      const routeName = this.router.url.split('/');
      this.activeRoute = routeName[routeName.length - 1];
      console.log(this.activeRoute);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    const elts = document.getElementsByClassName('fade-in-section');
    for (const elt in elts) {
      if (window.scrollY >= (elts[elt].getBoundingClientRect().x)) {
        elts[elt].classList.add('is-visible');
      }
    }
  }

}
