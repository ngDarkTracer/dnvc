import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubscribeService} from '../services/subscribe.service';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscriptionForm: FormGroup;

  sectors = [];
  markets = [];
  themes = [];

  constructor(private formBuilder: FormBuilder, private subscribeService: SubscribeService) {

  }

  ngOnInit(): void {
    document.getElementById('top').scrollIntoView({
      behavior: 'smooth'
    });
    this.initForm();

    this.subscribeService.getSectorsFromServer().subscribe((data) => {
      data.forEach((sector) => {
        this.sectors.push({ name: sector.Name, code: sector.Name.slice(0, 3).toUpperCase() });
      });
      console.log(this.sectors);
    });

    this.subscribeService.getMarketsFromServer().subscribe((data) => {
      data.forEach((market) => {
        this.markets.push({ name: market.Nom, code: market.Nom.slice(0, 3).toUpperCase() });
      });
      console.log(this.markets);
    });

    this.subscribeService.getMonitoringthemesFromserver().subscribe((data) => {
      data.forEach((theme) => {
        this.themes.push({ name: theme.Nom, code: theme.Nom.slice(0, 3).toUpperCase() });
      });
      console.log(this.themes);
    });
  }

  initForm(): void {
    this.subscriptionForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit(): void {

  }
}
