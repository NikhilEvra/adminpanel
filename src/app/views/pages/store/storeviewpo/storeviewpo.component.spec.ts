import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreviewpoComponent } from './storeviewpo.component';

describe('StoreviewpoComponent', () => {
  let component: StoreviewpoComponent;
  let fixture: ComponentFixture<StoreviewpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreviewpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreviewpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
