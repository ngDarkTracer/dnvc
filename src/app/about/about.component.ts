import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 900px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

}
