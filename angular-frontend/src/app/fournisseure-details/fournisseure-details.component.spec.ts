import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseureDetailsComponent } from './fournisseure-details.component';

describe('FournisseureDetailsComponent', () => {
  let component: FournisseureDetailsComponent;
  let fixture: ComponentFixture<FournisseureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
