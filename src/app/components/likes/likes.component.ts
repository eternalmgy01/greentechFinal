import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnChanges, OnInit {
  @Input() myNewnumber: number;
  ngOnChanges(changes: SimpleChanges){
    if (this.myNewnumber === 1) {
      alert('Added to favourites');
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
