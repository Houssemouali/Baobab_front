import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {MdbTableDirective, MdbTablePaginationComponent} from 'ng-uikit-pro-standard';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Article } from 'src/app/models/Article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {

  options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    useBom: true,
    headers: ['Post ID', 'Post title', 'Post body']
  };
  @ViewChildren('list') list: QueryList<ElementRef>;
  @ViewChildren('pages') pages: QueryList<any>;
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;

  paginators: Array<any> = [];
  activePage = 1;
  firstVisibleIndex = 1;
  lastVisibleIndex = 10;
  tableData: Array<any> = [];
  sorted = false;
  searchText: string;
  firstPageNumber = 1;
  lastPageNumber: number;
  maxVisibleItems = 20;
  elements: any = [];
  validatingForm: FormGroup;
  articles:Object;
  article:Article=new Article;

  constructor(private articleService:ArticleService,
              private fb:FormBuilder,private _router:Router) { }

  ngOnInit() {
  
    this.articleService.getAll().subscribe((next:any)=>{
      Array.from(next).forEach((element: any) => {
        this.tableData.push({
          id: (element.id).toString(),
          article:(element.article).toString()
          // publish_date:element.publish_date,
          // title:element.title,
          // content:element.content
         // writer_id:element.
    });

  });
  console.log(next);
});
setTimeout(() => {
  for (let i = 1; i <= this.tableData.length; i++) {
    if (i % this.maxVisibleItems === 0) {
      this.paginators.push(i / this.maxVisibleItems);
    }
  }
  if (this.tableData.length % this.paginators.length !== 0) {
    this.paginators.push(this.paginators.length + 1);
  }
  this.lastPageNumber = this.paginators.length;
  this.lastVisibleIndex = this.maxVisibleItems;
}, 200);

}


@HostListener('input') oninput() {
  this.paginators = [];
  for (let i = 1; i <= this.search().length; i++) {
    if (!(this.paginators.indexOf(Math.ceil(i / this.maxVisibleItems)) !== -1)) {
      this.paginators.push(Math.ceil(i / this.maxVisibleItems));
    }
  }
  this.lastPageNumber = this.paginators.length;
}
changePage(event: any) {
  if (event.target.text >= 1 && event.target.text <= this.maxVisibleItems) {
    this.activePage = +event.target.text;
    this.firstVisibleIndex = this.activePage * this.maxVisibleItems - this.maxVisibleItems + 1;
    this.lastVisibleIndex = this.activePage * this.maxVisibleItems;
  }
}

nextPage() {
  this.activePage += 1;
  this.firstVisibleIndex = this.activePage * this.maxVisibleItems - this.maxVisibleItems + 1;
  this.lastVisibleIndex = this.activePage * this.maxVisibleItems;
}
previousPage() {
  this.activePage -= 1;
  this.firstVisibleIndex = this.activePage * this.maxVisibleItems - this.maxVisibleItems + 1;
  this.lastVisibleIndex = this.activePage * this.maxVisibleItems;
}

firstPage() {
  this.activePage = 1;
  this.firstVisibleIndex = this.activePage * this.maxVisibleItems - this.maxVisibleItems + 1;
  this.lastVisibleIndex = this.activePage * this.maxVisibleItems;
}

lastPage() {
  this.activePage = this.lastPageNumber;
  this.firstVisibleIndex = this.activePage * this.maxVisibleItems - this.maxVisibleItems + 1;
  this.lastVisibleIndex = this.activePage * this.maxVisibleItems;
}

sortBy(by: string | any): void {
  if (by == 'id') {
    this.search().reverse();
  } else {
    this.search().sort((a: any, b: any) => {
      if (a[by] < b[by]) {
        return this.sorted ? 1 : -1;
      }
      if (a[by] > b[by]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });
  }
  this.sorted = !this.sorted;
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