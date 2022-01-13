import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAchateComponent } from './update-achate.component';

describe('UpdateAchateComponent', () => {
  let component: UpdateAchateComponent;
  let fixture: ComponentFixture<UpdateAchateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAchateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAchateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
