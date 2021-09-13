import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: ['./footer-details.component.scss']
})
export class FooterDetailsComponent implements OnInit {

  activeRoute: string;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.activeRoute = this.activatedRoute.snapshot.paramMap.get('detail');
      this.activeRoute = this.activeRoute.replace(/_/g, ' ');
      document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

}
