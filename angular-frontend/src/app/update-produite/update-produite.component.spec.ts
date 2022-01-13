import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProduiteComponent } from './update-produite.component';

describe('UpdateProduiteComponent', () => {
  let component: UpdateProduiteComponent;
  let fixture: ComponentFixture<UpdateProduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
