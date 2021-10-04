import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  subscriptionForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    document.getElementById('top').scrollIntoView({
      behavior: 'smooth'
    });

    this.initForm();
  }

  initForm(): void {
    this.subscriptionForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  submit(): void {

  }
}
