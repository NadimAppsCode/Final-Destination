import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasbeehPage } from './tasbeeh.page';

describe('TasbeehPage', () => {
  let component: TasbeehPage;
  let fixture: ComponentFixture<TasbeehPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TasbeehPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
