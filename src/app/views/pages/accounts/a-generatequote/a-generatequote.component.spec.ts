import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGeneratequoteComponent } from './a-generatequote.component';

describe('AGeneratequoteComponent', () => {
  let component: AGeneratequoteComponent;
  let fixture: ComponentFixture<AGeneratequoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AGeneratequoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AGeneratequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
