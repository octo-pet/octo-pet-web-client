import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBondsDetailsComponent } from './public-bonds-details.component';

describe('PublicBondsDetailsComponent', () => {
  let component: PublicBondsDetailsComponent;
  let fixture: ComponentFixture<PublicBondsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicBondsDetailsComponent]
    });
    fixture = TestBed.createComponent(PublicBondsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
