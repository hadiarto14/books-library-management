import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBookAddComponent } from './return-book-add.component';

describe('ReturnBookAddComponent', () => {
  let component: ReturnBookAddComponent;
  let fixture: ComponentFixture<ReturnBookAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnBookAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
