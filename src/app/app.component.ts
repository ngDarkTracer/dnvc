import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HasFalseService} from './services/has-false.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dnvc';
  version = '1.4.2';

  constructor(private translate: TranslateService, private hasFalseService: HasFalseService) {
    translate.setDefaultLang('fr');
    hasFalseService.getAlertsWhichHasNoSectors();
    hasFalseService.getAlertsWhichHasNoMarkets();
    hasFalseService.getAlertsWhichHasNoThemes();
    console.log('DNVC version ' + this.version);
  }
}
