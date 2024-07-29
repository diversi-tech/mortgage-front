import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUpdateDetailesComponent } from './customer-update-detailes.component';

describe('CustomerUpdateDetailesComponent', () => {
  let component: CustomerUpdateDetailesComponent;
  let fixture: ComponentFixture<CustomerUpdateDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerUpdateDetailesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerUpdateDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
