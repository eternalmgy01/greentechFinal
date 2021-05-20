import {Component, EventEmitter, OnInit, OnChanges, OnDestroy} from '@angular/core';
import {Input} from '@angular/core';
import {SimpleChanges} from '@angular/core';
import {Output} from '@angular/core';

@Component({
  selector: 'app-coments',
  templateUrl: './coments.component.html',
  styleUrls: ['./coments.component.css']
})
export class ComentsComponent implements OnInit, OnChanges, OnDestroy {
@Input() comments: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges){
    alert('Current value: ' + changes.comments.currentValue);
    console.log('OnChanges', changes.comments.firstChange);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('OnDestroy');
  }

}
