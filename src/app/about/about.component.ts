import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {InfosService} from '../services/infos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  isSmallScreen = false;
  infos: any;
  ready = false;

  constructor(private breakpointObserver: BreakpointObserver, private infosService: InfosService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 900px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });

    this.infosService.getInfosFromServer().subscribe((data) => {
      this.infos = data;
      this.ready = true;
    });
  }

}
