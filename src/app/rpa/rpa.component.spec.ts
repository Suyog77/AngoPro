import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpaComponent } from './rpa.component';

describe('RpaComponent', () => {
  let component: RpaComponent;
  let fixture: ComponentFixture<RpaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpaComponent]
    });
    fixture = TestBed.createComponent(RpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
