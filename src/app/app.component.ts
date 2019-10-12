import { Component } from '@angular/core';
import { Article } from './shared/airticle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communicate-between-angular8-components-using-rxjs';
  articles: Array<Article> = [
    {
      "id": 1,
      "title": "article one",
      "body": "article one data article one data article one data article one data article one data article one data"
    },
    {
      "id": 2,
      "title": "article two",
      "body": "article two data article two data article two data article two data article two data article two data article two data"
    },
    {
      "id": 3,
      "title": "article three ",
      "body": "article three data article three data article three data article three data article three data"
    }
  ]
}
