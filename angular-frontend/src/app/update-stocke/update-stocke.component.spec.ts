import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockeComponent } from './update-stocke.component';

describe('UpdateStockeComponent', () => {
  let component: UpdateStockeComponent;
  let fixture: ComponentFixture<UpdateStockeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStockeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
