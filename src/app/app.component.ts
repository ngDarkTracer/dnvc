import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {InfosService} from './services/infos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dnvc';
  version = '1.5.1';

  constructor(private translate: TranslateService, private infosService: InfosService) {
    translate.setDefaultLang('fr');
    console.log('DNVC version ' + this.version);
  }
}
