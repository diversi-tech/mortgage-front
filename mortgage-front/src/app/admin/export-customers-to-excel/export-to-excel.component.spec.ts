import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportToExcelComponent } from './export-to-excel.component';

describe('ExportToExcelComponent', () => {
  let component: ExportToExcelComponent;
  let fixture: ComponentFixture<ExportToExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportToExcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
