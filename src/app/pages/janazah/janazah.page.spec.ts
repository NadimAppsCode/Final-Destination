import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JanazahPage } from './janazah.page';

describe('JanazahPage', () => {
  let component: JanazahPage;
  let fixture: ComponentFixture<JanazahPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JanazahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
