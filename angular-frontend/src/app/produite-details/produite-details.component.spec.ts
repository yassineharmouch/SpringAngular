import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduiteDetailsComponent } from './produite-details.component';

describe('ProduiteDetailsComponent', () => {
  let component: ProduiteDetailsComponent;
  let fixture: ComponentFixture<ProduiteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduiteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduiteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
