import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../styles/wfb-style.css']
})
export class LoginComponent implements OnInit, OnDestroy {

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
    document.body.style.backgroundColor = '#18344F'
  }

  onSubmit(): void {
    this.router.navigate(['home']);
  }

  ngOnDestroy(): void {
    document.body.style.removeProperty('background-Color');
  }

}
