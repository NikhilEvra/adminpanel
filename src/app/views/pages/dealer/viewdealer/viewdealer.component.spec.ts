import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdealerComponent } from './viewdealer.component';

describe('ViewdealerComponent', () => {
  let component: ViewdealerComponent;
  let fixture: ComponentFixture<ViewdealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewdealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
