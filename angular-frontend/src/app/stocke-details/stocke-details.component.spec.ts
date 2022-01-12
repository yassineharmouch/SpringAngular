import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockeDetailsComponent } from './stocke-details.component';

describe('StockeDetailsComponent', () => {
  let component: StockeDetailsComponent;
  let fixture: ComponentFixture<StockeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
