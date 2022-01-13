import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProduiteComponent } from './create-produite.component';

describe('CreateProduiteComponent', () => {
  let component: CreateProduiteComponent;
  let fixture: ComponentFixture<CreateProduiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProduiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProduiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
