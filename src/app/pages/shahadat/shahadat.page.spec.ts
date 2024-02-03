import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShahadatPage } from './shahadat.page';

describe('ShahadatPage', () => {
  let component: ShahadatPage;
  let fixture: ComponentFixture<ShahadatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShahadatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
