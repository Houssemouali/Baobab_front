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
  content: ContentDetails;
    user: JournalistSignup;
    tags: Tags;

    //link: string;
    //status: any;
  //articleCountry: ArticleCountry;
  country: Countries;
  //articletags: ArticleTags;
  category: Category;
  //article_content: ArticleContent;

  constructor() {
    this.content = new ContentDetails();
  }
}
