import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratequoteComponent } from './generatequote.component';

describe('GeneratequoteComponent', () => {
  let component: GeneratequoteComponent;
  let fixture: ComponentFixture<GeneratequoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratequoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
