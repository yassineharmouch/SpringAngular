import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStockeComponent } from './create-stocke.component';

describe('CreateStockeComponent', () => {
  let component: CreateStockeComponent;
  let fixture: ComponentFixture<CreateStockeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStockeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStockeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
