import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredFixersComponent } from './registered-fixers.component';

describe('RegisteredFixersComponent', () => {
  let component: RegisteredFixersComponent;
  let fixture: ComponentFixture<RegisteredFixersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisteredFixersComponent]
    });
    fixture = TestBed.createComponent(RegisteredFixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
