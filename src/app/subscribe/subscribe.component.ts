import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubscribeService} from '../services/subscribe.service';
import {BreakpointObserver} from '@angular/cdk/layout';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscriptionForm: FormGroup;
  isSmallScreen = false;

  sectors = [];
  markets = [];
  themes = [];

  selectedSectors: any[];
  selectedMarkets: any[];
  selectedThemes: any[];

  constructor(private formBuilder: FormBuilder,
              private subscribeService: SubscribeService,
              private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
    document.getElementById('top').scrollIntoView({
      behavior: 'smooth'
    });
    this.initForm();

    this.breakpointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });

    this.subscribeService.getSectorsFromServer().subscribe((data) => {
      data.forEach((sector) => {
        this.sectors.push({ name: sector.Name, code: sector.Name.slice(0, 3).toUpperCase() });
      });
    });

    this.subscribeService.getMarketsFromServer().subscribe((data) => {
      data.forEach((market) => {
        this.markets.push({ name: market.Nom, code: market.Nom.slice(0, 3).toUpperCase() });
      });
    });

    this.subscribeService.getMonitoringthemesFromserver().subscribe((data) => {
      data.forEach((theme) => {
        this.themes.push({ name: theme.Nom, code: theme.Nom.slice(0, 3).toUpperCase() });
      });
    });
  }

  initForm(): void {
    this.subscriptionForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      tel: [''],
      email: ['', Validators.email],
      sectors: ['', Validators.required],
      markets: ['', Validators.required],
      themes: ['', Validators.required]
    });
  }

  submit(): void {

  }
}
