import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageHelperComponent } from './mortgage-helper.component';

describe('MortgageHelperComponent', () => {
  let component: MortgageHelperComponent;
  let fixture: ComponentFixture<MortgageHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MortgageHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MortgageHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
