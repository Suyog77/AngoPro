import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvjavaComponent } from './advjava.component';

describe('AdvjavaComponent', () => {
  let component: AdvjavaComponent;
  let fixture: ComponentFixture<AdvjavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvjavaComponent]
    });
    fixture = TestBed.createComponent(AdvjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
