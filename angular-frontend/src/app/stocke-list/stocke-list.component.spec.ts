import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockeListComponent } from './stocke-list.component';

describe('StockeListComponent', () => {
  let component: StockeListComponent;
  let fixture: ComponentFixture<StockeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
