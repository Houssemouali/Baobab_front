import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtLifeComponent } from './art-life.component';

describe('ArtLifeComponent', () => {
  let component: ArtLifeComponent;
  let fixture: ComponentFixture<ArtLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
