import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationComponent } from './encuesta.component';

describe('DonationComponent', () => {
  let component: DonationComponent;
  let fixture: ComponentFixture<DonationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonationComponent]
    });
    fixture = TestBed.createComponent(DonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
