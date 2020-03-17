import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTechComponent } from './art-tech.component';

describe('ArtTechComponent', () => {
  let component: ArtTechComponent;
  let fixture: ComponentFixture<ArtTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
