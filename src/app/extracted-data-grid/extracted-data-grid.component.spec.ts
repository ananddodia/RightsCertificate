import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractedDataGridComponent } from './extracted-data-grid.component';

describe('ExtractedDataGridComponent', () => {
  let component: ExtractedDataGridComponent;
  let fixture: ComponentFixture<ExtractedDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractedDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractedDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
