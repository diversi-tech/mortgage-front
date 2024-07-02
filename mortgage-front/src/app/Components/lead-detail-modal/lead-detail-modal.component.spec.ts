import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadDetailComponent } from './lead-detail-modal.component';

describe('LeadDetailModalComponent', () => {
  let component: LeadDetailComponent;
  let fixture: ComponentFixture<LeadDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
