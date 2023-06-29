import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsviewpoComponent } from './accountsviewpo.component';

describe('AccountsviewpoComponent', () => {
  let component: AccountsviewpoComponent;
  let fixture: ComponentFixture<AccountsviewpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsviewpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsviewpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
