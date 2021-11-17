import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {MarketsService} from '../services/markets.service';
import {RessourcesService} from '../services/ressources.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private breakPointObserver: BreakpointObserver,
              private marketsService: MarketsService,
              private ressourcesService: RessourcesService) {
  }

  currentMarket: string;
  serverAdress = 'https://dnvc-admin.herokuapp.com/';
  marketImageUrl = '';
  marketIntroText = '';
  lastUpdate = '';
  filterValue = 'ALL';
  totalItems = 0;
  page = 1;
  current;
  searching = false;
  stickyMenu = false;
  openedMenu = false;
  isSmallScreen = false;
  isThereAlert = true;
  ready = false;

  severity = {
    Threat: '#db6f27',
    Weak: '#6b6b6b',
    Opportunity: '#5cc45e'
  };

  sectors: any[];
  themes: any[];
  filteredAlert: any[] = [];
  content: any[] = [];
  temp: any[];

  filter(item: any, elt?: any): void {
    // document.getElementById('top').scrollIntoView({
    //   behavior: 'smooth'
    // });
    document.querySelectorAll('.active-item').forEach((i) => {
      i.classList.remove('active-item');
    });
    this.filterValue = item.toString();
    this.totalItems = 0;
    this.filteredAlert = [];
    this.page = 1;
    if (item === 'ALL') {
      this.content.forEach((element) => {
        element.content.forEach((alert) => {
          this.filteredAlert.push(alert);
        });
        this.totalItems += element.content.length;
      });
    } else {
      this.content.forEach((element) => {
        if (element.alerte === item) {
          element.content.forEach((alert) => {
            this.filteredAlert.push(alert);
          });
          this.totalItems = element.content.length;
        }
      });
    }
    if (elt) {
      elt.classList.add('active-item');
    }
  }

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('zone');
    this.currentMarket = url;
    this.getMarketProperties(url.replace(/ /g, '%20'));
    this.current = url.replace(/ /g, '%20');

    this.ressourcesService.getSectorsFromServer().subscribe((data) => {
      this.sectors = data;
    });

    this.ressourcesService.getMonitoringthemesFromserver().subscribe((data) => {
      this.themes = data;
    });

    this.breakPointObserver.observe(['(max-width: 765px)']).subscribe(result => {
      if (result.matches) {
        this.isSmallScreen = true;
      } else {
        this.isSmallScreen = false;
      }
    });
  }

  getMarketProperties(url: string): void {
    this.isThereAlert = true;
    this.content = [];
    this.marketsService.getMarketFromServer(url).subscribe((result) => {
      if (result.length === 0) {
        this.router.navigate(['/home']);
      } else {
        this.marketImageUrl = result[0].Logo_Large[0].url;
        this.marketIntroText = result[0].Intro;
        this.lastUpdate = result[0].updated_at.split('T')[0];
        this.ready = true;
      }
      this.search(null, url, null, null, null);
      // this.marketsService.getSingleMarketFromServer(url).subscribe((data) => {
      //   if (data.length === 0) {
      //     this.isThereAlert = false;
      //   } else {
      //     this.isThereAlert = true;
      //   }
      //
      //   this.temp = data;
      //   from(this.temp)
      //     .pipe(
      //       groupBy(element => element.id),
      //       mergeMap(group => group.pipe(toArray()))
      //     )
      //     .subscribe(
      //       (val) => {
      //         const tempContent = [];
      //         val.forEach((elt) => {
      //           if (this.marketImageUrl === '' || this.marketIntroText === '') {
      //             if (elt.Marches.length === 0) {
      //               elt.Marches = result;
      //               for (let i = 0; i < elt.Marches.length; i++) {
      //                 if (elt.Marches[i].Nom === url.replace(/%20/g, ' ')) {
      //                   this.marketImageUrl = elt.Marches[i].Logo_Large[0].url;
      //                   this.marketIntroText = elt.Marches[i].Intro;
      //                   this.lastUpdate = elt.Marches[i].updated_at.split('T')[0];
      //                   break;
      //                 }
      //               }
      //             } else {
      //               for (let i = 0; i < elt.Marches.length; i++) {
      //                 if (elt.Marches[i].Nom === url.replace(/%20/g, ' ')) {
      //                   this.marketImageUrl = elt.Marches[i].Logo_Large[0].url;
      //                   this.marketIntroText = elt.Marches[i].Intro;
      //                   this.lastUpdate = elt.Marches[i].updated_at.split('T')[0];
      //                   break;
      //                 }
      //               }
      //             }
      //           }
      //           tempContent.push(
      //             {
      //               color: this.severity[elt.Type],
      //               date: elt.DatePublication,
      //               author: elt.Emetteur !== null ? elt.Emetteur.NomStructure : elt.Emetteur,
      //               title: elt.Title,
      //               text: elt.Resume,
      //               sourceType: elt.SourceFile.length === 0 ? 'url' : 'document',
      //               source: elt.SourceFile.length === 0 ? elt.SourceUrl : elt.SourceFile[0].url,
      //               markets: elt.Marches
      //             }
      //           );
      //         });
      //         this.content.push(
      //           {
      //             alerte: val[0].themes_de_veille === null ? 'All' : val[0].themes_de_veille.Nom,
      //             content: tempContent
      //           });
      //       },
      //       (error) => {
      //         console.log(error);
      //       },
      //       () => {
      //         this.ready = true;
      //         const all = document.getElementById('all');
      //         this.filter('ALL', all);
      //       });
      // });
    });
  }

  search(sector?: any, market?: any, theme?: any, debut?: any, fin?: any): void {
    this.content = [];
    this.searching = true;
    this.marketsService.getSingleOrGroupOfmarketsFromServer(sector, market, theme, debut, fin).subscribe((data) => {
        const tempContent = [];
        data.forEach((elt) => {
          const tempFiles = elt.files.filter((file) => {
            return (!file.url.toLowerCase().includes('.jpg') && !file.url.toLowerCase().includes('.jpeg')
              && !file.url.toLowerCase().includes('.png') && !file.url.toLowerCase().includes('.gif'));
          });
          tempContent.push(
            {
              color: this.severity[elt.Type],
              date: elt.DatePublication,
              author: elt.emetteur[0].NomStructure,
              title: elt.Title,
              text: elt.Resume,
              sourceType: elt.files.length === 0 ? 'url' : 'document',
              source: tempFiles.length === 0 ? elt.SourceUrl : tempFiles[0].url,
              markets: elt.marches.length !== 0 ? elt.marches : 'All'
            }
          );
        });
        this.content.push(
          {
            alerte: 'Advanced results',
            content: tempContent
          });
      },
      (error) => {
      },
      () => {
        this.ready = true;
        this.searching = false;
        const all = document.getElementById('all');
        this.filter('ALL', all);
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    if (window.pageYOffset >= 1120) {
      this.stickyMenu = true;
    } else {
      this.stickyMenu = false;
    }
  }

  open(): void {
    this.openedMenu = !this.openedMenu;
  }

  redirectTo(url: any): void {
    window.open(url, '_blank');
  }
}
