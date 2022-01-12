import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteeDetailsComponent } from './ventee-details.component';

describe('VenteeDetailsComponent', () => {
  let component: VenteeDetailsComponent;
  let fixture: ComponentFixture<VenteeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
