import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubscribeService} from '../services/subscribe.service';
import {BreakpointObserver} from '@angular/cdk/layout';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscriptionForm: FormGroup;
  isSmallScreen = false;
  processing = false;
  alreadyExist = false;
  displayMaximizable = false;

  sectors = [];
  markets = [];
  themes = [];
  contacts: any[];

  selectedSectors = [];
  selectedMarkets = [];


  selectedThemes = [];
  selectedThemes2 = [];
  selectedThemes3 = [];


  constructor(private formBuilder: FormBuilder,
              private subscribeService: SubscribeService,
              private breakpointObserver: BreakpointObserver,
              private router: Router) {

  }

  ngOnInit(): void {
    document.getElementById('top').scrollTop = 0;
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
        this.sectors.push(sector);
      });
    });

    this.subscribeService.getMarketsFromServer().subscribe((data) => {
      data.forEach((market) => {
        this.markets.push(market);
      });
    });

    this.subscribeService.getMonitoringthemesFromserver().subscribe((data) => {
      data.forEach((theme) => {
        this.themes.push(theme);
      });
    });

    this.subscribeService.getContactsFromserver().subscribe((data) => {
      this.contacts = data;
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

    this.processing = true;
    this.selectedSectors = [];
    this.selectedMarkets = [];

    this.selectedThemes = [];

    this.subscriptionForm.controls.sectors.value.forEach((sector) => {
      this.selectedSectors.push(sector.id);
    });

    this.subscriptionForm.controls.markets.value.forEach((market) => {
      this.selectedMarkets.push(market.id);
    });

    this.subscriptionForm.controls.themes.value.forEach((theme) => {
      this.selectedThemes.push(theme.id);
    });

    this.contacts.forEach((contact) => {
      if (contact.Email === this.subscriptionForm.controls.email.value) {
        this.alreadyExist = true;
        this.processing = false;
      }
    });

    if (!this.alreadyExist) {
      const userInformations = {
        Nom : this.subscriptionForm.controls.name.value,
        Prenom : this.subscriptionForm.controls.surname.value,
        Telephone : this.subscriptionForm.controls.tel.value,
        Email : this.subscriptionForm.controls.email.value,
        Etat: 'Inactif',
        // filieres : this.selectedSectors,
        // marches : this.selectedMarkets,
        // type_alerte: this.selectedThemes
        criteres: [{
          marches: this.selectedMarkets,
          filieres: this.selectedSectors,
          themes: this.selectedThemes
        }]
      };

      fetch('https://dnvc-admin.herokuapp.com/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInformations),
      }).then((response) => {
        this.processing = false;
        this.displayMaximizable = true;
      })
        .then((data) => {
          this.processing = false;
        });
    }
  }

  redirectTo(): void {
    this.router.navigate(['/home']);
  }
}
