import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadAccompanyingFormComponent } from './download-accompanying-form.component';

describe('DownloadAccompanyingFormComponent', () => {
  let component: DownloadAccompanyingFormComponent;
  let fixture: ComponentFixture<DownloadAccompanyingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DownloadAccompanyingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadAccompanyingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
