import { JournalistSignup } from './Journalist-signup';
import { ContentDetails } from './ContentDetails';
import {Countries} from './Countries';
import {Tags} from './Tags';
import {Category} from './Category';
import {ArticleTags} from './Article_tags';
import {ArticleContent} from './Article_content';
import {ArticleCountry} from './ArtcileCountry';

export class Article {
  idArticle: any;
    date: Date;
  content: ContentDetails;
    author: JournalistSignup;
    link: string;
    status: any;
  articleCountry: ArticleCountry;
  country: Countries;
  tags: Tags;
  articletags: ArticleTags;
  category: Category;
  article_content: ArticleContent;

  constructor() {
    this.content = new ContentDetails();
  }
}
