import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/Article';
import {Category} from '../../models/Category';
import {ArticleService} from '../../services/article.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-art-entreprise',
  templateUrl: './art-entreprise.component.html',
  styleUrls: ['./art-entreprise.component.scss']
})
export class ArtEntrepriseComponent implements OnInit {

  @Input() art: Article;
  artEntreprise: Article[];


  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getEntreprise().subscribe(datet => {
      this.artEntreprise = datet;
      console.log('Entreprise', datet);

    });

  }
}
