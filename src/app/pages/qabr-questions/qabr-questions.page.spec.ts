import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QabrQuestionsPage } from './qabr-questions.page';

describe('QabrQuestionsPage', () => {
  let component: QabrQuestionsPage;
  let fixture: ComponentFixture<QabrQuestionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QabrQuestionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
