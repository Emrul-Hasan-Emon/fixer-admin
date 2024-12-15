import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixerDetailsComponent } from './fixer-details.component';

describe('FixerDetailsComponent', () => {
  let component: FixerDetailsComponent;
  let fixture: ComponentFixture<FixerDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixerDetailsComponent]
    });
    fixture = TestBed.createComponent(FixerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
