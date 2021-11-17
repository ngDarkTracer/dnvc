import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BreakpointObserver} from '@angular/cdk/layout';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';
import {RessourcesService} from '../services/ressources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private breakPointObserver: BreakpointObserver,
              private ressourcesService: RessourcesService) {
  }

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

  filter(item: any, elt?: any): void {
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
    const mockDate = new Date('1970-01-01');
    this.search(null, null, null, mockDate, null);
    // this.ressourcesService.getRessourcesFromServer().subscribe((data) => {
    //     const tempContent = [];
    //     data.forEach((elt) => {
    //       elt.files.forEach((source) => {
    //         if (source.url.toLowerCase().includes('cloudinary')) {
    //           elt.files.splice(elt.files.indexOf(source), 1);
    //         }
    //         if (source.url.toLowerCase().includes('.jpg') || source.url.toLowerCase().includes('.jpeg')
    //           || source.url.toLowerCase().includes('.png') || source.url.toLowerCase().includes('.gif')) {
    //           elt.photo.url = source.url;
    //           elt.files.splice(elt.files.indexOf(source), 1);
    //         }
    //       });
    //       tempContent.push(
    //         {
    //           title: elt.titre,
    //           text: elt.resume,
    //           sourceType: elt.SourceFile.length === 0 ? 'url' : 'document',
    //           imageUrl: elt.photo.url,
    //           source: elt.files.length === 0 ? elt.SourceUrl : elt.files[0].url,
    //           sectors: elt.filieres.length === 0 ? 'All' : elt.filieres,
    //           date: elt.date,
    //           market: elt.marche === null ? 'All' : elt.marche
    //         }
    //       );
    //     });
    //     this.content.push(
    //       {
    //         alerte: 'Advanced results',
    //         content: tempContent
    //       });
    //   },
    //   (error) => {
    //   },
    //   () => {
    //     this.ready = true;
    //     const all = document.getElementById('all');
    //     this.filter('ALL', all);
    //   });
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

  search(sector?: any, market?: any, theme?: any, debut?: any, fin?: any): void {
    this.content = [];
    this.searching = true;
    this.ressourcesService.getSingleOrGroupOfRessourcesFromServer(sector, market, theme, debut, fin).subscribe((data) => {
        const tempContent = [];
        data.forEach((elt) => {

          const tempFiles = elt.files.filter((file) => {
            return (!file.url.toLowerCase().includes('.jpg') && !file.url.toLowerCase().includes('.jpeg')
              && !file.url.toLowerCase().includes('.png') && !file.url.toLowerCase().includes('.gif'));
          });

          const photo = elt.files.filter((file) => {
            return !file.url.toLowerCase().includes('res.cloudinary.com');
          });

          elt.photo = photo[0].url;

          tempContent.push(
            {
              title: elt.titre,
              text: elt.resume,
              sourceType: elt.files.length === 0 ? 'url' : 'document',
              imageUrl: elt.photo,
              source: tempFiles.length === 0 ? elt.SourceUrl : tempFiles[0].url,
              sectors: elt.filieres.length === 0 ? 'All' : elt.filieres,
              date: elt.date.split('T')[0],
              market: elt.marche === null ? 'All' : elt.marche
            }
          );
        });
        this.content.push(
          {
            alerte: 'Advanced results',
            content: tempContent
          });
        // console.log(tempContent);
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
}
