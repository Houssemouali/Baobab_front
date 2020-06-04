import {Component, Input, OnInit} from '@angular/core';
import {  EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Article} from '../../models/Article';
import {Countries} from '../../models/Countries';
import {CountryService} from '../../services/country.service';
import { Tags } from '../../models/Tags';
import { TagService } from '../../services/tag.service';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { ToastService } from 'ng-uikit-pro-standard';
import { ContentDetails } from 'src/app/models/ContentDetails';
import { Language } from 'src/app/models/Language';
import { Category } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/category.service';
import {ArticleCountry} from '../../models/ArtcileCountry';
import { LanguageService } from 'src/app/services/language.service';
import { IMyOptions, MDBDatePickerComponent, ClockPickerComponent } from 'ng-uikit-pro-standard';
import { Cat_texts } from 'src/app/models/cat_texts';

@Component({
  selector: 'app-redaction',
  templateUrl: './redaction.component.html',
  styleUrls: ['./redaction.component.scss']
})
export class RedactionComponent implements OnInit {
  public editor;
  public editorOptions = {
    placeholder: 'Type your post...',
    theme:'snow'
  };
  editorStyle={
    height :'300px'
  };

  @ViewChild('input') input: ElementRef;
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  @ViewChild('timePicker') timePicker: ClockPickerComponent;

  private error: any;
  @Input() art: Article;
  articles: Article[];

  article: Article = new Article();

  @Input()category: Category;
  categories: Category[];
  catchecked: Category = {}as Category;
  
  cd: ContentDetails = new ContentDetails();
  contentdetails: ContentDetails = new ContentDetails();
  @Input()content: ContentDetails;

  optionsSelect: Array<any>;
  articleform: FormGroup;

  @Input()language: Language;
  langSelected: Language = {} as Language;
  languagess:Language[];
  
  countrySelected: Countries = {} as Countries ;
  @Input() country: Countries;
  countrys: Countries[];

  articleCountry: ArticleCountry = {} as ArticleCountry ;

  tagSelected: Tags = {} as Tags;
  @Input()tags: Tags;
  tagss: Tags[];

  @Input()cat_texts:Cat_texts;
  //catText:Cat_texts=new Cat_texts();

  constructor( private countryService: CountryService,
     private articleService: ArticleService ,
     private tagService: TagService,
     private categoryService: CategoryService,
     private fb: FormBuilder,
     private toastrService: ToastService,
     private langService:LanguageService) {}

     public myDatePickerOptions: IMyOptions = {
      // Your options
    };
    onDateChange = (event: { actualDateFormatted: string; }) => {
      this.input.nativeElement.value = event.actualDateFormatted; // set value to input
      this.datePicker.closeBtnClicked(); // close date picker
      this.timePicker.openBtnClicked(); // open time picker
    };
  
    onTimeChange = (event: string) => {
      this.input.nativeElement.value = `${this.input.nativeElement.value}, ${event}`; // set value to input
    };
  ngOnInit() {
    setTimeout(() => {
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);
    // this.articleform=this.fb.group({
    //   titre: ['', Validators.required],
    //   tags: ['', Validators.required],
    //   country: ['', Validators.required],
    //   contentDetails:['',Validators.required]
    // });
    this.countryService.getCountryList().subscribe(da => {
        console.log(da);
        this.countrys = da;
      }
    );
    this.tagService.getTagList().subscribe(da => {
      console.log(da);
      this.tagss = da;
    });
      this.categoryService.getCategoryList().subscribe(dat => {
        console.log(dat);
        this.categories = dat;
      });
      this.langService.getLanguageList().subscribe(datq=>{
        console.log(datq);
        this.languagess=datq;
      })  
    }


  get f() {
    return this.articleform.controls;
  }

  onEditorBlured(quill) {
    console.log('editor blur!', quill);
  }

  onEditorFocused(quill) {
    console.log('editor focus!', quill);
  }

  onEditorCreated(quill) {
    this.editor = quill;
    console.log('quill is ready! this is current quill instance object', quill);
  }

  onContentChanged({ quill, html, text }) {
    console.log('quill content is changed!', quill, html, text);
  }

  showInfo() {
    this.toastrService.info('Votre inscription est enregistré ');
  }
  showWarning() {
    this.toastrService.warning('Vérifier les champs');
  }
  addArticle() {

  /*  this.tagService.getTag(this.article.tags).subscribe(res => {
      this.tagSelected = res;
      this.article.tags.id = this.tagSelected;
      console.log('tag', this.article.tags);
    });*/

    // this.countryService.getCountry(this.article.countries).subscribe(res => {
    //   this.countrySelected = res;
    //   this.article.countries = this.countrySelected;
    //   console.log(this.article.countries);
    // });
    // this.categoryService.getCategory(this.article.categories).subscribe(res => {
    //   this.catchecked = res;
    //   this.article.categories = this.catchecked;
    //   console.log("categories===>"+JSON.stringify(this.article.categories));
    // });
    //let countries: {id: number} [] = [{id: this.article.country}];
    delete this.article.country;

    //let tags: {id:number} [] = [{id: this.article.tags}];
    delete this.article.tags;
   
    // let languageArticles={id:this.article.content.languageArticle};
    let content:{content:any,titre:any,languageArticle:any}[]=[{
      content:this.article.content.content,
      titre:this.article.content.titre,
      languageArticle:{
        id:this.article.content.languageArticle}
    }];
    delete this.article.content;

    let usr_id:{}[]=[{
      id:this.article.user.id
    }];
    delete this.article.user;
    //add language article
    //this.article['tags'] = tags;
    //this.article['country'] = countries;
    //this.article['content'] = content;

    this.articleService.AddArticle(this.article).subscribe(data => {
      var result=JSON.stringify(data);
      console.log('article insertion', result);
      //this.article.categories=data as Category
      this.article = data as Article;
      JSON.stringify(data);
      console.log('aaa' , this.article);
      console.log(JSON.stringify(data));
    });
    this.article = new Article();
    this.countrySelected = new Countries();
    this.tagSelected = new Tags();
    //console.log(JSON.parse());
    //this.catchecked = new Category();
    this.langSelected=new Language();
  }
  // alerting(){
  //   alert("image upload");
  // }
}
