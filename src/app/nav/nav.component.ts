import {Component, HostListener, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IndustriesService} from '../services/industries.service';
import {MarketsService} from '../services/markets.service';
import {NotesService} from '../services/notes.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  subsiteOpened = false;
  display = false;
  lastScrollValue = 0;

  constructor(public translate: TranslateService,
              private industriesService: IndustriesService,
              private marketsService: MarketsService,
              private notesService: NotesService) { }

  ngOnInit(): void {
    document.body.removeAttribute('style');
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    if (window.pageYOffset > this.lastScrollValue) {
      this.display = true;
      this.lastScrollValue = window.pageYOffset;
    } else {
      this.display = false;
      this.lastScrollValue = window.pageYOffset;
    }
  }

  close(): void {
    if (this.subsiteOpened) {
      this.subsiteOpened = false;
      document.body.removeAttribute('style');
    }
  }

  open(): void {
    if (this.subsiteOpened) {
      this.subsiteOpened = !this.subsiteOpened;
      document.body.removeAttribute('style');
    } else {
      this.subsiteOpened = !this.subsiteOpened;
      document.body.style.position = 'fixed';
      document.body.style.top = '-9px';
    }
  }

  openAdminApp(): void {
    window.open('https://admin.dnvc-cm.org/admin/', '_blank');
  }

  trans(value: string): void {
    this.translate.use(value);
    // this.industriesService.lang = value;
    // this.marketsService.lang = value;
    // this.notesService.lang = value;
  }
}
