import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduiteListComponent } from './produite-list.component';

describe('ProduiteListComponent', () => {
  let component: ProduiteListComponent;
  let fixture: ComponentFixture<ProduiteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduiteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
