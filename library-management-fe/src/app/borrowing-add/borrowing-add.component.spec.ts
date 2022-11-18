import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingAddComponent } from './borrowing-add.component';

describe('BorrowingAddComponent', () => {
  let component: BorrowingAddComponent;
  let fixture: ComponentFixture<BorrowingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
