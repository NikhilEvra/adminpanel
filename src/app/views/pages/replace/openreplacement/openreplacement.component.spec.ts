import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenreplacementComponent } from './openreplacement.component';

describe('OpenreplacementComponent', () => {
  let component: OpenreplacementComponent;
  let fixture: ComponentFixture<OpenreplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenreplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenreplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
