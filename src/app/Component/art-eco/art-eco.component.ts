import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {Category} from '../../models/Category';
import {ArticleService} from '../../services/article.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-art-eco',
  templateUrl: './art-eco.component.html',
  styleUrls: ['./art-eco.component.scss']
})
export class ArtEcoComponent implements OnInit {

  @Input() art: Article;

  artEco: Article[];


  @Input() cat: Category;
  categorys: Category[];
  private x: any;

  constructor(private articleService: ArticleService, private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.articleService.getEconomie().subscribe(date => {
      this.artEco = date;
      console.log('eco', date);

    });
  }
}
