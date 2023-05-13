import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBondsComponent } from './public-bonds.component';

describe('PublicBondsComponent', () => {
  let component: PublicBondsComponent;
  let fixture: ComponentFixture<PublicBondsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicBondsComponent]
    });
    fixture = TestBed.createComponent(PublicBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
