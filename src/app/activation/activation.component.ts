import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubscribeService} from '../services/subscribe.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  code = '';
  id;
  done = false;
  criteriaFrom: FormGroup;
  selectedSector;
  selectedMarket;
  selectedTheme;

  sectors: any[];
  markets: any[];
  themes: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private subscribeService: SubscribeService) { }

  ngOnInit(): void {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');

    this.subscribeService.getSectorsFromServer().subscribe((data) => {
      this.sectors = data;
    });

    this.subscribeService.getMarketsFromServer().subscribe((data) => {
      this.markets = data;
    });

    this.subscribeService.getMonitoringthemesFromserver().subscribe((data) => {
      this.themes = data;
    });

    this.subscribeService.getSingleContactFromServer(this.code).subscribe((data) => {
      this.id = data[0].id;
    });

    this.initForm();
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

    const criteria = this.criteriaFrom.value;
    const preferences = criteria;
    console.log(this.criteriaFrom.controls.criteres.value);


    fetch('http://localhost:1337/contacts/' + this.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferences),
    }).then((response) => {})
      .then((data) => {});
  }
}
