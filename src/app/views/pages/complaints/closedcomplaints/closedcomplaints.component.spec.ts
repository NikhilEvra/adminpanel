import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedcomplaintsComponent } from './closedcomplaints.component';

describe('ClosedcomplaintsComponent', () => {
  let component: ClosedcomplaintsComponent;
  let fixture: ComponentFixture<ClosedcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedcomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
