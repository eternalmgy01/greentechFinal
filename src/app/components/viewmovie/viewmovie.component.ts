import {Component, OnChanges, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import {ComentsComponent} from '../coments/coments.component';
import {LikesComponent} from '../likes/likes.component';
import {ActivatedRoute} from '@angular/router';

import {Animes} from '../../services/anime-service/animes';
import {AnimesService} from '../../services/anime-service/animes.service';


@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {

  animes: Animes;

  @ViewChild(LikesComponent) viewchild: LikesComponent;
  private number: number;
  newname: string;
  newreview: string;
   reviews = [
    {name: 'Самад', review: 'прекрасная полнометрaжка'}
  ];
  constructor(
    private route: ActivatedRoute,
    private animesService: AnimesService
  ) {}

  ngOnInit(): void {
    this.getAnimes();
    this.number = 0;
    this.reviews = [];
    console.log('AppComponent:OnInit');
  }

  getAnimes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animesService.getAnimes(id)
      .subscribe(animes => this.animes = animes);
  }
  get counter(){
    return this.number;
  }
  set counter(value) {
    this.number = value;
  }

  increment() {
    if (this.counter === 0) {
      this.counter++;
    }
    else {
      this.counter--;
    }
  }

  addReview(newname, newreview){
    this.reviews.unshift({name: newname, review: newreview});
    return false;
  }
}
