import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsgeneratequoteComponent } from './accountsgeneratequote.component';

describe('AccountsgeneratequoteComponent', () => {
  let component: AccountsgeneratequoteComponent;
  let fixture: ComponentFixture<AccountsgeneratequoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsgeneratequoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsgeneratequoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
