import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAchateComponent } from './create-achate.component';

describe('CreateAchateComponent', () => {
  let component: CreateAchateComponent;
  let fixture: ComponentFixture<CreateAchateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAchateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAchateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
