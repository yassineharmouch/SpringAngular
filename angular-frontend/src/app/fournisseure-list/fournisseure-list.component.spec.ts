import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseureListComponent } from './fournisseure-list.component';

describe('FournisseureListComponent', () => {
  let component: FournisseureListComponent;
  let fixture: ComponentFixture<FournisseureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FournisseureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FournisseureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
