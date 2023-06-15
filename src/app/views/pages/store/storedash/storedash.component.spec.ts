import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredashComponent } from './storedash.component';

describe('StoredashComponent', () => {
  let component: StoredashComponent;
  let fixture: ComponentFixture<StoredashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoredashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
