import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreplacementComponent } from './viewreplacement.component';

describe('ViewreplacementComponent', () => {
  let component: ViewreplacementComponent;
  let fixture: ComponentFixture<ViewreplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewreplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewreplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
