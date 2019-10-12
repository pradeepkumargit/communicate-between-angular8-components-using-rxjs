import { Component } from '@angular/core';
import { Article } from './shared/airticle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communicate-between-angular-components-using-rxjs';
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
    },
    // {
    //   "id": 4,
    //   "title": "eum et est occaecati",
    //   "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    // },
    // {
    //   "id": 5,
    //   "title": "nesciunt quas odio",
    //   "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    // }
  ]
}
