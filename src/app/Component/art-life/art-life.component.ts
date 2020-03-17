import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {Category} from '../../models/Category';
import {ArticleService} from '../../services/article.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-art-life',
  templateUrl: './art-life.component.html',
  styleUrls: ['./art-life.component.scss']
})
export class ArtLifeComponent implements OnInit {
  @Input() art: Article;
  artLifestyle: Article[];
  constructor(private articleService: ArticleService ) { }
  ngOnInit() {
    this.articleService.getLifestyle().subscribe(datL => {
      this.artLifestyle = datL;
      console.log('artLifestyle' , datL) ;

    });

  }
}
