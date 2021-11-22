import {Component, HostListener, OnInit} from '@angular/core';
import {InfosService} from '../services/infos.service';

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

  constructor(private infosServices: InfosService) { }

  ngOnInit(): void {
    this.infosServices.getInfosFromServer().subscribe((infos) => {
      this.infos = infos;
      this.imageUrl = infos.home_picutre1.url;
      this.imageUrl2 = infos.home_picture2.url;
      this.ready = true;
    });
  }
}
