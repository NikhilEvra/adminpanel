import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoinventorycheckComponent } from './poinventorycheck.component';

describe('PoinventorycheckComponent', () => {
  let component: PoinventorycheckComponent;
  let fixture: ComponentFixture<PoinventorycheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoinventorycheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoinventorycheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
