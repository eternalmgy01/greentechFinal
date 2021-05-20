import { Component, OnInit } from '@angular/core';
import {ShareService} from '../../services/share.service';
import {LoggingService} from '../../services/logging.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  providers: [ShareService, LoggingService]
})
export class NewsComponent implements OnInit {
  newsitems;
  items: string[];
  today: number = Date.now();
  daysremain: number;

  constructor(private shareService: ShareService, private loggingService: LoggingService) {
    this.newsitems = shareService.getSharedNews();
  }

  ngOnInit(): void {
    this.daysremain = 25;
  }

}
