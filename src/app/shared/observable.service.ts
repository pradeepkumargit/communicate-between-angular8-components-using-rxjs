import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Article } from './airticle.interface';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  latestArticle: Article  = {
    "id":0,
    "title":'some airticle',
    "body":'some airticle body'
  }

  private inventorySubject$ = new BehaviorSubject<Article>(this.latestArticle);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  constructor() { }

  addToInventory(article:Article) {
    this.latestArticle = article;
    this.inventorySubject$.next(article);
  }
}
