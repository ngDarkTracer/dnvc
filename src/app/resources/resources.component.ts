import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {RessourcesService} from '../services/ressources.service';
import {SubscribeService} from '../services/subscribe.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private breakPointObserver: BreakpointObserver,
              private ressourcesService: RessourcesService) { }

  lastUpdate = '';
  filterValue = 'ALL';
  totalItems = 0;
  page = 1;
  stickyMenu = false;
  openedMenu = false;
  isSmallScreen = false;
  isThereAlert = true;
  ready = false;
  searching = false;
  sectors: any[];
  markets: any[];
  themes: any[];

  filteredRessources: any[] = [];
  content: any[] = [];
  temp: any[];
  filterVal = 'title';
  // sortOptions = [
  //   {label: 'Filières', value: 'sectorsConcatString'},
  //   {label: 'Marché', value: 'market.Nom'},
  //   {label: 'Thèmes', value: 'alerte'},
  //   {label: 'Date debut', value: 'market.Nom'},
  //   {label: 'Date fin', value: 'market.Nom'}
  // ];

  filter(item: any, elt?: any): void {
    document.getElementById('top').scrollIntoView({
      behavior: 'smooth'
    });
    this.filterValue = item.toString();
    this.totalItems = 0;
    this.filteredRessources = [];
    this.page = 1;
    if (item === 'ALL') {
      this.content.forEach((element) => {
        element.content.forEach((alert) => {
          this.filteredRessources.push(alert);
        });
        this.totalItems += element.content.length;
      });
    } else {
      this.content.forEach((element) => {
        if (element.alerte === item) {
          element.content.forEach((alert) => {
            this.filteredRessources.push(alert);
          });
          this.totalItems = element.content.length;
        }
      });
    }
  }

  ngOnInit(): void {
    this.getRessourcesProperties();

    this.ressourcesService.getSectorsFromServer().subscribe((data) => {
      this.sectors = data;
    });

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

  getRessourcesProperties(): void {
    this.content = [];
    this.ready = false;
    this.isThereAlert = true;
    this.ressourcesService.getRessourcesFromServer().subscribe((data) => {
      if (data.length === 0) {
        this.isThereAlert = false;
      } else {
        this.isThereAlert = true;
      }

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
              let fobeddenString = '';
              elt.filieres.forEach((sector) => {
                fobeddenString += sector.Name + ',';
              });
              tempContent.push(
                {
                  alerte: val[0].themes_de_veille.Nom,
                  title: elt.titre,
                  text: elt.resume,
                  sourceType: elt.SourceFile.length === 0 ? 'url' : 'document',
                  source: elt.SourceFile.length === 0 ? elt.SourceUrl : elt.SourceFile[0].url,
                  sectors: elt.filieres,
                  sectorsConcatString: fobeddenString,
                  date_debut: elt.date_debut,
                  date_fin: elt.date_fin,
                  market: elt.marche
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

  onSortChange(event: any): void {
    this.filterVal = event.value;
  }

  search(sector: any, market: any, theme: any, debut: any, fin: any): void {
    this.content = [];
    this.searching = true;
    this.ressourcesService.getSingleOrGroupOfRessourcesFromServer(sector, market, theme, debut.toLocaleDateString('en-CA'), fin.toLocaleDateString('en-CA')).subscribe(
      (data) => {
        if (data.length === 0) {
          this.isThereAlert = false;
        } else {
          this.isThereAlert = true;
        }
        this.searching = false;
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
                let fobeddenString = '';
                elt.filieres.forEach((sect) => {
                  fobeddenString += sect.Name + ',';
                });
                tempContent.push(
                  {
                    alerte: val[0].themes_de_veille.Nom,
                    title: elt.titre,
                    text: elt.resume,
                    sourceType: elt.SourceFile.length === 0 ? 'url' : 'document',
                    source: elt.SourceFile.length === 0 ? elt.SourceUrl : elt.SourceFile[0].url,
                    sectors: elt.filieres,
                    sectorsConcatString: fobeddenString,
                    date_debut: elt.date_debut,
                    date_fin: elt.date_fin,
                    market: elt.marche
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
              const all = document.getElementById('all');
              this.filter('ALL', all);
            });
      });
  }
}
