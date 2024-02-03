import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoorPage } from './hoor.page';

describe('HoorPage', () => {
  let component: HoorPage;
  let fixture: ComponentFixture<HoorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
