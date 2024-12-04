import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFixersComponent } from './new-fixers.component';

describe('NewFixersComponent', () => {
  let component: NewFixersComponent;
  let fixture: ComponentFixture<NewFixersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewFixersComponent]
    });
    fixture = TestBed.createComponent(NewFixersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
