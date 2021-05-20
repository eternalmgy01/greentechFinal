import {Component, ViewChild,  OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';
import {ShareService} from '../../services/share.service';
import {LoggingService} from '../../services/logging.service';

import {Animes} from '../../services/anime-service/animes';
import {AnimesService} from '../../services/anime-service/animes.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css'],
  providers: [ShareService, LoggingService]
})
export class MaincontentComponent implements OnInit, OnDestroy{
  animes: Animes;
  items;
  comments;
  @ViewChild(ComentsComponent) viewChild: ComentsComponent;
  message: string;
  // items: any[];
  // comments: any[];
  constructor(private shareService: ShareService, private loggingService: LoggingService,private animesService: AnimesService,private route: ActivatedRoute,) {
    this.items = shareService.getSharedItems();
    this.comments = shareService.getSharedComm();
    // this.loggingService.log(this.items);
  }
  a = false;
  Destroy(){
    this.a = true;
  }
  View(){
    this.a = false;

  }

  ngOnInit(): void {
    this.getAnimes
    // this.items = ['Seven Deadly Sins', 'Constantine', 'Devils Advocate', 'Naruto', 'I Am Legend ', 'Tokyo Ghoul'];
    this.comments = [];
    console.log('AppComponent:OnInit');
  }

  getAnimes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animesService.getAnimes(id)
      .subscribe(animes => this.animes = animes);
  }

  addComment(comment){
    this.comments.unshift(comment);
    return false;
  }
  ngOnDestroy() {
  }

}
