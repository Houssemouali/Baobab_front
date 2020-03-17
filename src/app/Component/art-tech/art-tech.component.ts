import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/Article';

import {ArticleService} from '../../services/article.service';


@Component({
  selector: 'app-art-tech',
  templateUrl: './art-tech.component.html',
  styleUrls: ['./art-tech.component.scss']
})
export class ArtTechComponent implements OnInit {


  @Input() art: Article;
  artTech: Article[];
  constructor(private articleService: ArticleService ) { }

  ngOnInit() {
    this.articleService.getTechnologie().subscribe(dattec => {
      this.artTech = dattec;
      console.log('Technologie' , dattec) ;

    });
  }
}
