import {Component,ViewChild, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Article} from '../../models/Article';
import {Countries} from '../../models/Countries';
import {Category} from '../../models/Category';
import {CategoryService} from '../../services/category.service';
import { MDBDatePickerComponent, IMyOptions } from 'ng-uikit-pro-standard';
import { Language } from 'src/app/models/Language';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-m-redaction',
  templateUrl: './m-redaction.component.html',
  styleUrls: ['./m-redaction.component.scss']
})
export class MRedactionComponent implements OnInit {

  public editor;
  public editorContent = `<h3>I am Example content</h3>`;
  public editorOptions = {
    placeholder: 'insert content...'
  };
  @ViewChild('datePicker') datePicker: MDBDatePickerComponent;
  public myDatePickerOptions: IMyOptions = {};

  @Input() art: Article;
  articles: Article[];

  @Input()countries: Countries;
  countrys: Countries[];
  optionsSelect: Array<any>;
  @Input() cat: Category;
  cats: Category[];
  f: FormGroup;

  @Input()language: Language;
  langSelected: Language = {} as Language;
  languagess:Language[];

  constructor( private categoryService : CategoryService,
    private langService:LanguageService) {}

  ngOnInit() {
    setTimeout(() => {
      this.editorContent = '<h1>content changed!</h1>';
      console.log('you can use the quill instance object to do something', this.editor);
      // this.editor.disable();
    }, 2800);

    this.optionsSelect = [
      { value: 'Feedback', label: 'Feedback' },
      { value: 'Report a bug', label: 'Report a bug' },
      { value: 'Feature request', label: 'Feature request' },
      { value: 'Other stuff', label: 'Other stuff' },
    ];
    this.categoryService.getCategoryList().subscribe(dat => {
      this.cats = dat;
        console.log(dat) ;
    });


    this.langService.getLanguageList().subscribe(datq=>{
      console.log(datq);
      this.languagess=datq;
    })  
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

}
