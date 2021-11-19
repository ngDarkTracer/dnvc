import {Component, HostListener, OnInit} from '@angular/core';
import {InfosService} from '../services/infos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private infosService: InfosService) { }

  infos: any;
  ready = false;
  ngOnInit(): void {
    this.infosService.getInfosFromServer().subscribe((data) => {
      this.infos = data;
      this.ready = true;
    });
  }

}
