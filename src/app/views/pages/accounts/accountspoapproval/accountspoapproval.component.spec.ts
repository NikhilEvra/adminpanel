import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountspoapprovalComponent } from './accountspoapproval.component';

describe('AccountspoapprovalComponent', () => {
  let component: AccountspoapprovalComponent;
  let fixture: ComponentFixture<AccountspoapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountspoapprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountspoapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
