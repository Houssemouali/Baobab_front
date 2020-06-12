import { JournalistSignup } from './Journalist-signup';
import { ContentDetails } from './ContentDetails';
import {Countries} from './Countries';
import {Tags} from './Tags';
import {Category} from './Category';
import {ArticleTags} from './Article_tags';
import {ArticleContent} from './Article_content';
import {ArticleCountry} from './ArtcileCountry';

export class Article {
    id: any;
    publish_date: Date;
    writer_id:any;
    is_active:any;
    is_ready:any;
    //created_at:Date;
    //updated_at:Date;
    contents: ContentDetails;
    user: JournalistSignup;
    tags: Tags;
    //link: string;
    //status: any;
  //articleCountry: ArticleCountry;
  country: Countries;
  //articletags: ArticleTags;
  categories: Category;
  //article_content: ArticleContent;

  constructor() {
    this.contents = new ContentDetails();
    this.categories=new Category();
    this.tags=new Tags();
    this.country=new Countries();
  }
}
