import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  openAdminApp(): void {
    window.open('https://admin.dnvc-cm.org/admin/', '_blank');
  }

}
