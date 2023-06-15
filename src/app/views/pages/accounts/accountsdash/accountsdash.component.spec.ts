import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsdashComponent } from './accountsdash.component';

describe('AccountsdashComponent', () => {
  let component: AccountsdashComponent;
  let fixture: ComponentFixture<AccountsdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
