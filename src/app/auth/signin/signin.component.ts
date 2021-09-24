import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss', '../../../styles/wfb-style.css', '../../../styles/typography.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  isSmallScreen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.breakpointObserver.observe(['(max-width: 765px)']).subscribe(result => {
    //   if (result.matches) {
    //     this.isSmallScreen = true;
    //   } else {
    //     this.isSmallScreen = false;
    //   }
    // });
    document.body.style.backgroundColor = '#18344F';
  }

  onSubmit(): void {
    this.router.navigate(['/main/dashboard']);
  }

  ngOnDestroy(): void {
    document.body.style.removeProperty('background-Color');
  }

}
