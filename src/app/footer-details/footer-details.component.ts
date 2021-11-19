import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {HttpClient} from '@angular/common/http';
import {InfosService} from '../services/infos.service';

@Component({
  selector: 'app-footer-details',
  templateUrl: './footer-details.component.html',
  styleUrls: ['./footer-details.component.scss']
})
export class FooterDetailsComponent implements OnInit {

  activeRoute: string;
  isSmallScreen = false;
  infos: any;
  ready = false;

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private breakpointObserver: BreakpointObserver,
              private infosService: InfosService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.activeRoute = this.activatedRoute.snapshot.paramMap.get('detail');
      this.activeRoute = this.activeRoute.replace(/_/g, ' ');
    });

    this.infosService.getInfosFromServer().subscribe((data) => {
      this.infos = data;
      this.ready = true;
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
