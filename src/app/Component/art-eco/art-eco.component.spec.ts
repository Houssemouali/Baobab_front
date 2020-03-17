import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtEcoComponent } from './art-eco.component';

describe('ArtEcoComponent', () => {
  let component: ArtEcoComponent;
  let fixture: ComponentFixture<ArtEcoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtEcoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtEcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
