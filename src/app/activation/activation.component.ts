import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubscribeService} from '../services/subscribe.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.scss']
})
export class ActivationComponent implements OnInit {

  code = '';
  done = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private subscribeService: SubscribeService) { }

  ngOnInit(): void {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');

    this.subscribeService.getSingleContactFromServer(this.code).subscribe(
      (response) => {
        const id = response[0].id;

        fetch('https://dnvc-admin.herokuapp.com/contacts/' + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Etat: 'Actif'}),
        }).then((resp) => {
          this.done = true;
        })
          .catch((error) => {});
      },
      (error) => {
        console.log(error);
      }
    );
  }

  rederectTo(): void {
    this.router.navigate(['/home']);
  }
}
