import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieConfirmComponent } from './cookie-confirm.component';

describe('CookieConfirmComponent', () => {
  let component: CookieConfirmComponent;
  let fixture: ComponentFixture<CookieConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieConfirmComponent]
    });
    fixture = TestBed.createComponent(CookieConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
