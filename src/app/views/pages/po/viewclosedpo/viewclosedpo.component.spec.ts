import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewclosedpoComponent } from './viewclosedpo.component';

describe('ViewclosedpoComponent', () => {
  let component: ViewclosedpoComponent;
  let fixture: ComponentFixture<ViewclosedpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewclosedpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewclosedpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
