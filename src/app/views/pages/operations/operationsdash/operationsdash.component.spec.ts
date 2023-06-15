import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsdashComponent } from './operationsdash.component';

describe('OperationsdashComponent', () => {
  let component: OperationsdashComponent;
  let fixture: ComponentFixture<OperationsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
