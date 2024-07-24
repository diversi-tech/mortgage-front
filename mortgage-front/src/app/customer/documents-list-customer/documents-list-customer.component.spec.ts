import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsListCustomerComponent } from './documents-list-customer.component';

describe('DocumentsListCustomerComponent', () => {
  let component: DocumentsListCustomerComponent;
  let fixture: ComponentFixture<DocumentsListCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentsListCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentsListCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
