import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFournisseureComponent } from './update-fournisseure.component';

describe('UpdateFournisseureComponent', () => {
  let component: UpdateFournisseureComponent;
  let fixture: ComponentFixture<UpdateFournisseureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFournisseureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFournisseureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
