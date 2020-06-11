import { Cat_texts } from "./cat_texts";

export class Category {
    id: any;
    cat_texts:Cat_texts;
    is_active:any;

    constructor(){
        this.cat_texts=new Cat_texts();
    }
}
