import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {BreakpointObserver} from '@angular/cdk/layout';
import {IndustriesService} from '../services/industries.service';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {RessourcesService} from '../services/ressources.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private scroller: ViewportScroller,
              private breakPointObserver: BreakpointObserver,
              private industriesService: IndustriesService,
              private ressourcesService: RessourcesService) { }

  currentIndustriy: string;
  serverAdress = 'https://dnvc-admin.herokuapp.com/';
  sectorImageUrl = '';
  sectorIntroText = '';
  lastUpdate = '';
  current;
  filterValue = 'ALL';
  totalItems = 0;
  page = 1;
  searching = false;
  stickyMenu = false;
  openedMenu = false;
  isSmallScreen = false;
  isThereAlert = true;
  ready = false;

  sectors: any[];
  markets: any[];
  themes: any[];

  severity = {
    Threat: '#db6f27',
    Weak: '#6b6b6b',
    Opportunity: '#5cc45e'
  };

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
    const url = this.activatedRoute.snapshot.paramMap.get('industry');
    this.currentIndustriy = url;
    this.current = url.replace(/ /g, '%20');
    this.getSectorProperties(url.replace(/ /g, '%20'));

    this.ressourcesService.getMarketsFromServer().subscribe((data) => {
      this.markets = data;
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

  getSectorProperties(url: string): void {
    this.ready = false;
    this.isThereAlert = true;
    this.content = [];
    this.industriesService.getSectorFromServer(url).subscribe((result) => {
      this.industriesService.getSingleSectorFromServer(url).subscribe((data) => {
        if (data.length === 0) {
          this.isThereAlert = false;
        } else {
          this.isThereAlert = true;
        }
        this.temp = data;
        from(this.temp)
          .pipe(
            groupBy(element => element.id),
            mergeMap(group => group.pipe(toArray()))
          )
          .subscribe(
            (val) => {
              const tempContent = [];
              val.forEach((elt) => {
                if (this.sectorImageUrl === '' || this.sectorIntroText === '') {
                  for (let i = 0; i < elt.Filieres.length; i++) {
                    this.sectorImageUrl = elt.Filieres[i].Photo === null ? result[0].Photo.url : elt.Filieres[i].Photo.url;
                    this.sectorIntroText = elt.Filieres[i].Intro === null ? result[0].Intro : elt.Filieres[i].Intro;
                    this.lastUpdate = result[0].updated_at.split('T')[0];
                    if (elt.Filieres[i].Name === url.replace(/%20/g, ' ')) {
                      this.sectorImageUrl = elt.Filieres[i].Photo === null ? result[0].Photo.url : elt.Filieres[i].Photo.url;
                      this.sectorIntroText = elt.Filieres[i].Intro === null ? result[0].Intro : elt.Filieres[i].Intro;
                      this.lastUpdate = result[0].updated_at.split('T')[0];
                      // this.sectorImageUrl = elt.Filieres[i].Photo.url;
                      // this.sectorIntroText = elt.Filieres[i].Intro;
                      // this.lastUpdate = elt.Filieres[i].updated_at.split('T')[0];
                      break;
                    }
                  }
                }
                tempContent.push(
                  {
                    color: this.severity[elt.Type],
                    date: elt.DatePublication,
                    author: elt.Emetteur !== null ? elt.Emetteur.NomStructure : elt.Emetteur,
                    title: elt.Title,
                    text: elt.Resume,
                    sourceType: elt.SourceFile.length === 0 ? 'url' : 'document',
                    source: elt.SourceFile.length === 0 ? elt.SourceUrl : elt.SourceFile[0].url,
                    markets: elt.Marches.length !== 0 ? elt.Marches : 'All'
                  }
                );
              });
              this.content.push(
                {
                  alerte: val[0].themes_de_veille.Nom,
                  content: tempContent
                });
            },
            (error) => {},
            () => {
              this.ready = true;
              const all = document.getElementById('all');
              this.filter('ALL', all);
            });
      });
    });
  }

  search(sector: any, market?: any, theme?: any, debut?: any, fin?: any): void {
    this.content = [];
    this.searching = true;
    this.industriesService.getSingleOrGroupOfSectorsFromServer(sector, market, theme, debut, fin).subscribe(
      (data) => {
        this.temp = data;
        from(this.temp)
          .pipe(
            groupBy(element => element.id),
            mergeMap(group => group.pipe(toArray()))
          )
          .subscribe(
            (val) => {
              const tempContent = [];
              val.forEach((elt) => {
                tempContent.push(
                  {
                    color: this.severity[elt.Type],
                    date: elt.DatePublication,
                    author: elt.Emetteur !== null ? elt.Emetteur.NomStructure : elt.Emetteur,
                    title: elt.Title,
                    text: elt.Resume,
                    sourceType: elt.SourceFile.length === 0 ? 'url' : 'document',
                    source: elt.SourceFile.length === 0 ? elt.SourceUrl : elt.SourceFile[0].url,
                    markets: elt.Marches.length !== 0 ? elt.Marches : 'All'
                  }
                );
              });
              this.content.push(
                {
                  alerte: val[0].themes_de_veille.Nom,
                  content: tempContent
                });
            },
            (error) => {},
            () => {
              this.searching = false;
              const all = document.getElementById('all');
              this.filter('ALL', all);
            });
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event): void {
    if (window.pageYOffset >= 1130) {
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
