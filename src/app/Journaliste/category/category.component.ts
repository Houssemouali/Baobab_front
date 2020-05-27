import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  editField: string;
  tableData: Array<any> = [];
  searchText: string;


  remove(id: any) {
    // this.updateEtat(this.id);
    this.tableData.push(this.tableData[id]);
    this.tableData.splice(id, 1);
  }

 
  constructor(private categryService:CategoryService) { }

  ngOnInit() {
    this.categryService.getAllCategory().subscribe((next:any)=>{
      next.foreach((element:any)=>{
        this.tableData.push({
          id:element.id,
          is_active:element.is__active,
          name:element.name
        }
          );
      });
      //console.log(next);
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


}
