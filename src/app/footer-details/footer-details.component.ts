import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: ['./footer-details.component.scss']
})
export class FooterDetailsComponent implements OnInit {

  activeRoute: string;
  isSmallScreen = false;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.activeRoute = this.activatedRoute.snapshot.paramMap.get('detail');
      this.activeRoute = this.activeRoute.replace(/_/g, ' ');
    });
    this.breakpointObserver.observe(['(max-width: 900px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

}
