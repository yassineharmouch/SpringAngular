import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchateDetailsComponent } from './achate-details.component';

describe('AchateDetailsComponent', () => {
  let component: AchateDetailsComponent;
  let fixture: ComponentFixture<AchateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
