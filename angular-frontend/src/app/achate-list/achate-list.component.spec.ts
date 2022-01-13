import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchateListComponent } from './achate-list.component';

describe('AchateListComponent', () => {
  let component: AchateListComponent;
  let fixture: ComponentFixture<AchateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
