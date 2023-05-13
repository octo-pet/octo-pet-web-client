import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBondsListComponent } from './public-bonds-list.component';

describe('PublicBondsListComponent', () => {
  let component: PublicBondsListComponent;
  let fixture: ComponentFixture<PublicBondsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicBondsListComponent]
    });
    fixture = TestBed.createComponent(PublicBondsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
