import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewregestrationComponent } from './newregestration.component';

describe('NewregestrationComponent', () => {
  let component: NewregestrationComponent;
  let fixture: ComponentFixture<NewregestrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewregestrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewregestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
