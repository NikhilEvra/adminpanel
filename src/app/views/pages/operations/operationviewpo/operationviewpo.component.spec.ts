import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationviewpoComponent } from './operationviewpo.component';

describe('OperationviewpoComponent', () => {
  let component: OperationviewpoComponent;
  let fixture: ComponentFixture<OperationviewpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationviewpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationviewpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
