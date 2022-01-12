import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteeListComponent } from './ventee-list.component';

describe('VenteeListComponent', () => {
  let component: VenteeListComponent;
  let fixture: ComponentFixture<VenteeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
