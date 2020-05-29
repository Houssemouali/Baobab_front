import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  editField: string;
  tableData: Array<any> = [];
  searchText: string;
  category:Category=new Category();

  remove(id: any) {
    // this.updateEtat(this.id);
    this.tableData.push(this.tableData[id]);
    this.tableData.splice(id, 1);
  }

 
  constructor(private categryService:CategoryService) { }

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
