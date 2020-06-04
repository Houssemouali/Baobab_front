import { Component,Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';
import { LanguageService } from 'src/app/services/language.service';
import { Language } from 'src/app/models/Language';
import { Cat_texts } from 'src/app/models/cat_texts';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  editField: string;
  tableData: Array<any> = [];
  searchText: string;

  @Input()category:Category;
  categories:Category=new Category();
  catchecked: Category = {}as Category;

  //languagess:Language[];
  @Input()cat_texts:Cat_texts;
  catText:Cat_texts=new Cat_texts();

  @Input()language: Language;
  langSelected: Language = {} as Language;
  languagess:Language[];

  remove(id: any) {
    // this.updateEtat(this.id);
    this.tableData.push(this.tableData[id]);
    this.tableData.splice(id, 1);
  }

 
  constructor(private categryService:CategoryService,
    private languageService:LanguageService) { }

  ngOnInit() {
    this.categryService.getAllCategory().subscribe((next:any)=>{
      next.forEach((element:any)=>{
        this.tableData.push({
          id:element.id,
          is_active:element.is_active,
          created_at:element.created_at,
          cat_texts:element.cat_texts
        }
          );
          console.log('category:', element.cat_texts);
      });
    });


     this.languageService.getLanguageList().subscribe(datq=>{
       console.log(datq);
     this.languagess=datq;
     })
  }


  filterIt(arr: any, searchKey: any) {
    return arr.filter((obj: any) => {
      return Object.keys(obj).some((key) => {
        return obj[key].includes(searchKey);
      });
    });
  }

  search() {
    if (!this.searchText) {
      return this.tableData;
    }
    if (this.searchText) {
      return this.filterIt(this.tableData, this.searchText);
    }
  }
  addCategory(){

  let language=this.category.cat_texts.language.id;
  delete this.category.cat_texts;

  this.categryService.AddCategory(this.category).subscribe(data=>{
  var result=JSON.stringify(data);
  console.log('category insertion',result);
  this.category=data as Category;
    JSON.stringify(data);
    console.log(JSON.stringify(data));
  });
  this.category=new Category();
  }

}
