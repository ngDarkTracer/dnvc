import {Component, HostListener, OnInit} from '@angular/core';
import {InfosService} from '../services/infos.service';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  infos: any;
  imageUrl: string;
  imageUrl2: string;
  ready = false;
  isSmallScreen = false;

  constructor(private infosServices: InfosService, private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakPointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });

    this.infosServices.getInfosFromServer().subscribe((infos) => {
      this.infos = infos;
      this.imageUrl = infos.home_picture1.url;
      this.imageUrl2 = infos.home_picture2.url;
      this.ready = true;
    });
  }
}
