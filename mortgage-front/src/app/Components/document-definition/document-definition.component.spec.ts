import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDefinitionComponent } from './document-definition.component';

describe('DocumentDefinitionComponent', () => {
  let component: DocumentDefinitionComponent;
  let fixture: ComponentFixture<DocumentDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentDefinitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
