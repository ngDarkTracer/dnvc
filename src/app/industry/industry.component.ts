import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {BreakpointObserver} from '@angular/cdk/layout';
import {IndustriesService} from '../services/industries.service';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private scroller: ViewportScroller,
              private breakPointObserver: BreakpointObserver,
              private industriesService: IndustriesService) { }

  currentIndustriy: string;
  serverAdress = '';
  sectorImageUrl = '';
  sectorIntroText = '';
  lastUpdate = '';
  filterValue = 'ALL';
  totalItems = 0;
  page = 1;
  stickyMenu = false;
  openedMenu = false;
  isSmallScreen = false;
  ready = false;

  severity = {
    Threat: 'red',
    Weak: 'green',
    Opportunity: 'blue'
  };

  filteredAlert: any[] = [];
  content: any[] = [];
  temp: any[];

  filter(item: any, elt?: any): void {
    document.getElementById('top').scrollIntoView({
      behavior: 'smooth'
    });
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
    elt.classList.add('active-item');
  }

  ngOnInit(): void {
    const url = this.activatedRoute.snapshot.paramMap.get('industry');
    this.currentIndustriy = url;
    this.getSectorProperties(url);

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
    this.industriesService.getSingleSectorFromServer(url).subscribe((data) => {
      this.temp = data;
      from(this.temp)
        .pipe(
          groupBy(element => element.themes_de_veille.Nom),
          mergeMap(group => group.pipe(toArray()))
        )
        .subscribe(
          (val) => {
            const tempContent = [];
            val.forEach((elt) => {
              if (this.sectorImageUrl === '' || this.sectorIntroText === '') {
                for (let i = 0; i < elt.Filieres.length; i++) {
                  if (elt.Filieres[i].Name === url) {
                    this.sectorImageUrl = this.serverAdress + elt.Filieres[i].Photo.formats.large.url;
                    this.sectorIntroText = elt.Filieres[i].Intro;
                    this.lastUpdate = elt.Filieres[i].updated_at.split('T')[0];
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
                  source: elt.SourceFile.length === 0 ? elt.sourceUrl : elt.sourceFile,
                  markets: elt.Marches
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
}
