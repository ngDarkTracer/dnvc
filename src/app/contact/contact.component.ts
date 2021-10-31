import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  done = false;
  isSmallScreen = false;
  contactForm: FormGroup;
  processing = false;

  constructor(private router: Router,
              private breakpointObserver: BreakpointObserver,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });

    this.initForm();
  }

  initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  redirectTo(): void {
    this.router.navigate(['/home']);
  }

  submit(): void {
    this.done = true;
  }
}
