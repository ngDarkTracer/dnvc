import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IndustriesService} from './services/industries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dnvc';
  version = '1.4.2';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    console.log('DNVC version ' + this.version);
  }
}
