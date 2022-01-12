import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVenteeComponent } from './create-ventee.component';

describe('CreateVenteeComponent', () => {
  let component: CreateVenteeComponent;
  let fixture: ComponentFixture<CreateVenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
