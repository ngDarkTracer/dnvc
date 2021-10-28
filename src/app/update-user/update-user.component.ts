import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {SubscribeService} from '../services/subscribe.service';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  code = '';
  id;
  done = false;
  error = false;
  isSmallScreen = false;
  criteriaFrom: FormGroup;
  loading = true;
  processing = false;

  preferences: any[];
  sectors: any[];
  markets: any[];
  themes: any[];
  test;
  success = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private subscribeService: SubscribeService,
              private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.code = this.activatedRoute.snapshot.paramMap.get('id');

    this.breakPointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });

    this.subscribeService.getSectorsFromServer().subscribe((data) => {
      this.sectors = data;
    });

    this.subscribeService.getMarketsFromServer().subscribe((data) => {
      this.markets = data;
    });

    this.subscribeService.getMonitoringthemesFromserver().subscribe((data) => {
      this.themes = data;
    });

    this.initForm();

    this.subscribeService.getSingleContactFromServerByHisId(this.code).subscribe(
      (data) => {
        data[0].criteres.forEach((critere) => {
          const newPreferences = this.formBuilder.group({
            filieres: [critere.filieres[0]],
            marches: [critere.marches[0]],
            themes: [critere.themes[0]]
          });
          this.getPreferences().push(newPreferences);
        });
      },
      (error) => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  initForm(): void {
    this.criteriaFrom = this.formBuilder.group({
      criteres: this.formBuilder.array([])
    });
  }

  getPreferences(): FormArray {
    return this.criteriaFrom.get('criteres') as FormArray;
  }

  addPreferences(): void {
    const newPreferences = this.formBuilder.group({
      filieres: ['', Validators.required],
      marches: ['', Validators.required],
      themes: ['', Validators.required]
    });

    this.getPreferences().push(newPreferences);
  }

  deletePreferences(preferenceIndex: number): void {
    this.getPreferences().removeAt(preferenceIndex);
  }

  onSubmit(): void {
    this.processing = true;
    const preferences = this.criteriaFrom.value;

    fetch('https://admin.dnvc-cm.org/contacts/' + this.code, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    }).then((response) => {
      this.processing = false;
      this.done = true;
    })
      .catch((error) => {
        this.processing = false;
        this.error = true;
      });
  }

  redirectTo(): void {
    this.router.navigate(['/home']);
  }

  change($event: any): void {
    console.log($event.value);
  }
}
