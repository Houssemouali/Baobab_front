import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtEntrepriseComponent } from './art-entreprise.component';

describe('ArtEntrepriseComponent', () => {
  let component: ArtEntrepriseComponent;
  let fixture: ComponentFixture<ArtEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
