import { Component, OnInit } from '@angular/core';

import { Article } from 'src/app/shared/airticle.interface';
import { EventBusService } from 'src/app/shared/eventbus.service';
import { ObservableService } from 'src/app/shared/observable.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  detail1: Article = {
    "id": 0,
    "title": "XXX",
    "body": "xxxxxxxxxxxxxxxxxxxxxxxxx"
  }

  detail2: Article;

  constructor(private eventBusService: EventBusService, private observableService: ObservableService) { }

  ngOnInit() {
    this.eventBusService.on('SelectArticleDetail', (data:Article) => {
      this.detail1 = data;
    });

    this.observableService.inventoryChanged$.subscribe( article => {
      this.detail2 = article;
    })
  }

}
