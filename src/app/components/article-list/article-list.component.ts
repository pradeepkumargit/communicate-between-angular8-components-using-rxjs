import { Component, OnInit, Input} from '@angular/core';

import { Article } from 'src/app/shared/airticle.interface';
import { EventBusService } from 'src/app/shared/eventbus.service';
import { ObservableService } from 'src/app/shared/observable.service';
import { EventData } from 'src/app/shared/event.class';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() list: Article;

  constructor(private eventBusService: EventBusService, private observableService: ObservableService) { }

  ngOnInit() {
  }

  viewArticle1(article: Article) {
    this.eventBusService.emit(new EventData('SelectArticleDetail', article));
  }

  viewArticle2(article: Article) {
    this.observableService.addToInventory(article);
  }

}
