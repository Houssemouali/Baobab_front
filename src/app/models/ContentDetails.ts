import {Language} from './Language';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class ContentDetails {
    id: any;
    article_id:any;
    content: any;
    title: any;
    lang_id: Language;
    is_active:boolean;
    is_ready:boolean;
    language:Language;

    constructor() {
        this.title = '';
        
        }
}
