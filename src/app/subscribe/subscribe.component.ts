import {Component, HostListener, OnInit} from '@angular/core';
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
  updateForm: FormGroup;
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

  constructor(private formBuilder: FormBuilder,
              private subscribeService: SubscribeService,
              private breakpointObserver: BreakpointObserver,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initForm();
    this.initUpdateForm();
    this.breakpointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
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
      email: ['', Validators.email]
    });
  }

  initUpdateForm(): void {
    this.updateForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  submit(): void {

    this.processing = true;

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
        Etat: 'Inactif'
      };

      fetch('https://admin.dnvc-cm.org/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
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

  update(): void {
    this.processing = true;
    this.subscribeService.getSingleContactFromServerByHisEmailAddress(this.updateForm.controls.email.value).subscribe(
      (data) => {
        if (data.length === 0){
          this.router.navigate(['/home']);
          this.processing = false;
        } else {
          this.router.navigate(['/update/' + data[0].id ], { skipLocationChange: true });
          this.processing = false;
        }
      },
      (error) => {
        console.log(error);
        this.processing = false;
      }
    );
  }

  redirectTo(): void {
    this.router.navigate(['/home']);
  }
}
