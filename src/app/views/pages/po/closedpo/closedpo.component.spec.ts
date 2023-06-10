import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedpoComponent } from './closedpo.component';

describe('ClosedpoComponent', () => {
  let component: ClosedpoComponent;
  let fixture: ComponentFixture<ClosedpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosedpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosedpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
