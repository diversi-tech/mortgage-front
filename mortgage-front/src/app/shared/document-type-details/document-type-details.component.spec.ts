import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeDetailsComponent } from './document-type-details.component';

describe('DocumentTypeDetailsComponent', () => {
  let component: DocumentTypeDetailsComponent;
  let fixture: ComponentFixture<DocumentTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentTypeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
