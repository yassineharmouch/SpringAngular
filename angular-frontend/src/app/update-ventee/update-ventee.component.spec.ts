import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVenteeComponent } from './update-ventee.component';

describe('UpdateVenteeComponent', () => {
  let component: UpdateVenteeComponent;
  let fixture: ComponentFixture<UpdateVenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
