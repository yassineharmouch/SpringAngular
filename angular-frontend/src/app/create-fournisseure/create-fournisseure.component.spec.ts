import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFournisseureComponent } from './create-fournisseure.component';

describe('CreateFournisseureComponent', () => {
  let component: CreateFournisseureComponent;
  let fixture: ComponentFixture<CreateFournisseureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFournisseureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFournisseureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
