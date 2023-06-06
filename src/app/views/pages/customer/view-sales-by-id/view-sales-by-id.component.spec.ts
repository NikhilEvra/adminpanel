import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalesByIdComponent } from './view-sales-by-id.component';

describe('ViewSalesByIdComponent', () => {
  let component: ViewSalesByIdComponent;
  let fixture: ComponentFixture<ViewSalesByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSalesByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
