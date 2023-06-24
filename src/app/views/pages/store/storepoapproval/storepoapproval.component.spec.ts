import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorepoapprovalComponent } from './storepoapproval.component';

describe('StorepoapprovalComponent', () => {
  let component: StorepoapprovalComponent;
  let fixture: ComponentFixture<StorepoapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorepoapprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorepoapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
