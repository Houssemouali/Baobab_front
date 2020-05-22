import {Language} from './Language';

export class ContentDetails {
    id: any;
    article_id:any;
    content: any;
    titre: any;
    languageArticle: Language;
    is_active:boolean;
    is_ready:boolean;
    language:Language;

    constructor() {
        this.titre = '';
        
        }
}
