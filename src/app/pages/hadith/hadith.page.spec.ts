import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HadithPage } from './hadith.page';

describe('HadithPage', () => {
  let component: HadithPage;
  let fixture: ComponentFixture<HadithPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HadithPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
