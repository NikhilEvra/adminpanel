import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencomplaintsComponent } from './opencomplaints.component';

describe('OpencomplaintsComponent', () => {
  let component: OpencomplaintsComponent;
  let fixture: ComponentFixture<OpencomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencomplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpencomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
