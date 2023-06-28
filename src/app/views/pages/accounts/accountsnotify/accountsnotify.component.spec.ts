import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsnotifyComponent } from './accountsnotify.component';

describe('AccountsnotifyComponent', () => {
  let component: AccountsnotifyComponent;
  let fixture: ComponentFixture<AccountsnotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsnotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsnotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
